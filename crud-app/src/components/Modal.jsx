import UserInfoForm from './UserInfoForm'
import CategoryForm from './CategoryForm'

const Modal = ({ 
  step,
  userInfo,
  setUserInfo,
  editingItem,
  setEditingItem,
  onClose,
  onNext,
  onSave
}) => {
  return (
    <div 
      className="modal fade" 
      id="editModal" 
      tabIndex="-1" 
      aria-labelledby="editModalLabel" 
      aria-hidden="true"
      onHide={onClose}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              {step === 1 ? 'Identificação do Usuário' : (editingItem?.id ? 'Editar Categoria' : 'Nova Categoria')}
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {step === 1 ? (
              <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
            ) : (
              <CategoryForm editingItem={editingItem} setEditingItem={setEditingItem} />
            )}
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Cancelar
            </button>
            {step === 1 ? (
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onNext}
              >
                Próximo
              </button>
            ) : (
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onSave}
              >
                Salvar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
