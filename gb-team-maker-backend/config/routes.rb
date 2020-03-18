Rails.application.routes.draw do
  resources :users
  resources :teams
  resources :players, only: [:show, :index]
end
