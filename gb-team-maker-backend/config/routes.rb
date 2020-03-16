Rails.application.routes.draw do
  resources :teams
  resources :users
  resources :players, only: [:show, :index]
end
