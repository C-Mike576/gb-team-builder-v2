class PlayersController < ApplicationController

    def index
        players = Player.all 
        render json: players.to_json
    end

    def show
        player = Player.find(params[:id])
        render json: player.to_json
    end
end
