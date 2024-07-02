# 1. GET a random joke

## 2. GET a specific joke

## 3. GET a jokes by filtering on the joke type

## 4. POST a new joke

## 5. PUT a joke

## 6. PATCH a joke

## 7. DELETE Specific joke

## 8. DELETE All jokes

## const replaceFilter = data.filter((replace) => {

## const idr = req.body.id

## return Object.values(replace).join('').includes(idr)

## })

## console.log(replaceFilter)

## const replaceArray = []

## const replaceObject = {id: idr, jokeText: textrx, jokeType: typer }

## console.log(replaceObject)

## for (let index = 0; index < data.length; index++) {

### const idr = req.body.id

## if (idr == data[index].id) {

## replaceArray.push(data[index])

## console.log(replaceArray)

## }

## }

## Filtering an array of objects

### Use the filter method, passing a function that checks if the specific text is in the property of interest.
### Use string methods or regular expressions to perform text matching based on your needs.


```Javascript
Array
let books = [
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { title: "JavaScript: The Definitive Guide", author: "David Flanagan" },
    { title: "You Don't Know JS", author: "Kyle Simpson" }
];

By specific text
let keyword = "JavaScript";

let filteredBooks = books.filter(book => book.title.includes(keyword));


Output
console.log(filteredBooks);
// Output: 
// [
//     { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
//     { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
//     { title: "JavaScript: The Definitive Guide", author: "David Flanagan" }
// ]


```



```Javascript 

 url: '/random?_method=RANDOM',
  method: 'GET',
   baseUrl: '',
  originalUrl: '/random?_method=RANDOM',
  _parsedUrl: Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?_method=RANDOM',
    query: '_method=RANDOM',
    pathname: '/random',
    path: '/random?_method=RANDOM',
    href: '/random?_method=RANDOM',
    _raw: '/random?_method=RANDOM'
  },

  params: {},
  query: { _method: 'RANDOM' },

  search: '?_method=RANDOM',
    query: '_method=RANDOM',
    pathname: '/random',
    path: '/random?_method=RANDOM',
    href: '/random?_method=RANDOM',
    _raw: '/random?_method=RANDOM'

```

```Javascript

    // console.log("NOT FOUND ROUTE req =>",req);
    // console.log("NOT FOUND ROUTE req.body.search =>",req._parsedOriginalUrl.search);
    // console.log("NOT FOUND ROUTE req.body.query =>",req._parsedOriginalUrl.query);
    // console.log("NOT FOUND ROUTE req.body.pathname =>",req._parsedOriginalUrl.pathname);
    // console.log("NOT FOUND ROUTE req.body._raw =>",req._parsedOriginalUrl._raw);
    // console.log("NOT FOUND ROUTE req.socket.server._handle =>",res.socket.server._handle);
    // console.log("NOT FOUND ROUTE req.socket._connectionKey =>",res.socket._connectionKey);
    // console.log("NOT FOUND ROUTE req.socket.incoming.orginalMethod =>",res.socket.orginalMethod);
    // console.log("NOT FOUND ROUTE req.socket.incoming._parsedOriginalUrl =>",res.socket._parsedOriginalUrl);
    // console.log("NOT FOUND ROUTE req.socket.incoming.route =>",res.socket.route);
    // console.log("NOT FOUND ROUTE req.socket._httpMessage =>",res.socket._httpMessage);

```Javascript

    console.log("NOT FOUND ROUTE req.body =>", req.body);
      console.log("NOT FOUND ROUTE req.route =>", req.route);
      console.log("NOT FOUND ROUTE req.socket =>", res);

    let search = req._parsedOriginalUrl.search
      console.log("NOT FOUND ROUTE req.body search =>", search);
    let query = req._parsedOriginalUrl.query
      console.log("NOT FOUND ROUTE req.body query =>", query);
    let pathName = req._parsedOriginalUrl.pathname
      console.log("NOT FOUND ROUTE req.body pathname =>", pathName);
    let raw = req._parsedOriginalUrl._raw
      console.log("NOT FOUND ROUTE req.body raw =>", raw);
    let server = res.server
      console.log("NOT FOUND ROUTE req.body server =>", server);
    let parser = res.parser
      console.log("NOT FOUND ROUTE req.body parser =>", parser);
      let reqRes = res.req
      console.log("NOT FOUND ROUTE req.body reqRes =>", reqRes);
    let rawHeader = res.rawHeaders
      console.log("NOT FOUND ROUTE req.body rawHeader =>", rawHeader);
    let methods = res.method
    // console.log("NOT FOUND ROUTE req.body methods =>", methods);

    // const { rawHeaders, method } = res.req
    // console.log("rawHeaders logged ==>", rawHeaders);
    // console.log("methods logged ==>", method);

    // const requestObject = [
    //     {
    //         reqSearch: search
    //     },
    //     {
    //         reqQuery: query
    //     },
    //     {
    //         pathname: pathName
    //     },
    //     {
    //         reqRaw: raw
    //     },
    //     {
    //         reqRoute: route
    //     },
    //     {
    //         resServer: server
    //     },
    //     {
    //         resParser: parser
    //     },
    //     {
    //         resReq: reqRes
    //     },
    //     {
    //         resRaw: rawHeader
    //     },
    //     {
    //         resMethod: methods
    //     }
    // ]

    // const requestBody = JSON.stringify(requestObject)
    // console.log(requestBody);

    // if (requestBody === "") {
    //     console.log("requestBody is empty");
    // } else {
    //     try {
    //         fs.appendFile("requestBody.txt", requestBody, (err) => {
    //             if (err) throw New(err)
    //             console.log("File has been saved");
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
```

### body-parser inteprets the incoming HTTP request body and makes it available as key-value pairs in the body property of the request, req, parameter

### method-override allows one to specify a custom function to be called during the middleware execution. In this custom function we will inspect the request body, req.body, for the presence of the desired token, _method in this case, and return its value to the middleware that will in turn override the request method

```Javascript
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
```

  ```Java
   // console.log(req);
    // console.log(req.body);
    // console.log(req.body.search);
    // console.log(req.body.query);
    // console.log(req.body.pathname);
    // console.log(req.body._raw);
    // console.log(req.route);
```

```Javascript
// export const homepage = (req, res) => {
//     const testRand = Math.floor(Math.random() * 100) + 1
//     console.log(testRand);
//     try {
//         res.render("index.ejs", { joker: "Hit the different routes we have to get your jokes... ", testRand })
//     } catch (error) {
//         console.error(error.message);
//     }
// }


  // /** GET Methods */
        // /**
        //  * @openapi
        //  * '/jokeapi/':
        //  *  get:
        //  *     tags:
        //  *     - Homepage Controller
        //  *     summary: Display the homepage
        //  *     responses:
        //  *      200:
        //  *        description: Fetched Successfully
        //  *      400:
        //  *        description: Bad Request
        //  *      404:
        //  *        description: Not Found
        //  *      500:
        //  *        description: Server Error
        //  */
        // app.get("/jokeapi/docs", homepage)
```

### Checking if an item in an array of objects using .includes()

### But before that can happen, you first have to extract that item using the .map() before you can apply the .includes()

### Example below extracting  Id from the array of objects

```Javascript
let users = [
    { id: 1, name: "Alice", firstname: "Alicia" },
    { id: 2, name: "Bob", firstname: "Robert" },
    { id: 3, name: "Charlie", firstname: "Charles" }
];

// Using the map method to extract all the id into an array
let ids = users.map(user => user.id);

// Checking if an external id exists in the extracted Id array with the includes function

let targetId = 2;
let idExists = ids.includes(targetId);

console.log(idExists);  // Output: true
```
