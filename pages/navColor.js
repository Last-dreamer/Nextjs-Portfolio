import React, { Children } from 'react'
import {withRouter} from 'next/router'

function NavColor({children, router, ...props}) {
    
    const child = Children.only(children)
    let className =  child.props.className;

    if(router.asPath === '/contact'){
        className =` ${className} ${props.mcolor}`;
    }
    
    return (
     
         <div {...props}>{React.cloneElement(child, {className})}</div>
        )
}

export default withRouter(NavColor)
