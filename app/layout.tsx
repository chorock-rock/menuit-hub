import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
  title: '메뉴잇 허브 - 지역 기반 파트너 네트워크',
  description: '메뉴잇 허브는 기존 비즈니스에 메뉴잇 테이블오더 서비스를 결합해 추가 수익을 얻을 수 있도록 설계된 지역 기반 파트너 네트워크입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
