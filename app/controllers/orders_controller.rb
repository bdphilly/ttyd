class OrdersController < ApplicationController
  def show
    @order_items = current_order.order_items
  end

  private
  
    def order_params
      params.require(:order).permit(:total, :order_status_id)
    end

end
