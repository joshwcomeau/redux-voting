import {expect} from 'chai';
import {List, Map} from 'immutable';

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
        'Cabin in the Woods',
        'Star Wars: A New Hope'
      ));

      expect(state).to.equal(List.of(
        'Office Space',
        'Cabin in the Woods'
      ));
    });
  });

  describe('Map', () => {
    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie) );
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Office Space', 'Cabin in the Woods')
      });
      let nextState = addMovie(state, 'Star Wars: Return of the Jedi');

      expect(nextState).to.equal( Map({
        movies: List.of(
          'Office Space',
          'Cabin in the Woods',
          'Star Wars: Return of the Jedi'
        )
      }));
      expect(state).to.equal( Map({
        movies: List.of(
          'Office Space',
          'Cabin in the Woods'
        )
      }));
    })
  });
});
