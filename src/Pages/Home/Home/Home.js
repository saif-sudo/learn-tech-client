import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src="https://www.openaccessgovernment.org/wp-content/uploads/2018/11/dreamstime_s_47450085.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tech Learn</h3>
          <p>This is a Great Platform We can Easily learn anything form here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Learn New Things</h3>
          <p>This is a Great Platform We can Easily learn anything form here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Learn Quickly</h3>
          <p>
          This is a Great Platform We can Easily learn anything form here
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h2 className='heading'>Welcome To Tech Learn</h2>
    <p>Technology is changing the experiences of learning with increasing speed. The span of technological change in the last few decades seems massive, but in reality it is only the beginning of a new era. With technology driving change, what is learnt one day can be outdated the next. The applied use of technology through digital learning platforms has the potential to accelerate personal growth in learning and enable learning to happen ‘anywhere, anytime and anyhow.’

The potentially unlimited boundaries of digital space can extend the parameters of physical space- the opportunities created by digital spaces are therefore potentially limitless. Technology enables a learner to move seamlessly from the real world, to a digital world in a microsecond.

Digital learning platforms are powerful tools to support and extend paradigm shifts. A digital learning platform can create and analyse data, providing real time support to a learning experience. This is relevant at both personal and collective levels. Digital learning platforms can be the gateway to capturing a learner’s journey, making any learning visible to any audience. </p>
<p>

Technology in education should be like air – invisible, vital and ever present. Technology should not be placed as the driver of change; but it should always support change. As technology also continues to evolve continually, there is no point in viewing current technology as an endpoint, rather another step towards further innovation. Learning ecosystems should utilise the opportunities afforded by technology like digital learning platforms, so that a learner can readily flow between the real and digital world seamlessly. There is no doubt that technology will support the concept of lifelong learning in multiple ways. 

The applied use of technology has the potential to accelerate personal growth in learning and enable it to happen anywhere, anytime and anyhow. Technology has the ability to keep people immediately informed with relevant data, updated information - and very importantly, able to access learning opportunities no matter where they are. 

In historical terms, most education systems are yet to fully reap the benefits of technology. Some of this is to do with equity and access, but much of it is connected to limited thinking around new digital learning platforms and an unwillingness to move away from existing (traditional) paradigms. 
</p>
        </div>
        
    );
};

export default Home;