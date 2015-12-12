export default {
  setState(state) {
    return { type: 'SET_STATE', state };
  },
  vote(entry) {
    return { type: 'VOTE', entry };
  }
};
