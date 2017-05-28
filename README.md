# typeahead-demo

## setup
To run this project you need to have:
- node
- docker & docker-compose

### step 1
clone the repository

`git clone https://github.com/3upzorz/typeahead-demo.git`

### step 2
run docker compose from the cloned project folder

`docker-compose up`

### step 3
after the elastic search server is running from the docker compose you need to run the scripts to create and seed the index.

Open a new terminal tab and go to the project folder to run the following commands:

`node scripts/createCountriesIndex.js`

then

`node scripts/insertCountries.js`

### step 4
open your browser and go to localhost:3000 to view the application!
