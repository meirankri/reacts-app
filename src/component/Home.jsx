import React from 'react';
import Child from './Child'
class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: 'Gérard'
		}
	}

	handleChangeInput(text) {
	    this.setState({name: text});
	}

	render() {
	    return (
	      <div>
	        <h1><a href="/test">Coucou c'est la home</a></h1>
	        <p>Bienvenue sjyhjsudxfvfdr vfvle site de {this.state.name}</p>
	        <input 
	          type="text"
	          value={this.state.name}
	          onChange={(e)=>{
	          	console.log(e);
	            this.handleChangeInput(e.currentTarget.value);
	          }}
	        />
	        <Child name={this.state.name} />
	      </div>
	    );
	}
}

export default Home;