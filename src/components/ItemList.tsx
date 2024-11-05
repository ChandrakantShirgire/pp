import React from 'react';
import { Item } from '../types';
import { Clock, IndianRupee, RefreshCw } from 'lucide-react';

interface ItemListProps {
  items: Item[];
}

function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No items found. Try adding some!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={item.imageUrl} 
              alt={item.description}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.description}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded ${
                item.isAvailable 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {item.isAvailable ? 'Available' : 'Unavailable'}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <IndianRupee className="w-4 h-4" />
                <span className="text-sm">₹{item.price.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{item.age} months old</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm">{item.swapHistory.length} swaps</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.owner}`}
                  alt={item.owner}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-600">{item.owner}</span>
              </div>
            </div>

            <div className="mt-4">
              <button 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!item.isAvailable}
              >
                Request Swap
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;