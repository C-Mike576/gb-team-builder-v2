class TeamsController < ApplicationController

    def index
        teams = Team.all 
        render json: teams.to_json
    end
end
