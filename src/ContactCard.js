import { React, useState } from 'react';


const ContactCard = (props) => {

    const [showAge, setShowAge] = useState(false);

    return (
        <div className='contact-card'>
            <img src={props.avatarUrl} alt="dany"></img>
            <div className='user-details'>

                <p>{props.name}</p>
                <p>{props.email}</p>
                <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>

                {showAge && props.age}


            </div>


        </div>
    )
}

export default ContactCard;
