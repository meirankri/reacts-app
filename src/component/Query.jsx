import React from 'react';
import config from '../api/config'
import {
   Link
} from "react-router-dom";
class Query extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: ""
    };
    this.name = ""
  }

  handleChangeInput(name){
    this.name = name
  }

  query(){
    config.searchMovie(this.name)
    .then(res => {
      this.setState({items: res.results})
    })
  }
  displayListMovie() {
		return (
			<ul>
				{
					this.state.items.map((movie)=>{
						return (
							<li key={movie.id}>
								<Link to={`/detail/${movie.id}`} >
                {movie.title}
                </Link>
							</li>
						)
					})
				}
			</ul>

		)
	}
	

  render() {
    return (
      <div>
           <label htmlFor="recherche">recherche film</label>
        <input 
	          type="text"
	          
	          onChange={(e)=>{
	          	this.handleChangeInput(e.currentTarget.value);
	          }} />        
          <button onClick={(e)=>{this.query()}}>envoyer</button>
          {this.state.items.length > 0 && this.displayListMovie()}

      </div>
    )
  }
}

export default Query;