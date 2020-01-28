import React from 'react';
import config from '../api/config'
import {
	Link
} from "react-router-dom";
class Details extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			movie: null
		}
		this.params = this.props.match.params 
	}
	componentDidMount(){
		config.movieDetails(this.params.id)
			.then(res => {
				
				this.setState({ movie: res })
			})
	}
	displayDetailMovie(){
		const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
		return (
				<div>
						<Link to='/'>Retour</Link>
						<p>Id du film : {this.id}</p>
						{ this.state.movie !== null  && <div>
								<h1>{this.state.movie.title}</h1>
								<img src={url_img+this.state.movie.poster_path} />
								<p>{this.state.movie.overview}</p>
						</div>
						}
				</div>
		)
		
	}
	

	render() {
	    return (
	      <div>
					{this.displayDetailMovie()}
          
	      </div>
	    );
	}
}

export default Details;