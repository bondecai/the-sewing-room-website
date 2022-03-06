import Carousel from 'react-bootstrap/Carousel'
import Placeholder from 'react-bootstrap/Placeholder'
import Figure from 'react-bootstrap/Figure'
import React, { useState } from 'react'

function Showcase() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Placeholder as={Figure.Image} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Figure.Caption} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
            </Carousel.Item>
            <Carousel.Item>
                <Placeholder as={Figure.Image} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Figure.Caption} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
            </Carousel.Item>
        </Carousel>
    )
}

export default Showcase