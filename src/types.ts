export interface Item {
  id: string;
  owner: string;
  description: string;
  condition: string;
  price: number;
  age: number;
  isAvailable: boolean;
  swapHistory: string[];
  category: 'Electronics' | 'Book' | 'Clothes' | 'Furniture' | 'Gadget';
  details: ElectronicsDetails | BookDetails;
  imageUrl: string;
}

interface ElectronicsDetails {
  model: string;
  brand: string;
}

interface BookDetails {
  title: string;
  author: string;
}

export interface User {
  name: string;
  email: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}