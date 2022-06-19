class AuthenticationService

    def self.authenticate(username, password)
        user = User.find_by(username: username)
        if user && user.authenticate(password)
            return generate_access_token(user)
        else
            return false
        end
    end

    def self.is_access_token_valid(token)
        begin
            JWT.decode(token, Rails.application.credentials.secret_key_base, true, { algorithm: 'HS256' })
            return true
        rescue
            return false
        end
    end

    def self.get_user(auth)
        token = auth.split(' ').last
        data = JWT.decode(token, Rails.application.credentials.secret_key_base, true, { algorithm: 'HS256' })
    end

    private
        def self.generate_access_token(user)
            data = {
                username: user.username,
                email: user.email,
                exp: Time.now.to_i + 24 * 60 * 60
            }
            {
                token_type: 'Bearer',
                access_token: JWT.encode(data, Rails.application.credentials.secret_key_base, 'HS256')
            }
        end

end