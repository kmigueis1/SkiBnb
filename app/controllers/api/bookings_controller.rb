class Api::BookingsController < ApplicationController

  def index

    @bookings = Booking.all
    render :index
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy!
    render :show
  end


  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render :show
    else
      render json: ["Invalid values for this booking"], status: 422
    end
  end


  def create

    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: ["Invalid booking inputs"], status: 422
    end
  end

  def show
    @booking = Booking.find(params[:id])
    render :show
  end


  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :user_id, :home_id)
  end

end
