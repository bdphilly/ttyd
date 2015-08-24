class ProductsController < ApplicationController
  def index
    @products = Product.all
    @order_item = current_order.order_items.new
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
        :price
      )      
    end
end
