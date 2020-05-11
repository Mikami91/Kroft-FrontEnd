# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]




# #base image
# FROM node

# # set working directory
# RUN mkdir /usr/src/app
# #copy all files from current directory to docker
# COPY . /usr/src/app

# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # copy the package json
# COPY package.json .

# # install and cache app dependencies
# RUN npm install

# # start app
# CMD ["npm", "start"]

# FROM node:alpine

# WORKDIR '/app'

# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["npm", "start"]