import {
    filter,
    newJoke,
    random,
    putJoke,
    specifiJoke,
    deleteJokeById
} from "../controllers/controller.js"






export const route = (app) => {
    try {

        /** GET Methods */
        /**
         * @openapi
         * '/jokeapi/random':
         *  get:
         *     tags:
         *     - Random Controller
         *     summary: Get a random Joke
         *     requestBody:
         *      required: false
         *      content:
         *        application/json:
         *     responses:
         *      200:
         *        description: Created
         *      409:
         *        description: Conflict
         *      404:
         *        description: Not Found
         *      500:
         *        description: Server Error
         */
        app.get("/jokeapi/random", random)



        /** GET Methods */
        /**
        * @openapi
        * paths: 
        *   '/jokeapi/jokes/{id}':
        *     get:
        *       tags:
        *         - specificJoke Controller
        *       summary: Get a specific joke by Id
        *       parameters:
        *         - in: path
        *           name: id
        *           schema:
        *             type: integer
        *           required: true
        *           description: Numeric ID to get a specific joke
        *       responses:
        *         200:
        *           description: Joke found
        *           content:
        *             application/json:
        *               schema:
        *                 type: object
        *                 properties:
        *                   id:
        *                     type: integer
        *                     example: 50
        *                   jokeText:
        *                     type: string
        *                     example: "What do you get when you cross a snowman and a vampire? Frostbite!"
        *                   jokeType:
        *                     type: string
        *                     example: "Wordplay"
        *         400:
        *           description: Id is an empty string
        *           content:
        *             application/json:
        *               schema:
        *                 type: string
        *                 example: "Id is an empty string."
        *         404:
        *           description: Id does not exist
        *           content:
        *             application/json:
        *               schema:
        *                 type: string
        *                 example: "Id does not exist."
        *         500:
        *           description: Server Error
        */
        app.get("/jokeapi/jokes/:id", specifiJoke)



        /** GET Methods */
        /**
        * @openapi
        * /jokeapi/filter:
        *   get:
        *     tags:
        *       - filter Controller
        *     summary: Filter jokes by type (e.g., Science, Wordplay, Puns, Foods, Sports)
        *     parameters:
        *       - in: query
        *         name: type
        *         required: true
        *         schema:
        *           type: string
        *         description: Type of joke to filter by
        *     responses:
        *       200:
        *         description: Joke found by filter
        *         content:
        *           application/json:
        *             schema:
        *               type: array
        *               items:
        *                 type: object
        *                 properties:
        *                   id:
        *                     type: integer
        *                     example: 1
        *                   jokeText:
        *                     type: string
        *                     example: "Why don't scientists trust atoms? Because they make up everything."
        *                   jokeType:
        *                     type: string
        *                     example: "Science"
        *             example: [
        *               {
        *                 "id": 1,
        *                 "jokeText": "Why don't scientists trust atoms? Because they make up everything.",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 6,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 15,
        *                 "jokeText": "I'm reading a book about anti-gravity. It's impossible to put down!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 19,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 28,
        *                 "jokeText": "I'm reading a book about anti-gravity. It's impossible to put down!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 32,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 41,
        *                 "jokeText": "I'm reading a book about anti-gravity. It's impossible to put down!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 45,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 54,
        *                 "jokeText": "I'm reading a book about anti-gravity. It's impossible to put down!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 58,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 67,
        *                 "jokeText": "I'm reading a book about anti-gravity. It's impossible to put down!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 71,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 80,
        *                 "jokeText": "I'm reading a book about anti-gravity. It's impossible to put down!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 84,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 93,
        *                 "jokeText": "I'm reading a book about anti-gravity. It's impossible to put down!",
        *                 "jokeType": "Science"
        *               },
        *               {
        *                 "id": 97,
        *                 "jokeText": "How do you organize a space party? You planet!",
        *                 "jokeType": "Science"
        *               }
        *             ]
        *       404:
        *         description: Not Found
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.get("/jokeapi/filter", filter)



        /** POST Methods */
        /**
        * @openapi
        * '/jokeapi/newJoke':
        *   post:
        *     tags:
        *       - newJoke Controller
        *     summary: Create a new Joke without the need for an ID
        *     requestBody:
        *       required: true
        *       content:
        *         application/json:
        *           schema:
        *             type: object
        *             properties:
        *               type:
        *                 type: string
        *                 example: Joker
        *               textx:
        *                  type: string
        *                  example: Never stop learning cuz life never stop teaching
        *     responses:
        *       200:
        *         description: Joke created
        *         content:
        *           application/json:
        *             schema:
        *               type: string
        *               example: "Joke has been created"
        *       404:
        *         description: Not Found
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.post("/jokeapi/newJoke", newJoke)



        /** PUT Methods */
        /**
        * @openapi
        * '/jokeapi/putJoke/{id}':
        *   put:
        *     tags:
        *       - putJoke Controller
        *     summary: Edit an existing Joke with an Id
        *     parameters:
        *         - in: path
        *           name: id
        *           schema:
        *             type: integer
        *             example: 100
        *           required: true
        *           description: Numeric ID to edit a specific joke
        *     requestBody:
        *       required: true
        *       content:
        *         application/json:
        *           schema:
        *             type: object
        *             properties:
        *               type:
        *                 type: string
        *                 example: Orochimaru
        *               textx:
        *                   type: string
        *                   example: Real power is forged from the desire smoldering in the heart
        *     responses:
        *       200:
        *         description: Joke edited
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               properties:
        *                 id:
        *                   type: integer
        *                   example: "100"
        *                 jokeText:
        *                         type: string
        *                         example: "Real power is forged from the desire smoldering in the heart"
        *                 jokeType:
        *                         type: string
        *                         example: "Orochimaru"
        *       404:
        *           description: Item not found for specified Id
        *           content:
        *             application/json:
        *               schema:
        *                 type: string
        *                 example: "Item not found for ID:, 102"
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.put("/jokeapi/putJoke/:id", putJoke)

        /** DELETE Methods */
        /**
        * @openapi
        * /jokeapi/deleteJoke/{id}:
        *   delete:
        *     tags:
        *       - deleteJoke Controller
        *     summary: Delete an existing Joke with an Id
        *     parameters:
        *       - in: path
        *         name: id
        *         schema:
        *           type: integer
        *           example: 100
        *         required: true
        *         description: Numeric ID of the joke to delete
        *     responses:
        *       200:
        *         description: Joke deleted
        *         content:
        *           application/json:
        *             schema:
        *               type: string
        *               example: "Joke with ID 100 has been deleted."
        *       404:
        *           description: Item not found for specified Id
        *           content:
        *             application/json:
        *               schema:
        *                 type: string
        *                 example: "Id 100 does not exist....."
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.delete("/jokeapi/deleteJoke/:id", deleteJokeById)
    } catch (error) {
        console.error(error.message);
    }
}