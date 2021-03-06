Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  get 'api/homes/search/:location', :to => 'api/homes#search'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :homes, only: [:index, :show, :create, :update, :destroy] do
      resources :reviews, only: [:index]
    end
    resources :bookings, only: [:index, :show, :create, :update, :destroy] do
      resource :review, only: [:show]
    end
    resources :reviews, only: [:destroy, :create]
  end

end
