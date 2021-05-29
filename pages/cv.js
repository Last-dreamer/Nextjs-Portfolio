import React from 'react'
import { Row, Col } from 'reactstrap'
import BasePage from '../components/basepage'
import Baselayout from '../components/layout/baselayout'
import {motion} from 'framer-motion'

function cv() {
    return (
        <div>
           <Baselayout  title="Muhammad Asim | My CV">
            <BasePage title=" Preview  My CV" className="cv-page" >
                <Row>
                    <Col md={{size: 8, offset:2}}>
                        <motion.div initial={{opacity:0, y:-10}}
                          animate={{y:0, opacity:1}}
                          transition={{delay:1.1, type:"spring"}}
                          className="cv-title">
                            <a download="./static/cv.pdf" className="btn btn-success" href="/static/cv.pdf">Download</a>
                        </motion.div>

                        <motion.iframe initial={{opacity:0, y:-100}}
                          animate={{y:0, opacity:1}}
                          transition={{delay:1.5, type:"spring"}}
                          style={{width:'100vh', height:'100vh'}} src="static/cv.pdf"></motion.iframe>
                    </Col>
                </Row>
            </BasePage>
           </Baselayout> 
        </div>
    )
}

export default cv