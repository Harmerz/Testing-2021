import { useState } from 'react';
import { NavLink as NavLinkStock } from 'react-router-dom';

import styles from '../styles/PageHeader.module.css';

import { ReactComponent as HeaderLogo } from '../assets/images/main-header-logo.svg';
import { ReactComponent as HamburgerIcon } from '../assets/icons/list.svg';
import { ReactComponent as RetractUpIcon } from '../assets/icons/chevron-up.svg';

export function PageHeader({ className }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const MobileIcon = isMobileMenuOpen ? RetractUpIcon : HamburgerIcon;

    const NavLink = ({ to, external, children }) => {
        const LinkComponent = external ? 'a' : NavLinkStock;
        return (
            <LinkComponent
                {...{
                    [external ? 'href' : 'to']: to,
                }}
                className='block p-4 hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 transition-colors'
                onClick={() => {
                    setMobileMenuOpen(false);
                }}
            >
                {children}
            </LinkComponent>
        );
    };

    return (
        <header
            className={`${
                styles.headerContainer
            } sticky top-0 w-full flex items-start z-50${
                className ? ` ${className}` : ''
            }`}
        >
            <NavLinkStock
                to='/'
                className={`${styles.mainLogoContainer} bg-white flex-shrink-0 pl-6 pb-2 pt-1 pr-8 flex items-end uppercase font-display group`}
            >
                <HeaderLogo className='block h-14 w-auto mr-2' />
                <div className='text-black group-hover:text-accent-blue transition-colors'>
                    <span className='block text-sm leading-none font-semibold'>
                        PPSMB Kesatria
                    </span>
                    <span className='block text-2xl leading-none font-bold mt-1'>
                        2021
                    </span>
                </div>
            </NavLinkStock>
            <div
                className={`${styles.navContainer} bg-black flex-grow text-white uppercase font-display font-semilight font-semibold text-sm`}
            >
                <nav
                    className={`fixed w-full left-0 top-0 md:static bg-black md:bg-transparent flex flex-col md:flex-row md:h-full justify-center text-center py-8 pt-24 md:p-0 -z-1 ${
                        !isMobileMenuOpen ? 'transform -translate-y-full' : ''
                    } transition-transform duration-300 md:transform-none md:transition-none`}
                >
                    <NavLink to='/'>Beranda</NavLink>
                    <NavLink to='/agenda'>Agenda</NavLink>
                    <NavLink to='/penugasan'>Penugasan</NavLink>
                    <NavLink to='/dokumentasi'>Dokumentasi</NavLink>
                </nav>
                <button
                    type='button'
                    className='block md:hidden p-4 hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 transition-colors mr-0 ml-auto'
                    onClick={() => {
                        setMobileMenuOpen((prevVal) => !prevVal);
                    }}
                >
                    <MobileIcon
                        className={`${styles.mobileIcon} block h-6 w-auto`}
                    />
                </button>
            </div>
        </header>
    );
}
