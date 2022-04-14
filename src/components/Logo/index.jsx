import React from "react";
import { Link } from 'react-router-dom';

import logo from './img/mtqaran_logo.png'
import "./index.modules.css";

const Logo = () => {
	return (
		<Link to='/'>
			<img src={logo} alt="logo" className="img"/>
		</Link>
	);
};

export default Logo;
