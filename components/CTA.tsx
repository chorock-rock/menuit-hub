'use client'

import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const Section = styled.section`
  position: relative;
  padding: 4rem 1rem;
  overflow: hidden;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1280px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, ${props => props.theme.colors.brand}, #FF6B4A, ${props => props.theme.colors.brand});
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
`

const DecorationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const DecorationCircle1 = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  width: 16rem;
  height: 16rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  filter: blur(3rem);
  animation: ${float} 6s ease-in-out infinite;
`

const DecorationCircle2 = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  width: 20rem;
  height: 20rem;
  background: ${props => props.theme.colors.point}33;
  border-radius: 50%;
  filter: blur(3rem);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: 1s;
`

const DecorationCircle3 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 24rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  filter: blur(3rem);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
`

const Badge = styled.div`
  display: inline-block;
  margin-bottom: 1.5rem;
`

const BadgeText = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  color: white;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const Description = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2.5rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;
  text-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.5rem 3rem;
  background: white;
  color: ${props => props.theme.colors.brand};
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  text-decoration: none;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }
`

const ButtonContent = styled.span`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ButtonArrow = styled.span`
  transition: transform 0.3s;

  ${CTAButton}:hover & {
    transform: translateX(0.25rem);
  }
`

const ButtonOverlay = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, ${props => props.theme.colors.gray[200]}, white);
  opacity: 0;
  transition: opacity 0.3s;

  ${CTAButton}:hover & {
    opacity: 1;
  }
`

const Dots = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`

const Dot = styled.div<{ $delay?: string }>`
  width: 0.75rem;
  height: 0.75rem;
  background: ${props => props.$delay ? 'rgba(255, 255, 255, 0.8)' : 'white'};
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
`

export default function CTA() {
  return (
    <Section>
      <GradientBackground />
      
      <DecorationWrapper>
        <DecorationCircle1 />
        <DecorationCircle2 />
        <DecorationCircle3 />
      </DecorationWrapper>
      
      <Container>
        <Badge>
          <BadgeText>✨ 지금 시작하세요</BadgeText>
        </Badge>
        
        <Title>메뉴잇 허브에 연결하세요</Title>
        <Description>
          메뉴잇 허브는 각 지역의 전문가들이 함께 만드는 협력 네트워크입니다.
          허브에 연결해 새로운 비즈니스 기회를 확보하세요.
        </Description>
        
        <CTAButton href="/signup">
          <ButtonContent>
            <span>허브에 연결하세요</span>
            <ButtonArrow>→</ButtonArrow>
          </ButtonContent>
          <ButtonOverlay />
        </CTAButton>
        
        <Dots>
          <Dot />
          <Dot $delay="0.2s" />
          <Dot $delay="0.4s" />
        </Dots>
      </Container>
    </Section>
  )
}
