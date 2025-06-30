
import React from 'react';
import { Heart, Shield, Users, ArrowRight, MapPin, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-emerald-100">
            <Heart className="h-5 w-5 text-emerald-600 mr-3" />
            <span className="text-emerald-700 text-sm font-semibold">암 전문 요양병원 매칭 플랫폼</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              최적의 요양병원
            </span>
            <br />
            <span className="text-gray-800">쉽고 빠르게</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            전국 300여 개 암 전문 요양병원 정보와 실시간 상담을 통해
            <br />
            <span className="font-semibold text-emerald-600">환자와 가족에게 딱 맞는 병원</span>을 찾아드립니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-xl transition-all transform hover:scale-105 flex items-center">
              지금 바로 병원 찾기
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-10 py-5 rounded-2xl text-lg font-semibold transition-all flex items-center">
              <MapPin className="mr-3 h-5 w-5" />
              내 주변 병원 보기
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl font-bold text-emerald-600 mb-2">300+</div>
              <div className="text-gray-600 font-medium">등록 병원</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">상담 지원</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">만족도</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl font-bold text-orange-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">상담 완료</div>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">검증된 병원 정보</h3>
              <p className="text-gray-600 leading-relaxed">의료진, 시설, 치료 프로그램까지 철저히 검증된 신뢰할 수 있는 병원 정보를 제공합니다.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">실시간 전문 상담</h3>
              <p className="text-gray-600 leading-relaxed">24시간 언제든지 암 전문 상담사와 연결하여 맞춤형 병원 추천을 받을 수 있습니다.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI 맞춤 매칭</h3>
              <p className="text-gray-600 leading-relaxed">환자의 상태, 위치, 요구사항을 종합하여 AI가 최적의 병원을 추천해드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
