import axios from 'axios';

export default {

    requestGames: function() {
        return axios.get(`http://localhost:3000/data/games.json`)
        .then(wait(1500)).then(function(response){
            return(response.data);
        })
        .catch(function(error){

        });
    }

}

function wait(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }