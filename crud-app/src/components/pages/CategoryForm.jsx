import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfoForm from '../UserInfoForm'
import CategoryForm from '../CategoryForm'

const CategoryFormPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [userInfo, setUserInfo] = useState({ nome: '', email: '', idade: '' })
  const [editingItem, setEditingItem] = useState({ id: '', nome: '', img_url: '', descricao: '' })

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

      // Aqui você vai adicionar a chamada para sua API/Backend
      // const response = await api.post('/categorias', {
      //   ...editingItem,
      //   usuario: userInfo
      // })

      alert('Categoria criada com sucesso!')
      navigate('/categorias')
    } catch (error) {
      console.error('Erro ao criar categoria:', error)
      alert('Erro ao criar a categoria')
    }
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">
                  {step === 1 ? 'Identificação do Usuário' : 'Nova Categoria'}
                </h2>
                
                {step === 1 ? (
                  <>
                    <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
                    <div className="d-flex justify-content-between mt-4">
                      <button 
                        className="btn btn-secondary"
                        onClick={() => navigate('/categorias')}
                      >
                        Cancelar
                      </button>
                      <button 
                        className="btn btn-primary"
                        onClick={handleNextStep}
                      >
                        Próximo
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <CategoryForm editingItem={editingItem} setEditingItem={setEditingItem} />
                    <div className="d-flex justify-content-between mt-4">
                      <button 
                        className="btn btn-secondary"
                        onClick={() => setStep(1)}
                      >
                        Voltar
                      </button>
                      <button 
                        className="btn btn-success"
                        onClick={handleSave}
                      >
                        Salvar
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryFormPage
