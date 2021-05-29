import React from 'react'
import Header from '../shared/header';

function Baselayout(props) {

    const headerType = props.headerType || 'default';

    return (
       <div className='layout-container'>
           <title>{props.title}</title>
             <meta name="description" content="My name is Muhammad Asim and I am an experiance  software developer. I have a Bachelors's Degree   in Computer Science and an years of experiance working on a wide range of technologies and projects from modern mobile and web application in React, Django and  Flutter"/>
             <meta name="keywords" content="Muhammad portfolio, Muhammad Asim Portfolio, asim, dreamer portfolio"/>
           
            <meta property="og:title" content="Muhammad Asim - Programmer, Developer, Coder"/>
            <meta property="og:locale" content="en_EU"/>
            <meta property="og:url" content="https://localhost:3000"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="My name is Muhammad Asim and I am an experiance  software developer. I have a Bachelors's Degree   in Computer Science and an years of experiance"/>

            <link rel="icon" type='image/ico' href="/static/images/icon.png"/>

           {/* { headerType === 'index' && <Header className="port-nav-index"/>}
           { headerType === 'default'  && <Header className="port-nav-default"/>} */}
              
                 <Header  className={`port-nav-${headerType} ${props.className}`}/>
            
           <main className={`cover ${props.className}`}>
               <div className="wrapper">
                   {props.children}
               </div>
           </main>

       </div>
    )
}

export default Baselayout
