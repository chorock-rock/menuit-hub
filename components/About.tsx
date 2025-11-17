'use client'

import styled from 'styled-components'

const Section = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(to bottom, white, ${props => props.theme.colors.gray[200]});

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

const Container = styled.div`
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
  background: linear-gradient(to right, ${props => props.theme.colors.gray[900]}, ${props => props.theme.colors.brand});
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

const ContentWrapper = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid ${props => props.theme.colors.gray[200]};
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`

const CardText = styled.p<{ $strong?: boolean; $large?: boolean }>`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.75;
  font-weight: ${props => (props.$strong ? 700 : 400)};
  font-size: ${props => (props.$large ? '1.5rem' : '1.125rem')};

  @media (min-width: 1024px) {
    font-size: ${props => (props.$large ? '1.75rem' : '1.25rem')};
  }
`

const FeatureCard = styled.div`
  background: linear-gradient(to bottom right, ${props => props.theme.colors.gray[200]}, white, ${props => props.theme.colors.gray[200]});
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.gray[300]};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: ${props => props.theme.colors.gray[700]};
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 1.125rem;
  padding-top: 0.25rem;
`

const CheckIcon = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.brand};
  margin-right: 1rem;
  font-weight: 700;
  transition: transform 0.3s;

  ${FeatureItem}:hover & {
    transform: scale(1.25);
  }
`

const HighlightText = styled.strong`
  color: ${props => props.theme.colors.brand};
`

const SuccessCard = styled.div`
  background: linear-gradient(to right, 
    ${props => props.theme.colors.point}33, 
    ${props => props.theme.colors.point}1A, 
    ${props => props.theme.colors.point}33);
  border-left: 4px solid ${props => props.theme.colors.point};
  padding: 2rem;
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`

const SuccessHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`

const SuccessEmoji = styled.span`
  font-size: 1.875rem;
  margin-right: 0.75rem;
`

const SuccessTitle = styled.p`
  color: ${props => props.theme.colors.gray[800]};
  font-weight: 700;
  font-size: 1.125rem;
`

const SuccessText = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1.125rem;
`

const HighlightBox = styled.strong`
  color: ${props => props.theme.colors.gray[900]};
  font-size: 1.25rem;
  background: ${props => props.theme.colors.point}4D;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`

export default function About() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>
            <TitleGradient>메뉴잇 허브란?</TitleGradient>
          </Title>
          <Divider />
        </Header>
        
        <ContentWrapper>
          <Card>
            <CardText>
              <CardText as="strong" $large>메뉴잇 허브(MenuIt Hub)</CardText>는 기존 비즈니스에{' '}
              <CardText as="strong" $large style={{ color: '#EB442A' }}>메뉴잇 테이블오더 서비스</CardText>를 결합해
              <CardText as="strong" $strong> 추가 수익을 얻을 수 있도록 설계된 지역 기반 파트너 네트워크</CardText>입니다.
            </CardText>
          </Card>
          
          <FeatureCard>
            <FeatureList>
              <FeatureItem>
                <CheckIcon>✓</CheckIcon>
                <span>기존 사업 + 메뉴잇 = <HighlightText>새로운 매출 라인 확보</HighlightText></span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon>✓</CheckIcon>
                <span>지역 파트너들이 각 지역의 식당·사장님들에게 테이블오더 서비스를 공급</span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon>✓</CheckIcon>
                <span>본사와 함께 성장하는 <HighlightText>지역 협력 구조(허브)</HighlightText></span>
              </FeatureItem>
            </FeatureList>
          </FeatureCard>

          <SuccessCard>
            <SuccessHeader>
              <SuccessEmoji>💡</SuccessEmoji>
              <SuccessTitle>성공 사례</SuccessTitle>
            </SuccessHeader>
            <SuccessText>
              SK 쉴더스는 보안 전문 사업이지만 메뉴잇과 협력하여{' '}
              <HighlightBox>연 200억 규모의 추가 수익</HighlightBox>을 확보하는 테이블오더 무인화 사업을 진행 중.
            </SuccessText>
          </SuccessCard>
        </ContentWrapper>
      </Container>
    </Section>
  )
}
