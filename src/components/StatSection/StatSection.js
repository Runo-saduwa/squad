import React, {useState} from 'react';
import './StatSection.css';
import communities from '../../images/icon-communities.svg';
import messages from '../../images/icon-messages.svg';
const initialData = [{
    id: '1',
    logo: communities,
    stat: '1.4k+',
    description: 'communities formed'
},
{
    id: '2',
    logo: messages,
    stat: '2.7m+',
    description: 'mesages sent'
}
] 
const StatSection = () => {
    const [data] = useState(initialData)
    return (
        <section className="statSection">
             {data.map(stat => {
                return ( <div className="statBlock" key={stat.id}>
                    {/* <img className="statLogo" src={stat.logo} alt="stat-logo"/> */}
                    <h1 className="stat">
                
                        {stat.stat}</h1>
                    <p className="statDescription">{stat.description}</p>
                </div>)
             })}
        </section>
    )
}


export default StatSection;