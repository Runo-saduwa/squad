import React from 'react';
import './Hero.scss';
import screenMockUp from '../../images/screen-mockups.svg';

const Hero = () => {
	return (
		<section className="heroSection">
			<div className="heroContainer">
				<h1 className="heroHeading">Manage and monitor your teams performance</h1>
				<p className="heroText">
					Squad makes project management and team performance monitoring painless. It helps teammates stay effective and productive.   
				</p>
				<button className="heroBtn">Get Started For Free</button>
				<div className="imgBox">
                <img className="heroImg" src={screenMockUp} alt="screenMockup" />
                </div>
			</div>
		</section>
	);
};

export default Hero;
