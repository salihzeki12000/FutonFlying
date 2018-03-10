Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :destroy]
    resources :bookings, except: [:edit, :new]
    resource :session, only: [:create, :destroy, :show]
  end
end
