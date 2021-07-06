// import background from "../../assets/coming-soon-page/background.png";
import mainLogo from '../../assets/coming-soon-page/logo.png';
import themeText from '../../assets/coming-soon-page/text-tema.png';

import styles from './index.module.css';

export function ComingSoon() {
    return (
        <main
            className={`${styles.backdrop} min-h-screen bg-cover bg-center p-16 flex flex-col items-center justify-center`}
        >
            <img
                src={themeText}
                alt='Humanizing Technology'
                className='w-full max-w-screen-md pb-16'
            />
            <img
                src={mainLogo}
                alt='Humanizing Technology'
                className='w-48 md:w-64 lg:w-72'
            />
        </main>
    );
}
