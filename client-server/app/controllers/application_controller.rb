class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Get all projects
  get "/projects" do
    projects = Project.all.to_json
    { projects: projects }.to_json
  end
  
  # Get a specific project
  get "/projects/:id" do
    project = Project.find(params[:id]).to_json
    { project: project }.to_json
  end
  
  # Create a new project
  post "/projects" do
    project = Project.create(params).to_json
    { project: project }.to_json
  end
  
  # Update an existing project
  patch "/projects/:id" do
    project = Project.find(params[:id])
    project.update(params)
    { project: project.to_json }.to_json
  end
  
  # Delete a project
  delete "/projects/:id" do
    project = Project.find(params[:id])
    project.destroy
    { message: "Project deleted successfully." }.to_json
  end
  
  # Get all skills
  get "/skills" do
    skills = Skill.all.to_json
    { skills: skills }.to_json
  end
  
  # Get a specific skill
  get "/skills/:id" do
    skill = Skill.find(params[:id]).to_json
    { skill: skill }.to_json
  end
  
  # Create a new skill
  post "/skills" do
    skill = Skill.create(params).to_json
    { skill: skill }.to_json
  end
  
  # Update an existing skill
  patch "/skills/:id" do
    skill = Skill.find(params[:id])
    skill.update(params)
    { skill: skill.to_json }.to_json
  end
  
  # Delete a skill
  delete "/skills/:id" do
    skill = Skill.find(params[:id])
    skill.destroy
    { message: "Skill deleted successfully." }.to_json
  end
  
  # Get all users
  get "/users" do
    users = User.all.to_json
    { users: users }.to_json
  end
  
  # Get a specific user
  get "/users/:id" do
    user = User.find(params[:id]).to_json
    { user: user }.to_json
  end
  
  # Create a new user
  post "/users" do
    user = User.create(params).to_json
    { user: user }.to_json
  end
  
  # Update an existing user
  patch "/users/:id" do
    user = User.find(params[:id])
    user.update(params)
    { user: user.to_json }.to_json
  end
  
  # Delete a user
  delete "/users/:id" do
    user = User.find(params[:id])
    user.destroy
    { message: "User deleted successfully." }.to_json
  end
  
  # Get all registers
  get "/registers" do
    registers = Register.all.to_json
    { registers: registers }.to_json
  end
  
  # Get a specific register
  get "/registers/:id" do
    register = Register.find(params[:id]).to_json
    { register: register }.to_json
  end
  
  # Create a new register
  post "/registers" do
    register = Register.create(params).to_json
    { register: register }.to_json
  end
  
  # Update an existing register
 
  patch "/registers/:id" do
    register = Register.find(params[:id])
    register.update(params)
    { register: register.to_json }.to_json
  end
  
  # Delete a register
  delete "/registers/:id" do
    register = Register.find(params[:id])
    register.destroy
    { message: "Register deleted successfully." }.to_json
  end
  
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
end
