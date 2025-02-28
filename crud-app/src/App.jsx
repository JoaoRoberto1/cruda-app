import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Categories from './components/pages/Categories'
import CategoryFormPage from './components/pages/CategoryForm'
import './App.css'
import { useState } from 'react'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CategoryTable from './components/CategoryTable'
import Modal from './components/Modal'

function App() {
  const [items, setItems] = useState([])
  const [editingItem, setEditingItem] = useState(null)
  const [userInfo, setUserInfo] = useState({ nome: '', email: '', idade: '' })
  const [step, setStep] = useState(1) // 1: Dados do usuário, 2: Dados da categoria

  // Função para deletar item
  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este item?')) {
      try {
        // Aqui você vai adicionar a chamada para sua API/Backend
        // await api.delete(`/items/${id}`);
        
        // Atualiza a lista removendo o item deletado
        setItems(items.filter(item => item.id !== id))
        alert('Item deletado com sucesso!')
      } catch (error) {
        console.error('Erro ao deletar:', error)
        alert('Erro ao deletar o item')
      }
    }
  }

  // Função para abrir o modal de edição
  const handleEdit = (item) => {
    setEditingItem({ ...item })
    setStep(2) // Vai direto para edição da categoria
  }

  // Função para validar dados do usuário
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

  // Função para ir para o próximo passo
  const handleNextStep = () => {
    if (validateUserInfo()) {
      setStep(2)
    }
  }

  // Função para salvar as alterações
  const handleSave = async () => {
    try {
      if (!editingItem.nome?.trim()) {
        alert('O nome da categoria é obrigatório!')
        return
      }

      // Aqui você vai adicionar a chamada para sua API/Backend
      // const dadosCompletos = {
      //   ...editingItem,
      //   usuario: userInfo
      // };
      // await api.put(`/items/${editingItem.id}`, dadosCompletos);
      
      // Atualiza a lista com o item editado
      setItems(items.map(item => 
        item.id === editingItem.id ? editingItem : item
      ))
      
      // Fecha o modal usando o Bootstrap
      const modal = document.getElementById('editModal')
      const bootstrapModal = bootstrap.Modal.getInstance(modal)
      bootstrapModal.hide()
      
      // Limpa os estados
      setEditingItem(null)
      setUserInfo({ nome: '', email: '', idade: '' })
      setStep(1)
      alert('Item atualizado com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar:', error)
      alert('Erro ao atualizar o item')
    }
  }

  // Função para resetar o modal quando for fechado
  const handleCloseModal = () => {
    setStep(1)
    setUserInfo({ nome: '', email: '', idade: '' })
    setEditingItem(null)
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/categorias" replace />} />
            <Route path="/categorias" element={
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
            } />
            <Route path="/categorias/novo" element={<CategoryFormPage />} />
          </Routes>
        </main>
        <footer className="bg-dark text-light text-center py-3">
          <p className="mb-0">&copy; 2025 Sistema de Categorias. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
