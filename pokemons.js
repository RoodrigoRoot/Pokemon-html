class Pokemons{
    async getPokemons(){
        let request = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40")//Limitado a 20 pokemons
        //let request = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964") Todos los poquemos
        let {data} = request
        return data.results
    }
    
}