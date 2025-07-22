import React from 'react'

import { ButtonContainer } from './Button.styled'

const Button = (props) => {
    const { size, outline, children, ...rest } = props

    return (
        <ButtonContainer size={size} outline={outline} {...rest}>
            {children}
        </ButtonContainer>
    )
}

export default Button
