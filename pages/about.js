import  React from 'react'
import { Col, Row } from 'reactstrap';
import  BasePage from '../components/basepage';
import  Baselayout from '../components/layout/baselayout';
import {motion} from 'framer-motion'

function about() {
    return (
        <div>
            <Baselayout title="Muhammad Asim | Learn more about me .">
              <BasePage title="">
                  <Row  className="mt-5">
                      <Col md='6' className='col'>
                          <div className='left-side'>

                            <motion.h1  initial={{y:-200}} animate={{y:0}} 
                             transition={{ delay:.2, type:'spring'}} 
                             className="title fadein">Hello, welcome </motion.h1>

                            <motion.h4 initial={{x:-700}} animate={{x:0}} 
                             transition={{ delay:.9, type:'spring'}} 
                            className="subtitle fadein">To about page</motion.h4>

                            <motion.p initial={{x:-1000}} animate={{x:0}} 
                             transition={{ delay:1.5, type:'tween'}} 
                             className="subsubTitle fadein">Feel free to read  short description about me.</motion.p>
                         </div>
                      </Col>

                      <Col md='6' className='para'>
                          <motion.div initial={{y:1000}} animate={{y:0}} 
                             transition={{ delay:1.7, type:'spring'}} 
                             className="fadein">
                              <p>My name is Muhammad Asim and I am an experiance  software developer.</p>
                              <p>I have a Bachelors's Degree   in Computer Science and an years of experiance working on a wide range of technologies and projects from modern mobile and web application in React (Nextjs),
                                   Python(Django) and  Flutter</p>
                          </motion.div>
                      </Col>
                  </Row>

              </BasePage>
            </Baselayout>
        </div>
    )
}

export default about
