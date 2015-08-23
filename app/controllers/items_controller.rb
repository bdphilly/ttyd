class ItemsController < ApplicationController
  # def new
  #   @item = Item.new    
  # end

  # def create
  #   @item = Item.new(:item_params)

  #   if @item.save
  #     redirect_to items_url
  #   else
  #     puts @item.errors.full_messages
  #     render :new
  #   end
  # end

  private

  def item_params
    params.requre(:item).permit(
      :name, 
      :details, 
      :size, 
      :quantity_type,
      :ingredients,
      :price
    )
  end
end