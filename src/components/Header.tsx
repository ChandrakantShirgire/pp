import React from 'react';
import { User } from '../types';
import { UserCircle } from 'lucide-react';

interface HeaderProps {
  user: User;
}

function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-800">UniSwap</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <UserCircle className="w-6 h-6 text-gray-600" />
              <div>
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;