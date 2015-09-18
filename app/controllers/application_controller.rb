class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  
  # protect_from_forgery
  # skip_before_action :verify_authenticity_token, if: :json_request?

  helper_method :current_order

  def current_order(local_storage_order_id)   
   # using localStorage from client to determine, for now...
    if Order.find_by_id(local_storage_order_id) 
      return Order.find_by_id(local_storage_order_id) 
    else
      Order.new
    end
  end

  # def current_order    
  #   if !session[:order_id].nil?
  #     Order.find(session[:order_id])      
  #   else
  #     Order.new      
  #   end
  # end
end
