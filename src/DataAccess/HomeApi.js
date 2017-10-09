import axios from 'axios';
import _ from 'underscore';

export default {
    requestViewModel: function () {
        return axios.get(`http://www.jerrye25.com/api/FFLDashboard/GetDashboardUser/jerry`)
            .then(function(response) {
                _.each(response.data.Games, (game) =>{
                    _.each(game.UserTeam.Players, (player)=>{
                        player.CurrentWeekStats = [{Id: _.uniqueId('stat_'), Description: "Test Stat 1"}, {Id :_.uniqueId('stat_') , Description: "Test Stat 2"}];
                    });
                    _.each(game.OpponentTeam.Players, (player)=>{
                        player.CurrentWeekStats = [{Id: _.uniqueId('stat_'), Description: "Test Stat 1"}, {Id: _.uniqueId('stat_'), Description: "Test Stat 2"}];
                    });
                })
                return response.data;
            })
            .catch(function (error) {

            });
    }
}