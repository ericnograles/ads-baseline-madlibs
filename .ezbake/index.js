module.exports = {
  source: { 
    "**/*.txt": true,
    "**/*.sql": true,
    "**/*.yml": true,
    "**/*.js": true,
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
    },
    {
      type: "input",
      name: "messageToUser",
      message: "Say something to the user: ",
      default: "You have just scaffolded the madlibs example. May the odds be ever in your favor."
    }
  ],
  "env": [
    {
      "type": "input",
      "name": "FACEBOOK_API_TOKEN",
      "message": "Please specify a Facebook API token for the .env file",
      "default": "12345"
    }
  ],
  icing: [
    {
      description: 'Says something on Mac',
      cmd: ['./icing.sh']
    },
    {
      description: 'Says something to the user',
      cmd: ['say', '"<%= messageToUser %>"']
    },
    {
      description: 'Does a Yarn install',
      cmd: ['yarn', 'install']
    },
    
    {
      description: 'Calls out to Facebook',
      cmd: ['node', `web_api_icing.js`]
    }
  ]
}