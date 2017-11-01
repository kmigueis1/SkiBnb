Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :homes, only: [:index, :create, :update, :destroy]
    resources :homes, only: [:show] do
      resources :reviews, only: [:index, :create, :destroy]
    end
    resources :bookings, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:show]
  end



end
