// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as product_pb from "./product_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProduct: IProductServiceService_IGetProduct;
    getProducts: IProductServiceService_IGetProducts;
    createProduct: IProductServiceService_ICreateProduct;
}

interface IProductServiceService_IGetProduct extends grpc.MethodDefinition<product_pb.GetProductRequest, product_pb.GetProductResponse> {
    path: "/product.ProductService/GetProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.GetProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.GetProductRequest>;
    responseSerialize: grpc.serialize<product_pb.GetProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.GetProductResponse>;
}
interface IProductServiceService_IGetProducts extends grpc.MethodDefinition<product_pb.GetProductsRequest, product_pb.GetProductsResponse> {
    path: "/product.ProductService/GetProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.GetProductsRequest>;
    requestDeserialize: grpc.deserialize<product_pb.GetProductsRequest>;
    responseSerialize: grpc.serialize<product_pb.GetProductsResponse>;
    responseDeserialize: grpc.deserialize<product_pb.GetProductsResponse>;
}
interface IProductServiceService_ICreateProduct extends grpc.MethodDefinition<product_pb.CreateProductRequest, product_pb.CreateProductResponse> {
    path: "/product.ProductService/CreateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.CreateProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.CreateProductRequest>;
    responseSerialize: grpc.serialize<product_pb.CreateProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.CreateProductResponse>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
    getProduct: grpc.handleUnaryCall<product_pb.GetProductRequest, product_pb.GetProductResponse>;
    getProducts: grpc.handleUnaryCall<product_pb.GetProductsRequest, product_pb.GetProductsResponse>;
    createProduct: grpc.handleUnaryCall<product_pb.CreateProductRequest, product_pb.CreateProductResponse>;
}

export interface IProductServiceClient {
    getProduct(request: product_pb.GetProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProducts(request: product_pb.GetProductsRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    getProducts(request: product_pb.GetProductsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    getProducts(request: product_pb.GetProductsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getProduct(request: product_pb.GetProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProducts(request: product_pb.GetProductsRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    public getProducts(request: product_pb.GetProductsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    public getProducts(request: product_pb.GetProductsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
}
