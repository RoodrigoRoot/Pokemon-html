class UIPokemon{

    pokemon = new Pokemons()

    async UICreatePokemon(){
        let pokemons_response = await this.pokemon.getPokemons()
        let pokemons_article = document.getElementById("pokemons") 
        pokemons_response.map( async (item,index)=>{
            console.log(index)
        let pokemon_response = await axios.get(item.url)
        let {data} = pokemon_response
        let {types} = data
        let div = document.createElement('div') 
        div.className='cards'
        div.innerHTML=`<h3>${String(item.name).toLocaleUpperCase()} </h3>
        <img src="${data.sprites.front_default}"/>
        <hr/>
        <p>Tipo: ${data.types[0].type.name+","} ${data.types[1].type.name} </p>
        <p>Peso: ${data.height}Kg</p>
        <a href="#" class="btn">Ver más</a>
        `
        pokemons_article.appendChild(div)            
      
        } )

    }
}