import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryTable from '../components/CategoryTable'

const Categories = () => {
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [editingItem, setEditingItem] = useState(null)
  const [userInfo, setUserInfo] = useState({ nome: '', email: '', idade: '' })
  const [step, setStep] = useState(1)

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

  const validateUserInfo = () => {
    if (!userInfo.nome?.trim()) {
      alert('O nome é obrigatório!')
      return false
    }
    if (!userInfo.email?.trim()) {
      alert('O email é obrigatório!')
      return false
    }
    if (!userInfo.idade || userInfo.idade < 0) {
      alert('A idade deve ser um número positivo!')
      return false
    }
    return true
  }

  const handleNextStep = () => {
    if (validateUserInfo()) {
      setStep(2)
    }
  }

  const handleSave = async () => {
    try {
      if (!editingItem.nome?.trim()) {
        alert('O nome da categoria é obrigatório!')
        return
      }

      setItems(items.map(item => 
        item.id === editingItem.id ? editingItem : item
      ))
      
      setEditingItem(null)
      setUserInfo({ nome: '', email: '', idade: '' })
      setStep(1)
      alert('Item atualizado com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar:', error)
      alert('Erro ao atualizar o item')
    }
  }

  const handleCloseModal = () => {
    setStep(1)
    setUserInfo({ nome: '', email: '', idade: '' })
    setEditingItem(null)
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
