function Rock() {
	this.type = 'rock'
	this.beats = 'scissors'
};

function Paper(){
	this.type = 'paper'
	this.beats = 'rock'
};

function Scissors(){
	this.type = 'scissors'
	this.beats = 'paper'
};

function Game(){};

Game.prototype.winner = function(pick1, pick2) {
	if(pick1.beats === pick2.type) return 'Pick 1 wins!';
	if(pick2.beats === pick1.type) return 'Pick 2 wins!';
	if(pick1.type === pick2.type) return 'You draw!';
};