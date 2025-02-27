const UserInfoForm = ({ userInfo, setUserInfo }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-3">
        <label htmlFor="userNome" className="form-label">Nome</label>
        <input
          type="text"
          className="form-control"
          id="userNome"
          value={userInfo.nome}
          onChange={(e) => setUserInfo({ ...userInfo, nome: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="userEmail"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userIdade" className="form-label">Idade</label>
        <input
          type="number"
          className="form-control"
          id="userIdade"
          min="0"
          value={userInfo.idade}
          onChange={(e) => setUserInfo({ ...userInfo, idade: parseInt(e.target.value) || '' })}
          required
        />
      </div>
    </form>
  )
}

export default UserInfoForm
