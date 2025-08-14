import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useRouter } from 'next/navigation'

import Container from '@/components/Container'
import {
  AZGPay,
  About,
  Banner,
  Benefit,
  Contract,
  DarkContainer,
  Ecosystem,
  GradientText,
  Partner,
  RoadMap,
  Token
} from './DarkHome.styled'
import Button from '@/components/Button'
import Slider from '@/components/Slider/Index'
import ArrowCircleIcon from '@/images/ArrowCricleIcon'

import { useGlobalContext } from '@/context/GlobalContext'

const DarkHome = () => {
  const { t, isMobile, language } = useGlobalContext()
  const router = useRouter()
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const swiperRef = useRef(null)

  const goToWhitePage = () => {
    router.push('/nft' + language === 'vi' ? '?lang=vi' : '')
  }

  useEffect(() => {
    function setSlidesHeight() {
      if (swiperRef.current) {
        const slides = swiperRef.current.querySelectorAll('.swiper-slide')
        if (slides.length === 0) return
        // Reset height trước khi đo lại
        slides.forEach((slide) => (slide.style.height = 'auto'))
        const maxHeight = Math.max(
          ...Array.from(slides).map((slide) => slide.offsetHeight)
        )
        slides.forEach((slide) => (slide.style.height = `${maxHeight}px`))
      }
    }

    // Gọi lại khi window resize
    window.addEventListener('resize', setSlidesHeight)

    // Gọi sau một khoảng delay nhỏ để đảm bảo DOM và ảnh đã render xong
    const timeout = setTimeout(setSlidesHeight, 300)

    // Nếu có ảnh trong slide, lắng nghe sự kiện load của ảnh
    if (swiperRef.current) {
      const images = swiperRef.current.querySelectorAll('img')
      images.forEach((img) => {
        img.addEventListener('load', setSlidesHeight)
      })
      // Cleanup
      return () => {
        window.removeEventListener('resize', setSlidesHeight)
        clearTimeout(timeout)
        images.forEach((img) => {
          img.removeEventListener('load', setSlidesHeight)
        })
      }
    } else {
      return () => {
        window.removeEventListener('resize', setSlidesHeight)
        clearTimeout(timeout)
      }
    }
  }, [])

  return (
    <DarkContainer>
      {/* Banner section */}
      <Banner.Container>
        <Container>
          <Banner.Left>
            <Banner.Title>{t('AZChain Platform')}</Banner.Title>
            <Banner.SmallTitle>
              {t('Multi Chain - Multi Service - Multi Money')}
            </Banner.SmallTitle>
            <Banner.Description>
              {t(
                'Platform Technology & Payment Blockchain Multi-industry (Super DApp)'
              )}
            </Banner.Description>
            <Banner.ButtonList>
              <Button size='lg' onClick={goToWhitePage}>
                {t('JOIN NOW')}
              </Button>
              <Button
                size='lg'
                $outline='gradient'
                onClick={() =>
                  language === 'en'
                    ? (window.location.href = 'https://docs.en.azchain.app/')
                    : (window.location.href = 'https://docs.vi.azchain.app/')
                }
              >
                {t('WHITEPAPER')}
              </Button>
            </Banner.ButtonList>
          </Banner.Left>

          <Banner.Right>
            <img src='/images/dark_home/banner-1.png' />
          </Banner.Right>
        </Container>

        <img src='/images/dark_home/banner-2.png' />
        <Banner.DeepWrapper />
      </Banner.Container>

      {/* About us section */}
      <Container>
        <About.Container id='about-us'>
          <About.Wraper>
            <About.Top>
              <About.TopLeft>
                <About.SmallTitle>{t('Introduction to')}</About.SmallTitle>
                <GradientText>AZChain Platform</GradientText>
                <p>
                  {t(
                    'Amidst the global shift toward a digital economy, along with the growingtrend of green and sustainable development. AZChain Platform was created to become a specialized Blockchain platform, pioneering in addressing emerging demands.'
                  )}
                </p>
                <p>
                  {t(
                    'AZChain Platform offers secure and transparent Blockchain solutions for managing data and authenticating real-world assets, enabling fast andhighly secure transactions.'
                  )}
                </p>
                <p>
                  {t(
                    'With a focus on meeting diverse needs in Finance, Commerce, and Governance, that also contributes to the advancement of the digital and green economy.'
                  )}
                </p>
              </About.TopLeft>

              <About.TopRight>
                <img src='/images/dark_home/introduction-1.png' />
              </About.TopRight>
            </About.Top>

            <About.Bottom>
              <About.BottomBox>
                <img src='/images/dark_home/about-1.png' />
                <p>{t('Transparency')}</p>
                <span>
                  {t(
                    'Ensure all transactions and data are verifiable and trustworthy.'
                  )}
                </span>
              </About.BottomBox>

              <About.BottomBox>
                <img src='/images/dark_home/about-2.png' />
                <p>{t('Security')}</p>
                <span>
                  {t(
                    'Enhance protection at every level to safeguard user interests.'
                  )}
                </span>
              </About.BottomBox>

              <About.BottomBox>
                <img src='/images/dark_home/about-3.png' />
                <p>{t('Fairness')}</p>
                <span>
                  {t(
                    'Bring blockchain technology closer to everyone, enabling access without complex barriers.'
                  )}
                </span>
              </About.BottomBox>

              <About.BottomBox>
                <img src='/images/dark_home/about-4.png' />
                <p>{t('Efficiency')}</p>
                <span>
                  {t(
                    'Improve operational performance for both businesses and individuals with flexible and cost-effective blockchain solutions.'
                  )}
                </span>
              </About.BottomBox>

              <About.BottomBox>
                <img src='/images/dark_home/about-5.png' />
                <p>{t('Speed')}</p>
                <span>
                  {t(
                    'Fast transaction and data processing for time-saving & improved user experience.'
                  )}
                </span>
              </About.BottomBox>
            </About.Bottom>
          </About.Wraper>
        </About.Container>

        {/* AZG Pay */}
        <AZGPay.Container>
          <AZGPay.Left>
            <img src='/images/dark_home/introduction-2.png' />
          </AZGPay.Left>

          <AZGPay.Right>
            <AZGPay.SmallTitle>
              {t('MORDEN BLOCKCHAIN PAYMENT PLATFORM')}
            </AZGPay.SmallTitle>
            <GradientText>AZGPay - Web3 Wallet</GradientText>
            <AZGPay.Description>
              <div>
                <div /> {t('Supports Cryptocurrency & Fiat')}
              </div>
              <div>
                <div />
                {t('Multi-Chain Digital Asset Management')}
              </div>
              <div>
                <div /> {t('Crypto Visa/Mastercard')}
              </div>
              <div>
                <div /> {t('Staking, NFT, DeFi')}
              </div>
              <div>
                <div /> {t('Secured by Blockchain')}
              </div>
              <div>
                <div /> {t('User-friendly Interface, High Speed')}
              </div>
            </AZGPay.Description>
          </AZGPay.Right>
        </AZGPay.Container>

        {/* Ecosystem */}
        <Ecosystem.Container id='ecosystem'>
          <Ecosystem.Title>
            <GradientText>{t('Ecosystem')}</GradientText>
            <span>11+++ {t('Applications')}</span>
          </Ecosystem.Title>

          <img src='/images/dark_home/ecosystem-1.png' />
        </Ecosystem.Container>

        {/* Benefit */}
        <Benefit.Container>
          {isMobile && <img src='/images/dark_home/introduction-3.png' />}
          <GradientText style={{ textAlign: 'center', display: 'block' }}>
            {t('Key Advantages of the AZChain Platform')}
          </GradientText>
          <Benefit.SmallTitle>
            {t(
              'AZChain Platform unlocks The Multi-Industry Blockchain Ecosystem, delivering real value to customers, investors, and the global community'
            )}
          </Benefit.SmallTitle>

          <Benefit.Row>
            <Benefit.Column>
              <Benefit.Box>
                <span>
                  {t('Multi-Industry Blockchain Platform (Super DApp)')}
                </span>
              </Benefit.Box>
              <Benefit.Box>
                <span>{t('11+++ Money Streams')}</span>
              </Benefit.Box>
              <Benefit.Box>
                <span>{t('Profits for Investors & Platform Developers')}</span>
              </Benefit.Box>
              <Benefit.Box>
                <span>
                  {t(
                    'Franchise Startup on the Global Digital Platform (120 USDT)'
                  )}
                </span>
              </Benefit.Box>
            </Benefit.Column>

            {!isMobile && (
              <Benefit.Column>
                <img src='/images/dark_home/introduction-3.png' />
              </Benefit.Column>
            )}

            <Benefit.Column>
              <Benefit.Box>
                <span>{t('Advancement Opportunity')}</span>
              </Benefit.Box>
              <Benefit.Box>
                <span>
                  {t(
                    '6.000+ Diverse & Unique Products, with 5% to 40% Commissions & Bonuses'
                  )}
                </span>
              </Benefit.Box>
              <Benefit.Box>
                <span>{t('AZC ACADEMY: AI, Blockchain, Web3')}</span>
              </Benefit.Box>
              <Benefit.Box>
                <span>
                  {t(
                    'Mission to Support Blockchain in Underdeveloped Countries'
                  )}
                </span>
              </Benefit.Box>
            </Benefit.Column>
          </Benefit.Row>
        </Benefit.Container>

        {/* Token */}
        <Token.Container id='token'>
          <Token.Left>
            <GradientText>$AZC</GradientText>
            <Token.LeftText>
              <p>
                {t(
                  'The AZChain Platform ecosystem includes various types of tokens serving different purposes within the Blockchain platform and its applications. Below is the main Token:'
                )}
              </p>
              <h1>$AZC (AZChain Platform Token)</h1>
              <p>
                <b>{t('Purpose:')}</b>{' '}
                {t(
                  'The native token of AZChain Platform, used to reduce transaction fees, participate inand utilize DeFi protocols.'
                )}
              </p>
              <p>
                <b>{t('Functions:')}</b>{' '}
                {t(
                  'Covers transaction fees, staking, gas payments, and participation in DeFi and NFT services on the AZChain Platform.'
                )}
              </p>
            </Token.LeftText>
          </Token.Left>

          <Token.Right>
            <img src='/images/dark_home/token-1.png' />
            <Token.RightText>
              {t(
                'Smart Contract is audited by leading global security firms including Cirtik, Cyberscope, Quantstamp, and Salus prior to launch.'
              )}
            </Token.RightText>
            <Token.ListIcon>
              <img src='/images/dark_home/token-logo-1.png' />
              <img src='/images/dark_home/token-logo-2.png' />
              <img src='/images/dark_home/token-logo-3.png' />
              <img src='/images/dark_home/token-logo-4.png' />
            </Token.ListIcon>
          </Token.Right>
        </Token.Container>

        {/* Roadmap */}
        <RoadMap.Container id='roadmap'>
          <RoadMap.Theme src='/images/dark_home/roadmap-theme.png' />

          <RoadMap.Left language={language}>
            {language === 'vi' && (
              <>
                <RoadMap.SmallTitle>Kế hoạch</RoadMap.SmallTitle>
                <GradientText>Phát triển</GradientText>
              </>
            )}
            {language === 'en' && (
              <>
                <RoadMap.SmallTitle>Development</RoadMap.SmallTitle>
                <GradientText>Plan</GradientText>
              </>
            )}
            <RoadMap.ListButton>
              <button ref={prevButtonRef}>
                <ArrowCircleIcon width={40} />
              </button>
              <button ref={nextButtonRef}>
                <ArrowCircleIcon width={40} />
              </button>
            </RoadMap.ListButton>
          </RoadMap.Left>

          <RoadMap.Right>
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              breakpoints={{
                992: {
                  slidesPerView: 2
                },
                1300: {
                  slidesPerView: 3
                }
              }}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current
                swiper.params.navigation.nextEl = nextButtonRef.current
              }}
            >
              <SwiperSlide>
                <RoadMap.SlideItem>
                  <div className='flex items-center justify-between flex-row'>
                    <img src='/images/dark_home/roadmap-arrow.png' />
                    <img src='/images/dark_home/roadmap-tick.png' />
                  </div>
                  <span>2023 - 2024</span>
                  <div className='roadmap-description'>
                    <div>
                      <div /> {t('Team building')}
                    </div>
                    <div>
                      <div /> {t('Ecosystem development')}
                    </div>
                    <div>
                      <div /> {t('Community & Partner engagement')}
                    </div>
                  </div>
                </RoadMap.SlideItem>
              </SwiperSlide>

              <SwiperSlide>
                <RoadMap.SlideItem>
                  <div className='flex items-center justify-between flex-row'>
                    <img src='/images/dark_home/roadmap-arrow.png' />
                    <img src='/images/dark_home/roadmap-tick.png' />
                  </div>
                  <span>2025</span>
                  <div className='roadmap-description'>
                    <div>
                      <div />
                      {t(
                        'Q1–Q3: Develop AZC Pay Web3 Wallet, NFT Ecosystem & AZCARD'
                      )}
                    </div>
                    <div>
                      <div />
                      {t(
                        'Q4: Launch Real World Asset & NFT Marketplace & GameFi'
                      )}
                    </div>
                  </div>
                </RoadMap.SlideItem>
              </SwiperSlide>

              <SwiperSlide>
                <RoadMap.SlideItem>
                  <img src='/images/dark_home/roadmap-arrow.png' />
                  <span>2026</span>
                  <div className='roadmap-description'>
                    <div>
                      <div />
                      {t(
                        'Q1: Public Token Sale, Launch Decentralized E-commerce Platform'
                      )}
                    </div>
                    <div>
                      <div />
                      {t('Q2–Q3: Expand AZC Coffee across Asia')}
                    </div>
                    <div>
                      <div />
                      {t('Q4: Token Listing')}
                    </div>
                  </div>
                </RoadMap.SlideItem>
              </SwiperSlide>

              <SwiperSlide>
                <RoadMap.SlideItem>
                  <img src='/images/dark_home/roadmap-arrow.png' />
                  <span>2027</span>
                  <div className='roadmap-description'>
                    <div>
                      <div />
                      {t(
                        'Expand and develop the ecosystem (AI Insurance Hub, Carbon Exchange, ...)'
                      )}
                    </div>
                  </div>
                </RoadMap.SlideItem>
              </SwiperSlide>

              <SwiperSlide>
                <RoadMap.SlideItem>
                  <img src='/images/dark_home/roadmap-arrow.png' />
                  <span>2028</span>
                  <div className='roadmap-description'>
                    <div>
                      <div />
                      {t('Full-scale development and expansion')}
                    </div>
                    <div>
                      <div />
                      {t('IPO in Vietnam and Singapore')}
                    </div>
                  </div>
                </RoadMap.SlideItem>
              </SwiperSlide>
            </Swiper>
          </RoadMap.Right>
        </RoadMap.Container>

        {/* Partner */}
        <Partner.Container>
          <GradientText>{t('Partners')}</GradientText>

          {isMobile && (
            <Slider
              slidesPerView={2}
              breakpoints={{
                500: {
                  slidesPerView: 3
                }
              }}
              spaceBetween={20}
              style={{ marginTop: 20, paddingBottom: 40 }}
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <Partner.SlideItem>
                    <img src={`/images/dark_home/partner-${index + 1}.png`} />
                  </Partner.SlideItem>
                </SwiperSlide>
              ))}
            </Slider>
          )}
          {!isMobile && (
            <Partner.List>
              {[...Array(9)].map((_, index) => (
                <Partner.Item key={index}>
                  <img src={`/images/dark_home/partner-${index + 1}.png`} />
                </Partner.Item>
              ))}
            </Partner.List>
          )}
        </Partner.Container>

        {/* Contract */}
        <Contract.Container id='contract'>
          <GradientText>AZChain Platform</GradientText>
          <Contract.SmallTitle>
            Multi Chain - Multi Service - Multi Money
          </Contract.SmallTitle>

          <Contract.Banner>
            <Contract.Theme>
              <img src='/images/dark_home/contract-1.png' />
            </Contract.Theme>
            <img src='/images/dark_home/contract-2.png' />
            <Button size='lg' onClick={goToWhitePage}>
              {t('JOIN NOW')}
            </Button>
          </Contract.Banner>
        </Contract.Container>
      </Container>
    </DarkContainer>
  )
}

export default DarkHome
