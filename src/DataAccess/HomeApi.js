import axios from 'axios';
import _ from 'underscore';

export default {
    requestViewModel: function () {
        var self = this;
        return axios.get(`http://www.jerrye25.com/api/FFLDashboard/GetDashboardUser/jerry`)
            .then(function(response) {
                _.each(response.data.TopPlayersViewModel.Players, (player) =>{
                    player.Show = true;
                });
                _.each(response.data.Games, (game) =>{
                    _.each(game.UserTeam.Players, (player)=>{
                        player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                    });
                    _.each(game.OpponentTeam.Players, (player)=>{
                        player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                    });
                });
                _.each(response.data.WatchedPlayersVM.Players, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                _.each(response.data.TopPlayersViewModel.Players, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                _.each(response.data.TopPlayersViewModel.PlayersDT, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                _.each(response.data.TopPlayersViewModel.PlayersPK, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                _.each(response.data.TopPlayersViewModel.PlayersQB, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                _.each(response.data.TopPlayersViewModel.PlayersRB, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                _.each(response.data.TopPlayersViewModel.PlayersTE, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                _.each(response.data.TopPlayersViewModel.PlayersWR, (player) =>{
                    player.CurrentWeekStats = self.reformatCurrentWeekStats(player.CurrentWeekStats);
                });
                return response.data;
            })
            .catch(function (error) {

            });
    },
    reformatCurrentWeekStats: function(stats){
        var response = [];

        _.each(stats, (stat) =>{
            response.push(
                {
                    Id: _.uniqueId('stat_'),
                    Description: stat
                }
            )
        }, response)

        return response;
    }
}