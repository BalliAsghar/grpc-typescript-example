# gRPC/Typescript example

This is a simple example of a gRPC server, written in Typescript, using:

- [grpc-tools](https://www.npmjs.com/package/grpc-tools) to generate the server and client code from the proto file
- [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) to create the server and client
- [grpc_tools_node_protoc_ts](https://www.npmjs.com/package/grpc_tools_node_protoc_ts) to generate the typescript types from the proto file
- [ioredis](https://www.npmjs.com/package/ioredis) to connect to Redis and store the data

## How to run

### Server

```bash
git clone https://github.com/BalliAsghar/grpc-typescript-example
cd grpc-typescript-example
```

### Install dependencies

```bash
npm install
```

### Compile the proto file

```bash
npm run build:proto
```

> Make sure you have the [protoc](https://grpc.io/docs/protoc-installation/) installed on your machine.

### Run the server

```bash
npm run dev
```

> Make sure you have the [Redis](https://redis.io/topics/quickstart) installed on your machine.

### Test the server

Use [Postman](https://www.postman.com/) or any other tool to test the server.

### Available RPCs

- `CreateProduct` - Creates a new product
- `GetProduct` - Gets a product by id
- `GetProducts` - Gets all products
