import {
  Server,
  ServerCredentials,
  ServerUnaryCall,
  sendUnaryData,
  status,
} from '@grpc/grpc-js';
import {
  CreateProductRequest,
  GetProductRequest,
  GetProductResponse,
  Empty,
  GetProductsResponse,
} from './generated/product_pb';
import { ProductServiceService } from './generated/product_grpc_pb';

import Redis from 'ioredis';
import { v4 as uuid } from 'uuid';
import { pingRedis, createGetProductResponse } from './utils';

const redis = new Redis();

pingRedis(redis);

const createProduct = async (
  call: ServerUnaryCall<CreateProductRequest, Empty>,
  callback: sendUnaryData<Empty>,
) => {
  try {
    // Validate input
    const product = call.request.toObject();
    if (!product.name || !product.price) {
      return callback({
        code: status.INVALID_ARGUMENT,
        message: 'Product name and price are required',
      });
    }

    // Generate a unique ID for the new product
    const id = uuid();

    // Create a new product object with the generated ID
    const newProduct = {
      ...product,
      id,
    };

    // Store the new product in Redis
    await redis.call(
      'JSON.SET',
      `product:${id}`,
      '.',
      JSON.stringify(newProduct),
    );

    callback({
      code: status.OK,
      message: 'Product created successfully',
    });
  } catch (error) {
    console.error(error);
    callback({
      code: status.INTERNAL,
      message: 'Internal server error',
    });
  }
};

const getProduct = async (
  call: ServerUnaryCall<GetProductRequest, GetProductResponse>,
  callback: sendUnaryData<GetProductResponse>,
) => {
  try {
    // Validate input
    const id = call.request.getId();
    if (!id) {
      return callback({
        code: status.INVALID_ARGUMENT,
        message: 'Product ID is required',
      });
    }

    // Retrieve product data from Redis
    const product = await redis.call('JSON.GET', `product:${id}`);
    if (!product) {
      return callback({
        code: status.NOT_FOUND,
        message: 'Product not found',
      });
    }

    // Parse product data into a JavaScript object
    const parsedProduct = JSON.parse(product as string);

    // Create a gRPC response object with the product data
    const response = createGetProductResponse(parsedProduct);

    // Send the response back to the client
    callback(null, response);
  } catch (error) {
    console.error(error);

    // Send an INTERNAL error back to the client
    callback({
      code: status.INTERNAL,
      message: 'Internal server error',
    });
  }
};

const getProducts = async (
  _call: ServerUnaryCall<Empty, GetProductsResponse>,
  callback: sendUnaryData<GetProductsResponse>,
) => {
  try {
    // Retrieve product IDs from Redis
    const productIds = (await redis.call('KEYS', 'product:*')) as string[];

    // Return an error if no products were found
    if (!productIds.length) {
      return callback({
        code: status.NOT_FOUND,
        message: 'Product not found',
      });
    }

    // Retrieve product data from Redis
    const products = (await redis.call(
      'JSON.MGET',
      ...productIds,
      '.',
    )) as string[];

    // Parse product data into JavaScript objects
    const parsedProducts = products.map((product) =>
      JSON.parse(product),
    ) as GetProductsResponse.AsObject['productsList'];

    // Create a gRPC response object and add each product to it
    const response = new GetProductsResponse();
    parsedProducts.forEach((product) => {
      const productResponse = createGetProductResponse(product);
      response.addProducts(productResponse);
    });

    callback(null, response);
  } catch (error) {
    console.error(error);
    callback({
      code: status.INTERNAL,
      message: 'Internal server error',
    });
  }
};

const server = new Server();

server.addService(ProductServiceService, {
  createProduct,
  getProduct,
  getProducts,
});

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('Server running at 0.0.0.0:50051');
});
