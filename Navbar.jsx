//wara ntem fridz eliezer

import { NavLink } from 'react-router-dom'

function Navbar() {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#fff',
    background: '#333',
    padding: '4px 8px',
    borderRadius: '4px'
  }

  return (
    <nav style={{ background: '#f0f0f0', padding: '12px', marginBottom: '20px' }}>
      <NavLink
        to="/"
        end
        style={({ isActive }) => (isActive ? activeStyle : { margin: '0 10px' })}
      >
        Home
      </NavLink>
    </nav>
  )
}

export default Navbar
