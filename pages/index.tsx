import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';
import FeaturesBlocks from '../components/featuresBlocks';
import Testimonials from '../components/testimonials';
import Newsletter from '../components/newsletter';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
            <Newsletter />
        </Layout>
    );
}
