FROM ruby:3.1.2

ENV RAILS_ENV=development
ENV BUNDLE_PATH /bundle

WORKDIR /app

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install

COPY entrypoint.sh .

ENTRYPOINT ["sh", "entrypoint.sh"]

EXPOSE 3000

# Start the main process.
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "3000"]
