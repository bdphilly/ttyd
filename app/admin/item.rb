ActiveAdmin.register Product do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :name, :details, :name, :category, :details, :size, :quantity_type, :ingredients, :price, :aisle_id, :photo

  form do |f|
    f.inputs "Product Details" do
      f.input :aisle
      f.input :name
      f.input :details
      f.input :size
      f.input :quantity_type
      f.input :ingredients
      f.input :price
      f.input :category
      f.input :active
      f.input :photo, 
        :as => :file, 
        :hint => f.template.image_tag(f.object.photo.url(:medium))
    end
    f.actions
  end

  show do |ad|
      attributes_table do
        row :name
        row :photo do
          image_tag(ad.photo.url(:medium))
        end
      end
    end

end