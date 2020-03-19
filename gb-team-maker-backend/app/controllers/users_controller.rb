class UsersController < ApplicationController
    def index
        users = User.all 
        render json: UserSerializer.new(users)
    end

    def create
        new_user = User.create(username: params['username'])
        render json: new_user.to_json
    end

    def show
        user = User.find_by_id(params[:id])
        render json: UserSerializer.new(user)
    end
end
