import { jokes } from "../database/jokes.js"

const data = jokes



//  Random controller
export const random = (req, res) => {
    const { method } = res.req
    console.log("methods logged ==>", method);
    try {
        res.status(200).json(data[Math.floor(Math.random() * data.length)])
    } catch (error) {
        console.error(error.message);
    }
}



// Specific controller
export const specifiJoke = (req, res) => {

    try {
        const id = req.params.id
        console.log("req params id specific id=>", id);

        let idInData = true

        const inData = data.map((joke) => joke.id)
        console.log("InData specific id =>", inData);

        idInData = inData.includes(id)
        console.log("idInData =>", idInData);

        for (let index = 0; index < data.length; index++) {
            if (id == data[index].id) {
                res.status(200).json(data[index])
            } else if (id == '') {
                res.status(400).json("Id is an empty string.....")
            }
        }

        if (idInData == false) {
            res.status(404).json("Id does not exist.....")
        }
    } catch (error) {
        console.error(error.message);
    }
}


// Filter controller
export const filter = (req, res) => {

    const { type } = req.query
    try {
        const filterResult = data.filter((filters) => filters.jokeType.toLowerCase().includes(type.toLowerCase()))
        console.log(filterResult);
        res.status(200).json(filterResult)
    }
    catch (error) {
        console.error(error);
    }

}


// newJoke controller
export const newJoke = (req, res) => {

    try {
        const { type, textx } = req.body
        const types = type
        const texts = textx

        let lastElement = data[data.length - 1].id
        let newLastElement = lastElement + 1

        let currentObject = { id: newLastElement, jokeText: texts, jokeType: types }

        data.push(currentObject)
        res.status(200).json("Joke has been created...")

        console.log(lastElement)
        console.log(newLastElement);
        console.log(currentObject);
    } catch (error) {
        console.error(error.message);
    }
}


// Currently at putJoke COntrollers

export const putJoke = (req, res) => {

    const { textx, type } = req.body

    const typer = type
    console.log('typer =>', typer);
    console.log('typer =>', typeof typer);

    const textrx = textx
    console.log('txtrx =>', textrx);
    console.log('txtrx =>', typeof textrx);

    const { id } = req.params

    const idr = id

    const numId = parseInt(idr)


    console.log("numId =>", numId);
    console.log("numId =>", typeof numId);


    try {

        const indexOfId = data.findIndex(find => find.id === numId)
        console.log("Index of Id =>", indexOfId);

        if (indexOfId !== -1) {
            // If an item with the matching ID is found, replace it with a new object
            data[indexOfId] = {
                id: numId,
                jokeText: textrx,
                jokeType: typer
            };

            console.log('Item replaced:', data[indexOfId]);
            res.status(200).json(data[indexOfId])

        } else {
            console.log('Item not found for ID:', idr);
            res.status(404).json(`Item not found for ID:, ${idr}`)

        }



    } catch (error) {
        console.error(error.message);

    }
}


export const deleteJokeById = (req, res) => {
    const { method } = res.req
    console.log("methods logged putJoke ==>", method);

    const { id } = req.params

    const delId = id

    const delByID = parseInt(delId)
    console.log("delId =>", delId);
    console.log("delId typeof =>", typeof delId);


    console.log("delByID =>", delByID);
    console.log("delByID typeof =>", typeof delByID);



    try {
        const indexOfId = data.findIndex(find => find.id === delByID)
        console.log("indexOfId =>", indexOfId);


        if (indexOfId !== -1) {
            // If an item with the matching ID is found, delete joke
            data.splice(indexOfId, 1)

            res.status(200).json(`Joke deleted by Id ${delByID}`)

        } else {

            let idAvail = true

            const inData = data.map((joke) => joke.id)
            console.log("InData specific id =>", inData);

            idAvail = inData.includes(delByID)
            console.log("idInData =>", idAvail);


            if (idAvail == false) {
                res.status(404).json(`Id ${delByID} does not exist.....`)
            }
        }



    } catch (error) {

    }
}


export const notFound = (req, res) => {

    try {
        res.status(200).json("Route not found, check route again")
        console.log(joker);

    } catch (error) {
        console.error(error.message);
    }
}


