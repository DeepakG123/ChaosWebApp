#First stage of the build
#Copy all sources files to the container
#npm run build creates an optimized production build
FROM mhart/alpine-node:11 AS builder
WORKDIR /app

# Installing dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install antd
COPY . .

RUN yarn run build

#Second stage of the build
#Install the serve package
FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
