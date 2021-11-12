import { useState } from "react";

import styles from './Navbar.module.css';

import { Link } from 'react-scroll';


export default function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    let window = global.window;

    const changeNavbarColor = () => {
        if (window.scrollY >= 180) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window?.addEventListener('scroll', changeNavbarColor);

    return (
        <header className={styles.header}>
            <nav className={colorChange ? styles.navbar_colorchange : styles.navbar}>
                <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.navlogo}
                >
                    <h6 className={styles.navlogo}>Prplogue Labs</h6>
                </Link>
                <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={styles.navitem}>
                        <Link
                            to="howework"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={styles.navlink}
                            activeClass="active"
                        >
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={styles.navlink}
                            activeClass="active"
                        >
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>About</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={styles.navlink}
                            activeClass="active"
                        >
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contact</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={styles.navlink}
                            activeClass="active"
                        >
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contact</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={styles.navlink}
                            activeClass="active"
                        >
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contact</a>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ?
                    styles.hamburger : styles.hamburger + ' ' + styles.active}
                    onClick={openMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </header>
    );
}