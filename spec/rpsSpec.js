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

	describe('which gesture beats what', function() {

		it('rock beats scissors', function() {
			expect(game.winner).toEq('rock wins')
		});

	});

});