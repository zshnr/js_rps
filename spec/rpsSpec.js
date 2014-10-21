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

	describe('winners are', function() {

		it('rock beats scissors', function() {
			pick1 = new Rock;
			pick2 = new Scissors;
			expect(game.winner(pick1, pick2)).toEqual('rock wins');
		});

		it('paper beats scissors', function() {
			expect(game.winner(pick1, pick2)).toEqual('scissors wins');
		});

		// it('scissors beats paper', function(){
		// 	expect(game.winner(scissors)).toEqual('scissors wins');
		// });

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