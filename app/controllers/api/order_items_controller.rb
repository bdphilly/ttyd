class API::OrderItemsController < ApplicationController
  # before_action :authenticate_user!

  def index
    @current_order = current_order
    @order_items = @current_order.order_items

      render json: {
        :status => :ok,
        :message => "Success!",
        :data => @order_items.as_json(include: :product)       
          # orderItems: @current_order.order_items.map do |order_item| 
          #   {
          #     orderItem: order_item,
          #     product: order_item.product
          #   }
          # end
          
        
      }        
  end

  def show
    @order_item = OrderItem.find(params[:id])
    render json: @order_item
  end

  def create
    @current_order = current_order
    
    @order_item = @current_order.order_items.build(order_item_params)

    if @order_item.save
      render json: {
        :status => :ok,
        :message => "Success!",
        :data => {
          updatedOrderItem: @order_item.as_json(include: :product),
          currentCart: @current_order.order_items
        }
      }
    else
      render :status => 400, json: {
        :status => :error,
        :errors => @order_item.errors.full_messages
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
    @current_order = current_order   
    @order_item = @current_order.order_items.find(params[:id])

    if @order_item.update_attributes(order_item_params)
      #build this in the model instead!!
      render json: {
        :status => :ok,
        :message => "Success!",
        :data => {
          currentOrder: @current_order.order_items.as_json(include: :product),
          updatedOrderItem: @order_item
        }
      }
    else
      render json: {
        errors: @order_item.errors.full_messages
      }
    end
    
  end

  def destroy
    @order_item = OrderItem.find_by_id(params[:id])
    
    if @order_item
      @order_item.destroy
      render json: {
        :status => :ok,
        :message => "Successfully Destroyed!",
        :data => {
          orderItemId: params[:id]
        }
      }
    else
      render :status => 400, json: {
        :status => :error,
        :message => "Couldn't find!"
      }
    end
    #when user brings quantity to 0 or removes it, just destroy it!
  end

  private

    def order_item_params
      params.require(:order_item).permit(:quantity, :product_id)
    end
end