function Rock() {
	this.type = 'rock'
	this.beats = 'scissors'
};

function Paper(){
	this.type = 'paper'
};

function Scissors(){
	this.type = 'scissors'
	this.beats = 'paper'
};

function Game(){};

Game.prototype.winner = function(pick1, pick2) {
	if(pick1.beats === pick2.type) return 'rock wins';
	if(pick2.beats === pick1.type) return 'scissors wins';
	// if(gesture === paper) return 'paper wins';
};

// Game.prototype.loser = function(pick1, pick2) {
// 	if(gesture === scissors) return 'scissors loses';
// 	if(gesture === paper) return 'paper loses';
// 	if(gesture === rock) return 'rock loses';
// };
