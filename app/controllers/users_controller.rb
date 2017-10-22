class UsersController < ApplicationController
  def index
    @users = User.all
    render json: { status: 200,
                   users: @users }
  end

  def generate_csv
  end
end
