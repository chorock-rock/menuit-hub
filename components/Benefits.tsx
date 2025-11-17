'use client'

import styled from 'styled-components'

const Section = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(to bottom, white, ${props => props.theme.colors.gray[200]}, white);
  position: relative;
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

const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.05;
`

const DecorationCircle1 = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  width: 16rem;
  height: 16rem;
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  filter: blur(3rem);
`

const DecorationCircle2 = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  width: 16rem;
  height: 16rem;
  background: ${props => props.theme.colors.point};
  border-radius: 50%;
  filter: blur(3rem);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const TitleGradient = styled.span`
  background: linear-gradient(to right, ${props => props.theme.colors.gray[900]}, ${props => props.theme.colors.brand}, ${props => props.theme.colors.gray[900]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 0.5rem;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`

const Divider = styled.div`
  width: 8rem;
  height: 0.375rem;
  background: linear-gradient(to right, transparent, ${props => props.theme.colors.brand}, transparent);
  border-radius: 9999px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

const BenefitCard = styled.div<{ $gradient?: string; $borderColor?: string }>`
  background: ${props => {
    if (props.$gradient === 'blue') {
      return `linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), ${props.theme.colors.brand}1A)`;
    } else if (props.$gradient === 'yellow') {
      return `linear-gradient(to bottom right, ${props.theme.colors.point}1A, rgba(250, 204, 21, 0.1))`;
    } else if (props.$gradient === 'green') {
      return `linear-gradient(to bottom right, rgba(34, 197, 94, 0.1), ${props.theme.colors.brand}1A)`;
    } else {
      return `linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), ${props.theme.colors.brand}1A)`;
    }
  }};
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid ${props => {
    if (props.$borderColor === 'brand') {
      return `${props.theme.colors.brand}4D`;
    } else if (props.$borderColor === 'point') {
      return `${props.theme.colors.point}4D`;
    } else if (props.$borderColor === 'green') {
      return 'rgba(34, 197, 94, 0.3)';
    } else {
      return 'rgba(168, 85, 247, 0.3)';
    }
  }};
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`

const CardBlur = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10rem;
  height: 10rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  filter: blur(2rem);
  transition: background 0.3s;

  ${BenefitCard}:hover & {
    background: rgba(255, 255, 255, 0.3);
  }
`

const CardContent = styled.div`
  position: relative;
  z-index: 10;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`

const CardEmoji = styled.span`
  font-size: 3.75rem;
  margin-right: 1rem;
  transition: transform 0.3s;

  ${BenefitCard}:hover & {
    transform: scale(1.1);
  }
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.colors.gray[900]};

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

const BenefitList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1.125rem;
  padding-top: 0.125rem;
`

const CheckIcon = styled.span`
  color: ${props => props.theme.colors.brand};
  margin-right: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  transition: transform 0.3s;

  ${BenefitItem}:hover & {
    transform: scale(1.25);
  }
`

export default function Benefits() {
  const benefits = [
    {
      icon: '💻',
      title: '퍼펙트한 하드웨어 제공',
      gradient: 'blue',
      borderColor: 'brand',
      items: [
        '고성능 테이블오더 디바이스',
        '합리적인 원가 제공',
        '지속적 유지보수 지원',
      ],
    },
    {
      icon: '📚',
      title: '풍부한 매장 운영 노하우 공유',
      gradient: 'yellow',
      borderColor: 'point',
      items: [
        '업계 다년간 쌓인 운영·시스템 구축 노하우',
        '현장에서 바로 활용 가능한 템플릿, 가이드 제공',
      ],
    },
    {
      icon: '⚙️',
      title: '탄탄한 소프트웨어 백업',
      gradient: 'green',
      borderColor: 'green',
      items: [
        '안정적인 POS/주문/결제 시스템',
        '업데이트 및 신규 기능 지속 제공',
        '기술적 문제 즉각 지원',
      ],
    },
    {
      icon: '🚀',
      title: '함께 성장하는 구조',
      gradient: 'purple',
      borderColor: 'purple',
      items: [
        '기존 비즈니스 + 메뉴잇 = 추가 수익 확보',
        '지역 전문가 이미지 강화',
        '사업 확장의 발판',
      ],
    },
  ]

  return (
    <Section>
      <BackgroundDecoration>
        <DecorationCircle1 />
        <DecorationCircle2 />
      </BackgroundDecoration>
      
      <Container>
        <Header>
          <Title>
            <TitleGradient>혜택</TitleGradient>
          </Title>
          <Subtitle>왜 메뉴잇 허브와 함께해야 할까?</Subtitle>
          <Divider />
        </Header>

        <Grid>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              $gradient={benefit.gradient}
              $borderColor={benefit.borderColor}
            >
              <CardBlur />
              <CardContent>
                <CardHeader>
                  <CardEmoji>{benefit.icon}</CardEmoji>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <BenefitList>
                  {benefit.items.map((item, itemIndex) => (
                    <BenefitItem key={itemIndex}>
                      <CheckIcon>✓</CheckIcon>
                      <span>{item}</span>
                    </BenefitItem>
                  ))}
                </BenefitList>
              </CardContent>
            </BenefitCard>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
