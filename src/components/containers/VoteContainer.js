import React, {Component} from 'react';

import VoteList from '../VoteList';
import VoteChart from '../VoteChart';

export default class VoteContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      currenVote : this.props.votes[0],
      voteIndex: 0
    }

    this.changeVote = this.changeVote.bind(this);
  }

  changeVote(voteIndex){
    this.setState({currenVote:this.props.votes[voteIndex], voteIndex});
  }

  render(){
    return(
      <div className="vote__container ">
      <h2 className="heading__secondary">Current Votes</h2>
        <div className="u-flex-container bill__box bill__box-votes ">
          <VoteList  cb={this.changeVote} votes={this.props.votes} selected={this.state.voteIndex} />
          <VoteChart vote={this.state.currenVote} />
        </div>
      </div>
    )
  }
}