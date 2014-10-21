describe('Rock Paper Scissors', function(){

	describe('Types of gestures', function(){

		it('rock is a rock', function(){
			rock = new Rock;
			expect(rock.type).toEqual('rock');
		});

		it('paper is paper', function() {
			expect(paper.type).toEqual('paper');
		});
		
	});
});