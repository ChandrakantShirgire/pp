import React, { useState } from 'react';
import { Package2, BookOpen, Laptop, Sofa } from 'lucide-react';
import ItemList from './components/ItemList';
import Header from './components/Header';
import AddItemModal from './components/AddItemModal';
import Login from './components/Login';
import { Item, User, LoginCredentials } from './types';

// Mock data with images
const mockItems: Item[] = [
  {
    id: '1',
    owner: 'Arjun Patel',
    description: 'Latest model, barely used',
    condition: 'Excellent',
    price: 74999,
    age: 3,
    isAvailable: true,
    swapHistory: [],
    category: 'Electronics',
    details: {
      model: 'MacBook Pro M2',
      brand: 'Apple'
    },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    owner: 'Priya Sharma',
    description: 'First edition, great condition',
    condition: 'Good',
    price: 3999,
    age: 12,
    isAvailable: true,
    swapHistory: [],
    category: 'Book',
    details: {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald'
    },
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    owner: 'Rahul Verma',
    description: 'Premium Gaming Laptop',
    condition: 'Excellent',
    price: 89999,
    age: 6,
    isAvailable: true,
    swapHistory: [],
    category: 'Electronics',
    details: {
      model: 'ROG Strix G15',
      brand: 'ASUS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    owner: 'Ananya Gupta',
    description: 'Modern L-Shaped Sofa Set',
    condition: 'Like New',
    price: 45999,
    age: 4,
    isAvailable: true,
    swapHistory: [],
    category: 'Furniture',
    details: {
      title: 'L-Shaped Sofa',
      author: ''
    },
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    owner: 'Vikram Malhotra',
    description: 'Wireless Noise Cancelling Headphones',
    condition: 'Good',
    price: 24999,
    age: 8,
    isAvailable: true,
    swapHistory: [],
    category: 'Electronics',
    details: {
      model: 'WH-1000XM4',
      brand: 'Sony'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    owner: 'Neha Reddy',
    description: 'The Immortals of Meluha',
    condition: 'Excellent',
    price: 499,
    age: 2,
    isAvailable: true,
    swapHistory: [],
    category: 'Book',
    details: {
      title: 'The Immortals of Meluha',
      author: 'Amish Tripathi'
    },
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80'
  },
  {
    id: '7',
    owner: 'Karthik Iyer',
    description: 'The White Tiger',
    condition: 'Good',
    price: 399,
    age: 5,
    isAvailable: true,
    swapHistory: [],
    category: 'Book',
    details: {
      title: 'The White Tiger',
      author: 'Aravind Adiga'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80'
  },
  {
    id: '8',
    owner: 'Riya Desai',
    description: 'Modern Dining Table Set',
    condition: 'Excellent',
    price: 35999,
    age: 3,
    isAvailable: true,
    swapHistory: [],
    category: 'Furniture',
    details: {
      title: 'Dining Table Set',
      author: ''
    },
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80'
  },
  {
    id: '9',
    owner: 'Aditya Kumar',
    description: 'Wooden King Size Bed',
    condition: 'Like New',
    price: 52999,
    age: 1,
    isAvailable: true,
    swapHistory: [],
    category: 'Furniture',
    details: {
      title: 'King Size Bed',
      author: ''
    },
    imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80'
  }
];

function App() {
  const [items, setItems] = useState<Item[]>(mockItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const handleLogin = (credentials: LoginCredentials) => {
    setIsAuthenticated(true);
    setCurrentUser({
      name: credentials.email.split('@')[0],
      email: credentials.email
    });
  };

  const addItem = (newItem: Item) => {
    setItems([...items, newItem]);
    setIsModalOpen(false);
  };

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category.toLowerCase() === filter);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={currentUser!} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard 
              icon={<Package2 className="w-6 h-6" />}
              title="All Items"
              onClick={() => setFilter('all')}
              active={filter === 'all'}
            />
            <CategoryCard 
              icon={<Laptop className="w-6 h-6" />}
              title="Electronics"
              onClick={() => setFilter('electronics')}
              active={filter === 'electronics'}
            />
            <CategoryCard 
              icon={<BookOpen className="w-6 h-6" />}
              title="Books"
              onClick={() => setFilter('book')}
              active={filter === 'book'}
            />
            <CategoryCard 
              icon={<Sofa className="w-6 h-6" />}
              title="Furniture"
              onClick={() => setFilter('furniture')}
              active={filter === 'furniture'}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Available Items</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Item
          </button>
        </div>

        <ItemList items={filteredItems} />

        <AddItemModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onAdd={addItem}
          currentUser={currentUser!}
        />
      </main>
    </div>
  );
}

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  active: boolean;
}

function CategoryCard({ icon, title, onClick, active }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-all
        ${active 
          ? 'bg-blue-600 text-white shadow-lg scale-105' 
          : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
        }`}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
}

export default App;