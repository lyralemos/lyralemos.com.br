require 'pagination'

class Api::V1::PostsController < SecuredController
    before_action :find_post, only: :show

    def index
        max_results ||= params[:max_results]

        @posts = Post.includes(:category)

        if params[:category_id]
            @posts = @posts.where(category_id: params[:category_id])
        end

        @posts = @posts.order('posts.created_at desc').page(params[:page]).per(max_results)
        render json: Pagination.paginate(@posts)
        # render json: {data: @posts, meta: {total: @posts.total_pages, records: @posts.total_count}}
    end

    def show
        render json: @post
    end

    private
        
        def find_post
            @post = Post.find(params[:id])
        end

        def post_params
            params.permit(:id, :title, :body)
        end
end
