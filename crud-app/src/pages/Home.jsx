import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 mb-4">Bem-vindo ao Sistema de Categorias</h1>
          <p className="lead mb-5">
            Gerencie suas categorias de forma simples e eficiente
          </p>
          <div className="d-grid gap-3 col-lg-6 mx-auto">
            <Link to="/categorias" className="btn btn-primary btn-lg">
              <i className="bi bi-grid"></i> Gerenciar Categorias
            </Link>
            <Link to="/sobre" className="btn btn-outline-secondary btn-lg">
              <i className="bi bi-info-circle"></i> Sobre o Sistema
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
