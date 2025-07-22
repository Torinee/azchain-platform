import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import { SliderContainer } from './Slider.styled'

const Slider = ({ children, type, ...rest }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (_, className) {
            return '<span class="' + className + '">' + '</span>'
        }
    }

    return (
        <SliderContainer>
            <Swiper pagination={pagination} modules={[Pagination]} {...rest}>
                {children}
            </Swiper>
        </SliderContainer>
    )
}

export default Slider
