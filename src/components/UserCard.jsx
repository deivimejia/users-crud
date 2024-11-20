import React from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import { FaTrashCanArrowUp } from 'react-icons/fa6';
import '../styles/UserCard.css';
function UserCard({ user, openEdit, deleteUser }) {
	return (
		<div className="card">
			<h3 className="card__name">
				{user?.first_name} {user?.last_name}{' '}
			</h3>
			<div className="card__info">
				<div>
					<span className="card__label">Email: </span> {user?.email}
				</div>
				<div>
					<span className="card__label">Birthday: </span>
					<span className="card__data">
						<FaBirthdayCake className="card__icon" />
						{user?.birthday}
					</span>
				</div>
			</div>
			<div>
				<img
					className="card__image"
					src={
						user?.image_url
							? user.image_url
							: 'https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png'
					}
					alt={user?.first_name}
					width={100}
				/>
			</div>
			<div className="card__btn">
				<button onClick={() => openEdit(user)}>
					<GrEdit />
				</button>
				<button onClick={() => deleteUser(user?.id)}>
					<FaTrashCanArrowUp />
				</button>
			</div>
		</div>
	);
}

export default UserCard;
/*  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF3UmhrSpByLU1vrDk3Ona_ikUOhTgQetTg&s */
