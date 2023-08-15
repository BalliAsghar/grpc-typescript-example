// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_CreateProductRequest(arg) {
  if (!(arg instanceof product_pb.CreateProductRequest)) {
    throw new Error('Expected argument of type product.CreateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateProductRequest(buffer_arg) {
  return product_pb.CreateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_CreateProductResponse(arg) {
  if (!(arg instanceof product_pb.CreateProductResponse)) {
    throw new Error('Expected argument of type product.CreateProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateProductResponse(buffer_arg) {
  return product_pb.CreateProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductRequest(arg) {
  if (!(arg instanceof product_pb.GetProductRequest)) {
    throw new Error('Expected argument of type product.GetProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductRequest(buffer_arg) {
  return product_pb.GetProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductResponse(arg) {
  if (!(arg instanceof product_pb.GetProductResponse)) {
    throw new Error('Expected argument of type product.GetProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductResponse(buffer_arg) {
  return product_pb.GetProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductsRequest(arg) {
  if (!(arg instanceof product_pb.GetProductsRequest)) {
    throw new Error('Expected argument of type product.GetProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductsRequest(buffer_arg) {
  return product_pb.GetProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductsResponse(arg) {
  if (!(arg instanceof product_pb.GetProductsResponse)) {
    throw new Error('Expected argument of type product.GetProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductsResponse(buffer_arg) {
  return product_pb.GetProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  getProduct: {
    path: '/product.ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.GetProductRequest,
    responseType: product_pb.GetProductResponse,
    requestSerialize: serialize_product_GetProductRequest,
    requestDeserialize: deserialize_product_GetProductRequest,
    responseSerialize: serialize_product_GetProductResponse,
    responseDeserialize: deserialize_product_GetProductResponse,
  },
  getProducts: {
    path: '/product.ProductService/GetProducts',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.GetProductsRequest,
    responseType: product_pb.GetProductsResponse,
    requestSerialize: serialize_product_GetProductsRequest,
    requestDeserialize: deserialize_product_GetProductsRequest,
    responseSerialize: serialize_product_GetProductsResponse,
    responseDeserialize: deserialize_product_GetProductsResponse,
  },
  createProduct: {
    path: '/product.ProductService/CreateProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.CreateProductRequest,
    responseType: product_pb.CreateProductResponse,
    requestSerialize: serialize_product_CreateProductRequest,
    requestDeserialize: deserialize_product_CreateProductRequest,
    responseSerialize: serialize_product_CreateProductResponse,
    responseDeserialize: deserialize_product_CreateProductResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
