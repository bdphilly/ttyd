ActiveAdmin.register Order do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#

  show do
    attributes_table do
      row :id
      row :order_status_id
      row :updated_at
      row :cart_items do |order|
        order.order_items.count
      end
      row :total_items_in_cart do |order|
        order.order_items.inject(0) { |sum, item| sum + item.quantity }
      end      
    end

    panel "Cart Items" do
      table_for order.order_items do
        column "name" do |item|
          link_to item.product.name, admin_product_path(item.product.id)
        end
        column "quantity" do |item|
          item.quantity
        end
      end                
    end    
  end

  form do |f|
    f.inputs "Details" do
        f.input :total
        f.input :order_status
        # f.inputs
        # f.actions
    end

    f.inputs do
      f.input :order_items do
        f.inputs do
          f.has_many :order_items, allow_destroy: true do |p|
            p.input :product
            p.input :quantity
          end
        end
      end      
    end
    # actions
       
  end

  permit_params :id, :total, :order_status_id, :created_at, :updated_at, order_items_attributes: [:quantity, :product_id]
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end


end
