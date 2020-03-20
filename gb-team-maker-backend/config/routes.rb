Rails.application.routes.draw do
  
  get '/most-used-player', to: 'players#most_used'

  resources :users, only: [:show, :create, :index]
  resources :teams, only: [:show, :create, :index]
  resources :players, only: [:show, :index]
end
