// wara ntem fridz eliezer

// Link vs a permet a React Router de gerer la navigation en interne sans declencher une requete http de rafraichissement
//Route Dynamique ( c'est une route comme /proflide/:id  qui utilise id  comme parametre vaariable permettant d'afficher les donner dynamiques basees sur l'identifiant
//Navigation Programmatique c'est une navigation qui effectue une redirection vers une route definie 

import { Routes, Route } from 'react-router-dom'
import Navbar from './composent/NavBar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

const users = [
  { id: '1', name: 'Alice Nguyen', role: 'Instructor', bio: 'Loves React and coffee.' },
  { id: '2', name: 'Brian Okafor', role: 'Student', bio: '' },
  { id: '3', name: 'Carla Mendes', role: 'Admin', bio: '' },
  { id: '4', name: 'David Kim', role: 'Student', bio: '' },
  { id: '5', name: 'Efe Eze', role: 'Instructor', bio: '' },
  { id: '6', name: 'Felipe Silva', role: 'Student', bio: '' }
]

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/profile/:id" element={<Profile users={users} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
