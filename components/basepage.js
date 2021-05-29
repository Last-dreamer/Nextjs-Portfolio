import React from 'react'
import { Container} from 'reactstrap';
import {motion} from 'framer-motion';

function BasePage(props) {
    return (
        <div className={`base-page ${props.className}`}>
            <Container>
                { props.title && <div className="page-header">
                     <motion.h1 initial={{opacity:0, x:-10}} 
                      animate={{opacity:1, x:0}}
                      transition={{delay:1, type:'spring'}}
                     className="page-header-title">{props.title}</motion.h1>
                    </div>}
                { props.children }
            </Container>
        </div>
    )
}

export default BasePage;
