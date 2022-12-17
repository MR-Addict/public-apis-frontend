FROM node:18-alpine
WORKDIR /app
COPY . .
RUN apk --no-cache add curl
RUN curl -sL https://api.publicapis.org/entries -o data/entries.json --create-dirs
RUN curl -sL https://api.publicapis.org/categories -o data/categories.json --create-dirs
RUN npm install -ci
RUN npm run build
CMD ["npm", "start"]