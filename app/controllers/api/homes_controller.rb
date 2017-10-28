class Api::HomesController < ApplicationController

  def index
    @homes = Home.all
    render :index
  end

  def destroy
    @home = Home.find(params[:id])
    @home.destroy!
    render :show
  end


  def update
    @home = Home.find(params[:id])
    if @home.update(home_params)
      render :show
    else
      render json: ["Invalid values for the this home"], status: 422
    end
  end


  def create
    @home = Home.new(home_params)
    if @home.save
      render :show
    else
      render json: ["Invalid inputs"], status: 422
    end
  end

  def show
    @home = Home.find(params[:id])
    render :show
  end


  def home_params
    params.require(:home).permit(:host_id, :title, :address, :latitude,
    :longitude, :price, :bedrooms, :beds, :baths, :description, :kitchen,
    :tv, :wifi, :washer, :dryer, :parking, :cancellation, :max_guests, :minimum_stay)
  end

end
