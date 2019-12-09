import React from 'react';
import './Footer.scss';



const Footer = () => {
	return (
		<footer>
			<div className="footerSvg" />
			<div className="footerContainer">
				<div className="footerGrid">
					<h3 className="newsLetter">Newsletter</h3>
					<p className="newsletterDesc">
						Newsletter To recieve tips on how to grow your community, sign up to our weekly newsletter
					</p>
					<form>
						<input type="text" className="newsletterInput" />
						<button className="newsletterSubmit">subscribe</button>
					</form>
				</div>
				<div className="footerGrid">
        
					<div className="socials">
					<a className="" href="#github">
						<i className="fab fa-github" />
					</a>
					<a className="" href="#github">
						<i className="fab fa-linkedin" />
					</a>
					<a className="" href="#github">
						<i className="fab fa-twitter" />
					</a>
					<a className="" href="#github">
						<i className="fab fa-facebook-f" />
					</a>
                    </div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
