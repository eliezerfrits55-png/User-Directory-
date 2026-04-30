//wara ntem fridz eliezer
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home({ users }) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.title = 'User Directory - Home'
  }, [])

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Rechercher un utilisateur..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '250px' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filtered.map(user => (
          <div key={user.id} style={{ border: '1px solid #ccc', padding: '12px', width: '200px' }}>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <Link to={`/profile/${user.id}`}>Voir le profil</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
