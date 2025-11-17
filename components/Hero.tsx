'use client'

import Link from 'next/link'
import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  min-height: 90vh;
  padding-top: 6rem;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom right, ${props => props.theme.colors.gray[200]}, white, ${props => props.theme.colors.gray[200]});

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

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.05;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
`

const FloatCircle1 = styled.div`
  position: absolute;
  top: 5rem;
  left: 2.5rem;
  width: 18rem;
  height: 18rem;
  background: ${props => props.theme.colors.brand}1A;
  border-radius: 50%;
  filter: blur(3rem);
  animation: float 6s ease-in-out infinite;
`

const FloatCircle2 = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 2.5rem;
  width: 24rem;
  height: 24rem;
  background: ${props => props.theme.colors.point}1A;
  border-radius: 50%;
  filter: blur(3rem);
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  z-index: 20;
  animation: slide-in-up 0.6s ease-out;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`

const LeftContent = styled.div`
  flex: 1;
  width: 100%;
`

const HeaderCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.gray[200]};
  margin-bottom: 1.5rem;

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, ${props => props.theme.colors.brand}, ${props => props.theme.colors.point});
  color: white;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`

const TitleGradient = styled.span`
  background: linear-gradient(to right, ${props => props.theme.colors.gray[900]}, ${props => props.theme.colors.brand}, ${props => props.theme.colors.gray[900]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Description = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray[700]};
  margin-bottom: 2rem;
  line-height: 1.75;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(to right, ${props => props.theme.colors.brand}, #FF6B4A, ${props => props.theme.colors.brand});
  color: white;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    text-decoration: none;
  }

  & > span:last-child {
    position: relative;
    z-index: 10;
    transition: transform 0.3s;
  }

  &:hover > span:last-child {
    transform: translateX(0.25rem);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, ${props => props.theme.colors.point}, ${props => props.theme.colors.brand});
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FeatureCard = styled.div<{ gradient: string }>`
  background: ${props => {
    if (props.gradient.includes('blue')) {
      return `linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), ${props.theme.colors.brand}1A)`;
    } else if (props.gradient.includes('green')) {
      return `linear-gradient(to bottom right, rgba(34, 197, 94, 0.1), ${props.theme.colors.brand}1A)`;
    } else {
      return `linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), ${props.theme.colors.brand}1A)`;
    }
  }};
  border-radius: 1rem;
  padding: 1.5rem;
  border: 2px solid ${props => props.theme.colors.gray[200]};
  transition: all 0.3s;

  &:hover {
    border-color: ${props => props.theme.colors.brand}4D;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`

const FeatureIcon = styled.div`
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
`

const FeatureTitle = styled.h3`
  font-weight: 700;
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: 0.5rem;
`

const FeatureDesc = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray[600]};
`

const TabletWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    width: auto;
  }
`

const TabletContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  z-index: 20;
  animation: slide-in-up 0.6s ease-out;
`

const Tablet = styled.div`
  position: relative;
  background: white;
  border-radius: 2.5rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 4px solid ${props => props.theme.colors.gray[300]};
  width: 100%;
`

const Camera = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.75rem;
  height: 0.75rem;
  background: ${props => props.theme.colors.gray[800]};
  border-radius: 50%;
  z-index: 20;
`

const Screen = styled.div`
  background: ${props => props.theme.colors.gray[900]};
  border-radius: 1.5rem;
  overflow: hidden;
`

const ScreenHeader = styled.div`
  background: linear-gradient(to right, ${props => props.theme.colors.brand}, #FF6B4A);
  padding: 0.75rem;
  color: white;
`

const ScreenHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ScreenHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ScreenHeaderDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 50%;
`

const ScreenHeaderText = styled.span`
  font-weight: 700;
`

const ScreenHeaderRight = styled.div`
  font-size: 0.75rem;
`

const CategoryTabs = styled.div`
  background: ${props => props.theme.colors.gray[800]};
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.75rem;
  white-space: nowrap;
  transition: all 0.2s;
  background: ${props => props.active ? props.theme.colors.brand : props.theme.colors.gray[700]};
  color: ${props => props.active ? 'white' : props.theme.colors.gray[300]};

  &:hover {
    background: ${props => props.active ? props.theme.colors.brand : props.theme.colors.gray[600]};
  }
`

const MenuItems = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 350px;
  overflow-y: auto;
  background: ${props => props.theme.colors.gray[900]};
`

const MenuItem = styled.div`
  background: ${props => props.theme.colors.gray[800]};
  border-radius: 0.75rem;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.gray[700]};
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.brand}80;
  }
`

const MenuItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const MenuItemContent = styled.div`
  flex: 1;
`

const MenuItemTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`

const MenuItemTitle = styled.h4`
  font-weight: 700;
  color: white;
  font-size: 0.875rem;
`

const MenuItemBadge = styled.span`
  padding: 0.125rem 0.5rem;
  background: ${props => props.theme.colors.brand};
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.25rem;
`

const MenuItemDesc = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray[400]};
`

const MenuItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`

const MenuItemPrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.brand};
`

const OrderButton = styled.button`
  padding: 0.375rem 0.75rem;
  background: ${props => props.theme.colors.brand};
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.75rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.brand}E6;
  }
`

