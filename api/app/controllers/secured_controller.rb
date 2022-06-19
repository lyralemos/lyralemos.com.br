class SecuredController < ApplicationController
    before_action :verify_access_token

    protected
        
        def verify_access_token
            auth = request.headers['Authorization']

            if auth.present?
                tokens = auth.split(' ')

                if tokens.size == 2
                    access_token = tokens[1]
                    is_valid = AuthenticationService.is_access_token_valid(access_token)

                    return true if is_valid
                end
            end

            render nothing: true, status: :unauthorized
            return false
        end

        def current_user
            AuthenticationService.get_user(request.headers['Authorization'])
        end
end