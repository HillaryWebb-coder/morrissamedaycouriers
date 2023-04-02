import React, {useState} from 'react';
import {
    AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    IconButton, 
    Menu, 
    Container, 
    Avatar, 
    Button, 
    Tooltip, 
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

type pages = page[]

interface page {
  text: string,
  link: string
}

const pages = [
  {
    text: 'Home',
    link: '/',
   },
   {
    text: 'About Us',
    link: '/aboutUs',
   },
   {
    text: 'Contact Us',
    link: '/contactUs',
   }
  ];


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const navbarVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: 1} 
  }
}

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const toggleMenu = () => setMenuIsOpen((prevState: boolean) => (!prevState))

  return (
    <motion.nav 
      className="menu-bar font2-title1"
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      >
      <div className="theme-container container">
        <div className="d-flex d-md-inline justify-content-between align-items-center">
          <Link className="navbar-brand d-inline" href="/"> 
            <img src="/logo.png" alt="logo" />
            {/* <h1 className="d-inline">Msd</h1> */}
          </Link>
          <ul className="navbar-nav theme-menu flex-row align-items-center d-none d-md-flex">
              {pages.map(page => (
                <li key={page.text}><Link href={page.link}>{page.text}</Link></li>
                ))}
            </ul>
          <div className="uppercase fs-6 d-md-none" onClick={toggleMenu}>Menu</div>
        </div>
        <AnimatePresence>
                {menuIsOpen && 
                <motion.div className="d-md-none position-fixed start-0" style={{height: "100vh",  zIndex: 70, width: "100%" }}>
                  <motion.div 
                    className="bg-white" 
                    style={{ width: "100%", overflow: 'hidden', zIndex: 90}}
                    initial={{ height: 0, opacity: 0}}
                    animate={{ height: "fit-content", opacity: 1, transition: {duration: .5}}}
                    exit={{ height: 0, opacity: 0, transition: {duration: .5} }}
                    >
                      <ul className="navbar-nav py-3 px-3">
                        {pages.map(page => (
                          <li key={page.text} className="mt-3"><Link href={page.link}>{page.text}</Link></li>
                          ))}
                      </ul>
                  </motion.div>
                  <motion.div 
                    className="position-absolute top-0 start-0" 
                    style={{ background: "rgba(0,0,0,.5)", width: "100%", height: "100%", zIndex: -10 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: {duration: .5} }}
                    exit={{ opacity: 0, transition: { duration: .5} }}
                    onClick={toggleMenu}
                    ></motion.div>
                </motion.div>
                }
        </AnimatePresence>
        </div>
    </motion.nav>
  );
}
export default Navbar;