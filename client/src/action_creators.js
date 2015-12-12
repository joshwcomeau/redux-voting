export default {
  setState(state) {
    return { type: 'SET_STATE', state };
  },
  vote(entry) {
    return {
      meta: { remote: true },
      type: 'VOTE',
      entry
    };
  }
};
