
import React, { useState } from 'react';
import { Bell, Search, Menu, Phone, MessageCircle, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">메</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">메디스텝</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-emerald-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium border-b-2 border-emerald-500 transition-colors">
              홈
            </a>
            <a href="#search" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              병원찾기
            </a>
            <a href="#consultation" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              상담신청
            </a>
            <a href="#about" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              서비스소개
            </a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              문의하기
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="hidden sm:flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 px-3 py-2 rounded-lg transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">1600-0000</span>
            </button>
            
            <button className="hidden sm:flex items-center space-x-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">24시간 상담</span>
            </button>
            
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-lg transition-all transform hover:scale-105">
              병원 등록
            </button>
            
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-emerald-600 font-medium">홈</a>
              <a href="#search" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">병원찾기</a>
              <a href="#consultation" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">상담신청</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">서비스소개</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">문의하기</a>
              <div className="pt-3 border-t">
                <a href="tel:1600-0000" className="flex items-center space-x-2 px-3 py-2 text-emerald-600">
                  <Phone className="h-4 w-4" />
                  <span>1600-0000</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
