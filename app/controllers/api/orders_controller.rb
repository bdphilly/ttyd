class API::OrdersController < ApplicationController
  def show
    # println @order.find_by(:id)
    @order_items = current_order.order_items

    render json: @order_items
  end

  private
  
    def order_params
      params.require(:order).permit(:total, :order_status_id)
    end  
end