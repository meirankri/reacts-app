import React from 'react';
import config from '../api/config'
class Details extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		}
		this.params = this.props.match.params 
	}

	displayDetailMovie(){
			return (
				<ul>
				
					{/*config.movieDetails(this.params.id).map*/}
				</ul>
			)
	}

	render() {
	    return (
	      <div>
						{config.movieDetails().then(res => {console.log(res)})}
          {this.displayDetailMovie()}
	      </div>
	    );
	}
}

export default Details;