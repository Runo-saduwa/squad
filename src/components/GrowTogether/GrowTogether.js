import React from 'react';
import './GrowTogether.scss';
import growTogether from '../../images/illustration-grow-together.svg';
import topSvg from '../../images/bg-section-top-mobile-1.svg';
import bottomSvg from '../../images/bg-section-bottom-mobile-1.svg';
import topSvgDesk from '../../images/bg-section-top-desktop-1.svg';
import bottomSvgDesk from '../../images/bg-section-bottom-desktop-1.svg';

const GrowTogether = (props) => {
    return (
       <>
         <div className="svgContainer">
         <picture className="topPicture">
             <source className="topBigSvg" media="(min-width: 400px)" srcSet={topSvgDesk}/>
             <source className="topSmallSvg" media="(min-width: 350px)" srcSet={topSvg}/>
             <img src={topSvg} alt="svgs"/>
          </picture>
         </div>
        <section className="growTogether">
           <div className="growTogetherImg">
             <img className="growTogether" src={growTogether} alt="grow"/>
           </div>
           <div className="growTogetherContent">
              <h1>Grow together</h1>
              <p>
              Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. 
              </p>
           </div>
        </section>
        <div className="svgContainer">
        <picture>
             <source media="(min-width: 400px)" srcSet={bottomSvgDesk}/>
             <source className="bottomSmallSvg" media="(min-width: 350px)" srcSet={bottomSvg}/>
             <img src={bottomSvg} alt="svgs"/>
          </picture>
        </div>
       
       </>
    )
}


export default GrowTogether;