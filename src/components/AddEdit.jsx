import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaSave } from 'react-icons/fa';

function AddEdit({ user, onSave }) {
	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		if (user) {
			reset(user);
		} else {
			reset({
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				birthday: '',
				image_url: '',
			});
		}
	}, [user]);

	const onSubmit = (dataForm) => {
		if (user) {
			onSave(dataForm, user.id);
		} else {
			onSave(dataForm);
		}
	};

	return (
		<div>
			<h2>{user ? 'Upload' : 'Register'} </h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Name: </label>
					<input type="text" {...register('first_name')} />
				</div>
				<div>
					<label>Last Name: </label>
					<input type="text" {...register('last_name')} />
				</div>
				<div>
					<label>E-mai: </label>
					<input type="email" {...register('email')} />
				</div>
				<div>
					<label>Pass-word: </label>
					<input type="password" {...register('password')} />
				</div>
				<div>
					<label>Birthday: </label>
					<input type="date" {...register('birthday')} />
				</div>
				<div>
					<label>User Photo: </label>
					<input type="url" {...register('image_url')} />
				</div>
				<button type="submit">
					{' '}
					{user ? 'Upload' : 'Save'}
					<FaSave />
				</button>
			</form>
		</div>
	);
}

export default AddEdit;
/*    */
