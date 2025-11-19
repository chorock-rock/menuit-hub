import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '메뉴잇 비즈 | MenuIt Biz',
  description: '지역 기반 파트너를 위한 메뉴잇 비즈 공식 랜딩 페이지입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>{children}</body>
    </html>
  )
}
