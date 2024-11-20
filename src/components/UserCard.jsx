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
			<div className="card__body">
				<div>
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
				</div>
				<div>
					<img
						className="card__image"
						src={
							user?.image_url
								? user.image_url
								: 'https://cdn-icons-png.flaticon.com/512/8860/8860512.png'
						}
						alt={user?.first_name}
						width={100}
					/>
				</div>
			</div>
			<div className="card__btn">
				<button className="btn btn--edit" onClick={() => openEdit(user)}>
					<GrEdit />
				</button>
				<button
					className="btn btn--delete"
					onClick={() => deleteUser(user?.id)}
				>
					<FaTrashCanArrowUp />
				</button>
			</div>
		</div>
	);
}

export default UserCard;
/*  https://st3.depositphotos.com/1441511/18503/i/450/depositphotos_185034814-stock-photo-programming-man-working-on-computer.jpg */
