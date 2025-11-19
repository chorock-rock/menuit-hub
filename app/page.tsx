import {
  ArrowRight,
  CheckCircle,
  FileText,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

const features = [
  {
    title: '스마트 파트너십',
    description: '지역별 핵심 매장과의 연결을 자동화합니다.',
    items: ['상권 데이터 기반 매칭', '온보딩 플레이북 제공', '성과 지표 대시보드'],
    accent: 'mint',
    icon: Shield,
  },
  {
    title: '운영 자동화',
    description: '디바이스 설치부터 정산까지 토탈 케어를 제공합니다.',
    items: ['설치 일정 자동 관리', '실시간 장애 알림', '정산 캘린더 연동'],
    accent: 'peach',
    icon: Zap,
  },
  {
    title: '수익 성장',
    description: '파트너별 목표 기반의 성장 전략을 제공해드립니다.',
    items: ['월별 반복 매출 예측', '리텐션 인사이트', '추가 수익 기회 추천'],
    accent: 'lavender',
    icon: TrendingUp,
  },
]

const stats = [
  { label: '활성 파트너', value: '312명', accent: 'mint' },
  { label: '월 평균 추가 매출', value: '₩7.8M', accent: 'peach' },
  { label: '평균 설치 매장', value: '24곳', accent: 'lavender' },
  { label: '파트너 만족도', value: '4.9 / 5.0', accent: 'mint' },
]

const trades = [
  {
    type: '강남 테이블오더 구축',
    detail: '12개 매장 · 디바이스 48대',
    revenue: '월 960만원',
    status: '프로젝트 완료',
    roi: 'ROI 21%',
    time: '5분 전',
  },
  {
    type: '분당 무인 주문존 구축',
    detail: '카페 8곳 · 셀프키오스크',
    revenue: '월 540만원',
    status: '진행 중',
    roi: 'ROI 16%',
    time: '12분 전',
  },
  {
    type: '부산 패밀리 레스토랑 확장',
    detail: '패밀리 레스토랑 5곳',
    revenue: '월 720만원',
    status: '계약 체결',
    roi: 'ROI 19%',
    time: '23분 전',
  },
  {
    type: '대전 스마트 주방 패키지',
    detail: '공동 주방 3곳 · POS 연동',
    revenue: '월 410만원',
    status: '제안 검토',
    roi: 'ROI 14%',
    time: '35분 전',
  },
]

const steps = [
  {
    title: '1. 전략 미팅',
    desc: '상권 진단과 목표 매출을 함께 정의합니다.',
    icon: FileText,
    accent: 'mint',
  },
  {
    title: '2. 설치 & 런칭',
    desc: '하드웨어 · 소프트웨어 · 교육까지 일괄 지원합니다.',
    icon: Shield,
    accent: 'peach',
  },
  {
    title: '3. 성장 동반',
    desc: '정기 리포트와 공동 마케팅으로 확장을 돕습니다.',
    icon: Users,
    accent: 'lavender',
  },
]

const useCases = [
  {
    title: '도심 멀티상권 허브',
    desc: '오피스·상업 지구 집중 공략 모델',
    monthlyRevenue: '월 1,120만원',
    price: '초기 장비비 2,700만원',
    roi: 'ROI 23%',
  },
  {
    title: '브런치 타운 패키지',
    desc: '브런치 카페 전용 주문·결제 번들',
    monthlyRevenue: '월 780만원',
    price: '초기 장비비 1,950만원',
    roi: 'ROI 18%',
  },
  {
    title: '프랜차이즈 H/W 통합',
    desc: '전국 매장 동시 설치 & 중앙 관제',
    monthlyRevenue: '월 1,540만원',
    price: '초기 장비비 3,400만원',
    roi: 'ROI 26%',
  },
  {
    title: '관광 특화 매장 클러스터',
    desc: '외국어 메뉴 · 무인 주문 최적화',
    monthlyRevenue: '월 680만원',
    price: '초기 장비비 1,600만원',
    roi: 'ROI 17%',
  },
  {
    title: '주거밀집 상권 라이트',
    desc: '소형 매장을 위한 구독형 모델',
    monthlyRevenue: '월 430만원',
    price: '초기 장비비 980만원',
    roi: 'ROI 15%',
  },
  {
    title: '공동 주방 인큐베이션',
    desc: '배달 최적 POS + 디지털 사이니지',
    monthlyRevenue: '월 910만원',
    price: '초기 장비비 2,200만원',
    roi: 'ROI 21%',
  },
]

export default function Home() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="container nav__inner">
          <div className="brand">
            <div className="brand__mark">MB</div>
            <div>
              <p className="brand__title">메뉴잇 비즈</p>
              <span className="brand__subtitle">MenuIt Biz</span>
            </div>
          </div>
          <div className="nav__links">
            <a href="#features">솔루션</a>
            <a href="#partners">실시간 허브</a>
            <a href="#steps">진행 방식</a>
            <a href="#cases">레퍼런스</a>
            <button className="btn btn--ghost">파트너 자료</button>
            <button className="btn btn--primary">
              파트너 신청 <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <header className="hero">
          <div className="container hero__inner">
            <span className="pill">지역 기반 파트너 전용</span>
            <h1>
              <span className="gradient-text">메뉴잇 비즈</span>와 함께
              <br />
              새로운 수익 라인을 만드세요
            </h1>
            <p>
              하드웨어 · 소프트웨어 · 운영 노하우를 모두 제공하는 메뉴잇의 파트너
              프로그램. 지역 전문가만의 네트워크에 메뉴잇 비즈를 연결해 두 번째
              매출을 만들 수 있습니다.
            </p>
            <div className="hero__cta">
              <button className="btn btn--primary btn--lg">
                파트너 상담 예약 <ArrowRight size={18} />
              </button>
              <button className="btn btn--secondary btn--lg">소개서 다운로드</button>
            </div>
            <div className="hero__meta">
              <div>
                <strong>312명</strong>
                <span>활성 파트너</span>
              </div>
              <div>
                <strong>24곳</strong>
                <span>평균 설치 매장</span>
              </div>
              <div>
                <strong>4.9/5.0</strong>
                <span>파트너 만족도</span>
              </div>
            </div>
          </div>
        </header>

        <section id="features" className="section">
          <div className="container">
            <div className="section__header">
              <p className="pill pill--muted">솔루션</p>
              <h2>메뉴잇 비즈 핵심 모듈</h2>
              <p>파트너십 발굴부터 운영까지 한 번의 온보딩으로 사용할 수 있습니다.</p>
            </div>
            <div className="card-grid">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className={`card card--${feature.accent}`}
                >
                  <feature.icon className="card__icon" size={36} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul>
                    {feature.items.map((item) => (
                      <li key={item}>
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="section section--alt">
          <div className="container">
            <div className="section__header">
              <p className="pill pill--muted">실시간 허브</p>
              <h2>지금 연결되는 파트너십</h2>
              <p>전국에서 동시에 진행되고 있는 메뉴잇 비즈 프로젝트 현황입니다.</p>
            </div>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className={`stat stat--${stat.accent}`}>
                  <div className="stat__value">{stat.value}</div>
                  <div className="stat__label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="feed">
              <div className="feed__header">
                <h3>실시간 프로젝트 피드</h3>
                <button className="btn btn--ghost">
                  전체 보기 <ArrowRight size={16} />
                </button>
              </div>
              <div className="feed__list">
                {trades.map((trade) => (
                  <div key={trade.type} className="feed__item">
                    <div className="feed__item-top">
                      <div className="feed__badge" />
                      <strong>{trade.type}</strong>
                      <span className="feed__roi">{trade.roi}</span>
                      <span className="feed__time">{trade.time}</span>
                    </div>
                    <p>{trade.detail}</p>
                    <div className="feed__meta">
                      <div>
                        <span className="label">월 예상 수익</span>
                        <strong>{trade.revenue}</strong>
                      </div>
                      <div className="feed__status">{trade.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="section">
          <div className="container">
            <div className="section__header">
              <p className="pill pill--muted">진행 방식</p>
              <h2>메뉴잇 비즈 파트너 여정</h2>
              <p>3단계 협업 프로세스로 빠르게 실행하고, 함께 성장합니다.</p>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <article key={step.title} className={`step step--${step.accent}`}>
                  <div className="step__icon">
                    <step.icon size={28} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="section section--alt">
          <div className="container">
            <div className="section__header">
              <p className="pill pill--muted">레퍼런스</p>
              <h2>인기 파트너십 시나리오</h2>
              <p>메뉴잇 비즈 파트너들이 실제로 실행 중인 대표 모델입니다.</p>
            </div>
            <div className="case-grid">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="case-card">
                  <div className="case-card__top">
                    <h3>{useCase.title}</h3>
                    <span>{useCase.roi}</span>
                  </div>
                  <p>{useCase.desc}</p>
                  <div className="case-card__rows">
                    <div>
                      <span className="label">월 예상 수익</span>
                      <strong>{useCase.monthlyRevenue}</strong>
                    </div>
                    <div>
                      <span className="label">초기 장비비</span>
                      <strong>{useCase.price}</strong>
                    </div>
                  </div>
                  <button className="btn btn--ghost">상세 플랜 받기</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="container cta__inner">
            <div>
              <p className="pill">Ready</p>
              <h2>메뉴잇 비즈와 새로운 허브를 만드세요</h2>
              <p>
                메뉴잇 본사와 함께 지역 네트워크를 확장하고, 파트너만의 전담 지원을
                받아보세요.
              </p>
            </div>
            <div className="cta__actions">
              <button className="btn btn--primary btn--lg">
                파트너 신청하기 <ArrowRight size={18} />
              </button>
              <button className="btn btn--secondary btn--lg">상담 일정 잡기</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="brand">
            <div className="brand__mark">MB</div>
            <div>
              <p className="brand__title">메뉴잇 비즈</p>
              <span className="brand__subtitle">지역 파트너 네트워크</span>
            </div>
          </div>
          <p>© {new Date().getFullYear()} MenuIt Biz. All rights reserved.</p>
          <div className="footer__links">
            <a href="#features">솔루션</a>
            <a href="#partners">실시간 허브</a>
            <a href="#steps">진행 방식</a>
            <a href="#cases">레퍼런스</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
