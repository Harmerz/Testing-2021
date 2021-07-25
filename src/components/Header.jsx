import { useState } from 'react';
import { NavLink as NavLinkStock } from 'react-router-dom';

import styles from '../styles/header.module.css';

import { ReactComponent as HamburgerIcon } from '../assets/icons/list.svg';
import { ReactComponent as RetractUpIcon } from '../assets/icons/chevron-up.svg';

function NavLink({ to, mobileMenuSetter, children }) {
    return (
        <NavLinkStock
            to={to}
            className='block p-4 hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 transition-colors'
            onClick={() => {mobileMenuSetter(false)}}
        >
            {children}
        </NavLinkStock>
    );
}

export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const MobileIcon = isMobileMenuOpen ? RetractUpIcon : HamburgerIcon;

    return (
        <header className={`${styles.headerContainer} sticky w-full flex items-start`}>
            <div className={`${styles.mainLogoContainer} bg-white flex-shrink-0 px-4 py-2 pr-8 text-6xl`}>p kes 2021</div>
            <div className={`${styles.navContainer} bg-black flex-grow text-white uppercase font-display-sm font-semibold text-sm`}> {/* mb-2 */}
                <nav className={`fixed w-full left-0 top-0 md:static bg-black md:bg-transparent flex flex-col md:flex-row md:h-full justify-center text-center py-8 pt-24 md:p-0 -z-1 ${!isMobileMenuOpen ? 'transform -translate-y-full' : ''} transition-transform duration-300 md:transform-none md:transition-none`}>
                    <NavLink mobileMenuSetter={setMobileMenuOpen} to='/'>Beranda</NavLink>
                    <NavLink mobileMenuSetter={setMobileMenuOpen} to='/jalan-jalan-teknik'>Jalan-Jalan Teknik</NavLink>
                    <NavLink mobileMenuSetter={setMobileMenuOpen} to='/penugasan'>Penugasan</NavLink>
                    <NavLink mobileMenuSetter={setMobileMenuOpen} to='/agenda'>Agenda</NavLink>
                    <NavLink mobileMenuSetter={setMobileMenuOpen} to='/dokumentasi'>Dokumentasi</NavLink>
                </nav>
                <button
                    type='button'
                    className='block md:hidden p-4 hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 transition-colors mr-0 ml-auto'
                    onClick={() => {setMobileMenuOpen(prevVal => !prevVal)}}
                >
                    <MobileIcon className={`${styles.mobileIcon} block h-8 w-auto`} />
                </button>
            </div>
        </header>
    );
}
