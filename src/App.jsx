import ContactCard from './ContactCard'
import "./App.css"

const App = () => {
  return (
    <div>
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="jenn Man"
        email="Jenny the hoe@email.com"
        age={65}
      />

      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="china Man"
        email="Forest the simp@email.com"
        age={235}
      />

      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="paki Man"
        email="shahab the simp@email.com"
        age={225}
      />
    </div>
  )
}

export default App
