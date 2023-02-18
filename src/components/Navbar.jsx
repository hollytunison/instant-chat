import { Login } from "../pages/Login";

export const Navbar = () => {
	return (
    <div className="navbar bg-neutral text-neutral-content">
    <div className="containerWrap flex justify-between">
      <a className="btn btn-ghost normal-case text-xl">instantChat</a>
      <button>Logout</button>
    </div>
  </div>
	)
}


