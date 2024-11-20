import axios from 'axios';
import React, { useState } from 'react';

function useFetch() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	async function req({ url, method = 'GET', body = null }) {
		setLoading(true);
		try {
			method = method.toUpperCase();
			const res = await axios({
				url,
				method,
				data: method !== 'GET' ? body : null,
			});
			const resData = res.data?.data || res.data;

			switch (method) {
				case 'POST':
					setData((prev) => [resData, ...prev]);
					break;
				case 'PUT':
				case 'PATCH':
					setData((prev) =>
						prev.map((i) => (i.id === resData.id ? resData : i)),
					);
					break;
				case 'DELETE':
					{
						const userId = parseInt(url.split('/').pop());
						setData((prev) => prev.filter((i) => i.id !== userId));
					}
					break;
				default:
					setData(resData);
					break;
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}
	return [data, req, loading, error];
}

export default useFetch;
