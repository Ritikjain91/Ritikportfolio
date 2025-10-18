import React, { useRef, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



function NavBar() {
  const [Menu,SetMenu]=useState("home");
  const menuRef =useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (

    
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <li onClick={() => SetMenu("home")}>
  <AnchorLink href="#home" className="Anchor-link" >
    <p>Home</p>
  </AnchorLink>
  {Menu === "home" ? <img src={underline} alt="underline" /> : null}
</li>
<li onClick={() => SetMenu("about")}>
  <AnchorLink href="#about" className="Anchor-link" offset={50}>
    <p>About me</p>
  </AnchorLink>
  {Menu === "about" ? <img src={underline} alt="underline" /> : null}
</li>
<li onClick={() => SetMenu("services")}>
  <AnchorLink href="#services" className="Anchor-link" offset={50}>
    <p>Services</p>
  </AnchorLink>
  {Menu === "services" ? <img src={underline} alt="underline" /> : null}
</li>
<li onClick={() => SetMenu("portfolio")}>
  <AnchorLink href="#work" className="Anchor-link" offset={50}>
    <p>Portfolio</p>
  </AnchorLink>
  {Menu === "portfolio" ? <img src={underline} alt="underline" /> : null}
</li>
<li onClick={() => SetMenu("contact")}>
  <AnchorLink href="#contact" className="Anchor-link" offset={50}>
    <p>Contact</p>
  </AnchorLink>
  {Menu === "contact" ? <img src={underline} alt="underline" /> : null}
</li>

        </ul>
        <div className="nav-connect">
  <a  href="#contact" className="Anchor-link" offset={50}>Connect with me</a>
 
</div>

       
      
    </div>
  )
}

export default NavBar
