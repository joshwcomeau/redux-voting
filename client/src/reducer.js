import {List, Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if ( !currentPair || !currentPair.includes(entry)) return state;
  return state.set('hasVoted', entry);
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
}
