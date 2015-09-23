class API::ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: {
      :status => :ok,
      :message => "Success!",
      :data => @products
    }    
  end
end
