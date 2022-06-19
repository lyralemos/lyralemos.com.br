class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :category, :created_at, :updated_at

  belongs_to :category
end
