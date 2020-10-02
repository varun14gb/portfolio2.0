import Head from 'next/head'
import { useTheme } from '../components/context'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/Layout';
import classes from '../styles/About.module.css'

export default function About() {
    const theme = useTheme()

    const styles = {
        color: theme === 'light' ? { color: '#333' } : { color: "white" },
        colorQ: theme === 'light' ? { color: '#676767' } : { color: "#454545" },
        quote: theme === 'light' ? { color: '#333' } : { color: "#898989" },
        icon: theme === 'light' ? { color: '#333' } : { color: "white" },
    }

    return (
        <Layout>
            <Head>
                <title>Varun Singh | About</title>
                <meta name="desciption" content="I am Varun Singh, and I am a Bachelor of Computer Sciene from University of Delhi, IN (August 2018 - June 2021). I am a MERN stack developer who loves to design and code. I am working with web technologies from 2+ years. I am proficient in many web related technologies - both frontend and backend and few design tools." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <section className={classes.sec} style={styles.color}>
                    <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .6 }}>About Me</motion.h1>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .6 }} className={classes.quote}>
                        <i><span className={classes.quotation} style={styles.colorQ}>&#8220; </span><span className={classes.quoteText} style={styles.quote}><motion.i initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transform={{ duration: .6, delay: .6 }}>Learning Never Stops</motion.i></span><span className={classes.quotation} style={styles.colorQ}> &#x201D;</span></i>
                    </motion.div>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .9 }}>I am Varun Singh, and I am a Bachelor of Computer Science from University of Delhi, IN (August 2018 - June 2021). I am a MERN stack developer who loves to design and code. I am working with web technologies from 2+ years. I am proficient in many web related technologies - both frontend and backend and few design tools.</motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: 1.1 }}>Skills</motion.h1>
                    <div className={classes.skills}>
                        <motion.div whileHover={{ scale: 1.1 }} style={{ backgroundImage: "url('/abbg1.svg')" }}>
                            <h2>Languages I speak<FontAwesomeIcon className={classes.icon} icon={icons.faSpellCheck} /></h2>
                            <ul>
                                <li>Javascipt<FontAwesomeIcon className={classes.icon1} icon={brands.faJs} /></li>
                                <li>C++<FontAwesomeIcon className={classes.icon1} icon={brands.faCuttlefish} /></li>
                                <li>English<FontAwesomeIcon className={classes.icon1} icon={icons.faLanguage} /></li>
                                <li>Hindi<FontAwesomeIcon className={classes.icon1} icon={icons.faLanguage} /></li>
                            </ul>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} style={{ backgroundImage: "url('/abbg2.svg')" }}>
                            <h2>Technologies I know<FontAwesomeIcon className={classes.icon} icon={icons.faCircleNotch} /></h2>
                            <ul>
                                <li>HTML/CSS<FontAwesomeIcon className={classes.icon1} icon={brands.faCss3} /></li>
                                <li>ReactJS<FontAwesomeIcon className={classes.icon1} icon={brands.faReact} /></li>
                                <li>NodeJS<FontAwesomeIcon className={classes.icon1} icon={brands.faNodeJs} /></li>
                                <li>ExpressJS<FontAwesomeIcon className={classes.icon1} icon={brands.faWpexplorer} /></li>
                                <li>MongoDB<FontAwesomeIcon className={classes.icon1} icon={icons.faDatabase} /></li>
                            </ul>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} style={{ backgroundImage: "url('/abbg3.svg')" }}>
                            <h2>Tools I use<FontAwesomeIcon className={classes.icon} icon={icons.faTools} /></h2>
                            <ul>
                                <li>VS Code<FontAwesomeIcon className={classes.icon1} icon={brands.faMicrosoft} /></li>
                                <li>Git<FontAwesomeIcon className={classes.icon1} icon={brands.faGit} /></li>
                                <li>XD<FontAwesomeIcon className={classes.icon1} icon={brands.faBuromobelexperte} /></li>
                                <li>Illustrator<FontAwesomeIcon className={classes.icon1} icon={brands.faAdversal} /></li>
                                <li>Figma<FontAwesomeIcon className={classes.icon1} icon={brands.faFigma} /></li>
                            </ul>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </Layout>
    )
}
