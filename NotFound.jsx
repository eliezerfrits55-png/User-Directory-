import { useEffect } from 'react'

function NotFound() {
  useEffect(() => {
    document.title = '404 - Page non trouvée'
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>La page que vous cherchez n'existe pas.</p>
    </div>
  )
}

export default NotFound;
