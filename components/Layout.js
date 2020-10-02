import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'

import { useTheme, useDispatchTheme } from '../components/context'
import MobileNav from './MobileNav';
import classes from '../styles/Layout.module.css';

function Layout(props) {
    const [open, setOpen] = useState(false);
    const theme = useTheme()
    const dispatch = useDispatchTheme()

    const router = useRouter();

    const handleTheme = (event) =>
        dispatch({
            type: 'TOGGLE',
        })
    const styles = {
        background: theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: "rgb(43, 43, 43)" },
        colorLi: theme === 'light' ? { color: "rgb(43, 43, 43)" } : { color: "rgb(219, 219, 219)" },
        ulLiButton: theme === 'light' ? { color: "black" } : { color: "white" },
        active: theme === 'light' ? { color: "black" } : { color: "rgb(255, 255, 255)" },
        aside: theme === 'light' ? { backgroundColor: "#efefef" } : { backgroundColor: "#554F4F" },
        asideUlLi: theme === 'light' ? { color: "#555555" } : { color: "rgb(221, 221, 221)" },
    }
    return (open === true ? <MobileNav open={() => setOpen(false)} /> : (<div className={classes.container} style={styles.background}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="MERN, Web Developer, Web Designer, HTML, CSS, Javascript, JS, ReactJS, NodeJS, ExpressJS" />
            <meta name="author" content="Varun Singh" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <Link href="/">
                    <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
                        <svg className={classes.logo} viewBox="0 0 134 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="67" cy="64.5" rx="67" ry="64.5" fill="#554F4F" />
                            <path d="M15.16 42.96H33.24L41.72 77.28L50.2 42.96H69.08L51.88 98H31.48L15.16 42.96ZM90.99 99.28C83.47 99.28 77.1233 97.8933 71.95 95.12L75.95 82.72C81.4433 84.6933 86.35 85.68 90.67 85.68C93.0167 85.68 94.7233 85.4133 95.79 84.88C96.91 84.2933 97.47 83.44 97.47 82.32C97.47 81.5733 97.1767 80.9333 96.59 80.4C96.0033 79.8133 94.83 79.1733 93.07 78.48C91.31 77.7867 88.67 76.9333 85.15 75.92C80.83 74.64 77.47 72.56 75.07 69.68C72.67 66.7467 71.47 63.3867 71.47 59.6C71.47 53.7333 73.39 49.3067 77.23 46.32C81.1233 43.28 86.35 41.76 92.91 41.76C96.3233 41.76 99.6833 42.1333 102.99 42.88C106.297 43.5733 109.23 44.6133 111.79 46L107.47 58.08C104.483 57.0667 101.87 56.3467 99.63 55.92C97.4433 55.44 95.31 55.2 93.23 55.2C89.71 55.2 87.95 56.16 87.95 58.08C87.95 59.04 88.51 59.8667 89.63 60.56C90.8033 61.2 93.1767 62.0267 96.75 63.04C102.35 64.5333 106.59 66.8267 109.47 69.92C112.35 72.96 113.79 76.6133 113.79 80.88C113.79 86.8 111.87 91.36 108.03 94.56C104.19 97.7067 98.51 99.28 90.99 99.28Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M72.3831 64.9965C74.4188 65.3573 76.4161 65.7064 78.3711 66.0482C92.2133 68.4681 103.934 70.5172 112.149 73.6899C113.243 75.8537 113.79 78.2503 113.79 80.88C113.79 86.8 111.87 91.36 108.03 94.56C104.19 97.7067 98.51 99.28 90.99 99.28C83.47 99.28 77.1233 97.8933 71.95 95.12L75.95 82.72C81.4433 84.6933 86.35 85.68 90.67 85.68C93.0167 85.68 94.7233 85.4133 95.79 84.88C96.91 84.2933 97.47 83.44 97.47 82.32C97.47 81.5733 97.1767 80.9333 96.59 80.4C96.0033 79.8133 94.83 79.1733 93.07 78.48C91.31 77.7867 88.67 76.9333 85.15 75.92C80.83 74.64 77.47 72.56 75.07 69.68C73.8787 68.224 72.983 66.6628 72.3831 64.9965ZM46.0468 59.7687C51.7755 61.0828 57.3617 62.2165 62.7436 63.2364L51.88 98H31.48L17.7905 51.8316C24.2147 54.0265 30.5886 55.8958 36.8376 57.52L41.72 77.28L46.0468 59.7687Z" fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="-23.5" y1="45.5" x2="127" y2="108" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#8439BE" stopOpacity="0.67" />
                                    <stop offset="1" stopColor="#3AAEE0" stopOpacity="0.64" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                </Link>
                <ul className={classes.ul}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        textDecoration: router.pathname === '/' ? 'none' : 'underline',
                        textDecorationColor: '#9C99DD'
                    }}
                        style={styles.colorLi}
                        className={router.pathname === '/' ? classes.active : ''}>
                        <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li whileHover={{
                        scale: 1.1,
                        textDecoration: router.pathname === '/about' ? 'none' : 'underline',
                        textDecorationColor: '#9C99DD'
                    }} style={styles.colorLi} className={router.pathname === '/about' ? classes.active : ''}>
                        <Link href="/about">About</Link>
                    </motion.li>
                    <motion.li whileHover={{
                        scale: 1.1,
                        textDecoration: router.pathname === '/work' ? 'none' : 'underline',
                        textDecorationColor: '#9C99DD'
                    }} style={styles.colorLi} className={router.pathname === '/work' ? classes.active : ''}>
                        <Link href="/work">Work</Link>
                    </motion.li>
                    <motion.li whileHover={{
                        scale: 1.1,
                        textDecoration: router.pathname === '/blog' ? 'none' : 'underline',
                        textDecorationColor: '#9C99DD'
                    }} style={styles.colorLi} className={router.pathname === '/blog' ? classes.active : ''}>
                        <Link href="/blog" >Blog</Link>
                    </motion.li>
                    <li style={styles.colorLi}>
                        <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} onClick={handleTheme} style={{ ...styles.ulLiButton, borderRadius: '50px' }}>
                            {theme === 'light' ? <FontAwesomeIcon icon={icons.faSun} /> : <FontAwesomeIcon icon={icons.faMoon} />}
                        </motion.button>
                    </li>
                </ul>
            </nav>
            <motion.button whileHover={{ scale: 1.2, }} whileTap={{ scale: .9 }} onClick={() => setOpen(true)} className={classes.burger}><FontAwesomeIcon style={{ ...styles.colorLi, width: "1.8rem" }} icon={icons.faEquals} /></motion.button>
        </header>
        <aside style={styles.aside}>
            <motion.ul initial={{ x: 100 }} animate={{ x: 0 }} transition={{ staggerChildren: 60, delayChildren: 200, duration: 0.3 }} >
                <motion.li whileHover={{ scale: 1.2 }} style={styles.asideUlLi}>
                    <a target="_blank" href="http://www.github.com/varun14gb" rel="external nofollow"><FontAwesomeIcon icon={brands.faGithub} /></a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }} style={styles.asideUlLi}>
                    <a target="_blank" href="http://www.linkedin.com/in/varun-singh-968371193/" rel="external nofollow"><FontAwesomeIcon icon={brands.faLinkedin} /></a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }} style={styles.asideUlLi}>
                    <a target="_blank" href="http://api.whatsapp.com/send?phone=+918527058209" rel="external nofollow"><FontAwesomeIcon icon={brands.faWhatsapp} /></a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }} style={styles.asideUlLi}>
                    <a target="_blank" href="mailto:varun14gb@gmail.com" rel="external nofollow"><FontAwesomeIcon icon={icons.faEnvelope} /></a>
                </motion.li>
            </motion.ul>
        </aside>
        <main>
            {props.children}
        </main>
        <footer>
            Created with<FontAwesomeIcon icon={icons.faHeart} style={{ width: "1.6rem", color: "red", margin: "0 0.6rem" }} /> by <a href="https://varun14gb.github.io" target="_blank">Varun Singh</a>
        </footer>
    </div>))

}

export default Layout;