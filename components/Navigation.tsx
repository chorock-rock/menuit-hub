'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`

const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }

  @media (min-width: 1280px) {
    padding: 0 4rem;
  }
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: opacity 0.2s;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(to right, ${props => props.theme.colors.brand}, ${props => props.theme.colors.point});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const CTAButton = styled(Link)`
  padding: 0.5rem 1.5rem;
  background: linear-gradient(to right, ${props => props.theme.colors.brand}, #FF6B4A);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  
  &:hover {
    background: linear-gradient(to right, #FF6B4A, ${props => props.theme.colors.brand});
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
    text-decoration: none;
  }
`

export default function Navigation() {
  return (
    <Nav>
      <NavContainer>
        <NavContent>
          <LogoLink href="/">
            <Image
              src="/image/CI.svg"
              alt="메뉴잇 로고"
              width={40}
              height={40}
              style={{ width: '2.5rem', height: '2.5rem' }}
            />
            <LogoText>메뉴잇 허브</LogoText>
          </LogoLink>
          <NavActions>
            <CTAButton href="/signup">
              허브에 연결하세요
            </CTAButton>
          </NavActions>
        </NavContent>
      </NavContainer>
    </Nav>
  )
}
