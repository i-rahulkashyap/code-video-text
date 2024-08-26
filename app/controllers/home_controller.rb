class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    # Your code for the home page
  end
end
