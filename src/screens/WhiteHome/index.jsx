import React, { useRef } from 'react'
import { Navigation } from 'swiper/modules'

import {
    About,
    Banner,
    Collection,
    FAQ,
    Introduction,
    Responsive,
    Roadmap,
    Title
} from './WhiteHome.styled'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Question from './Question'
import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import WhiteArrow from '@/images/WhiteArrow'

import { useGlobalContext } from '@/context/GlobalContext'

const WhiteHome = () => {
    const { t, isMobile } = useGlobalContext()
    const prevButtonRef = useRef(null)
    const nextButtonRef = useRef(null)

    const getImage = (imageName) => `./images/white_home/${imageName}.png`

    const goToAzchain = () =>
        (window.location.href = 'https://nft.azchain.app/')

    return (
        <Container>
            <Responsive>
                {!isMobile ? (
                    <Banner.Container>
                        <Banner.Top>
                            <Banner.TopLeft>
                                <p>{t('Join the revolution with')}</p>
                                <h1>{t('AZChain')}</h1>
                                <span>{t('Multi Chain - Multi Services')}</span>
                            </Banner.TopLeft>

                            <Banner.TopRight>
                                <div>
                                    <img src={getImage('banner-3')} />
                                    <span>{t('Shareholders NFT')}</span>
                                </div>
                            </Banner.TopRight>
                        </Banner.Top>

                        <Banner.Bottom>
                            <img
                                src={getImage('banner-2')}
                                className='theme-bottom-2'
                            />
                            <Button
                                size='lg'
                                outline='white'
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
                            <p>{t('Join the revolution with')}</p>
                            <h1>{t('AZChain')}</h1>
                            <span>{t('Multi Chain - Multi Services')}</span>
                        </Banner.TopLeft>

                        <Banner.Bottom>
                            <img
                                src={getImage('banner-2')}
                                className='theme-bottom-2'
                            />
                            <Button
                                size='lg'
                                outline='white'
                                className='theme-button'
                                onClick={goToAzchain}
                            >
                                {t('JOIN NOW')}
                            </Button>
                        </Banner.Bottom>

                        <Banner.TopRight>
                            <div>
                                <img src={getImage('banner-3')} />
                                <span>{t('Shareholders NFT')}</span>
                            </div>
                        </Banner.TopRight>
                    </Banner.Container>
                )}

                <FAQ.Container id='faq'>
                    <img src={getImage('question-2')} />
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
