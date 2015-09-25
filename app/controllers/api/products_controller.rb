class API::ProductsController < ApplicationController
  def index
    @products = Product.all    

    render json: {
      :status => :ok,
      :message => "Success!",
      :data => categorize
    }
  end

  private

    def categorize      
      output = {}

      @products.map { |p|
        category = p.category

        if !output[category]
          output[category] = [p]
        else
          output[category] << p
        end
      }

      output
    end


end
