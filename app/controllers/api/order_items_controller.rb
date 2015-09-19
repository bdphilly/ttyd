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
    @current_order = current_order(params[:order_item][:local_storage_order_id])
    # @current_order = current_order(params[:order_item][:local_storage_order_id])
    @order_item = @current_order.order_items.build(order_item_params)
    # @order_item = OrderItem.new(order_item_params)
    # @order_item.order_id = @current_order.id

    if @order_item.save
      render json: {
        :status => :ok,
        :message => "Success!",
        :data => {
          currentOrder: @current_order,
          updatedOrderItem: @order_item,
          currentCart: @current_order.order_items.map do |order_item|
            order_item
          end
        }
      }
    else
      render json: {
        errors: @order_item.errors.full_messages
      }
    end
    # @order_item = @order.add_product(order_item_params)
    # @order.save

    # render json: {
    #   :status => :ok,
    #   :message => "Success!",
    #   :data => {
    #     order: @order,
    #     updatedOrderItem: @order_item,
    #     currentCart: @order.order_items.map do |order_item|
    #       order_item
    #     end
    #   }
    # }


    # @current_order = current_order(params[:order_item][:local_storage_order_id])
    # @order_item = @current_order.order_item
    # @order_item = @order.add_product(order_item_params)
    # @order.save

    # render json: {
    #   :status => :ok,
    #   :message => "Success!",
    #   :data => {
    #     order: @order,
    #     updatedOrderItem: @order_item,
    #     currentCart: @order.order_items.map do |order_item|
    #       order_item
    #     end
    #   }
    # }

  end

  def update
    @current_order = current_order(params[:order_item][:local_storage_order_id])
    puts "========================================"
    puts @current_order.order_items.inspect
    @order_item = @current_order.order_items.find(params[:id])


    if @order_item.update_attributes(order_item_params)
      #build this in the model instead!!
      render json: {
        :status => :ok,
        :message => "Success!",
        :data => {
          currentOrder: @current_order.as_json.merge(:message => 'it works'),
          updatedOrderItem: @order_item,
          currentCart: @current_order.order_items.map do |order_item|
            order_item
          end
        }
      }
    else
      render json: {
        errors: @order_item.errors.full_messages
      }
    end
    
  end

  def destroy
    #when user brings quantity to 0 or removes it, just destroy it!
  end

  private

    def order_item_params
      params.require(:order_item).permit(:quantity, :product_id)
    end
end