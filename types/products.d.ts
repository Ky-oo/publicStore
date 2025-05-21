interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  rating: Rating;
}

export { Product, Rating };
