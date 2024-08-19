const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			currentUser: null,
			isLoged: false,
		},
		actions: {
			getMessage: async () => {
				const uri = `${process.env.BACKEND_URL}/api/hello`
				const options = { headers: {'Content-Type': 'application/json'}}
				const response = await fetch(uri, options)
				if (!response.ok) {
					console.log("Error loading message from backend", response.status, response.statusText);
					return
				}
				const data = await response.json()
				setStore({ message: data.message })
				return data;
			},
			setIsLoged: (isLogin) => {setStore({ isLoged: isLogin })}
		}
	};
};

export default getState;
