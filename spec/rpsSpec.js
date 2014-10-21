describe('Rock Paper Scissors', function(){

	describe('Types of gestures', function(){

		it('rock is a rock', function(){
			rock = new Rock;
			expect(rock.type).toEqual('rock');
		});

		it('paper is paper', function() {
			paper = new Paper;
			expect(paper.type).toEqual('paper');
		});

		it('scissors is scissors', function(){
			scissors = new Scissors;
			expect(scissors.type).toEqual('scissors');
		});
		
	});

	describe('winners are', function() {

		it('rock beats scissors', function() {
			game = new Game;
			expect(game.winner(rock)).toEqual('rock wins');
		});

		it('scissors beats paper', function(){
			game = new Game;
			expect(game.winner(scissors)).toEqual('scissors wins');
		});

		it('paper beats rock', function() {
			expect(game.winner(paper)).toEqual('paper wins');
		});

	});

	describe('losers are', function(){

		it('scissors loses to rock', function(){
			expect(game.loser(scissors)).toEqual('scissors loses');
		});

		it('paper loses to scissors', function() {
			expect(game.loser(paper)).toEqual('paper loses');
		});
	});

});