import { useState } from 'react'
import CategoryTable from '../components/CategoryTable'
import Modal from '../components/Modal'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Categories = () => {
  const [items, setItems] = useState([])
  const [editingItem, setEditingItem] = useState(null)
  const [userInfo, setUserInfo] = useState({ nome: '', email: '', idade: '' })
  const [step, setStep] = useState(1)

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este item?')) {
      try {
        setItems(items.filter(item => item.id !== id))
        alert('Item deletado com sucesso!')
      } catch (error) {
        console.error('Erro ao deletar:', error)
        alert('Erro ao deletar o item')
      }
    }
  }

  const handleEdit = (item) => {
    setEditingItem({ ...item })
    setStep(2)
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
      
      const modal = document.getElementById('editModal')
      const bootstrapModal = bootstrap.Modal.getInstance(modal)
      bootstrapModal.hide()
      
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
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Lista de Categorias</h1>
        
        <CategoryTable 
          items={items}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        <div className="text-center mt-4">
          <button 
            className="btn btn-success btn-lg"
            data-bs-toggle="modal" 
            data-bs-target="#editModal"
            onClick={() => {
              setEditingItem({ id: '', nome: '', img_url: '', descricao: '' })
              setStep(1)
            }}
          >
            <i className="bi bi-plus-circle"></i> Adicionar Nova Categoria
          </button>
        </div>

        <Modal 
          step={step}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          editingItem={editingItem}
          setEditingItem={setEditingItem}
          onClose={handleCloseModal}
          onNext={handleNextStep}
          onSave={handleSave}
        />
      </div>
    </div>
  )
}

export default Categories
