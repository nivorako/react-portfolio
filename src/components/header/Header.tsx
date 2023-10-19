import React, { useState, useEffect, useRef } from 'react';

import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Nature from "../../assets/nature.mp4";

import myLogo from '../../assets/myLogo.png';

import './index.css';

const Header: React.FC = () => {

    const [scrollTop, setScrollTop] = useState(0);
    const headerContentRef = useRef<HTMLDivElement | null>(null);
    const headerNavRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const headerContent = headerContentRef.current;
            const headerNav = headerNavRef.current;
            
            if (headerContent && headerNav) {
                const headerContentRect = headerContent.getBoundingClientRect();
                const headerNavRect = headerNav.getBoundingClientRect();
                const newScrollTop = window.scrollY;
                // si ( scroll down && .....)
                if (newScrollTop < scrollTop && headerContentRect.bottom >= headerNavRect.height) {
                    headerNav.style.top = "10rem";
                // si ( scroll up  && newscrollTop > 240px )
                } else if (newScrollTop > scrollTop && newScrollTop > 10*24) {
                    headerNav.style.top = "1rem";
                }
            
                setScrollTop(newScrollTop);
            }
            
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop])

    const scrollIntoSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setDrawer(false);
        }
    };

    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = () => {
        if (!drawer) setDrawer(true);
        else setDrawer(false);
    };

    useEffect(() => {
        window.onload = () => {
            window.scrollTo(0, 0);
          };
    }, [])

    return (
        <header className="header" id="head">
            {/* <video
                autoPlay
                loop
                muted 
                controls={false}
            >
                <source src={Nature} type="video/mp4" />
            </video> */}
            <div className="header_nav" ref={headerNavRef}>
                <div
                    className="header_logo"
                    onClick={() => scrollIntoSection('head')}
                >
                    <img
                        src={myLogo}
                        alt="my logo"
                        width={100}
                        height={100}
                        style={{
                            borderRadius: '50%',
                        }}
                    />
                </div>
                <MenuIcon
                    onClick={() => toggleDrawer()}
                    sx={{
                        width: '50px',
                        height: '50px',
                        marginTop: '1.5rem',
                        transition: 'all .5s',
                        ':hover': {
                            cursor: 'pointer',

                            transform: 'scale(1.1)',
                        },
                    }}
                />
                <Drawer
                    open={drawer}
                    anchor="right"
                    PaperProps={{
                        sx: {
                            width: '100%', // Définir la largeur du drawer à 100%
                            zIndex: '10', // Placer le drawer au-dessus du reste du contenu
                            backgroundColor: 'var(--primary)',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        },
                    }}
                >
                    <div className="drawer_close">
                        <CloseIcon
                            onClick={() => toggleDrawer()}
                            sx={{
                                width: '50px',
                                height: '50px',
                                transition: 'all .5s',
                                marginRight: '5rem',
                                ':hover': {
                                    cursor: 'pointer',
                                    transform: 'scale(1.1)',
                                },
                            }}
                        />
                    </div>
                    <a
                        href="#about"
                        className="drawer_about"
                        onClick={() => scrollIntoSection('about')}
                    >
                        A propos de moi
                    </a>
                    <a
                        href="#skill"
                        className="drawer_skill"
                        onClick={() => scrollIntoSection('skill')}
                    >
                        Mes compétences
                    </a>
                    <a
                        href="#work"
                        className="drawer_work"
                        onClick={() => scrollIntoSection('work')}
                    >
                        Mes réalisations
                    </a>
                </Drawer>
            </div>
            <div className="header_content" ref={headerContentRef}>
                <h1>
                    Developpeur front-end
                    <br />
                    REACT
                </h1>
            </div>
        </header>
    );
};

export default Header;
