import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import './App.css';

const App = () => {

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      {results.map((contact, key) => (
        <div key={key}>
          <ContactCard
            avatarUrl={contact.avatarUrl}
            name={contact.name}
            email={contact.email}
            age={contact.age}
          />
        </div>
      ))}
    </div>
  );
};

export default App;

hamza is a fucking fagot 
whatnthe fuck is my life
