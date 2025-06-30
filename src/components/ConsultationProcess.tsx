
import React from 'react';
import { MessageSquare, Search, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ConsultationProcess = () => {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: '상담 신청',
      description: '간단한 정보 입력으로 상담을 신청하세요',
      details: ['환자 기본정보', '현재 치료상황', '희망 조건']
    },
    {
      step: 2,
      icon: Search,
      title: '병원 매칭',
      description: '전문팀이 최적의 병원을 선별합니다',
      details: ['조건 분석', '병원 검토', '매칭 결과']
    },
    {
      step: 3,
      icon: Users,
      title: '전문 상담',
      description: '1:1 맞춤 상담으로 상세히 안내드립니다',
      details: ['병원 소개', '시설 안내', '입원 절차']
    },
    {
      step: 4,
      icon: CheckCircle,
      title: '입원 지원',
      description: '입원까지 전 과정을 지원해드립니다',
      details: ['예약 대행', '서류 안내', '사후 관리']
    }
  ];

  return (
    <section id="consultation" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-emerald-600">상담 과정</span>이 궁금하다면?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            복잡한 절차 없이 4단계로 쉽고 빠르게 최적의 병원을 찾아보세요
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <ul className="text-sm text-gray-500 space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-emerald-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  지금 바로 시작하세요
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  전문 상담사가 환자분의 상황을 정확히 파악하고, 
                  가장 적합한 요양병원을 추천해드립니다.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    무료 상담 서비스
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    24시간 언제든지 가능
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    전문 상담사 1:1 매칭
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">환자 관계</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>본인</option>
                      <option>가족</option>
                      <option>지인</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">연락처</label>
                    <input 
                      type="tel" 
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">희망 지역</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>서울특별시</option>
                      <option>경기도</option>
                      <option>인천광역시</option>
                      <option>기타</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
                    무료 상담 신청하기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
