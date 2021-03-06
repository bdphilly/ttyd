# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
AdminUser.delete_all
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

Aisle.delete_all
# Aisle.create! id: 1, name: "Fruit"
# Aisle.create! id: 2, name: "Meat"

Product.delete_all
# Product.create! id: 1, name: "Banana", category: "Fruit", price: 0.49, active: true, aisle_id: 1
# Product.create! id: 2, name: "Apple", category: "Fruit", price: 0.29, active: true, aisle_id: 1
# Product.create! id: 3, name: "Strawberries", category: "Fruit", price: 1.99, active: true, aisle_id: 1

# Product.create! id: 4, name: "Turkey", category: "Meat", price: 3.49, active: true, aisle_id: 2
# Product.create! id: 5, name: "Chicken", category: "Meat", price: 4.29, active: true, aisle_id: 2
# Product.create! id: 6, name: "Sausage", category: "Meat", price: 6.99, active: true, aisle_id: 2
# Product.create! id: 7, name: "Bacon", category: "Meat", price: 3.49, active: true, aisle_id: 2
# Product.create! id: 8, name: "Ham", category: "Meat", price: 4.29, active: true, aisle_id: 2
# Product.create! id: 9, name: "Fish", category: "Meat", price: 6.99, active: true, aisle_id: 2


# OrderStatus.delete_all
# OrderStatus.create! id: 1, name: "In Progress"
# OrderStatus.create! id: 2, name: "Placed"
# OrderStatus.create! id: 3, name: "Completed"
# OrderStatus.create! id: 4, name: "Cancelled"

#using Faker
category1 = Faker::Commerce.department(2)
category2 = Faker::Commerce.department(2)

Aisle.create! id: 1, name: category1
Aisle.create! id: 2, name: category2

(1..20).each do |id|
  category = Faker::Commerce.department
  pic = File.new("./db/images_for_db/mustard.jpg")
  Product.create! name: Faker::Lorem.words(2).join(' '), category: category1, price: Faker::Commerce.price, active: true, aisle_id: 1, photo: pic
end


(21..40).each do |id|  
  pic = File.new("./db/images_for_db/red-hot.jpg")
  Product.create! name: Faker::Lorem.words(2).join(' '), category: category2, price: Faker::Commerce.price, active: true, aisle_id: 2, photo: pic
end