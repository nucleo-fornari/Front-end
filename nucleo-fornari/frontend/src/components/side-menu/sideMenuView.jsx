import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./sideMenuView.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const SideMenu = ({ menuItens }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const location = useLocation();

    return (
        <div className={
            `h-screen flex flex-col items-center transition-all duration-700 ease-out bg-blue-dash text-white-ice ${isExpanded ? 'w-64' : 'w-20'}`}
        >

            <div className='flex flex-col items-center w-full'>
                <div class={`containner-logo ${isExpanded ? 'w-64' : 'w-20'}`}>
                    {/* 
                    <img
                        src={<AccountCircleIcon/>}
                    {/* <img
                        src={Logo}
                        alt="Project"
                        class={`img-logo ${isExpanded ? 'expanded' : 'collapsed'}`}
                    /> */}
                    <button
                        onClick={toggleMenu}
                        class="btn-espande"
                    >
                        {isExpanded ?
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuOpenIcon sx={{ color: 'white' }} />
                        </IconButton> : <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>}
                    </button>
                </div>
                {isExpanded && <h2 className="text-white mt-10">Olá, {(sessionStorage.NOME && sessionStorage.NOME.length > 3) ? sessionStorage.NOME : "user"}! </h2>}
            </div>

            <hr />

            <div class="containner-btns-route">
                {menuItens.map((item, index) => (
                    <Link
                        key={index}
                        to={item.route}
                        className={`w-full ${location.pathname === item.route ? 'bg-blue-pastel' : ''} hover:bg-blue-pastel`}
                    >
                        <button key={index} class="btn-route">
                            {item.icon}
                            {isExpanded && <span class="text-route">{item.name}</span>}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
