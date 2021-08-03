import { Link } from 'react-router-dom';
import styles from '../styles/PageFooter.module.css';

import { ReactComponent as FooterLogo } from '../assets/images/main-footer-logo.svg';

import { ReactComponent as TwitterIcon } from '../assets/icons/socials/twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/socials/instagram.svg';
import { ReactComponent as TiktokIcon } from '../assets/icons/socials/tiktok.svg';
import { ReactComponent as LineIcon } from '../assets/icons/socials/line.svg';
import { ReactComponent as YoutubeIcon } from '../assets/icons/socials/youtube.svg';

function SocialItem({
    icon: IconComponent,
    targetBaseUrl,
    noSuffix,
    children,
}) {
    return (
        <a
            href={targetBaseUrl + (!noSuffix ? children : '')}
            className='flex items-center font-display font-semilight group my-2 max-w-max'
        >
            <div className='bg-white text-black w-4 h-4 p-0.5 rounded-full'>
                <IconComponent className='block w-full h-full fill-current' />
            </div>
            <span className='block text-xs group-hover:underline ml-2'>
                {children}
            </span>
        </a>
    );
}

export function PageFooter({ className }) {
    return (
        <footer
            className={`${styles.footerContainer} bg-black text-white flex flex-col md:flex-row font-display font-semilight p-8 ${className}`}
        >
            {/* TODO: Group the latter text-containing parts (with <div>s) instead of the current approach, to allow similar/uniform left-aligning in mobile viewports */}
            <div className='flex flex-row items-center w-auto md:w-2/5 mb-8 md:mb-0'>
                <FooterLogo className='block fill-current text-white h-28 mr-4' />
                <div className='text-xs'>
                    <p className='font-display font-bold uppercase text-xl mb-4'>
                        PPSMB Kesatria 2021
                    </p>
                    <p className='mb-4'>
                        Jalan Grafika
                        <br />
                        Mlati, Yogyakarta 55281, ID
                    </p>
                    <p>
                        <Link
                            to='/'
                            className='hover:underline'
                            title='Go to home page'
                        >
                            https://ppsmb.ft.ugm.ac.id
                        </Link>
                    </p>
                </div>
            </div>
            <div className='flex-grow flex flex-col flex-wrap md:max-h-24'>
                <SocialItem
                    icon={TwitterIcon}
                    targetBaseUrl='https://twitter.com/'
                >
                    ppsmb_kesatria
                </SocialItem>
                <SocialItem
                    icon={TiktokIcon}
                    targetBaseUrl='https://tiktok.com/@'
                >
                    ppsmb_kesatria
                </SocialItem>
                <SocialItem
                    icon={LineIcon}
                    targetBaseUrl='https://line.me/R/ti/p/'
                >
                    @NRB2565A
                </SocialItem>
                <SocialItem
                    icon={InstagramIcon}
                    targetBaseUrl='https://instagram.com/'
                >
                    ppsmb_kesatria
                </SocialItem>
                <SocialItem
                    icon={YoutubeIcon}
                    targetBaseUrl='https://www.youtube.com/channel/UCmv4fLH2lves3QtOS4V33PQ'
                    noSuffix
                >
                    PPSMB KESATRIA
                </SocialItem>
            </div>
        </footer>
    );
}
