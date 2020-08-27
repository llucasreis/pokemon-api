docker-compose down
docker-compose build
docker-compose up -d
docker exec -i database sh -c 'mongoimport --db pokemonapi --collection pokemons --drop --jsonArray' < pokemon.mongodb.json
