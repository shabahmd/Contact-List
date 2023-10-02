import { useState } from 'react';


const ContactCard = () => {

    const [showAge, setShowAge] = useState(false);

    return (
        <div className='contact-card'>
            <img src="https://via.placeholder.com/150" alt="dany"></img>
            <div className='user-details'>
                <p>Name: Jenny Man</p>
                <p>Email: shahabahmed1923@gmail.com</p>
                <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>
                {showAge && <p>25</p>}
            </div>
        </div>
    )
}

export default ContactCard;
