Rails.application.routes.draw do
  resources :teams
  resources :players, only: [:show, :index]
end
