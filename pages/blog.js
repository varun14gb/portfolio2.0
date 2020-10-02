import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '../components/context'
import Layout from '../components/Layout';
import classes from '../styles/Blog.module.css'

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
                <title>Varun Singh | Blogs</title>
                <meta name="description" content="Some of Varun Singh's Blogs" />
            </Head>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <section className={classes.sec} style={styles.color}>
                    <h1 className={classes.h1}>Blogs</h1>
                    <ul>
                        {content.map((item) => (
                            <Link key={item.sys.id} href={`/blogs/${item.fields.slug}`}>
                                <motion.li whileTap={{ scale: 0.9 }} className={classes.li}>
                                    <div className={classes.img}>
                                        <img src={item.fields.coverImage.fields.file.url} alt={item.fields.coverImage.fields.file.details.title} />
                                    </div>
                                    <div className={classes.content}>
                                        <h1 className={classes.h2}>{item.fields.heading}</h1>
                                        <p style={styles.colorH3}>{new Date(item.fields.date).toDateString()}</p>
                                        <p>{item.fields.shortDescription}</p>
                                        <Link href={`/blogs/${item.fields.slug}`}><span style={styles.live}>Read More--</span></Link>
                                    </div>
                                    <br />
                                    <br />
                                </motion.li>
                            </Link>
                        ))}
                    </ul>
                </section>
            </motion.div>
        </Layout>
    )
}

export async function getStaticProps() {
    const content = await client.getEntries({ content_type: 'portfolio', order: 'sys.createdAt' })
    return {
        props: {
            content: content.items
        }
    }
}