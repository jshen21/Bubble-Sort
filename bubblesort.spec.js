describe('Bubble Sort', function(){

    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
      });
      it('correctly sorting the numbers with bubble sort takes array.length swaps', function () {
        bubbleSort([1, 5, 8, 2]);
        expect(window.swap.calls.count()).toEqual(4);
      });
      
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with one single item', function(){
      expect( bubbleSort([1]) ).toEqual( [1] );
    }); 
    it('handles an array with multiple items', function(){
        expect( bubbleSort([1, 5, 8, 2]) ).toEqual( [1, 2, 5, 8] );
      }); 

    
  });

