class Api::ReviewsController < ApplicationController

  def index
    @reviews = Home.find(params[:home_id]).reviews.includes(booking: :user)
    render :index
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: ["Invalid review"], status: 422
    end
  end

  def show
    @review = Booking.find(params[:booking_id]).review
    render :show
  end


  def review_params
    params.require(:review).permit(:booking_id, :rating, :body)
  end

end
