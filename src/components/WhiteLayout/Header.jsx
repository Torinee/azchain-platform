import React from 'react'
import { Header } from './WhiteLayout.styled'
import Container from '../Container'
import { useGlobalContext } from '@/context/GlobalContext'
import Button from '../Button'
import LanguageIcon from '@/images/LanguageIcon'
import { useRouter } from 'next/router'

const HeaderContainer = () => {
    const { t, isMobile, language } = useGlobalContext()

    const router = useRouter()

    const scrollToElement = (id) => {
        const element = document.getElementById(id)
        const offset = 100
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        })
    }

    const handleChangeLanguage = () => {
        let pathname = router.asPath
        if (language === 'vi') {
            pathname = pathname.replace(/\?lang=vi/g, '')
        } else {
            pathname = pathname + '?lang=vi'
        }
        router.push(pathname)
    }

    return (
        <Header.Container>
            <Container>
                <Header.Logo>
                    <img
                        src={
                            isMobile
                                ? '/images/icon.png'
                                : '/images/logo-dark.png'
                        }
                    />
                </Header.Logo>

                <Header.Right>
                    <Header.Center>
                        <Header.CenterItem
                            onClick={() => scrollToElement('about-us')}
                        >
                            {t('About us')}
                        </Header.CenterItem>
                        <Header.CenterItem
                            onClick={() => scrollToElement('roadmap')}
                        >
                            {t('Roadmap')}
                        </Header.CenterItem>
                        <Header.CenterItem
                            onClick={() => scrollToElement('collection')}
                        >
                            {t('Collection')}
                        </Header.CenterItem>
                        <Header.CenterItem
                            onClick={() => scrollToElement('faq')}
                        >
                            FAQ
                        </Header.CenterItem>
                    </Header.Center>

                    <Button
                        onClick={() =>
                            (window.location.href = 'https://nft.azchain.app/')
                        }
                    >
                        {t('JOIN NOW')}
                    </Button>

                    <Header.Language onClick={handleChangeLanguage}>
                        <LanguageIcon color='#171717' />
                        {language}
                    </Header.Language>
                </Header.Right>
            </Container>
        </Header.Container>
    )
}

export default HeaderContainer
