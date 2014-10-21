function Rock() {
	this.type = 'rock'
};

function Paper(){
	this.type = 'paper'
};

function Scissors(){
	this.type = 'scissors'
};

function Game(){

};

Game.prototype.winner = function() {
	return 'rock wins';
};

