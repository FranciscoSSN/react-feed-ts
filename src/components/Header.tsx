import styles from './Header.module.css'

import IgniteLogo from '../components/assets/Ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Logo do Ignite Feed" />
        </header>
    )
}