import { css, styled } from 'styled-components'

export const ButtonContainer = styled.button`
    background: #1264ff;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;

    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    white-space: nowrap;

    ${({ size }) =>
        size === 'lg' &&
        css`
            height: 70px;
            padding: 0 35px;
            font-size: 32px;
            border-radius: 35px;
        `}
    ${({ outline }) =>
        outline === 'gradient' &&
        css`
            background: linear-gradient(to right, #eb6168, #fcbf0d);
        `}
    ${({ outline }) =>
        outline === 'white' &&
        css`
            background: white;
            border: 1px solid #9bb7d6;
            color: #1264ff;
        `}
`
