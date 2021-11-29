const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('is array', () => {
        expect(shuffleArray([1,2,3])).toBeInstanceOf(Array)
      });
    
})

describe('shuffleArray should', () => {
    test('length same', () => {
        expect(shuffleArray([1,2,3])).toHaveLength(3);
  });
})
