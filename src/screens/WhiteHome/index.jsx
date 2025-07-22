import React, { useRef } from 'react'
import { Navigation } from 'swiper/modules'

import {
  Banner,
  Collection,
  Ecosystem,
  FAQ,
  Responsive,
  Wrapper
} from './WhiteHome.styled'
import Container from '@/components/Container'
import Button from '@/components/Button'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'

import { useGlobalContext } from '@/context/GlobalContext'
import { GradientText } from '../DarkHome/DarkHome.styled'

const WhiteHome = () => {
  const { t, isMobile } = useGlobalContext()

  const getImage = (imageName) => `./images/white_home/${imageName}.png`

  const goToAzchain = () => (window.location.href = 'https://nft.azchain.app/')

  return (
    <Container>
      <Responsive>
        {!isMobile ? (
          <Banner.Container>
            <Banner.Top>
              <Banner.TopLeft>
                <p>{t('Join the Blockchain Revolution with')}</p>
                <h1>{t('AZChain PLatform')}</h1>
                <span>{t('Multi Chain - Multi Service - Multi Money')}</span>
              </Banner.TopLeft>

              <Banner.TopRight>
                <img src={getImage('banner-3')} />
                <span>Passport To Web3</span>
              </Banner.TopRight>
            </Banner.Top>

            <Banner.Bottom>
              <img src={getImage('banner-2')} className='theme-bottom-2' />
              <Button
                size='lg'
                $outline='white'
                className='theme-button'
                onClick={goToAzchain}
              >
                {t('JOIN NOW')}
              </Button>
            </Banner.Bottom>
          </Banner.Container>
        ) : (
          <Banner.Container>
            <Banner.TopLeft>
              <p>{t('Join the Blockchain Revolution with')}</p>
              <h1>{t('AZChain PLatform')}</h1>
              <span>{t('Multi Chain - Multi Service - Multi Money')}</span>
            </Banner.TopLeft>

            <Banner.Bottom>
              <img src={getImage('banner-2')} className='theme-bottom-2' />
              <Button
                size='lg'
                $outline='white'
                className='theme-button'
                onClick={goToAzchain}
              >
                {t('JOIN NOW')}
              </Button>
            </Banner.Bottom>

            <Banner.TopRight>
              <img src={getImage('banner-3')} />
              <span>Passport To Web3</span>
            </Banner.TopRight>
          </Banner.Container>
        )}

        <Wrapper id='collection'>
          <GradientText style={{ display: 'block', textAlign: 'center' }}>
            {t('AZChain Platform Collection')}
          </GradientText>

          <Collection.Description>
            {t('Discover AZChain Platform with ease.')}
            <br />
            {t(
              'The gateway to innovation, sustainable investment, and immersive Web3 experiences.'
            )}
          </Collection.Description>

          {!isMobile && (
            <div className='relative py-10 flex justify-center items-center'>
              <div className='absolute w-full top-0 left-0 flex justify-between'>
                <Collection.Box>
                  <h3>AZCARD</h3>
                  <p>
                    {t(
                      'AZCARD - Your gateway to Digital Asset ownership, fully integrated with AZGPAY for a complete Web3 experience.'
                    )}
                  </p>
                </Collection.Box>
                <Collection.Box>
                  <h3>{t('ShareHolder NFTs')}</h3>
                  <p>
                    {t(
                      'Ownership, Investment, and Long-term Partnership with AZChain Platform.'
                    )}
                  </p>
                </Collection.Box>
              </div>
              <img src={getImage('collection-1')} />
              <div className='absolute w-full bottom-0 left-0 flex justify-between'>
                <Collection.Box>
                  <h3>AZC Coffee Blockchain</h3>
                  <p>
                    {t(
                      'Web3 Payment Gateway & Global Coffee NFTs Investment Hub.'
                    )}
                  </p>
                </Collection.Box>
                <Collection.Box>
                  <h3>11+++ {t('Applications')}</h3>
                  <p>
                    {t(
                      'AZChain Platform unlocks The Multi-Industry Blockchain Ecosystem, delivering real value to customers, investors, and the global community'
                    )}
                  </p>
                </Collection.Box>
              </div>
            </div>
          )}

          {isMobile && (
            <div className='flex flex-col gap-3'>
              <Collection.Box>
                <h3>AZCARD</h3>
                <p>
                  {t(
                    'AZCARD - Your gateway to Digital Asset ownership, fully integrated with AZGPAY for a complete Web3 experience.'
                  )}
                </p>
              </Collection.Box>
              <Collection.Box>
                <h3>{t('ShareHolder NFTs')}</h3>
                <p>
                  {t(
                    'Ownership, Investment, and Long-term Partnership with AZChain Platform.'
                  )}
                </p>
              </Collection.Box>
              <img src={getImage('collection-1')} />
              <Collection.Box>
                <h3>AZC Coffee Blockchain</h3>
                <p>
                  {t(
                    'Web3 Payment Gateway & Global Coffee NFTs Investment Hub.'
                  )}
                </p>
              </Collection.Box>
              <Collection.Box>
                <h3>11+++ {t('Applications')}</h3>
                <p>
                  {t(
                    'AZChain Platform unlocks The Multi-Industry Blockchain Ecosystem, delivering real value to customers, investors, and the global community'
                  )}
                </p>
              </Collection.Box>
            </div>
          )}
        </Wrapper>

        <Wrapper>
          <GradientText style={{ display: 'block', textAlign: 'center' }}>
            {t('AZCARD - Digital Asset Card')}
          </GradientText>

          <Collection.Description className='mb-0!'>
            {t(
              'AZCARD aims to become the standard Digital Asset Card for individuals and businesses in the Web3 era - empowering users to own Digital Assets and invest globally.'
            )}
          </Collection.Description>

          <Collection.ImageContainer>
            <img src={getImage('digital-card-1')} />
            <img src={getImage('digital-card-2')} />
          </Collection.ImageContainer>
        </Wrapper>

        <Wrapper id='sharedholder'>
          <GradientText style={{ display: 'block', textAlign: 'center' }}>
            {t('ShareHolder NFTs')}
          </GradientText>

          <Collection.Description>
            {t('Ownership and Grow alongside the AZChain Platform.')}
            <br />
            {t(
              'Unlock sustainable investment opportunities within the Web3 Ecosystem.'
            )}
          </Collection.Description>

          <Collection.ImageContainer>
            <img src={getImage('shareholder-1')} />
            <img src={getImage('shareholder-2')} />
          </Collection.ImageContainer>
        </Wrapper>

        <Wrapper>
          <GradientText style={{ display: 'block', textAlign: 'center' }}>
            {t('AZC Coffee Blockchain')}
          </GradientText>

          <Collection.Description>
            {t(
              'AZGPAY Payment applies Blockchain Technology to the coffee industry.'
            )}
            <br />
            {t(
              'Combining Global NFTs Coffee investment with transparency and innovation.'
            )}
          </Collection.Description>

          <Collection.CoffeeBlockchain>
            <div className='first-div'>
              <img src={getImage('coffee-1')} />
            </div>
            <div className='second-div'>
              <img src={getImage('coffee-2')} />
              <div>
                <div>
                  <img src={getImage('coffee-3')} />
                </div>
                <div className='text-center px-4! text-xl'>
                  <span className='text-4xl'>6000+</span>
                  <br />
                  {t('E-commerce Products')}
                </div>
              </div>
            </div>
          </Collection.CoffeeBlockchain>
        </Wrapper>

        <Ecosystem.Container id='ecosystem'>
          <GradientText style={{ display: 'block', textAlign: 'center' }}>
            {t('Ecosystem')}
          </GradientText>

          <Ecosystem.Description>
            {t(
              'AZChain Platform unlocks The Multi-Industry Blockchain Ecosystem, delivering real value to customers, investors, and the global community'
            )}
          </Ecosystem.Description>

          <img src={getImage('ecosystem-1')} />
        </Ecosystem.Container>

        <FAQ.Container id='faq'>
          <img src={getImage('question-1')} />
          <FAQ.SocialList>
            <div>
              <TwitterIcon color='#171717' />
            </div>
            <div>
              <YoutubeIcon color='#171717' />
            </div>
          </FAQ.SocialList>
        </FAQ.Container>
      </Responsive>
    </Container>
  )
}

export default WhiteHome
