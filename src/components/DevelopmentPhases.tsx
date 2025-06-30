
import React, { useState } from 'react';
import { ChevronRight, Clock, CheckCircle, Circle } from 'lucide-react';

const DevelopmentPhases = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Phase 1: 기획 및 분석",
      duration: "4주",
      status: "완료",
      description: "시장 조사, 사용자 니즈 분석, 경쟁사 분석 및 핵심 기능 정의",
      details: [
        "암 요양병원 시장 현황 분석",
        "타겟 사용자 페르소나 정의 (환자, 가족, 의료진)",
        "힐메이트, 힐링미 등 경쟁 서비스 분석",
        "핵심 기능 우선순위 정의",
        "비즈니스 모델 수립",
        "기술 스택 결정"
      ],
      deliverables: [
        "시장 조사 보고서",
        "사용자 페르소나",
        "경쟁사 분석 리포트",
        "기능 명세서 초안",
        "비즈니스 모델 캔버스"
      ]
    },
    {
      id: 2,
      title: "Phase 2: PRD 작성 및 설계",
      duration: "6주",
      status: "진행중",
      description: "상세한 PRD 작성, 시스템 아키텍처 설계, UI/UX 디자인",
      details: [
        "상세 PRD (Product Requirements Document) 작성",
        "시스템 아키텍처 설계",
        "데이터베이스 스키마 설계",
        "API 명세서 작성",
        "와이어프레임 및 프로토타입 제작",
        "UI/UX 디자인 시스템 구축"
      ],
      deliverables: [
        "완성된 PRD 문서",
        "시스템 아키텍처 다이어그램",
        "데이터베이스 ERD",
        "API 문서",
        "디자인 시스템 및 프로토타입"
      ]
    },
    {
      id: 3,
      title: "Phase 3: MVP 개발",
      duration: "12주",
      status: "예정",
      description: "핵심 기능이 포함된 최소 기능 제품(MVP) 개발",
      details: [
        "사용자 인증 및 회원 관리 시스템",
        "병원 검색 및 필터링 기능",
        "병원 상세 정보 조회",
        "기본적인 상담 신청 기능",
        "관리자 대시보드 기본 기능",
        "모바일 반응형 웹 개발"
      ],
      deliverables: [
        "MVP 웹 애플리케이션",
        "관리자 대시보드",
        "기본 API 서버",
        "데이터베이스 구축",
        "테스트 결과 보고서"
      ]
    },
    {
      id: 4,
      title: "Phase 4: 베타 테스트 및 피드백",
      duration: "4주",
      status: "예정",
      description: "실제 사용자 테스트를 통한 피드백 수집 및 개선",
      details: [
        "베타 테스터 모집 (환자, 가족, 의료진)",
        "사용성 테스트 진행",
        "피드백 수집 및 분석",
        "우선순위 기반 개선사항 도출",
        "성능 최적화",
        "보안 테스트"
      ],
      deliverables: [
        "베타 테스트 결과 보고서",
        "사용자 피드백 분석",
        "개선사항 리스트",
        "성능 최적화 보고서",
        "보안 테스트 결과"
      ]
    },
    {
      id: 5,
      title: "Phase 5: 정식 출시 준비",
      duration: "6주",
      status: "예정",
      description: "정식 서비스 출시를 위한 최종 준비 및 마케팅",
      details: [
        "피드백 기반 최종 개선",
        "네이티브 모바일 앱 개발",
        "서버 인프라 확장",
        "마케팅 전략 수립",
        "협력 병원 온보딩",
        "고객 지원 시스템 구축"
      ],
      deliverables: [
        "완성된 웹/모바일 서비스",
        "확장 가능한 서버 인프라",
        "마케팅 계획서",
        "병원 파트너십 협약",
        "고객 지원 가이드라인"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "완료":
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case "진행중":
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <Circle className="h-5 w-5 text-gray-300" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "완료":
        return "bg-emerald-100 text-emerald-800";
      case "진행중":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            메디스텝 개발 단계
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적이고 단계적인 접근을 통해 완성도 높은 서비스를 개발합니다.
            <br />
            각 단계별로 명확한 목표와 결과물을 정의하여 프로젝트를 진행합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Phase List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">개발 단계</h3>
              <div className="space-y-2">
                {phases.map((phase, index) => (
                  <button
                    key={phase.id}
                    onClick={() => setSelectedPhase(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedPhase === index
                        ? 'bg-emerald-50 border-2 border-emerald-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getStatusIcon(phase.status)}
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{phase.title}</p>
                          <p className="text-sm text-gray-500">{phase.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status)}`}>
                          {phase.status}
                        </span>
                        <ChevronRight className={`h-4 w-4 ml-2 transition-transform ${
                          selectedPhase === index ? 'transform rotate-90' : ''
                        }`} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Phase Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                {getStatusIcon(phases[selectedPhase].status)}
                <div className="ml-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {phases[selectedPhase].title}
                  </h3>
                  <p className="text-gray-600">
                    예상 기간: {phases[selectedPhase].duration} | 
                    상태: <span className={`font-medium ${
                      phases[selectedPhase].status === '완료' ? 'text-emerald-600' :
                      phases[selectedPhase].status === '진행중' ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {phases[selectedPhase].status}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 text-lg">
                {phases[selectedPhase].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">주요 작업</h4>
                  <ul className="space-y-3">
                    {phases[selectedPhase].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">결과물</h4>
                  <ul className="space-y-3">
                    {phases[selectedPhase].deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  <strong>다음 단계:</strong> 현재 단계 완료 후 자동으로 다음 단계로 진행됩니다. 
                  각 단계별 검토 및 승인 과정을 거쳐 품질을 보장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
            상세 PRD 문서 보기
          </button>
          <p className="mt-4 text-gray-600">
            'ㄱ'을 눌러 다음 단계의 상세 내용을 확인하세요
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPhases;
