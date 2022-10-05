//Opretter et nyt array for at skubbe mit data ind i
const apiData = [];

const fetchNews = () => {
	const apiEndpoint =
		"https://newsapi.org/v2/everything?q=tesla&from=2022-08-08&sortBy=publishedAt&apiKey=3cf3e094d88f40c9bd765757ad4e6bd6";
	//Endpoint er den url jeg får data fra
	fetch(apiEndpoint)
		//response er serverens respons til mig - hvis det lykkes at nå mit endpoint
		.then((response) => {
			return response.json();
		})
		//Data er det json som jeg har returneret fra mit response
		.then((data) => {
			console.log(data.articles.slice(0, 5));
			apiData.push(data.articles.slice(0, 5));
		}) //Catch er hvis mit data bliver rejected
		.catch((error) => {
			console.log(error);
		})
		//Hvis alt er lykkes og vi kommer forbi vores error catch så kommer vi til finally
		.finally(() => {
			renderContent();
		});
};

//Her mapper vi dataen så det er klart til at blive rendered
const renderContent = () => {
	apiData[0].map((news) => createCard(news));
};

// Her render vi dataen ved at sætte det i et 'card' på selve siden
const createCard = (data) => {
	document.getElementById("root").innerHTML += `

    <div>${data.title}</div>
    <img src="${data.urlToImage}"</img>
    
    

    `;
};

fetchNews();
