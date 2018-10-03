import axios from 'axios';

export default {

    requestViewModel: function () {
        return axios.get(`http://localhost:3000/data/games.json`)
            .then(wait(500)).then(function (response) {
                return (response.data);
            })
            .catch(function (error) {

            });
    }

}

function wait(ms) {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}