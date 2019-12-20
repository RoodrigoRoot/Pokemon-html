class UIPokemon{

    pokemon = new Pokemons()

    async UICreatePokemon(){
        let pokemons_response = await this.pokemon.getPokemons()
        let pokemons_article = document.getElementById("pokemons") 
        pokemons_response.map( (item)=>{
        
        let div = document.createElement('div') 
        div.className='cards'
        div.innerHTML=`<h3>${item.name} </h3>`
        pokemons_article.appendChild(div)            
      
        } )

    }
}