class TeamsController < ApplicationController

    def index
        teams = Team.all 
        render json: teams.to_json
    end

    def create
        new_team = Team.create(name: params['name'], captian_id: params['captian_id'], mascot_id: params['mascot_id'], squaddie_1_id: params['squaddie_1_id'], squaddie_2_id: params['squaddie_2_id'],squaddie_3_id: params['squaddie_3_id'],squaddie_4_id: params['squaddie_4_id'])
        render json: new_team.to_json
    end

    def show
        team = Team.find_by_id(params[:id])
        render json: team.to_json
    end
end
