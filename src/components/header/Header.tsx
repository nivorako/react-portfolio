import React, { useState } from 'react';

import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import myLogo from '../../assets/myLogo.png';

import './index.css';

const Header: React.FC = () => {
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

    return (
        <header className="header" id="head">
            <div className="header_nav">
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
                </Drawer>
            </div>
            <div className="header_content">
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
