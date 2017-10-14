module.exports = {
  source: { 
    "**/*.txt": true,
    "**/*.sql": true,
    "**/*.yml": true,
    "**/ignore_me.sql": false,
    "**/data/ignore_this_entire_folder/**": false,
    "**/*.sh": true
  },
  ingredients: [
    {
      "type": "input",
      "name": "favoriteFood",
      "message": "What is your favorite food?",
      "default": "Steak"
    },
    {
      "type": "input",
      "name": "favoriteSnack",
      "message": "What is your favorite snack?",
      "default": "Nutella"
    }
  ],
  "env": [
    {
      "type": "input",
      "name": "SOME_SECRET",
      "message": "Please specify a value for SOME_SECRET for the .env file",
      "default": "its_def_a_secret"
    }
  ],
  icing: [
    {
      description: 'Says a tongue twister',
      cmd: ['say', '"how much would could a woodchuck chuck if a woodchuck could chuck wood"']
    },
    {
      description: 'Says a tongue twister',
      cmd: ['echo', `"job's done"`]
    }
  ]
}