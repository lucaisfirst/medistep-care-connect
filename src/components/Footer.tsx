
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">메</span>
              </div>
              <span className="ml-3 text-2xl font-bold">메디스텝</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              암 환자와 가족을 위한 최고의 요양병원 검색 플랫폼
              <br />
              전문 상담사와 함께 최적의 병원을 찾아보세요
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-emerald-400" />
                <span className="font-semibold">1600-0000</span>
                <span className="ml-2 text-sm bg-emerald-600 px-2 py-1 rounded">24시간 상담</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-emerald-400" />
                <span>info@medistep.co.kr</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-emerald-400" />
                <span>서울시 강남구 테헤란로 123 메디스텝빌딩</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">주요 서비스</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">병원 검색</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">전문 상담</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">맞춤 추천</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">입원 지원</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">사후 관리</li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">고객 지원</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">자주 묻는 질문</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">이용 가이드</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">개인정보처리방침</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">서비스 이용약관</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">병원 제휴 문의</li>
            </ul>
          </div>
        </div>
        
        {/* Operating Hours */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-12">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-emerald-400 mr-3" />
            <h3 className="text-lg font-semibold">운영 시간</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p className="font-semibold text-white mb-2">전화 상담</p>
              <p>24시간 연중무휴</p>
              <p className="text-sm text-emerald-400">응급 상황 언제든지 연락하세요</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">온라인 상담</p>
              <p>평일: 09:00 - 18:00</p>
              <p>주말: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-center">
              &copy; 2024 메디스텝. 모든 권리 보유. | 
              <span className="ml-2">사업자등록번호: 123-45-67890</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
