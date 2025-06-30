
import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">메디스텝</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#overview" className="text-emerald-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium border-b-2 border-emerald-500">
              홈
            </a>
            <a href="#search" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              병원찾기
            </a>
            <a href="#prd" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              PRD
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              협력병원 가입
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
