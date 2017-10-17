import axios from 'axios';
import _ from 'underscore';

export default {
    requestViewModel: function () {
        return axios.get(`http://www.jerrye25.com/api/FFLDashboard/GetDashboardUser/jerry`)
            .then(function(response) {
                _.each(response.data.Games, (game) =>{
                    _.each(game.UserTeam.Players, (player)=>{
                        _.each(player.CurrentWeekStats, (stat) =>{
                            stat = {
                                Id : _.uniqueId('stat_'),
                                Description: stat
                            }
                        })
                    });
                    _.each(game.OpponentTeam.Players, (player)=>{
                        _.each(player.CurrentWeekStats, (stat) =>{
                            stat = {
                                Id : _.uniqueId('stat_'),
                                Description: stat
                            }
                        })
                    });
                })
                return response.data;
            })
            .catch(function (error) {

            });
    }
}