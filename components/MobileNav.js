import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTheme, useDispatchTheme } from '../components/context'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'

import classes from '../styles/Layout.module.css';

function MobileNav(props) {
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
        asideUlLi: theme === 'light' ? { color: "#555555" } : { color: "rgb(221, 221, 221)" },
    }

    return (
        <div className={classes.mob} style={styles.background}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="MERN, Web Developer, Web Designer, HTML, CSS, Javascript, JS, ReactJS, NodeJS, ExpressJS" />
                <meta name="author" content="Varun Singh" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            </Head>
            <div className={classes.cross} style={styles.ulLiButton} onClick={props.open}><FontAwesomeIcon style={{ width: "2rem" }} icon={icons.faTimes} /></div>
            <div>
                <ul className={classes.ul1}>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={styles.colorLi} className={router.pathname === '/' ? classes.active : ''}>
                        <Link href="/" onClick={props.open}>Home</Link>
                    </motion.li>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={styles.colorLi} className={router.pathname === '/about' ? classes.active : ''}>
                        <Link href="/about" onClick={props.open}>About</Link>
                    </motion.li>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={styles.colorLi} className={router.pathname === '/work' ? classes.active : ''}>
                        <Link href="/work" onClick={props.open}>Work</Link>
                    </motion.li>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={styles.colorLi} className={router.pathname === '/blog' ? classes.active : ''}>
                        <Link href="/blog" onClick={props.open}>Blog</Link>
                    </motion.li>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.5 }} style={styles.colorLi}>
                        <button onClick={handleTheme} style={{ ...styles.ulLiButton, borderRadius: '50px' }}>
                            {theme === 'light' ? <FontAwesomeIcon icon={icons.faSun} /> : <FontAwesomeIcon icon={icons.faMoon} />}
                        </button>
                    </motion.li>
                </ul>
            </div>
            <div className={classes.social} style={styles.background}>
                <ul>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.7 }} style={styles.asideUlLi}>
                        <a target="_blank" href="http://www.github.com/varun14gb"><FontAwesomeIcon icon={brands.faGithub} /></a>
                    </motion.li>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.8 }} style={styles.asideUlLi}>
                        <a target="_blank" href="http://www.linkedin.com/in/varun-singh-968371193/"><FontAwesomeIcon icon={brands.faLinkedin} /></a>
                    </motion.li>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 0.9 }} style={styles.asideUlLi}>
                        <a target="_blank" href="http://api.whatsapp.com/send?phone=+918527058209"><FontAwesomeIcon icon={brands.faWhatsapp} /></a>
                    </motion.li>
                    <motion.li whileTap={{ scale: 0.8 }} initial={{ y: 10, scale: 0.6, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ delay: 1 }} style={styles.asideUlLi}>
                        <a target="_blank" href="mailto:varun14gb@gmail.com"><FontAwesomeIcon icon={icons.faEnvelope} /></a>
                    </motion.li>
                </ul>
            </div>
        </div>
    );
}

export default MobileNav;