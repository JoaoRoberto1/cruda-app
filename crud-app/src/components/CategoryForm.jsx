const CategoryForm = ({ editingItem, setEditingItem }) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome da Categoria</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          value={editingItem.nome}
          onChange={(e) => setEditingItem({ ...editingItem, nome: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="img_url" className="form-label">URL da Imagem</label>
        <input
          type="text"
          className="form-control"
          id="img_url"
          value={editingItem.img_url}
          onChange={(e) => setEditingItem({ ...editingItem, img_url: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descricao" className="form-label">Descrição</label>
        <textarea
          className="form-control"
          id="descricao"
          rows="3"
          value={editingItem.descricao}
          onChange={(e) => setEditingItem({ ...editingItem, descricao: e.target.value })}
        ></textarea>
      </div>
    </form>
  )
}

export default CategoryForm
