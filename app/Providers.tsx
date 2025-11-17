'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/lib/theme'
import { GlobalStyle } from '@/lib/GlobalStyle'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

