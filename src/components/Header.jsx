import React from 'react';
import '../styles/Header.css';
function Header({ openAdd }) {
	return (
		<div className="header">
			<div className="header__container">
				<h1 className="header__tittle">Usuarios</h1>

				<button className="header__button" type="button" onClick={openAdd}>
					Add User
				</button>
			</div>
		</div>
	);
}

export default Header;
