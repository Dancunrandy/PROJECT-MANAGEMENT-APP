puts "🌱 Seeding spices..."

# Seed your database here
# create some skills
# Seed your database here


# Seed Users
10.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )
end

# Seed Skills
5.times do
  Skill.create(
    name: Faker::Job.key_skill
  )
end

# Seed Projects
5.times do
  Project.create(
    name: Faker::App.name,
    description: Faker::Lorem.paragraph,
    started_at: Faker::Date.backward(days: 30),
    ended_at: Faker::Date.forward(days: 30)
  )
end

puts "🌱 Done seeding!"
