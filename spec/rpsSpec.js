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

	describe('what beats what', function() {

		it('Rock beats Scissors', function() {
			expect(rock.beats).toEqual('scissors')
		});

	});

	describe('Outcomes', function() {

		it('Pick 1 beats Pick 2', function() {
			pick1 = new Rock;
			pick2 = new Scissors;
			expect(game.winner(pick1, pick2)).toEqual('Pick 1 wins!');
		});

		it('Pick 2 beats Pick 1', function() {
			pick2 = new Paper;
			pick1 = new Scissors;
			expect(game.winner(pick2, pick1)).toEqual('Pick 2 wins!');
		});

		it('Draw', function(){
			pick1 = new Paper;
			pick2 = new Paper;
			expect(game.winner(pick1, pick2)).toEqual('You draw!');
		});

	});

});