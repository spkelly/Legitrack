import React, {Component} from 'react';



class Search extends Component {
  constructor(props){
    super(props);
    this.state = {input:"",err:false}

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateInput(input){
    if (input.length > 3 ){
      return true
    }
    return false
  }

  handleClick(e){
    e.preventDefault();
    if(this.validateInput(this.state.input)){
      this.props.cb(this.state.input);
      this.setState({input:'',err:false});
    }
    else{
      this.setState({err:true});
    }
  }
  handleChange(e){
    this.setState({input: e.target.value});
  }

  render(){
    return (
      <form className="search">
        <input className="search__input" value={this.state.input} onChange={this.handleChange}/>
        <button className="search__submit" onClick={this.handleClick}>Click Me</button>
        {this.state.err?<div class="err">INVALID SEARCH TERM</div>:""}
      </form>
    )
  }
}

export default Search;