import Link from 'next/link'
import React, { Children } from 'react';
import {withRouter } from 'next/router'

function ActiveLink({children, router, ...props}) {
 
    
    // to get only one child...
    const child = Children.only(children)

    let className = child.props.className;

    if(router.asPath === props.href && props.activeClassName){
        className = `${className}  ${props.activeClassName}`;
    }
 
    return (
         <Link {...props}>{React.cloneElement(child, {className})}</Link>
    )
}

export default withRouter(ActiveLink)
