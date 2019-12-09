import React from 'react';
import './FlowingConvo.scss';
import img from '../../images/illustration-flowing-conversation.svg'


const FlowingConvo = () => {
    return (
        <>
       <section className="flowingConvo">
          <div className="flowingConvoImg">
            <img src={img} alt="coversation"/>
          </div>
          <div className="content">
             <h1>Flowing Conversations</h1>
             <p>
             You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
             </p>
          </div>
       </section>
      </> 
    )
}


export default FlowingConvo;