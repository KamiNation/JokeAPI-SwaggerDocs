import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Joke API Swagger D0cs',
      description: "API Endpoints For A Joke API Documented In Swagger",
      contact: {
        name: "Israel Adedamola KAMI",
        email: "adedamolacopy@gmail.com",
        url: "https://kamii.hashnode.dev"
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:5841",
        description: "Local server"
      },
      {
        url: "<your live url here>",
        description: "Live server"
      },
    ]
  },
  apis: ['./server/routes/*.js'], // Path to your API routes
}
const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/jokeapi/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}
export default swaggerDocs