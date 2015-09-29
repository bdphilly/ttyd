class ProductsController < ApplicationController
  def index
    @products = Product.all    
  end

  private
  
    def product_params
      params.requre(:product).permit(
        :name, 
        :active,
        :details, 
        :size, 
        :quantity_type,
        :ingredients,
        :price,
        :aisle_id
      )      
    end
end
