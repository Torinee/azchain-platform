import { useState, useRef, useEffect } from 'react'

export const useCollapseElement = ({
    element, // container element to collapse
    transition = 500,
    defaultCollapse = false, // collapse status at beginning
    collapseHeight = 0, // minimum collapse height
    dependencies = [] // calculate height again when data change
}) => {
    const [isCollapse, setCollapse] = useState(defaultCollapse)
    const [isAlreadyFitHeight, setAlreadyFitHeight] = useState(false)

    const onCollapseClick = () => {
        if (!element.current) return

        if (!isCollapse) {
            element.current.style.height = `${collapseHeight}px`
            setCollapse(true)
        } else {
            element.current.style.height = `${element.current.scrollHeight}px`
            setCollapse(false)
        }
    }

    useEffect(() => {
        if (element.current) {
            element.current.style.transition = `height ${transition}ms`
            element.current.style.overflow = 'hidden'
            element.current.style.height = 'auto'

            // example: if element height = 190 but initial collapse height = 200
            // so element height should be itself, not 200
            if (collapseHeight < Number(element.current?.scrollHeight)) {
                element.current.style.height = isCollapse
                    ? `${collapseHeight}px`
                    : `${element.current.scrollHeight}px`
                setAlreadyFitHeight(false)
            } else {
                setAlreadyFitHeight(true)
            }
        }
    }, dependencies)

    return {
        isAlreadyFitHeight,
        isCollapse,
        onCollapseClick
    }
}

export default useCollapseElement
