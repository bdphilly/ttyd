class MakeDefaultActiveTrueProducts < ActiveRecord::Migration
  def change
    change_column_default :products, :active, true
  end
end
