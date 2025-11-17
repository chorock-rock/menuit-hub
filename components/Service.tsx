'use client'

import styled from 'styled-components'

const Section = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(to bottom, ${props => props.theme.colors.gray[200]}, white, ${props => props.theme.colors.gray[200]});
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

const DecorationCircle1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 24rem;
  height: 24rem;
  background: ${props => props.theme.colors.brand}0D;
  border-radius: 50%;
  filter: blur(3rem);
`

const DecorationCircle2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24rem;
  height: 24rem;
  background: ${props => props.theme.colors.point}0D;
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
  max-width: 80rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

const ServiceCard = styled.div`
  background: linear-gradient(to bottom right, white, ${props => props.theme.colors.gray[200]});
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid ${props => props.theme.colors.gray[200]};
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

const CardBlur = styled.div<{ $brand?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 8rem;
  background: ${props => props.$brand ? `${props.theme.colors.brand}1A` : `${props.theme.colors.point}1A`};
  border-radius: 50%;
  filter: blur(2rem);
  transition: background 0.3s;

  ${ServiceCard}:hover & {
    background: ${props => props.$brand ? `${props.theme.colors.brand}33` : `${props.theme.colors.point}33`};
  }
`

const CardContent = styled.div`
  position: relative;
  z-index: 10;
`

const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`

const CardText = styled.p<{ $marginBottom?: boolean }>`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: ${props => props.$marginBottom ? '1rem' : '0'};
`

const StrongText = styled.strong<{ $brand?: boolean }>`
  color: ${props => props.$brand ? props.theme.colors.brand : props.theme.colors.gray[900]};
`

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1.125rem;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding-top: 0.25rem;
`

const CheckIcon = styled.span`
  color: ${props => props.theme.colors.brand};
  margin-right: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  transition: transform 0.3s;

  ${FeatureItem}:hover & {
    transform: scale(1.25);
  }
`

export default function Service() {
  return (
    <Section>
      <DecorationCircle1 />
      <DecorationCircle2 />
      
      <Container>
        <Header>
          <Title>
            <TitleGradient>서비스 소개</TitleGradient>
          </Title>
          <Divider />
        </Header>

        <Grid>
          <ServiceCard>
            <CardBlur $brand />
            <CardContent>
              <Emoji>🎯</Emoji>
              <CardTitle>핵심 서비스</CardTitle>
              <CardText $marginBottom>
                메뉴잇은 <StrongText>테이블 오더 + 매장 IoT + 운영 효율화</StrongText>를 중심으로 한
                <StrongText $brand> 하드웨어/소프트웨어 통합 솔루션</StrongText>입니다.
              </CardText>
              <CardText>
                메뉴잇 허브 파트너는 해당 지역의 사장님들에게 이 솔루션을 공급하며
                자신의 기존 사업에 <StrongText>추가적인 사업 라인</StrongText>을 추가할 수 있습니다.
              </CardText>
            </CardContent>
          </ServiceCard>

          <ServiceCard>
            <CardBlur />
            <CardContent>
              <Emoji>🤝</Emoji>
              <CardTitle>메뉴잇 허브의 역할</CardTitle>
              <FeatureList>
                <FeatureItem>
                  <CheckIcon>✓</CheckIcon>
                  <span>각 지역별 <StrongText $brand>파트너</StrongText> 활동</span>
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon>✓</CheckIcon>
                  <span>사업자에게 테이블 오더 서비스 제안·도입</span>
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon>✓</CheckIcon>
                  <span>운영 컨설팅 + 장비 설치 + 유지 지원</span>
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon>✓</CheckIcon>
                  <span>지역 사업 성장과 본사 협업 구조</span>
                </FeatureItem>
              </FeatureList>
            </CardContent>
          </ServiceCard>
        </Grid>
      </Container>
    </Section>
  )
}
