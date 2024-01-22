import https from 'https';
import { capitalizeNames } from '../src/utils/strings';

type PokemonType = string; // Define more specifically if needed

type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  level: number;
  hp: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  attack: number;
  defense: number;
  moves: Moves[];
  weight: number;
  height: number;
};

type Moves = {
  name: string;
  power: number;
  accuracy: number;
  type: PokemonType;
  powerPoints: number;
};

async function getPokemonData(name: string): Promise<Pokemon | null> {
  return new Promise((resolve, reject) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    https
      .get(url, (res: any) => {
        let response = '';

        res.on('data', (chunk: any) => {
          response += chunk;
        });

        res.on('end', async () => {
          try {
            const data = JSON.parse(response);

            // fetch every move
            const moves = await Promise.all(
              data.moves.map(
                async ({ move }: any) =>
                  new Promise(async (resolve, reject) => {
                    const moveUrl = move.url;

                    https.get(moveUrl, (res: any) => {
                      let response = '';

                      res.on('data', (chunk: any) => {
                        response += chunk;
                      });

                      res.on('end', async () => {
                        try {
                          const moveData = JSON.parse(response);
                          const moveObj: Moves = {
                            name: capitalizeNames(move.name),
                            power: moveData.power ?? 0,
                            accuracy: moveData.accuracy,
                            type: moveData.type.name,
                            powerPoints: moveData.pp,
                          };
                          resolve(moveObj);
                        } catch (error) {
                          reject(error);
                        }
                      });
                    });
                  })
              )
            );

            const pokemon: Pokemon = {
              id: data.id,
              attack: data.stats.find(({ stat }: any) => stat.name === 'attack')
                .base_stat,
              defense: data.stats.find(
                ({ stat }: any) => stat.name === 'defense'
              ).base_stat,
              height: data.height,
              hp: data.stats.find(({ stat }: any) => stat.name === 'hp')
                .base_stat,
              level: data.base_experience,
              moves,
              name: capitalizeNames(data.name),
              specialAttack: data.stats.find(
                ({ stat }: any) => stat.name === 'special-attack'
              ).base_stat,
              specialDefense: data.stats.find(
                ({ stat }: any) => stat.name === 'special-defense'
              ).base_stat,
              speed: data.stats.find(({ stat }: any) => stat.name === 'speed')
                .base_stat,
              types: data.types.map((t: any) => t.type.name),
              weight: data.weight,
            };
            resolve(pokemon);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', (error: any) => {
        reject(error);
      });
  });
}

const pokemonNames = [
  'alakazam',
  'azumarill',
  'blastoise',
  'bulbasaur',
  'charizard',
  'charmander',
  'diglett',
  'dragonite',
  'gengar',
  'glaceon',
  'machamp',
  'onix',
  'pikachu',
  'raichu',
  'scyther',
  'steelix',
  'togekiss',
  'umbreon',
];

async function main() {
  const pokemons: (Pokemon | null)[] = [];
  for (const name of pokemonNames) {
    const pokemon = await getPokemonData(name);
    if (pokemon) pokemons.push(pokemon);
  }
  console.log(JSON.stringify(pokemons));
}

main();
