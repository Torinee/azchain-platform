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

export const Wrapper = styled.div`
  background: #e1ecf4;
  border-radius: 40px;
  padding: 40px;
  margin-top: 60px;

  @media (max-width: 992px) {
    border-radius: 20px;
    padding: 20px 10px;
    margin-top: 30px;
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
      font-size: 38px;
      line-height: 50px;
      max-width: 400px;
    }
    > h1 {
      font-size: 50px;
      font-weight: bold;
      margin: 0;
    }
    > span {
      font-size: 22px;
      font-weight: 500;
    }

    @media (max-width: 992px) {
      padding-top: 50px;
      padding-bottom: 0;
      text-align: center;

      > p {
        font-size: 24px;
        line-height: normal;
      }
      > h1 {
        font-size: 32px;
      }
      > span {
        font-size: 14px;
      }
    }
  `,
  TopRight: styled.div`
    flex: 1;
    background: #e1ecf4;
    border-radius: 0 40px 0 0;

    > img {
      margin-top: 100px;
    }
    > span {
      display: block;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
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

export const Collection = {
  Description: styled.div`
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 24px;
    }
  `,
  Box: styled.div`
    width: 300px;
    background: white;
    border-radius: 20px;
    padding: 15px;

    > h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    > p {
      font-size: 12px;
    }

    @media (max-width: 992px) {
      width: 100%;
    }
  `,
  ImageContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    > img {
      width: 50%;
      object-fit: contain;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;

      > img {
        width: 100%;
      }
    }
  `,
  CoffeeBlockchain: styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 20px;

    .first-div {
      flex: 1;
    }
    .second-div {
      flex: 1;

      > div {
        display: flex;
        align-items: center;
        > div {
          flex: 1;
        }
      }
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 20px;

      .second-div {
        > div {
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  `
}

export const Ecosystem = {
  Container: styled.div`
    background: linear-gradient(to bottom, #241c2a, #2949a6);
    border-radius: 40px;
    padding: 40px;
    margin-top: 60px;

    @media (max-width: 992px) {
      border-radius: 20px;
      padding: 20px 10px;
      margin-top: 30px;
    }
  `,
  Description: styled.div`
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: white;

    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 24px;
    }
  `
}

export const FAQ = {
  Container: styled.div`
    margin-top: 60px;
    background: #e1ecf4;
    border-radius: 40px;
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
        width: 50px;
        height: 50px;
      }
    }
  `
}
