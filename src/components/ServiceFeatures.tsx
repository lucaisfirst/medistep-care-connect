
import React from 'react';
import { Users, MessageCircle, ShieldCheck, Clock, Award, HeartHandshake } from 'lucide-react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: Users,
      title: '전문 상담팀',
      description: '암 치료 경험이 풍부한 전문 상담사들이 24시간 대기하고 있습니다.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: '실시간 채팅',
      description: '언제 어디서든 실시간 채팅으로 궁금한 점을 바로 해결하세요.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ShieldCheck,
      title: '검증된 정보',
      description: '모든 병원 정보는 직접 방문하여 검증한 신뢰할 수 있는 데이터입니다.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: '빠른 매칭',
      description: '평균 24시간 이내에 최적의 병원을 추천해드립니다.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: '품질 보장',
      description: '엄격한 기준으로 선별된 우수한 요양병원만을 소개합니다.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: HeartHandshake,
      title: '사후 관리',
      description: '입원 후에도 지속적인 관리와 상담 서비스를 제공합니다.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-emerald-600">메디스텝</span>이 특별한 이유
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            단순한 정보 제공을 넘어 환자와 가족의 마음까지 돌보는 종합 케어 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            지금 바로 <span className="text-emerald-600">무료 상담</span>을 받아보세요
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            전문 상담사가 환자분의 상황에 맞는 최적의 병원을 추천해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
              무료 상담 신청하기
            </button>
            <button className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-semibold transition-colors">
              서비스 둘러보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
