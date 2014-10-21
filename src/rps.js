function Rock() {
	this.type = 'rock'
};

function Paper(){
	this.type = 'paper'
};

function Scissors(){
	this.type = 'scissors'
};

function Game(){};

Game.prototype.winner = function(gesture) {
	if(gesture === rock) return 'rock wins';
	if(gesture === scissors) return 'scissors wins';
	if(gesture === paper) return 'paper wins';
};

Game.prototype.loser = function(gesture) {
	if(gesture === scissors) return 'scissors loses';
	if(gesture === paper) return 'paper loses';
	if(gesture === rock) return 'rock loses';
};
