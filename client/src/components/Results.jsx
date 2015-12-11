import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair() {
    return this.props.pair || [];
  },
  getVotes(entry) {
    if ( !this.props.tally ) return 0;
    return this.props.tally.get(entry) || 0;
  },
  render() {
    if ( this.props.winner ) {
      return (
        <Winner ref="winner" winner={this.props.winner} />
      );
    }
    else {
      return (
        <div className="results">
          <div className="tally">
            {this.getPair().map(entry =>
              <div key={entry} className="entry">
                <h1>{entry}</h1>
                <div className="vote-count">
                  {this.getVotes(entry)}
                </div>
              </div>
            )}
          </div>
          <div className="management">
            <button ref="next" className="next" onClick={this.props.next}>
              Next
            </button>
          </div>
        </div>
      );
    }
  }
})
