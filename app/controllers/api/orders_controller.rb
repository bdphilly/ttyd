class API::OrdersController < ApplicationController
  def show
    # println @order.find_by(:id)
    @order_items = current_order.order_items

    render json: @order_items
  end

  def destroy
    @order = current_order
    @order.order_items.destroy_all

    render json: {
      :status => :ok,
      :message => "Successfully Emptied Cart!",
      :data => {
        currentCart: @order.order_items
      }
    }

  end

  private
  
    def order_params
      params.require(:order).permit(:total, :order_status_id)
    end  
end