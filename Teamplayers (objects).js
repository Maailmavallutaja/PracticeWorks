const team = {
  //all the players are listen on this array
  _players: [
    {
    firstName: 'Madis',
    lastName: 'Mets',
    age: 22
    },
    {
    firstName: 'Maarek',
    lastName: 'Mattisen',
    age: 23
    },
    {
    firstName: 'Kaarel',
    lastName: 'Roots',
    age: 24}
  ],
  //games played are listed on this array
	_games: [
    {
  opponent: 'Maakad',
  teamPoints: 35,
  opponentPoints: 27
    },
    {
  opponent: 'Tallinn',
  teamPoints: 45,
  opponentPoints: 50
		},
    {
  opponent: 'Masterid',
  teamPoints: 30,
  opponentPoints: 10
		}
  ],
  //Method for getting games
  get games (){
    return this._games;
  },
  //method for getting players
  get players (){
    return this._players;
  },
  //method for adding players
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age,
    };
    this._players.push(player);
 //method for adding games
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game)
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
//console.log(team.players)

team.addGame('neegrid', 25, 30);
team.addGame('kasvased', 50, 40);

//console.log(team.games);
