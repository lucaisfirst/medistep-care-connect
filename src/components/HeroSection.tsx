
import React from 'react';
import { Heart, Shield, Users, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-emerald-100 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 text-sm font-medium">좋은 암요양병원 찾기</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            메디스텝이 함께 합니다
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            모든 암 환자와 가족이 최적의 요양병원을 쉽게 찾고 상담받을 수 있도록 
            <br />
            돕는 원스톱 플랫폼을 개발합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center">
              PRD 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-semibold">
              개발 단계 확인
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">안전한 정보 제공</h3>
              <p className="text-gray-600">검증된 병원 정보와 실시간 후기를 통해 신뢰할 수 있는 정보를 제공합니다.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24시간 상담 지원</h3>
              <p className="text-gray-600">언제든지 전문 상담사와 연결하여 맞춤형 병원 추천을 받을 수 있습니다.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">맞춤형 매칭</h3>
              <p className="text-gray-600">환자의 상태와 요구사항에 최적화된 병원을 AI가 추천해드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
