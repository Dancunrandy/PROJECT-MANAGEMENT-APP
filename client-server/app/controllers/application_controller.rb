class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add your routes here
      # Update a project
  put '/projects/:id' do |id|
    request.body.rewind
    project_data = JSON.parse(request.body.read)

    project = Project.find(id)

    if project.update(
      title: project_data['title'],
      description: project_data['description'],
      skills: project_data['skills']
    )
      project.to_json
    else
      status 500
      { error: 'Error updating project' }.to_json
    end
  end
     # Delete a project
  delete '/projects/:id' do |id|
    project = Project.find(id)

    if project.destroy
      { success: true }.to_json
    else
      status 500
      { error: 'Error deleting project' }.to_json
    end
  end
    get "/" do
      { message: "Good luck with your project!" }.to_json
    end
  
  end
  