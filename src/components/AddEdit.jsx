import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/AddEdit.css';

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
		<div className="form">
			<h2 className="form__tittle">{user ? 'Upload' : 'Register'} </h2>
			<form className="form__content" onSubmit={handleSubmit(onSubmit)}>
				<div className="form__group">
					<label className="form__label">Name: </label>
					<input
						className="form__input"
						type="text"
						{...register('first_name')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">Last Name: </label>
					<input
						className="form__input"
						type="text"
						{...register('last_name')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">E-mai: </label>
					<input className="form__input" type="email" {...register('email')} />
				</div>
				<div className="form__group">
					<label className="form__label">Pass-word: </label>
					<input
						className="form__input"
						type="password"
						{...register('password')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">Birthday: </label>
					<input
						className="form__input"
						type="date"
						{...register('birthday')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">User Photo: </label>
					<input
						className="form__input"
						type="url"
						{...register('image_url')}
					/>
				</div>
				<button className="form__submit" type="submit">
					{user ? 'Upload' : 'Save'}
				</button>
			</form>
		</div>
	);
}

export default AddEdit;
/*    */
