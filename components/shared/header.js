import React, {useState} from 'react'
import Link from 'next/link';
import {
    Collapse, 
    Navbar,
    NavbarBrand,
    NavbarToggler,  
    Nav,
    NavItem, NavLink} from 'reactstrap';
import ActiveLink from './activeLink';
import NavColor from '../../pages/navColor';

 

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const MactiveLink = ({route, title}) => {

        return (
            <ActiveLink  activeClassName="active"  href={route}>
              <a className="nav-link port-navbar-link ">{title}</a>
          </ActiveLink>
        )

    }

    return ( 
    <div>
      <NavColor mcolor="mcolor">     
         <Navbar  className={`port-navbar port-nav-base absolute ${props.className} `} color="transparent"  dark expand="md">
        <NavbarBrand   className="port-navbar-brand" href="/">
                    <div className="glow"> 
                        <span className="minor">Dreamer</span>
                   </div>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse className='collapse' isOpen={isOpen} navbar>   
          <Nav className="ml-auto" navbar>
                        <NavItem className="port-navbar-item " >
                             <MactiveLink  route="/" title='Home'/>
                       </NavItem>

                       <NavItem className="port-navbar-item test">
                         <MactiveLink  route='/about' title="About"/>
                       </NavItem >

                       <NavItem className="port-navbar-item">
                           <MactiveLink  route='/portfolio' title="Portfolio"/>  
                       </NavItem >


                       <NavItem className="port-navbar-item">
                           <MactiveLink  route='/cv' title="CV"/>
                       </NavItem>

                       <NavItem className="port-navbar-item ">
                           <MactiveLink   route='/contact' title="Contact"/>
                       </NavItem>
          </Nav>
        
        </Collapse>
      </Navbar>
      </NavColor>

    </div>

    )
}

export default Header
