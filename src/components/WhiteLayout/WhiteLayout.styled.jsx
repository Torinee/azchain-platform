import styled from 'styled-components'

export const Header = {
    Container: styled.div`
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
        background: white;

        > div {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }
    `,
    Logo: styled.div`
        cursor: pointer;
    `,
    Center: styled.div`
        display: flex;
        align-items: center;
        background: white;
        padding: 8px 20px;
        border-radius: 20px;
        border: 1px solid #9bb7d6;
    `,
    CenterItem: styled.div`
        font-weight: 500;
        padding: 0 15px;
        cursor: pointer;
    `,
    Right: styled.div`
        display: flex;
        align-items: center;
        gap: 12px;
    `,
    Language: styled.div`
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 6px;
        text-transform: uppercase;
        cursor: pointer;
    `
}

export const Footer = {
    Container: styled.div`
        background: white;
        font-size: 12px;
    `,
    Top: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 40px 0 20px 0;
    `,
    SocialList: styled.div`
        display: flex;
        gap: 20px;

        > svg {
            cursor: pointer;
        }
    `,
    Menu: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;

        > a {
            font-size: 14px;
            padding: 0 16px;
        }
    `,
    Text: styled.div`
        text-align: center;
        padding: 10px 0 30px 0;
    `
}

export const Responsive = styled.div`
    color: #131321;
    @media (max-width: 1200px) {
        ${Header.CenterItem} {
            padding: 0 10px;
            font-size: 14px;
        }
    }

    @media (max-width: 992px) {
        ${Header.Center} {
            display: none;
        }
        ${Footer.Top} {
            flex-direction: column;
        }
        ${Footer.Menu} {
            > a {
                padding: 0 8px;
            }
        }
    }
`
