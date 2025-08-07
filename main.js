class Player 
{
    constructor(_name, _age, _nationality, _height, _weight, _photo, _team, _rating, _appearences, _goals, _assists){
        this.name = _name;
        this.age = _age;
        this.nationality = _nationality;
        this.height = _height;
        this.weight = _weight;
        this.photo = _photo;
        this.team = _team;
        this.rating = _rating;
        this.appearences = _appearences;
        this.goals = _goals;
        this.assists = _assists;


    }
}

!async function () {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=78&season=2024';
    const options = {
	    method: 'GET',
	    headers: {
	    	'x-rapidapi-key': '53ee52cc12mshc7641cea6c40fe2p12b402jsndac55bb052e9',
		    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
	    }
    };

let data = await fetch(url, options)
    .then((response) => response.json())
    .then((result) => {return result})
    .catch((error) => console.error(error));
    console.log(data);

    const topScorers = data.response.map(playerData => 
    {
        const player = playerData.player;
        const stats = playerData.statistics[0];

        return new Player
        (
            player.name,
            player.age,
            player.nationality,
            player.height,
            player.weight,
            player.photo,
            stats.team.name,
            stats.games.rating,
            stats.games.appearences,
            stats.goals.total,
            stats.goals.assists
        );
    });

    console.log(topScorers); //They are in the correct order from the api

    for (i=0; i<topScorers.length; i++)
    {
        switch (i) 
        {
            case 0:
                document.getElementById("top-scorer-img").innerHTML = "<img src="+topScorers[i].photo+"></img>";
                document.getElementById("1-name").textContent = topScorers[i].name;
                document.getElementById("top-goals").textContent = "GOALS: " + topScorers[i].goals;
                document.getElementById("1age").textContent = "Age: " + topScorers[i].age;
                document.getElementById("1weight").textContent = "Weight: " + topScorers[i].weight;
                document.getElementById("1height").textContent = "Height: " + topScorers[i].height;
                document.getElementById("1app").textContent = "Appearances: " + topScorers[i].appearences;
                document.getElementById("1team").textContent = "Team: " + topScorers[i].team;
                document.getElementById("1rating").textContent = "Rating: " + topScorers[i].rating;
                document.getElementById("1country").textContent = "Country: " + topScorers[i].nationality;
                break;

            case 1:
                document.getElementById("2img").innerHTML = "<img src="+topScorers[i].photo+"></img>";
                document.getElementById("2name").textContent = topScorers[i].name;
                document.getElementById("2goals").textContent = "GOALS: " + topScorers[i].goals;
                document.getElementById("2age").textContent = "Age: " + topScorers[i].age;
                document.getElementById("2weight").textContent = "Weight: " + topScorers[i].weight;
                document.getElementById("2height").textContent = "Height: " + topScorers[i].height;
                document.getElementById("2app").textContent = "Appearances: " + topScorers[i].appearences;
                document.getElementById("2team").textContent = "Team: " + topScorers[i].team;
                document.getElementById("2rating").textContent = "Rating: " + topScorers[i].rating;
                document.getElementById("2country").textContent = "Country: " + topScorers[i].nationality;
                break;

            case 2:
                document.getElementById("3img").innerHTML = "<img src="+topScorers[i].photo+"></img>";
                document.getElementById("3name").textContent = topScorers[i].name;
                document.getElementById("3goals").textContent = "GOALS: " + topScorers[i].goals;
                document.getElementById("3age").textContent = "Age: " + topScorers[i].age;
                document.getElementById("3weight").textContent = "Weight: " + topScorers[i].weight;
                document.getElementById("3height").textContent = "Height: " + topScorers[i].height;
                document.getElementById("3app").textContent = "Appearances: " + topScorers[i].appearences;
                document.getElementById("3team").textContent = "Team: " + topScorers[i].team;
                document.getElementById("3rating").textContent = "Rating: " + topScorers[i].rating;
                document.getElementById("3country").textContent = "Country: " + topScorers[i].nationality;
                break;

            default:
                const template = document.querySelector('.scorer'); // your base template
                const clone = template.cloneNode(true);

                clone.querySelector('h1').textContent =
                `${topScorers[i].name}: Goals: ${topScorers[i].goals}, Age: ${topScorers[i].age}, Height: ${topScorers[i].height}, Weight: ${topScorers[i].weight}, Country: ${topScorers[i].nationality}, Assists: ${topScorers[i].assists}, Appearances: ${topScorers[i].appearences}, Team: ${topScorers[i].team}, Rating: ${topScorers[i].rating}`;
                
                document.querySelector('.holder').appendChild(clone);

                break;
        }

    }

}();