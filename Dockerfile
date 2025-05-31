# Use the official Ruby image with Node and Yarn for Jekyll
FROM ruby:3.2

# Install dependencies
RUN apt-get update -qq && \
  apt-get install -y build-essential libpq-dev nodejs

# Set working directory
WORKDIR /app

# Copy Gemfiles and install gems (including Jekyll)
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install

# Copy the rest of the site
COPY . .

# Build the site
RUN bundle exec jekyll build

# Expose the default Jekyll port
EXPOSE 4000

# Serve the site
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000"]