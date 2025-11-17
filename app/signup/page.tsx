import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-white to-gray-200"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-point/10 rounded-full blur-3xl"></div>
      
      <Navigation />
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-12 relative overflow-hidden">
          {/* 카드 배경 장식 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-point/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-5xl">🎯</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-brand to-gray-900 bg-clip-text text-transparent">
                  허브에 연결하기
                </span>
              </h1>
              <p className="text-gray-600">
                메뉴잇 허브 파트너로 가입하시려면 아래 정보를 입력해주세요.
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="연락처를 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="region" className="block text-sm font-semibold text-gray-700 mb-2">
                  지역
                </label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="활동 지역을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                  기존 사업 분야
                </label>
                <textarea
                  id="business"
                  name="business"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="기존 사업 분야를 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  문의사항
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="문의사항을 입력하세요"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-brand via-[#FF6B4A] to-brand text-white rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>가입 신청하기</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-point to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-brand transition-colors font-medium"
              >
                <span>←</span>
                <span>홈으로 돌아가기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

