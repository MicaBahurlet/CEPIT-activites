

//creo una funcion para traerme los personajes, y con un fetch le doy la url con un callback dentro de la funcion para la información del personaje
function getCharacters(done) {

    //crear variable llamada results, que me traiga la informacion
    const results = fetch('https://rickandmortyapi.com/api/character');
    
    // para que me traiga la informacion en formato json legible
    results
    .then(response => response.json()) 
    // otro then para que me de los datos, llamo el callback para los datos 
    .then(data => {
        done(data)
    });

}
//llamo a la función para traerme los personajes 
getCharacters (data => {
    
    // yo me traigo la data y hago un forEach para que me traiga cada uno de los personajes y recorrer cada uno
    data.results.forEach(personaje => {

        // creo el contexto en html para escribir el código donde se renderiza el personaje con createcontextualfragment
        const article = document.createRange().createContextualFragment(`

            <article>
                <div class="card">
                    <img src="${personaje.image}" alt="personaje">
                    
                    <h2>${personaje.name}</h2>
                    <span>${personaje.status}</span>
                </div>
                
            </article>
        
        `);

        // llamo al main porque es donde yo quiero renderizar los personajes
        const main = document.querySelector('main');

        // renderizo los personajes
        main.append( article );
        
    });
    

});