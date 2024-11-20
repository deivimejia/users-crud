import React from 'react';
import UserCard from './UserCard';

function UserList({ users, openEdit, deleteUser }) {
	return (
		<div>
			{users?.map((user) => (
				<UserCard
					key={user.id}
					user={user}
					openEdit={openEdit}
					deleteUser={deleteUser}
				/>
			))}
		</div>
	);
}

export default UserList;
