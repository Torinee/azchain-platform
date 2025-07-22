import React, { useRef } from 'react'

import { FAQ } from './WhiteHome.styled'

import useCollapseElement from '@/hooks/useCollapseElement'
import ArrowDownIcon from '@/images/ArrowDownIcon'

const Question = ({ title, description }) => {
    const contentRef = useRef(null)

    const { isCollapse, onCollapseClick } = useCollapseElement({
        element: contentRef,
        collapseHeight: 0,
        defaultCollapse: true
    })

    return (
        <FAQ.Question isCollapse={isCollapse} onClick={onCollapseClick}>
            <p>
                {title}
                <ArrowDownIcon />
            </p>
            <div ref={contentRef}>
                <p>{description}</p>
            </div>
        </FAQ.Question>
    )
}

export default Question
