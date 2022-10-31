fetch("https://reqres.in/api/users", {
	method: "POST",
	headers: {
		"content-type": "application/json",
	},

	body: JSON.stringify({
		name: "Lasse",
	}),
})
	.then((res) => {
		return res.json();
	})
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

// const fetchUsers = async () => {
// 	try {
// 		const res = await fetch("https://reqres.in/api/users/");
// 		if (!res.ok) {
// 			throw new Error(res.status);
// 		}
// 		const data = await res.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// fetchUsers();
