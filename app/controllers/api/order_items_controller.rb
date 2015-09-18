class API::OrderItemsController < ApplicationController
  def index
    @order_items = OrderItem.all
    render json: @order_items
  end

  def show
    @order_item = OrderItem.find(params[:id])
    render json: @order_item
  end

  def create
    @order = current_order(params[:local_storage_order_id])
    @order_item = @order.add_product(order_item_params)
    @order.save

    render json: {
      :status => :ok,
      :message => "Success!",
      :data => {
        order: {
          id: @order.id,
          order_total: @order.total,
          created_at: @order.created_at,
          updated_at: @order.updated_at
        },
        order_item: {
          id: @order_item.id,
          product_id: @order_item.product_id,
          quantity: @order_item.quantity,
          total_price: @order_item.total_price,
          created_at: @order_item.created_at,
          updated_at: @order_item.updated_at
        }
      }
    }
  end

  def update
    @order = current_order    
    @order_item = @order.order_items.find(params[:id])
    @order_item.update_attributes(order_item_params)
    @order_items = @order.order_items

    render json: {
      :status => :ok,
      :message => "Success!"
    }
  end

  private

    def order_item_params
      params.require(:order_item).permit(:quantity, :product_id)
    end
end