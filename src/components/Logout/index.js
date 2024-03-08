import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button className="button" onClick={logout} type="button">
      Logout
    </button>
  )
}
export default Logout
