class Register < ActiveRecord::Base
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :age, presence: true, numericality: { only_integer: true, greater_than: 0 }
    validates :gender, inclusion: { in: ['Male', 'Female', 'Other'] }
    validates :phone, format: { with: /\A\d{10}\z/, message: "must be a valid 10 digit phone number" }
    validates :address, presence: true
  
    has_and_belongs_to_many :skills
  end
  