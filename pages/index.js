import { useState, useEffect } from 'react';
import ReactTyped from 'react-typed';
import {Container, Row, Col} from 'reactstrap'
import Baselayout from '../components/layout/baselayout';
import {motion}  from 'framer-motion'; 


export default function Home() {
 

  return (
  
<Baselayout className="cover" headerType='index' title="Muhammad Asim - Portfolio">
      <div className="main-section">
        <div className="background-image">
          <img src="/static/images/background-index.png"/>
        </div>

        <Container >
          <Row>
            <Col md='6'>
              <div className="hero-section">
                <motion.div whileHover={{rotateY:360}} transition={{delay:.5}} className={`flipper isflipping`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <div className='hero-section-content-intro'>
                      <h2>Full stack web developer</h2 >
                        Have a look into my portfolio 
                      </div>
                    </div>

                    <img className="image" src='/static/images/mine.png'/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Col>

            <Col md='5' className="hero-welcome-wrapper">
              <div className='hero-welcome-text'>
                <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{type:'tween', delay:.3}}>
                  Welcome to the portfolio website of Muhammad Asim
                  Get informed, collaborate and discover the projects I have done.
                </motion.h1>
              </div>
              <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{type:'tween', delay:.7}}>
                      
                      <ReactTyped
                        loop
                        typeSpeed={70}
                        backSpeed={70}
                        strings={["Developer", "Tech Lover", "React.js", "Next.js", "Python", "Django", 'Flutter', 'Java', 'React']}
                        smartBackspace
                        shuffle={false}
                        backDelay={1000}
                        fadeOut={false}
                        fadeOutDelay={100}
                        className="self-typed"
                        showCursor
                        cursorChar="|"
                      />
             </motion.div>
              <div className="hero-welcome-bio">
                <motion.h2 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{type:'tween', delay:1}}>Let's have a look on my work</motion.h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </Baselayout>
  
  )
}
