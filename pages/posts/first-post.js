import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    const postsInfo = { data: 'getStaticProps data' };

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            postsInfo
        }
    };
}
export default function FirstPost({ postsInfo }) {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>First Post</h1>
            {/* <img src="/images/profile.jpg" alt="Your Name" /> */}
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <div>
                <h3>{postsInfo.data}</h3>
            </div>
        </Layout>
    );
}
