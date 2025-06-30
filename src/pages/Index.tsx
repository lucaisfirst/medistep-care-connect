
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DevelopmentPhases from '../components/DevelopmentPhases';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DevelopmentPhases />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="ml-2 text-xl font-bold">메디스텝</span>
              </div>
              <p className="text-gray-400">
                암 환자와 가족을 위한<br />
                최고의 요양병원 검색 플랫폼
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li>병원 검색</li>
                <li>상담 서비스</li>
                <li>리뷰 시스템</li>
                <li>맞춤 추천</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">개발 정보</h3>
              <ul className="space-y-2 text-gray-400">
                <li>PRD 문서</li>
                <li>개발 일정</li>
                <li>기술 스택</li>
                <li>API 문서</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">문의하기</h3>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: info@medistep.co.kr</li>
                <li>전화: 1600-0000</li>
                <li>평일: 9:00-18:00</li>
                <li>주말: 휴무</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 메디스텝. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
