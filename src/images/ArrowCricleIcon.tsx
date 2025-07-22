import React from 'react'

const ArrowCircleIcon = ({
    width = 25,
    fillColor = 'white',
    arrowColor = '#292D32',
    ...rest
}) => {
    return (
        <svg
            width={width}
            height={width}
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >
            <rect
                x='24'
                y='24.166'
                width='23.3333'
                height='23.3333'
                rx='11.6667'
                transform='rotate(-180 24 24.166)'
                fill={fillColor}
            />
            <path
                d='M16.4141 12.7923L10.8724 7.25065L9.56859 8.55446L13.8101 12.796L9.56859 17.0375L10.8724 18.334L16.4141 12.7923Z'
                fill={arrowColor}
            />
        </svg>
    )
}

export default ArrowCircleIcon
