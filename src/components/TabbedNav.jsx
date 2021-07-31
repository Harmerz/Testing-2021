import styles from '../styles/TabbedNav.module.scss';

export function TabbedNav({ className, children }) {
    return (
        <nav className={[styles.tabContainer, className].join(' ')}>
            {children}
        </nav>
    );
}
