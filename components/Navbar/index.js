import Logo from '../Logo'
import Menu from '../Menu'

const Navbar = () => (
  <>
    <div>
      <Logo />
      <Menu />
    </div>
    <style jsx>{`
    div{
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background: #363636;
      height: 65px;
    }
  `}</style>
  </>
)

export default Navbar;