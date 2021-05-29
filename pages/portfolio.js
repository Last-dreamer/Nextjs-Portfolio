import React, { Children } from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from 'reactstrap'
import BasePage from '../components/basepage'
import Baselayout from '../components/layout/baselayout'
import {motion} from 'framer-motion';


function portfolio() {
    return (
        <div>
        <Baselayout  title="Muhammad Asim | Learn about my experiance">
          <BasePage  className="portfolio-page" title="Portfolio">  
          
         <motion.div  initial={{opacity:0, y:-100}} 
                      animate={{opacity:1, y:0}}
                      transition={{delay:1.5, type:'spring'}}
                      className='portfolio-col'>
         <Col> 
         
          <Row>
                    <Col md="4">
                    <Card className="portfolio-card">
                      <CardHeader className="portfolio-card-header">Blog</CardHeader>
                      <CardBody>
                    
                      <div class="box zoom-in">
                                <a href='https://freecourses-blog.netlify.app/' target="_blank">
                                  <img src="https://user-images.githubusercontent.com/29290992/106395558-a84ab280-6424-11eb-9055-2df9cee3881c.jpg"/>
                                </a>
                                  <h2 style={{color:"white"}}>Blog</h2>
                                  <p>Blog  in React and Django</p>
                                </div>
          
                                </CardBody>
                                </Card>
                    </Col>
         
                    <Col md="4">
                      <Card className="portfolio-card">
                      <CardHeader className="portfolio-card-header">Contact App</CardHeader>
                      <CardBody>
                    
                      <div class="box zoom-in">
                                <a href='https://lost2dreamer.pythonanywhere.com/' target="_blank">
                                  <img src="https://user-images.githubusercontent.com/29290992/96354807-37d98900-10f4-11eb-9345-d9c2104e3e84.jpg"/>
                                </a>
                                  <h2>Contact App</h2>
                                  <p>Contact App in Python (Django)</p>
                                </div>
          
                            </CardBody>
                            </Card>
          
                    </Col>
           
                    <Col md="4">
          
                      <Card className="portfolio-card">
                      <CardHeader className="portfolio-card-header">Django CMS</CardHeader>
                      <CardBody>
                    
                      <div class="box zoom-in">
                                <a href='https://github.com/Last-dreamer/Django-CMS' target="_blank">
                                  <img src="https://user-images.githubusercontent.com/29290992/79513467-597e8880-805d-11ea-9704-15d0a8c79e39.png"/>
                                </a>
                                  <h2>CMS</h2>
                                  <p>CMS in Python (Django)</p>
                                </div>
          
          
                                </CardBody>
                                </Card>
                    </Col>
  
                <Col md="4">
                  <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">Tic Tac Toe</CardHeader>
                  <CardBody>
          
                    <div class="box zoom-in">
                              <a href='https://tic-tac-toe-50c8b.web.app/' target="_blank">
                                <img src="https://user-images.githubusercontent.com/29290992/83305463-3c230980-a21a-11ea-8b3c-cda81182ec54.jpg"/>
                              </a>
                                <h2>Tic Tac Toe</h2>
                                <p>Tic Tac Toe in React</p>
                              </div>
                          </CardBody>
                          </Card>
                          
                  </Col>
          
              
                  <Col md="4">
                  <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">Book Rating App</CardHeader>
                  <CardBody>
          
                    <div class="box zoom-in">
                              <a href='https://github.com/Last-dreamer/Book-Rating-app-Flutter-' target="_blank">
                                <img src="https://user-images.githubusercontent.com/29290992/85801406-cf176c80-b710-11ea-828e-05d41ca4b808.jpg"/>
                              </a>
                                <h2 style={{color:'white'}}>Book Rating App</h2>
                                <p style={{color:'white'}}> Book Rating App in Flutter</p>
                              </div>
                          </CardBody>
                          </Card>
                          
                  </Col>
         
                <Col md="4">
                  <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header"> Book Rating App</CardHeader>
                  <CardBody>
          
                    <div class="box zoom-in">
                              <a href='https://github.com/Last-dreamer/Book-Rating-App' target="_blank">
                                <img src="https://user-images.githubusercontent.com/29290992/81238281-0e7fe180-901b-11ea-9db5-143fbb085865.jpg"/>
                              </a>
                                <h2 style={{color:'white'}}>Book Rating</h2>
                                <p style={{color:'white'}}>Book Rating app in react</p>
                              </div>
                          </CardBody>
                          </Card>
                          
                  </Col>
 
 
                  <Col md="4">
                  <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">BMI </CardHeader>
                  <CardBody>
          
                    <div class="box zoom-in">
                              <a href='https://github.com/Last-dreamer/bmi_calculator' target="_blank">
                                <img src="https://user-images.githubusercontent.com/29290992/83957559-42e8f680-a882-11ea-9fba-ee9ddef4ad1c.jpg"/>
                              </a>
                                <h2 style={{color:'white'}}>BMI</h2>
                                <p style={{color:'white'}}>Body Mass Index app in flutter</p>
                              </div>
                          </CardBody>
                          </Card>  
                  </Col>
          

                  <Col md="4">
                    <Card className="portfolio-card">
                      <CardHeader className="portfolio-card-header">Spy Robot App</CardHeader>
                      <CardBody>
                    
                      <div class="box zoom-in">
                                <a href='https://github.com/Last-dreamer/Spy-Robot' target="_blank">
                                  <img src="https://user-images.githubusercontent.com/29290992/106511724-6be58800-64f2-11eb-83ea-6945db2b70c5.jpg"/>
                                </a>
                                  <h2 style={{color:"white"}}>Spy Robot App</h2>
                                  <p style={{color:"white"}}>Spy Robot App using Django and Flutter</p>
                                </div>
          
                                </CardBody>
                                </Card>
                    </Col>
         


           </Row> 
          
          </Col>
         
         
         </motion.div>
          </BasePage>
        </Baselayout>
    </div>
    )
}

export default portfolio
 