# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

500.times do |i|
  User.create(
    name: Faker::Witcher.character,
    email: Faker::Internet.email,
    school: Faker::Witcher.school,
    street_address: Faker::Address.street_address,
    city: Faker::Witcher.location,
    province: Faker::Address.state,
    country: Faker::Address.country,
    postal_code: Faker::Address.postcode,
    quote: Faker::Witcher.quote
  )

  User.create(
    name: Faker::HarryPotter.character,
    email: Faker::Internet.email,
    school: Faker::HarryPotter.house,
    street_address: Faker::Address.street_address,
    city: Faker::HarryPotter.location,
    province: Faker::Address.state,
    country: Faker::Address.country,
    postal_code: Faker::Address.postcode,
    quote: Faker::HarryPotter.quote
  )
end