const OrderSummary = styled.div`
  border-top: 1px solid ${props => props.theme.colors.gray[700]};
  padding: 0.75rem;
  background: ${props => props.theme.colors.gray[800]};
`

const OrderSummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const OrderSummaryLabel = styled.span`
  color: ${props => props.theme.colors.gray[300]};
  font-weight: 600;
  font-size: 0.875rem;
`

const OrderSummaryPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.colors.brand};
`

const OrderSubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, ${props => props.theme.colors.brand}, #FF6B4A);
  color: white;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`

const TabletLogo = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`

const TabletLogoDots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  opacity: 0.4;
`

const TabletLogoDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: ${props => props.theme.colors.gray[400]};
  border-radius: 50%;
`

const Reflection = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  height: 2rem;
  background: linear-gradient(to top, ${props => props.theme.colors.gray[400]}33, transparent);
  filter: blur(1rem);
  border-radius: 9999px;
`

const Dots = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

const Dot = styled.div<{ delay?: number }>`
  width: 0.5rem;
  height: 0.5rem;
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
`

export default function Hero() {
  const features = [
    {
      icon: '💻',
      title: '테이블 오더',
      description: '간편한 주문 시스템',
      gradient: 'from-blue-500/20 to-brand/20',
    },
    {
      icon: '📱',
      title: '매장 IoT',
      description: '스마트 매장 관리',
      gradient: 'from-green-500/20 to-brand/20',
    },
    {
      icon: '⚡',
      title: '운영 효율화',
      description: '자동화된 프로세스',
      gradient: 'from-purple-500/20 to-brand/20',
    },
  ]

  const menuItems = [
    { name: '연어 샐러드', price: '₩16,000', badge: 'BEST' },
    { name: '부채살 스테이크', price: '₩12,000', badge: null },
    { name: '프렌치 토스트', price: '₩8,000', badge: null },
  ]

  return (
    <Section>
      <GridPattern />
      <FloatCircle1 />
      <FloatCircle2 />
      
      <Container>
        <ContentWrapper>
          <LeftContent>
            <HeaderCard>
              <Badge>🚀 새로운 비즈니스 기회</Badge>
              
              <Title>
                <TitleGradient>메뉴잇 허브에 연결하세요</TitleGradient>
              </Title>
              
              <Description>
                메뉴잇 허브는 각 지역의 전문가들이 함께 만드는 협력 네트워크입니다.
                허브에 연결해 새로운 비즈니스 기회를 확보하세요.
              </Description>
              
              <CTAButton href="/signup">
                <span>허브에 연결하세요</span>
                <span>→</span>
              </CTAButton>
            </HeaderCard>

            <FeaturesGrid>
              {features.map((feature, index) => (
                <FeatureCard key={index} gradient={feature.gradient}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDesc>{feature.description}</FeatureDesc>
                </FeatureCard>
              ))}
            </FeaturesGrid>
          </LeftContent>
          
          <TabletWrapper>
            <TabletContainer>
              <Tablet>
                <Camera />
                
                <Screen>
                  <ScreenHeader>
                    <ScreenHeaderContent>
                      <ScreenHeaderLeft>
                        <ScreenHeaderDot />
                        <ScreenHeaderText>메뉴잇</ScreenHeaderText>
                      </ScreenHeaderLeft>
                      <ScreenHeaderRight>테이블 #01</ScreenHeaderRight>
                    </ScreenHeaderContent>
                  </ScreenHeader>

                  <CategoryTabs>
                    {['BEST', '메뉴', '음료'].map((cat, i) => (
                      <CategoryButton key={i} active={i === 0}>
                        {cat}
                      </CategoryButton>
                    ))}
                  </CategoryTabs>

                  <MenuItems>
                    {menuItems.map((item, i) => (
                      <MenuItem key={i}>
                        <MenuItemHeader>
                          <MenuItemContent>
                            <MenuItemTitleRow>
                              <MenuItemTitle>{item.name}</MenuItemTitle>
                              {item.badge && <MenuItemBadge>{item.badge}</MenuItemBadge>}
                            </MenuItemTitleRow>
                            <MenuItemDesc>신선한 재료로 만든 특별한 메뉴</MenuItemDesc>
                          </MenuItemContent>
                        </MenuItemHeader>
                        <MenuItemFooter>
                          <MenuItemPrice>{item.price}</MenuItemPrice>
                          <OrderButton>주문</OrderButton>
                        </MenuItemFooter>
                      </MenuItem>
                    ))}
                  </MenuItems>

                  <OrderSummary>
                    <OrderSummaryRow>
                      <OrderSummaryLabel>총 주문 금액</OrderSummaryLabel>
                      <OrderSummaryPrice>₩0</OrderSummaryPrice>
                    </OrderSummaryRow>
                    <OrderSubmitButton>주문하기</OrderSubmitButton>
                  </OrderSummary>
                </Screen>

                <TabletLogo>
                  <TabletLogoDots>
                    <TabletLogoDot />
                    <TabletLogoDot />
                    <TabletLogoDot />
                  </TabletLogoDots>
                </TabletLogo>
              </Tablet>

              <Reflection />
            </TabletContainer>
          </TabletWrapper>
        </ContentWrapper>
        
        <Dots>
          <Dot />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </Dots>
      </Container>
    </Section>
  )
}
