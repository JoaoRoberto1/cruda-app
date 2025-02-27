const CategoryTable = ({ items, onEdit, onDelete }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ width: '10%' }}>ID</th>
                <th scope="col" style={{ width: '25%' }}>Nome</th>
                <th scope="col" style={{ width: '15%' }}>Imagem</th>
                <th scope="col" style={{ width: '35%' }}>Descrição</th>
                <th scope="col" style={{ width: '15%' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-5">
                    <div className="py-5">
                      <i className="bi bi-inbox fs-1 text-muted d-block mb-3"></i>
                      <h5 className="text-muted mb-3">Nenhuma categoria encontrada</h5>
                      <p className="text-muted mb-0">Clique em "Adicionar Nova Categoria" para começar</p>
                    </div>
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>
                      {item.img_url && (
                        <img 
                          src={item.img_url} 
                          alt={item.nome} 
                          className="rounded"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                      )}
                    </td>
                    <td>{item.descricao}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => onEdit(item)}
                        data-bs-toggle="modal" 
                        data-bs-target="#editModal"
                      >
                        <i className="bi bi-pencil-square"></i> Editar
                      </button>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => onDelete(item.id)}
                      >
                        <i className="bi bi-trash"></i> Excluir
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CategoryTable
