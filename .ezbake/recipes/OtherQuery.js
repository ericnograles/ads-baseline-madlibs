module.exports = {
  description: 'A sample SQL file for OtherQuery',
  destination: '/sql/',
  source: `
    SELECT * FROM <%= table %> WHERE column = <%= value %> AND value = 1
  `,
  ingredients: [
    {
      "type": "input",
      "name": "fileName",
      "message": "What would you like this SQL file to be named?",
      "default": "some_table.sql"
    },
    {
      "type": "input",
      "name": "table",
      "message": "What is the name of the table you would like to query?",
      "default": "some_table"
    },
    {
      "type": "input",
      "name": "value",
      "message": "What is the column value of the query",
      "default": "1337"
    }
  ],
  icing: [
    {
      description: 'Says job is done',
      cmd: ['echo', `"job's done"`]
    }
  ]
}