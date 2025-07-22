import styled from 'styled-components'

export const PrivacyContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 30px;

    padding: 50px 0;
    width: 90%;
    margin: auto;

    p,
    li {
        font-size: 12px;
        line-height: 21px;
    }
    h3 {
        font-size: 12px;
        line-height: 21px;
        font-weight: 700;
    }
    h2 {
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
    }
    h1 {
        font-size: 20px;
        font-weight: 800;
    }
    ul {
        list-style-position: inside;

        > li {
            text-indent: -1rem;
            padding-left: 1rem;
        }
    }

    @media (max-width: 992px) {
        padding: 16px 0;
        width: 100%;
    }
`
