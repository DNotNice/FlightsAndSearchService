# WELCOME TO FILGHTS SERVICE 
 
 ## PROJECT SETUP
  - clone the project on your local
  - Execute `npm install` on the same path as of your root directory of the downloaded project
  - Create a `.env` file in the root directory and add the following environment variable
      - `PORT =3001`
  - Inside the `src/config` folder a new file `config.json` and then add the following pieceo of json 
   ```
  {
       "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_LOGIN_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
      }
   }
   ```
   ONCE you have added your db config as listed above , go the src folder from your terminal and execute  `npx sequelize db:create`.
   
  
## DB DESIGN
   - Airplane Table
   - Flight
   - Airport
   - City


   - A flight belongs to an airplane but one can be used in multiple flights
   - A city has many airports but one airport belongs to a city
   - One airport can have many flights, but a flight belongs to one airport