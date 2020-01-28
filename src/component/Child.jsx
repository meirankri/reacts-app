import React from 'react';

class Child extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}



	render() {
	    return (
	      <div>
	        <p>Le props enfant : {this.props.name}</p>
          <p>Poulet braisé ce midi ?</p>
	      </div>
	    );
	}
}

export default Child;