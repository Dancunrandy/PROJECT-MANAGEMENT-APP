class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add your routes here
    get "/projects" do
          @projects=Project.all.to_json
    end
      
    get "/skills" do
      @skills=Skill.all.to_json
    end
    get "/users" do
      @users=User.all.to_json
    end
    get "/registers" do
      @registers=Register.all.to_json
    end
    get "/" do
      { message: "Good luck with your project!" }.to_json
    end
  
  end
  