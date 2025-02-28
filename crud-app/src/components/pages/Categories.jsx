import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryTable from '../CategoryTable'

const Categories = () => {
  const navigate = useNavigate()
  const [items, setItems] = useState([])

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este item?')) {
      try {
        // Aqui você vai adicionar a chamada para sua API/Backend
        // await api.delete(`/categorias/${id}`)
        
        setItems(items.filter(item => item.id !== id))
        alert('Item deletado com sucesso!')
      } catch (error) {
        console.error('Erro ao deletar:', error)
        alert('Erro ao deletar o item')
      }
    }
  }

  const handleEdit = (item) => {
    navigate(`/categorias/${item.id}/editar`)
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Lista de Categorias</h1>
          <button 
            className="btn btn-success"
            onClick={() => navigate('/categorias/novo')}
          >
            <i className="bi bi-plus-circle"></i> Nova Categoria
          </button>
        </div>
        
        <CategoryTable 
          items={items}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default Categories
