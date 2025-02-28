const About = () => {
  return (
    <div className="page-container">
      <div className="container mt-5">
        <h1 className="text-center mb-4">Sobre o Sistema</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Sistema de Gerenciamento de Categorias</h5>
                <p className="card-text">
                  Este sistema foi desenvolvido para facilitar o gerenciamento de categorias,
                  permitindo que os usuários possam criar, editar e excluir categorias de forma
                  simples e intuitiva.
                </p>
                <h6 className="mt-4">Funcionalidades:</h6>
                <ul>
                  <li>Criação de novas categorias</li>
                  <li>Edição de categorias existentes</li>
                  <li>Exclusão de categorias</li>
                  <li>Visualização em formato de tabela</li>
                  <li>Identificação do usuário antes de cada operação</li>
                </ul>
                <h6 className="mt-4">Tecnologias Utilizadas:</h6>
                <ul>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Bootstrap</li>
                  <li>Bootstrap Icons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
