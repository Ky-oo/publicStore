import { faker } from "@faker-js/faker";
import type { Product } from "../../types/products";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.quantity) {
    return createError({
      statusCode: 400,
      statusMessage: "Missing quantity",
    });
  }

  const products: Product[] = [];

  for (let i = 0; i < body.quantity; i++) {
    products.push({
      id: faker.string.uuid(),
      title: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "€" }),
      description: faker.commerce.productDescription(),
      rating: {
        rate: faker.number.int({ min: 1, max: 5 }),
        count: faker.number.int({ min: 1, max: 1000 }),
      },
      category: faker.commerce.department(),
    });
  }

  return {
    products,
  };
});
