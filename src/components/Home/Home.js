import React, {Fragment} from 'react';
import './Home.scss';


import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import StatSection from '../StatSection/StatSection';
import GrowTogether from '../GrowTogether/GrowTogether';
import FlowingConvo from '../FlowingConvo/FlowingConvo';
import UserSection from '../UserSection/UserSection';
import Prefooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <Fragment>
        <NavBar />
        <main>
            <Hero />
            <StatSection />
            <GrowTogether />
            <FlowingConvo />
            <UserSection />
            <Prefooter />
            <Footer />
        </main>
    </Fragment>
    )
}


export default Home;