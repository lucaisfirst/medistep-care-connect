
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: '김○○님',
      relation: '환자 가족',
      rating: 5,
      content: '어머니 암 수술 후 요양병원을 찾느라 고민이 많았는데, 메디스텝 덕분에 정말 좋은 병원을 찾을 수 있었어요. 상담사분이 친절하게 설명해주시고, 병원 정보도 정확해서 믿고 맡길 수 있었습니다.',
      hospital: '서울 강남구 소재 요양병원',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: '박○○님',
      relation: '환자 본인',
      rating: 5,
      content: '암 치료 후 몸이 많이 약해져서 집에서 요양하기 힘들었는데, 메디스텝에서 추천해준 병원이 정말 만족스러워요. 의료진도 친절하고 시설도 깨끗해서 빠르게 회복되고 있습니다.',
      hospital: '경기 분당구 소재 요양병원',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: '이○○님',
      relation: '환자 가족',
      rating: 5,
      content: '24시간 상담 서비스가 정말 도움이 되었어요. 급하게 병원을 찾아야 하는 상황이었는데, 밤늦은 시간에도 친절하게 상담해주시고 바로 병원 연결까지 도와주셨습니다.',
      hospital: '서울 서초구 소재 요양병원',
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-emerald-600">실제 이용자</span> 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            메디스텝을 통해 좋은 병원을 찾으신 분들의 진솔한 후기를 들어보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-emerald-500 ml-auto" />
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.relation}</p>
                  </div>
                </div>
                <div className="mt-3 text-sm text-emerald-600 font-medium">
                  {testimonial.hospital}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">메디스텝의 성과</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-emerald-100">고객 만족도</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-emerald-100">상담 완료</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-emerald-100">제휴 병원</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100">상담 지원</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
