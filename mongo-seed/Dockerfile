FROM mongo:4.0.9

COPY mongo-seed/public_pokemons.json ./
COPY mongo-seed/create_dbs.js ./
COPY mongo-seed/init.sh ./
CMD ["mongod"]