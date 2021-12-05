import logo from "../img/logo.svg";
import "./Logo.scss";

function Logo() {
	return (
		<>
			<img className="logo" src={logo} alt="Logo" />
		</>
	);
}

export default Logo;
