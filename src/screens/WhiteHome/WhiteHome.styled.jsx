import Button from '@/components/Button'
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Responsive = styled.div`
    color: #3e3a46;
`

export const Title = styled.div`
    font-size: 48px;
    line-height: 53px;
    font-weight: 800;
    text-align: center;
    margin: auto;
    text-transform: uppercase;

    > div {
        width: 70px;
        height: 10px;
        background: #1264ff;
        border-radius: 5px;
        margin: 10px auto;
    }

    @media (max-width: 992px) {
        font-size: 36px;
        line-height: 38px;
    }
`

export const Banner = {
    Container: styled.div``,
    Top: styled.div`
        display: flex;
    `,
    TopLeft: styled.div`
        flex: 1;
        padding-top: 150px;
        padding-bottom: 50px;

        > p {
            font-size: 48px;
            font-weight: 800;
            line-height: 50px;
        }
        > h1 {
            font-size: 96px;
            font-weight: 800;
            margin: 0;
        }
        > span {
            font-size: 32px;
        }

        @media (max-width: 992px) {
            padding-top: 50px;
            padding-bottom: 0;
            text-align: center;

            > p {
                font-size: 32px;
                line-height: 34px;
            }
            > h1 {
                font-size: 64px;
            }
            > span {
                font-size: 24px;
            }
        }
    `,
    TopRight: styled.div`
        flex: 1;
        background: #e1ecf4;
        border-radius: 0 40px 0 0;

        > div {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            font-size: 24px;
            font-weight: 700;
            margin-top: 300px;

            > img {
                position: absolute;
                left: 50%;
                bottom: -50px;
                transform: translateX(-50%);
                width: 300px;
            }
        }

        @media (max-width: 992px) {
            background: none;

            > div {
                margin-top: 250px;
            }
        }
    `,
    Bottom: styled.div`
        height: 300px;
        background: #e1ecf4;
        border-radius: 40px 0 40px 40px;
        position: relative;

        .theme-bottom-1 {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 80%;
        }
        .theme-bottom-2 {
            position: absolute;
            left: 50%;
            bottom: -60px;
            transform: translateX(-50%);
            width: 50%;
        }
        .theme-button {
            position: absolute;
            left: 50%;
            bottom: -35px;
            transform: translateX(-50%);
        }

        @media (max-width: 992px) {
            height: auto;
            aspect-ratio: 344 / 154;
            border-radius: 20px;
            margin-top: 40%;

            .theme-bottom-1 {
                width: 90%;
                top: 20%;
            }
            .theme-bottom-2 {
                width: 100%;
            }
        }
    `
}

export const FAQ = {
    Container: styled.div`
        margin-top: 150px;
        margin-bottom: 100px;
        background: #e1ecf4;
        border-radius: 50px;
        padding: 80px 60px;

        > img {
            width: 100%;
            margin-top: 40px;
        }

        @media (max-width: 992px) {
            width: calc(100% + 32px);
            margin-top: 80px;
            margin-left: -16px;
            margin-bottom: 40px;
            border-radius: 0;
            padding: 40px 16px;

            > img {
                margin-top: 30px;
            }
        }
    `,
    SocialList: styled.div`
        margin-top: 60px;
        display: flex;
        justify-content: center;
        gap: 60px;

        svg {
            width: 100px;
            height: 100px;
        }

        @media (max-width: 992px) {
            margin-top: 20px;

            svg {
                width: 32px;
                height: 32px;
            }
        }
    `
}
