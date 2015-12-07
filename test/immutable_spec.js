import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {
  describe('List', () => {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Office Space', 'Cabin in the Woods');
      let nextState = addMovie(state, 'Star Wars: A New Hope');

      expect(nextState).to.equal(List.of(
        'Office Space',
        'Cabin in the Woodsa',
        'Star Wars: A New Hope'
      ));

      expect(state).to.equal(List.of(
        'Office Space',
        'Cabin in the Woods'
      ));
    });
  });
});
