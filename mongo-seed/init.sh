#! /bin/bash
mongoimport -h mongo --db test_57blocks --collection pokemons --drop --file public_pokemons.json
mongo mongo/test_57blocks create_dbs.js