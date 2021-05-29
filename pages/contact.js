import React from 'react'
import Baselayout from '../components/layout/baselayout'
import BasePage from '../components/basepage';
import { Col, Row } from 'reactstrap';
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaGithubAlt }  from 'react-icons/fa';
import {motion} from 'framer-motion'
 
function contact(props) {
    return (
        
          <Baselayout title="Contact me !" className={`${props.className}`} headerType="mcolor">
             <BasePage title="" className="contact-page">  
               <div className="contact-header">
                   <div className="contact-wrapper">
                     <div className="content-center">
                       <motion.h1 initial={{opacity:0, y:-10}} 
                       animate={{opacity:1, y:0}} 
                       transition={{ delay:.5, type:'spring'}}
                       className="contact-title">Contact Me.</motion.h1>

                        <motion.h4 initial={{opacity:0, y:-10}}
                         animate={{opacity:1, y:0}}
                         transition={{delay:0.7, type:"tween"}}>
                           Get in Touch with me.</motion.h4>
                           
                      </div>

                      <motion.div initial={{opacity:0, y:-100}}
                       animate={{y:0, opacity:1}}
                       transition={{delay:1.5, type:"spring"}}
                      >


                      <Row className="icons-row">   
                                               
                                               <Col md='2'>
                                                 <a href="https://web.facebook.com/lost2dreamer" target="_blank">
                                                  <div className="mcol">
                                                   <FaFacebookF className="icon github micon"/>
                                                   <h4>facebook</h4>
                                                   <p>https://web.facebook.com</p>
                                                 </div>
                                                 </a>
                                               </Col>
                                            
                   
                   
                                               <Col md='2'>
                                               <a href="https://www.instagram.com/lost2dreamer/" target="_blank">
                                                 <div className="mcol">
                                                 <FaInstagram  className="icon github micon"/>
                                                   <h4>Instagram</h4>
                                                   <p>www.instagram.com</p>
                                                 </div>
                                               </a>
                                               </Col>
                   
                   
                   
                                               <Col md='2'>
                                               <a href="https://twitter.com/lostdre29538923" target="_blank">
                                                 <div className="mcol">
                                                 <FaTwitter  className="icon github micon"/>
                                                   <h4>&nbsp;Twitter</h4>
                                                   <p>https://twitter.com/</p>
                                                 </div>
                                               </a>
                                               </Col>
                   
                   
                                               <Col md='2'>
                                               <a href="https://github.com/Last-dreamer" target="_blank">
                                                 <div className="mcol">
                                                 <FaGithubAlt  className="icon github micon"/>
                                                   <h4>&nbsp;&nbsp;&nbsp;Github</h4>
                                                   <p>https://github.com/</p>
                                                 </div>
                                               </a>
                                               </Col>
                   
                   
                                               <Col md='2'>
                                               <a href="mailto:asim0000.ak@gmail.com" >                           
                                                 <div className="mcol">
                                                 <FaRegEnvelope  className="icon github micon"/>
                                                   <h4>&nbsp;&nbsp;&nbsp;Email</h4>
                                                   <p>asim0000.ak@gmail.com</p>
                                                 </div>
                                               </a>
                                               </Col>
                     
                                           </Row>
                                     
                      </motion.div>

                  
                   </div>
               </div>
             </BasePage>         
          </Baselayout>
  
  )
}

export default contact
