const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const {Videogame, Genre} = require ("../db.js");
// const fetch = require("node-fetch");

const {API_KEY} = process.env;

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// 1° ME TRAIGO LA INFORMACION DE LA API
const getApiInfo = async () => {
    const apiUrlUno = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=1`) // VER COMO HACE QUE TE TRAE LOS 40
    const apiUrlDos = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`)
    const apiUrlTres = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&page=3`)
    const apiUrlTotal = apiUrlUno.data.results.concat(apiUrlDos.data.results, apiUrlTres.data.results)
    const infoTotal = await apiUrlTotal.map(el => {
        return {
            id:el.id,
            name:el.name,
            released:el.released,
            rating:el.rating,
            platforms:el.platforms.map(el=>el.platform.name),
            img:el.background_image,
            genres: el.genres.map(el=>el.name +" - "),
        }
    }); return infoTotal
}
// 2° ME GUARDO TODOS LOS GENEROS
const getDbInfo = async()=>{
    return await Videogame.findAll({
        includes:{
            model:Genre,
            attributes: ["name"],
            through:{
                attributes:[],
            }
        }
    })
}
// 3° ME TRAIGO TODOS LOS VIDEOJUEGOS 
const getAllVideogames = async()=>{
    const infoTotal1 = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal2 = infoTotal1.concat(dbInfo);
    return infoTotal2;
}
// UNA RUTA QUE TRAE TODOS LOS VIDEOJUEGOS Y ADEMAS PUEDO HACER ALGUN PEDIDO EN ESPECIAL POR QUERY.
router.get("/Videogames", async (req,res)=>{
    const name = req.query.name
    let videogameTotal = await getAllVideogames ();
    if (name){
        let videogameName = await videogameTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        videogameName.length ?
        res.status(200).send(videogameName) :
        res.status(404).send(videogameName);
        // TRAEME TAL RECETA POR QUERY, SI NO LA ENCONTRAS RESPONDEME CON EL 404...
    }else{
        res.status(201).send(videogameTotal)
    }
     // SI NO PEDIMOS NADA POR QUERY, TRAEME TODAS LAS RECETAS
    
     // UNA RUTA QUE TRAE TODOS LOS GENEROS?
    })
    .patch((error) =>{
     console.log(error);
    });
router.get("/Genres", async (req,res)=>{
    const generoApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    generoApi.data.results.forEach(async (element) => {
        await Genre.findOrCreate({
         where: {name: element.name}
     })
         
     });
     const allGeneros = await Genre.findAll();
     res.send(allGeneros);
})


router.post(`/Videogames`, async (req,res)=> {
    let{                              // LE PASO LOS DATOS QUE QUIERO MANDAR POR BODY
            name,
            description,
            released,
            rating,
            platforms,
            img,    
            genres,
            createdInDb
        } = req.body;
        if(!name){ return res.status(404).send("El nombre es un campo requerido")}
    let videogamesCreated = await Videogame.create ({
            name,                          // CREO LO QUE QUIERO PONER EN DB
            description,
            released,
            rating,
            platforms,
            img,
            genres,
            createdInDb
    })
    let genreDb= await Genre.findAll({
        where: { name: genres }         // BUSCO EN TODAS LOS GENEROS 
    })
    videogamesCreated.addGenre(genreDb)   // AGREGO EL VIDEOJUEGO A MI BASE DE GENEROS
    res.send("Tu videojuego fue creado con exito")
})
// TE TRAES UN VIDEOJUEGO POR ID, Y LO BUSCA DE TAL FORMA SI VIENE CON ID RARO O CON ID COMUN
router.get("/Videogames/:id", async (req,res) => {
    try {
        const idVideogame = req.params.id;
        let juegos
        if(typeof idVideogame === 'string' && idVideogame.length > 8){
            juegos = await Videogame.findByPk(idVideogame)
            res.send(juegos)
        }else{
     juegos = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
            juegos = juegos.data;
            juegos = {
                id: juegos.id,
                name: juegos.name,
                released: juegos.released,
                image: juegos.background_image,
                platforms: juegos.platforms.map(e => e.platform.name + " - "),
                description: juegos.description_raw,
                rating: juegos.rating,
                genres : juegos.genres.map(genre => genre.name + " - ")
            }
            res.send(juegos)
        }
        }catch(error){
            next(error)
    }
})
router.delete("/Videogames/:id", async (req,res)=>{
    const id = req.params.id
    // filtrar entre todos los elementos de mi base de datos , el id que coincida y eliminarlo.
    await Videogame.destroy({
        where:{id:id}
    })
        res.status(200).send("Tu videogame se elimino correctamente")      
})

module.exports = router;
