import axios from "axios";

let config = {
 apikey : "ddfbcab6dd5d1a85a495c1d42d539096",

 searchMovie :  function(name){
    let title = name.replace(' ','%' )
    let request = `https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&language=fr-FR&query=${title}&page=1&include_adult=false`
    console.log(request);
    
    return axios.get(request)
    .then((res) => {
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
    
 },

 movieDetails : function(id){

    let request = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=fr-FR`
    
    return axios.get(request)
    .then((res) => {
        console.log(res);
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
 }
}

export default config