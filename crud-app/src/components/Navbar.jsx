import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/categorias">
          <i className="bi bi-grid-3x3-gap"></i> Sistema de Categorias
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
