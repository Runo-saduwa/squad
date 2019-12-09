import React from 'react';
import './UserSection.css';
import img from '../../images/illustration-your-users.svg';

import topSvg from '../../images/bg-section-top-mobile-2.svg';
import bottomSvg from '../../images/bg-section-bottom-mobile-2.svg';
import topSvgDesk from '../../images/bg-section-top-desktop-2.svg';
import bottomSvgDesk from '../../images/bg-section-bottom-desktop-2.svg';
const UserSection = (props) => {
    return (
       <>
         {/* <div className="topSvg"></div> */}
       <div className="svgContainer">
       <picture className="topPicture2">
             <source media="(min-width: 400px)" srcSet={topSvgDesk}/>
             <source className="topSmallSvg" media="(min-width: 350px)" srcSet={topSvg}/>
             <img src={topSvg} alt="svgs"/>
          </picture>
       </div>
        <section className="userSection">
           <div className="userSectionImg">
             <img src={img} alt="users"/>
           </div>
           <div className="userContent">
              <h1>Your Users</h1>
              <p>
              It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately
              </p>
           </div>
        </section>
        <div className="svgContainer">
        <picture className="secondPicture2">
             <source media="(min-width: 400px)" srcSet={bottomSvgDesk}/>
             <source className="secondTopSmallSvg" media="(min-width: 350px)" srcSet={bottomSvg}/>
             <img src={bottomSvg} alt="svgs"/>
          </picture>
        </div>
        {/* <div className="bottomSvg"></div> */}
       </>
    )
}


export default UserSection;