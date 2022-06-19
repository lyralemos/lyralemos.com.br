class Api::V1::AuthController < ApplicationController

    def login
        user_data = nil
        user = nil

        begin
            auth = AuthenticationService.authenticate(params[:username], params[:password])
            puts auth
            render json: auth, status: :ok
        rescue Exception => ex
            render nothing: true, status: :not_found
        end
    end

    def auth_params
        params.permit(:username, :password)
    end
end