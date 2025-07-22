import { styled } from 'styled-components'

export const GradientText = styled.div`
    background: linear-gradient(to right, #eb6168, #fcbf0d);
    -webkit-background-clip: text; /* For WebKit browsers */
    -webkit-text-fill-color: transparent; /* Makes the text transparent to show the gradient */
    display: inline;

    font-size: 43px;
    font-weight: 800;
`

export const Banner = {
    Container: styled.div`
        position: relative;

        > div:first-child {
            display: flex;
            position: relative;
            z-index: 3;
        }
        > img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
        }
    `,
    DeepWrapper: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000ab;
    `,
    Left: styled.div`
        flex: 1;
        margin-top: 300px;
        margin-bottom: 150px;
    `,
    Title: styled.div`
        color: #fcbf0d;
        font-size: 60px;
        font-weight: 800;
        line-height: 90px;
    `,
    SmallTitle: styled.div`
        font-size: 30px;
        font-weight: 700;
    `,
    Description: styled.div`
        font-size: 20px;
        font-weight: 600;
        margin-top: 20px;
    `,
    ButtonList: styled.div`
        display: flex;
        gap: 24px;
        margin-top: 30px;
        flex-wrap: wrap;
    `,
    Right: styled.div`
        width: 500px;
        position: relative;

        > img {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: -100px;
            transform: scale(1.3);

            @media screen and (max-width: 992px) {
                transform: scale(1);
            }
        }
    `
}

export const About = {
    Container: styled.div`
        position: relative;
        z-index: 3;
        width: 100%;
        position: relative;
        display: inline-block;
        padding: 30px;
        background: linear-gradient(to bottom, #191919, #131321);
        border-radius: 50px;
        margin-top: -60px;
    `,
    Wraper: styled.div`
        background: linear-gradient(to bottom, #2d2e36, #131321);
        padding: 40px;
        border-radius: 40px;
    `,
    Top: styled.div`
        display: flex;
        gap: 30px;
        align-items: center;
        padding: 0 20px 20px 40px;
        border-bottom: 1px dashed gray;
    `,
    TopLeft: styled.div`
        flex: 3;

        p {
            margin-top: 20px;
            font-size: 16px;
        }
    `,
    TopRight: styled.div`
        flex: 2;

        > img {
            width: 100%;
            margin: auto;
        }
    `,
    SmallTitle: styled.div`
        font-size: 32px;
        font-weight: 700;
    `,
    Bottom: styled.div`
        margin-top: 40px;
        display: flex;
        gap: 30px;
    `,
    BottomBox: styled.div`
        flex: 1;
        padding: 24px;
        border-radius: 20px;
        background: linear-gradient(to bottom, #241c2a, #2949a6);
        margin-top: 80px;
        position: relative;

        > img {
            position: absolute;
            top: -90px;
            left: 50%;
            transform: translateX(-50%);
        }
        > p {
            font-size: 24px;
            margin: 0 0 10px 0;
            font-weight: 700;
        }
        > span {
            font-size: 14px;
        }

        @media screen and (max-width: 992px) {
            text-align: center;
            margin-top: 0;

            > img {
                position: static;
                left: none;
                bottom: none;
                transform: none;
                margin: auto;
                margin-bottom: 10px;
            }
        }
    `
}

export const AZGPay = {
    Container: styled.div`
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 50px;
    `,
    Left: styled.div`
        flex: 4;

        > img {
            width: 100%;
        }
    `,
    Right: styled.div`
        flex: 3;
    `,
    SmallTitle: styled.div`
        font-size: 20px;
        font-weight: 500;
    `,
    Description: styled.div`
        font-size: 22px;
        margin-top: 15px;

        display: flex;
        flex-direction: column;
        gap: 10px;

        > div {
            display: flex;
            align-items: center;
            gap: 10px;

            > div {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: linear-gradient(to top, #2b5ee2, #18347c);
            }
        }
    `
}

export const Ecosystem = {
    Container: styled.div`
        margin-top: 120px;

        > img {
            width: 100%;
            margin-top: -140px;
        }
    `,
    Title: styled.div`
        font-size: 45px;
        font-weight: bold;
        text-align: center;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    `
}

export const Benefit = {
    Container: styled.div`
        margin-top: 120px;
    `,
    SmallTitle: styled.div`
        font-size: 28px;
        text-align: center;
        width: 60%;
        margin: auto;
        padding-top: 20px;
    `,
    Description: styled.div`
        font-size: 20px;
    `,
    Row: styled.div`
        margin-top: 70px;
        display: flex;
        align-items: center;
        gap: 20px;
    `,
    Column: styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,
    Box: styled.div`
        padding: 16px;
        border-radius: 20px;
        background: linear-gradient(to bottom, #1264ff, #2949a6);
        font-size: 18px;
    `
}

export const Token = {
    Container: styled.div`
        display: flex;
        gap: 50px;
        margin-top: 140px;
    `,
    Left: styled.div`
        flex: 1;
    `,
    LeftText: styled.div`
        font-size: 18px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;

        > h1 {
            font-size: 28px;
            font-weight: bold;
        }
    `,
    Right: styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 30px;

        > img {
            width: 80%;
            margin: auto;
        }
    `,
    RightText: styled.div`
        font-size: 16px;
        font-weight: 500;
    `,
    ListIcon: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    `
}

export const RoadMap = {
    Container: styled.div`
        margin-top: 120px;
        display: flex;
        gap: 20px;
        position: relative;
    `,
    Theme: styled.img`
        position: absolute;
        top: 90px;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,
    Left: styled.div`
        width: ${({ language }) => (language === 'vi' ? '350px' : '450px')};
        position: relative;
        z-index: 1;
    `,
    SmallTitle: styled.div`
        font-size: 24px;
        font-weight: 700;
    `,
    ListButton: styled.div`
        display: flex;
        gap: 20px;
        margin-top: 20px;

        > button {
            cursor: pointer;
        }
        > button:first-child {
            > svg {
                transform: rotate(180deg);
            }
        }
    `,
    Right: styled.div`
        width: ${({ language }) =>
            language === 'vi'
                ? 'calc(100% - 300px - 31px)'
                : 'calc(100% - 450px - 31px)'};
        position: relative;
        z-index: 1;
    `,
    SlideItem: styled.div`
        background: linear-gradient(to bottom, #242424, #131321);
        padding: 20px;
        border-radius: 20px;
        border: 1px solid #0094ff;
        height: 100%;

        > span {
            display: block;
            font-size: 36px;
            font-weight: 700;
        }

        .roadmap-description {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 10px;

            > div {
                display: flex;
                gap: 8px;
                font-size: 14px;

                > div {
                    flex: 0 0 6px;
                    height: 6px;
                    background: white;
                    border-radius: 6px;
                    margin-top: 6px;
                }
            }
        }
    `
}

export const Partner = {
    Container: styled.div`
        margin-top: 150px;
        text-align: center;
    `,
    List: styled.div`
        margin-top: 50px;
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    `,
    Item: styled.div`
        width: 245px;
        height: 111px;
        border-radius: 20px;
        background: #1c1c2a;
        padding: 30px;

        > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `,
    SlideItem: styled.div`
        border-radius: 20px;
        background: #1c1c2a;
        width: 100%;
        height: 100%;
        padding: 20px;

        > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `
}

export const Contract = {
    Container: styled.div`
        margin-top: 150px;
        text-align: center;
    `,
    SmallTitle: styled.div`
        font-size: 24px;
        font-weight: 700;
        margin-top: 10px;
    `,
    Banner: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        > img {
            width: 100%;
            margin-bottom: 40px;
            position: relative;
            z-index: 2;
        }
        > button {
            position: relative;
            z-index: 2;
        }
    `,
    Theme: styled.div`
        position: absolute;
        width: calc(100vw - 20px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;

        > img {
            width: 100%;
            object-fit: cover;
        }
    `
}

export const DarkContainer = styled.div`
    background: #131321;
    color: white;
    padding-bottom: 100px;

    @media (max-width: 992px) {
        ${GradientText} {
            font-size: 26px;
        }

        ${Banner.Container} {
            > div:first-child {
                flex-direction: column;
            }
        }
        ${Banner.Left} {
            margin-top: 0;
            margin-bottom: 0;
        }
        ${Banner.Title} {
            font-size: 64px;
            margin-top: 30px;
        }
        ${Banner.SmallTitle} {
            font-size: 30px;
        }
        ${Banner.Description} {
            font-size: 16px;
        }
        ${Banner.Right} {
            width: 100%;

            > img {
                position: static;
                left: none;
                bottom: none;
                margin-bottom: -50px;
            }
        }

        ${About.Container} {
            padding: 16px;
            border-radius: 20px;
        }
        ${About.Wraper} {
            padding: 16px;
            border-radius: 20px;
        }
        ${About.Top} {
            flex-direction: column;
            padding: 0 0 20px 0;
        }
        ${About.SmallTitle} {
            font-size: 16px;
        }
        ${About.TopLeft} {
            > p {
                font-size: 14px;
            }
        }
        ${About.TopRight} {
            text-align: center;
            img {
                width: 50%;
                min-width: 250px;
            }
        }
        ${About.Bottom} {
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }
        ${About.BottomBox} {
            padding: 20px;
            > p {
                font-size: 20px;
            }
        }

        ${AZGPay.Container} {
            flex-direction: column;
        }
        ${AZGPay.SmallTitle} {
            font-size: 14px;
        }
        ${AZGPay.Description} {
            font-size: 14px;
        }

        ${Ecosystem.Container} {
            > img {
                margin-top: -50px;
            }
        }
        ${Ecosystem.Title} {
            flex-direction: column;
            gap: 0;
            font-size: 24px;
        }

        ${Benefit.Container} {
            margin-top: 50px;

            > img {
                margin-bottom: 30px;
            }
        }
        ${Benefit.SmallTitle} {
            font-size: 14px;
            width: 100%;
            padding-top: 10px;
            text-align: left;
        }
        ${Benefit.Row} {
            margin-top: 20px;
            flex-direction: column;
            gap: 20px;
        }
        ${Benefit.Box} {
            font-size: 14px;
            padding: 12px;
        }

        ${Token.Container} {
            margin-top: 50px;
            flex-direction: column;
            gap: 30px;
        }
        ${Token.RightText} {
            font-size: 14px;
        }
        ${Token.LeftText} {
            font-size: 14px;
            gap: 10px;

            > h1 {
                font-size: 20px;
            }
        }

        ${RoadMap.Container} {
            margin-top: 70px;
            flex-direction: column;
        }
        ${RoadMap.Theme} {
            display: none;
        }
        ${RoadMap.Left} {
            width: 100%;
        }
        ${RoadMap.Right} {
            width: 100%;
        }

        ${Contract.Container} {
            margin-top: 100px;
        }
        ${Contract.SmallTitle} {
            font-size: 16px;
        }
        ${Contract.Banner} {
            margin-top: 20px;
        }
        ${Contract.Theme} {
            display: none;
        }
    }
`
