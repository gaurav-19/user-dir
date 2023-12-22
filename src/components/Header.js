import { useNavigate } from "react-router-dom";
import Time from "./Time";

const Header = () => {
  const navigate = useNavigate();

  return (<nav className="navbar sticky-top navbar-light bg-white border p-2">
    <button type="button" className="btn btn-light m-2 border" onClick={() => navigate(-1)}>Back</button>
    <Time/>
</nav>)
}

export default Header;
