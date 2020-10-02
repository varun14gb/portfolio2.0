import Head from 'next/head'
import { useEffect, useState } from "react";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";
import { useTheme } from '../../components/context'
import Layout from '../../components/Layout';
import classes from '../../styles/SingleBlog.module.css'

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const Bold = ({ children }) => <span className="bold">{children}</span>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
    }
};

export default function Post({ postData }) {
    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);
    const theme = useTheme()
    const styles = {
        color: theme === 'light' ? { color: '#333' } : { color: "white" },
        live: theme === 'light' ? { color: '#4641a5' } : { color: "#a77dd1" },
        tag: theme === 'light' ? { backgroundColor: "#88bee7" } : { backgroundColor: "#524e94" },
        colorH3: theme === 'light' ? { color: '#676767' } : { color: "#8c8989" },
    }
    return (
        < Layout>
            <Head>
                <title>Varun Singh | {postData.fields.heading}</title>
                <meta name="description" content={postData.fields.shortDescription} />
            </Head>
            <motion.div className={classes.scroll}>
                <svg className="progress-icon" viewBox="0 0 60 60">
                    <motion.path
                        fill={theme === 'dark' ? "rgb(43, 43, 43)" : "white"}
                        strokeWidth="5"
                        stroke={styles.color.color}
                        strokeDasharray="0 1"
                        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                        style={{
                            pathLength,
                            rotate: 90,
                            translateX: 5,
                            translateY: 5,
                            scaleX: -1
                        }}
                    />
                    <motion.path
                        fill={theme === 'dark' ? "rgb(43, 43, 43)" : "white"}
                        strokeWidth="5"
                        stroke={styles.color.color}
                        d="M14,26 L 22,33 L 35,16"
                        initial={false}
                        strokeDasharray="0 1"
                        animate={{ pathLength: isComplete ? 1 : 0 }}
                    />
                </svg>
            </motion.div>
            <motion.section initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ duration: .1 }} className={classes.sec} style={{ ...styles.color }}>
                <img className={classes.img} src={postData.fields.coverImage.fields.file.url} alt={postData.fields.coverImage.fields.file.details.title} />
                <div className={classes.content}>
                    <h1 className={classes.h1}>{postData.fields.heading}</h1>
                    <p style={styles.colorH3}>{new Date(postData.fields.date).toDateString()}</p>
                    {documentToReactComponents(postData.fields.content, options)}
                </div>
            </motion.section>
        </Layout >
    )
}


export async function getStaticPaths() {
    const content = await client.getEntries({ content_type: 'portfolio' })
    var paths = [];
    content.items.forEach(item => { paths.push(item.fields.slug) })
    paths = paths.map(path => {
        return {
            params: {
                id: path
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(id) {
    const content = await client.getEntries({ content_type: 'portfolio', 'fields.slug': id.params.id })
    return {
        props: {
            postData: content.items[0]
        }
    }
}