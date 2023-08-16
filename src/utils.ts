import { Redis } from 'ioredis';
import { GetProductResponse } from './generated/product_pb';

async function pingRedis(redis: Redis) {
  try {
    await redis.ping();
    console.log('Redis is ready');
  } catch (error) {
    console.log('Redis is not ready');
    setTimeout(() => pingRedis(redis), 1000);
  }
}

function createGetProductResponse(
  product: GetProductResponse.AsObject,
): GetProductResponse {
  const response = new GetProductResponse();
  response.setName(product.name);
  response.setPrice(product.price);
  response.setId(product.id);
  response.setDescription(product.description);

  return response;
}

export { pingRedis, createGetProductResponse };
