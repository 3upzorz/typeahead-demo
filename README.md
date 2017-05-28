# typeahead-demo

## setup
To run this project you need to have:
- node
- npm or yarn
- docker & docker-compose

### step 1
clone the repository

`git clone https://github.com/3upzorz/typeahead-demo.git`

### step 2
install dependencies

`yarn install`

### step 3
run docker compose from the cloned project folder

`docker-compose up`

### step 4
after the elastic search server is running from the docker compose you need to run the scripts to create and seed the index.

Open a new terminal tab and go to the project folder to run the following commands:

`node scripts/createCountriesIndex.js`

then

`node scripts/insertCountries.js`

>NOTE: for some reason the insertCountries is very unstable with connections to elasticsearch create actions. Haven't had time to debug, but it should insert enough fields to test. If you get errors you can just exit the script and either repeat steps 3 & 4 or just continue to step 5.

### step 5
open your browser and go to localhost:3000 to view the application!
