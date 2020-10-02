import Head from 'next/head'
import { motion } from 'framer-motion'
import { useTheme } from '../components/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/Layout';
import classes from '../styles/Work.module.css'

const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default function Work({ content }) {
    const theme = useTheme()

    const styles = {
        color: theme === 'light' ? { color: '#333' } : { color: "white" },
        live: theme === 'light' ? { color: '#4641a5' } : { color: "#a77dd1" },
        tag: theme === 'light' ? { backgroundColor: "#88bee7" } : { backgroundColor: "#524e94" },
        colorH3: theme === 'light' ? { color: '#676767' } : { color: "#8c8989" },
    }

    return (
        <Layout>
            <Head>
                <title>Varun Singh | Projects {'&'} Work</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <section className={classes.sec} style={styles.color}>
                    <h1>Some of my Projects</h1>
                    <ul>
                        {content.map((item) => (
                            <motion.li whileHover={{ scale: 1.05 }} key={item.sys.id}>
                                <div className={classes.img}>
                                    <img src={item.fields.sample.fields.file.url} alt={item.fields.sample.fields.file.details.title} />
                                </div>
                                <div style={{ width: "100%", marginTop: "1rem" }}>
                                    {item.fields.type.tag.map((tag, index) => (
                                        <span style={styles.tag} className={classes.tag} key={index}>{tag}</span>
                                    ))}
                                </div>
                                <h1 className={classes.h1}>{item.fields.heading}</h1>
                                <br />
                                <p>{item.fields.description}</p>
                                <br />
                                <div className={classes.bottom}>
                                    {item.fields.type.type === 'dev' ? <motion.a whileHover={{ scale: 1.1 }} className={classes.link} style={styles.live} target="_blank" rel="external nofollow" href={item.fields.type.sourcelink}>Source Code<FontAwesomeIcon className={classes.icon} icon={brands.faGithub} /></motion.a> : <motion.a whileHover={{ scale: 1.1 }} target="_blank" rel="external nofollow" href={item.fields.type.sourcelink}><FontAwesomeIcon icon={brands.faDribbble} /></motion.a>}
                                    <motion.a whileHover={{ scale: 1.1 }} style={styles.live} className={classes.link} href={item.fields.type.workinglink} target="_blank" rel="external nofollow">See Live<FontAwesomeIcon className={classes.icon} icon={icons.faEye} /></motion.a>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </motion.div>
        </Layout>
    )
}

export async function getStaticProps() {
    const content = await client.getEntries({ content_type: 'portfoliowork', order: 'sys.createdAt' })

    return {
        props: {
            content: content.items
        }
    }
}