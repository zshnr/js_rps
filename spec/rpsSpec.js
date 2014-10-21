describe('Rock Paper Scissors', function(){

	beforeEach(function() {
		rock = new Rock;
		paper = new Paper;
		scissors = new Scissors;
		game = new Game;
	});

	describe('Types of gestures', function(){

		it('rock is a rock', function(){
			expect(rock.type).toEqual('rock');
		});

		it('paper is paper', function() {
			expect(paper.type).toEqual('paper');
		});

		it('scissors is scissors', function(){
			expect(scissors.type).toEqual('scissors');
		});
		
	});

	describe('Outcomes', function() {

		it('Pick 1 beats Pick 2', function() {
			pick1 = new Rock;
			pick2 = new Scissors;
			expect(game.winner(pick1, pick2)).toEqual('rock wins');
		});

		it('Pick 2 beats Pick 1', function() {
			pick2 = new Paper;
			pick1 = new Scissors;
			expect(game.winner(pick2, pick1)).toEqual('scissors wins');
		});

		it('Draw', function(){
			pick1 = new Paper;
			pick2 = new Paper;
			expect(game.winner(pick1, pick2)).toEqual('You draw!');
		});

		// it('paper beats rock', function() {
		// 	expect(game.winner(paper)).toEqual('paper wins');
		// });

	});

	// describe('losers are', function(){

	// 	it('scissors loses to rock', function(){
	// 		expect(game.loser(scissors)).toEqual('scissors loses');
	// 	});

	// 	it('paper loses to scissors', function() {
	// 		expect(game.loser(paper)).toEqual('paper loses');
	// 	});

	// 	it('rock loses to paper', function(){
	// 		expect(game.loser(rock)).toEqual('rock loses');
	// 	});
	// });

});