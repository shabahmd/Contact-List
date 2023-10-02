import { useState } from 'react';


const ContactCard = () => {

    const [showAge, setShowAge] = useState(false);

    return (
        <div className='contact-card'>
            <img src="https://via.placeholder.com/150" alt="dany"></img>
            <div className='user-details'>
