class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.find_by(home_id: params[:home_id])
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
    @review = Review.find(params[:id])
    render :show
  end


  def review_params
    params.require(:review).permit(:author_id, :home_id, :rating, :body)
  end

end
