class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["The email/password you entered is incorrect. Try again, or choose another login option."], status: 401
    end
  end

  def destroy
    if !current_user
      render json: ["Not logged in"], status: 404
    else
      logout
      render json: {}
    end
  end
end
