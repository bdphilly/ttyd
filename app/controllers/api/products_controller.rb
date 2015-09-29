class API::ProductsController < ApplicationController
  def index
    @aisles = Aisle.all
    # @products = Product.all    

    render json: {
      :status => :ok,
      :message => "Success!",
      :data => @aisles.as_json(include: :products)    
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
