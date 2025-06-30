
import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, Phone, Clock, Navigation } from 'lucide-react';

const HospitalSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const regions = ['전체', '서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산', '세종'];
  const categories = ['전체', '종합요양', '암전문', '호스피스', '재활치료', '한방치료'];

  const hospitals = [
    {
      id: 1,
      name: '서울암전문요양병원',
      region: '서울 강남구',
      category: '암전문',
      rating: 4.8,
      reviews: 156,
      specialties: ['고주파온열치료', '면역주사', '통증관리'],
      image: '/api/placeholder/300/200',
      distance: '2.3km',
      consultAvailable: true
    },
    {
      id: 2,
      name: '우리들요양병원',
      region: '경기 성남시',
      category: '종합요양',
      rating: 4.6,
      reviews: 89,
      specialties: ['한방치료', '물리치료', '영양관리'],
      image: '/api/placeholder/300/200',
      distance: '5.1km',
      consultAvailable: true
    },
    {
      id: 3,
      name: '참사랑요양병원',
      region: '서울 서초구',
      category: '호스피스',
      rating: 4.9,
      reviews: 203,
      specialties: ['호스피스케어', '가족상담', '심리치료'],
      image: '/api/placeholder/300/200',
      distance: '3.7km',
      consultAvailable: false
    }
  ];

  return (
    <section id="search" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            내게 맞는 <span className="text-emerald-600">요양병원 찾기</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            지역, 전문분야, 치료방법을 고려하여 최적의 병원을 추천해드립니다
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">병원명 또는 지역</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="예) 강남구, 암전문병원"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">지역</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">전문분야</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
              병원 검색하기
            </button>
            <button className="flex items-center justify-center space-x-2 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-colors">
              <Navigation className="h-5 w-5" />
              <span>내 주변 검색</span>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hospital.category}
                  </span>
                </div>
                {hospital.consultAvailable && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      상담가능
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{hospital.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{hospital.region} • {hospital.distance}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-gray-900">{hospital.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({hospital.reviews})</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                    상세정보
                  </button>
                  <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl transition-colors">
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-semibold transition-colors">
            더 많은 병원 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default HospitalSearch;
