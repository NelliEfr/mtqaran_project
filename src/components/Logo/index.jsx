import React from "react";
import { Link } from 'react-router-dom';

import logo from './img/mtqaran_logo.png'
import s from "./index.module.css";

const Logo = () => {
	return (
		<Link to='/'>
			<img src={logo} alt="logo" className={s.img}/>
		</Link>
	);
};

export default Logo;
