require 'faker'

Category.delete_all
Post.delete_all

2.times do
    Category.create(name: Faker::Movies::StarWars.unique.specie)
end


10.times do
    Post.create({
        title: Faker::Book.title,
        body: Faker::Lorem.paragraphs(number: rand(5..7)),
        category: Category.limit(1).order('RANDOM()').first
    })
end

User.create({
    username: 'lyralemos', 
    email: 'lyralemos@gmail.com', 
    password: 'rks123'
})