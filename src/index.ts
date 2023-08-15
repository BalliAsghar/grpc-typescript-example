import {
  Server,
  ServerCredentials,
  ServerUnaryCall,
  sendUnaryData,
  status,
} from '@grpc/grpc-js';
import {
  CreateProductRequest,
  CreateProductResponse,
} from './generated/product_pb';
import { ProductServiceService } from './generated/product_grpc_pb';

import Redis from 'ioredis';
import { v4 as uuid } from 'uuid';
import { pingRedis, createGetProductResponse, doesProductExist } from './utils';

const redis = new Redis();

pingRedis(redis);

const createProduct = async (
  call: ServerUnaryCall<CreateProductRequest, CreateProductResponse>,
  callback: sendUnaryData<CreateProductResponse>,
) => {
  try {
    const product = call.request.toObject();

    const id = uuid();

    const newProduct = {
      ...product,
      id,
    };

    await redis.call(
      'JSON.SET',
      `product:${id}`,
      '.',
      JSON.stringify(newProduct),
    );

    const response = new CreateProductResponse();

    response.setId(id);

    callback(null, response);
  } catch (error) {
    callback({
      code: status.INTERNAL,
      message: 'Internal server error',
    });
  }
};

// TODO: Implement the rest of the methods

const server = new Server();

server.addService(ProductServiceService, {
  createProduct,
});

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('Server running at 0.0.0.0:50051');
});
