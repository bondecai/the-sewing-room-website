import Showcase from './Showcase'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
    return (
        <div>
            <div>
                <h1>Homepage</h1>
            </div>
            <br />
            <br />
            <div className='showcase'>
                <Carousel>
                    <Carousel.Item>
                        <imgs
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>First Slide</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Second Slide</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home