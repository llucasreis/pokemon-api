# Rotas da Aplicação

<style>
  .text-white {
    color: #fff;
  }

  .bg-blue {
    background-color: #0366d6
  }

  .bg-green {
    background-color: #49CC90
  }

  .rounded-1 {
    border-radius: 3px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .px-2 {
    padding-right: 8px;
    padding-left: 8px;
  }

  .py-1 {
    padding-top: 4px;
    padding-bottom: 4px;
  }
</style>

Atualmente a API possui dos módulos, e cada módulo possui suas próprias rotas.

## Pokémons

### Listar pokémons

Listar todos os pokémons, sendo possível filtrar pelo nome ou por um ou mais tipos. Vale ressaltar que ao escolher filtrar por mais de um tipo, será retornado **todos** os pokémons que abrangem estes tipos.

**Rota**
<pre>
<span class="text-white bg-blue rounded-1 uppercase px-2 py-1">GET</span>  /pokemons
</pre>

**Parâmetros**
| Nome | Tipo | Segmento | Descrição |
|------|------|----------|-----------|
| name | string | query | Nome do pokémon, pode-se digitar apenas uma parte do nome que a aplicação procura por pokémons que possuem essa *substring*.
| type | string | query | Tipo do pokémon, para filtrar por mais de um tipo basta separá-los por ",".

<br />

**Exemplos de Requisição**
<pre>
/pokemons
/pokemons/?name=cha
/pokemons/?type=fire
/pokemons/?name=cha&type=fire
/pokemons/?name=ch&type=fire,dragon
</pre>

<br />

**Exemplo de Resposta**
```
Status: 200 OK
```

```javascript
[
  {
    "types": [
      "poison",
      "grass"
    ],
    "_id": "5f48fbcc4060d98e215c9986",
    "id": 1,
    "name": "bulbasaur",
    "height": 0.7,
    "weight": 6.9,
    "xp": 64,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "types": [
      "poison",
      "grass"
    ],
    "_id": "5f48fbcc4060d98e215c997f",
    "id": 2,
    "name": "ivysaur",
    "height": 1,
    "weight": 13,
    "xp": 142,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {...}
]
```

## Times

### Criar times

Criar um time, passando o nome do treinador e os pokémons da equipe. **Obs.:** nos requisitos do desafio é dito para usar o nome do treinador, porém logo em seguida é dito para usar o nome do time. Para não haver dúvidas, será usados os dois campos durante a criação.

**Rota**
<pre>
<span class="text-white bg-green rounded-1 uppercase px-2 py-1">post</span>  /teams
</pre>

**Parâmetros**
| Nome | Tipo | Segmento | Descrição |
|------|------|----------|-----------|
| trainer_name | string | body | Nome do treinador, com no mínimo 5 caracteres.
| team_name | string | body | Nome do time, com no mínimo 5 caracteres.
| pokemons | array | body | Pokémons da equipe, com no máximo 6 pokémons.

<br />

**Exemplos de Requisição**

```javascript
{
	"trainer_name": "Lucas",
	"team_name": "GrassFire",
	"pokemons": [
		{
      "id": 1,
      "name": "bulbasaur"
    },
		{
      "id": 2,
      "name": "ivysaur"
    },
		{
      "id": 3,
      "name": "venusaur"
    },
		{
      "id": 4,
      "name": "charmander"
    },
		{
      "id": 5,
      "name": "charmeleon"
    },
		{
			"id": 6,
			"name": "charizard"
		}
	]
}
```

<br />

**Exemplo de Resposta**

Resposta caso o usuário passe as informações corretamente
```
Status: 200 OK
```
```javascript
{
  "pokemons": [
    {
      "types": [
        "fire"
      ],
      "_id": "5f48fbcc4060d98e215c997e",
      "id": 4,
      "name": "charmander",
      "height": 0.6,
      "weight": 8.5,
      "xp": 62,
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      "types": [
        "poison",
        "grass"
      ],
      "_id": "5f48fbcc4060d98e215c997f",
      "id": 2,
      "name": "ivysaur",
      "height": 1,
      "weight": 13,
      "xp": 142,
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
      "types": [
        "fire"
      ],
      "_id": "5f48fbcc4060d98e215c9980",
      "id": 5,
      "name": "charmeleon",
      "height": 1.1,
      "weight": 19,
      "xp": 142,
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
      "types": [
        "flying",
        "fire"
      ],
      "_id": "5f48fbcc4060d98e215c9981",
      "id": 6,
      "name": "charizard",
      "height": 1.7,
      "weight": 90.5,
      "xp": 240,
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
      "types": [
        "poison",
        "grass"
      ],
      "_id": "5f48fbcc4060d98e215c9983",
      "id": 3,
      "name": "venusaur",
      "height": 2,
      "weight": 100,
      "xp": 236,
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
      "types": [
        "poison",
        "grass"
      ],
      "_id": "5f48fbcc4060d98e215c9986",
      "id": 1,
      "name": "bulbasaur",
      "height": 0.7,
      "weight": 6.9,
      "xp": 64,
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }
  ],
  "_id": "5f494768e6d6bb8d50dda4a2",
  "trainer_name": "Teste",
  "team_name": "Inicials",
  "__v": 0
}
```

Resposta caso o usuário informe o `trainer_name` com menos de 5 caracteres.
```
Status: 400 Bad Request
```

```javascript
{
  "errors": [
    {
      "field": "trainer_name",
      "message": "trainer_name length must be at least 5 characters long."
    }
  ]
}
```

Resposta caso o usuário informe o `team_name` com menos de 5 caracteres.
```
Status: 400 Bad Request
```
```javascript
{
  "errors": [
    {
      "field": "team_name",
      "message": "team_name length must be at least 5 characters long"
    }
  ]
}
```

Resposta caso o usuário informe mais de 6 pokémons no campo `pokemons`.
```
Status: 400 Bad Request
```
```javascript
{
  "errors": [
    {
      "field": "pokemons",
      "message": "pokemons must contain less than or equal to 6 items."
    }
  ]
}
```

Resposta caso o usuário informe pokémons com `id` não presente no banco de dados.
```
Status: 404 Not Found
```
```javascript
{
  "errors": [
    {
      "field": "pokemons",
      "message": "Could not found any pokemon in given array"
    }
  ]
}
```

Resposta caso o usuário **alguns** pokémons com `id` não presente no banco de dados
```
Status: 404 Not Found
```
```javascript
{
  "errors": [
    {
      "field": "pokemons",
      "message": "Some pokemons could not be found"
    }
  ]
}
```
