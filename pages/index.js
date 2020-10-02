import Head from 'next/head'
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'

import { useTheme } from '../components/context'
import Layout from '../components/Layout';
import classes from '../styles/Home.module.css'

export default function Home() {
  const theme = useTheme()

  const styles = {
    color: theme === 'light' ? { color: '#333' } : { color: "white" },
    colorH3: theme === 'light' ? { color: '#676767' } : { color: "#8c8989" },
    icon: theme === 'light' ? { color: '#333' } : { color: "white" },
  }

  return (
    <Layout>
      <Head>
        <title>Varun Singh | Web Developer</title>
        <meta name="desciption" content="Varun Singh is an undergraduate CS student, web developer and UI/UX designer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section >
          <div className={classes.container} style={styles.color}>
            <div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .6 }} >Hi!<br />I am Varun Singh.</motion.h1>
            </div>
            <div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6, duration: .6 }}>UI/UX designer and Web Developer</motion.h2>
              <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9, duration: .6 }} style={styles.colorH3}>Building Web Experiences for Everyone</motion.h3>
            </div>
          </div>
        </section>
        <section className={classes.section} >
          <div className={classes.hc}>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: .6 }} className={classes.h1} style={styles.color}>
              Things I Can Do
        </motion.h1>
          </div>
          <div className={classes.con}>
            <motion.div whileHover={{ scale: 1.4 }} style={{ ...styles.color, backgroundImage: "url('/sbg1.svg')" }}>
              <h2>Design<FontAwesomeIcon className={classes.icon} icon={icons.faPenNib} /></h2>
              <ul>
                <li>Logo Design <FontAwesomeIcon className={classes.icon1} icon={brands.faArtstation} /></li>
                <li>Mobile Design <FontAwesomeIcon className={classes.icon1} icon={brands.faAndroid} /></li>
                <li>Web Design <FontAwesomeIcon className={classes.icon1} icon={icons.faCode} /></li>
                <li>Vector Portraits <FontAwesomeIcon className={classes.icon1} icon={brands.faOdnoklassnikiSquare} /></li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.4 }} style={{ ...styles.color, backgroundImage: "url('/sbg2.svg')" }}>
              <h2>Development<FontAwesomeIcon className={classes.icon} icon={icons.faDesktop} /></h2>
              <ul  >
                <li>Single Page Application <FontAwesomeIcon className={classes.icon1} icon={brands.faReact} /></li>
                <li>Frontend Development <FontAwesomeIcon className={classes.icon1} icon={brands.faHtml5} /></li>
                <li>Backend Development <FontAwesomeIcon className={classes.icon1} icon={brands.faNodeJs} /></li>
                <li>Hybrid Mobile App <FontAwesomeIcon className={classes.icon1} icon={brands.faSimplybuilt} /></li>
              </ul>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}
