describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([1, 5, 7, 9, 4])).toEqual([ [ 1, 5 ], [ 7, 9, 4 ] ]);
    });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(merge([ 1, 5 ], [4, 7, 9])).toEqual([ 1, 4, 5, 7, 9 ]);
    });
  });