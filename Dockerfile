# Install dependencies only when needed
FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build:production

# Exposing the Application Port
EXPOSE 3000

CMD ["npm", "run", "start"]
