function getPokemon() {
    let search = document.getElementById('search');
    let pokemon = search.value.toLowerCase(); // Esto les convierte en minuscula cualquier palabra para evitar errores gramaticales

    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            // Aca deberán agregar en una variable los nuevos campos que desean buscar 

            let name = data.name;
            let type = "Tipo: " + data.types[0].type.name; 
            let sprite = data.sprites.front_default;
            let height = data.height;
            let weight = data.weight;
            let ability = data.abilities[0].ability.name;
            let rarity = data.rarity;
            let id = data.id;
            let speed = data.speed;
            let generation = data.generation;
            let attack = data.stats[0].attack;
            let stat = data.stats;
            let move = data.move;
            // Aca deberán reconocer los elementos de su HTML, en caso de no existir, crear unos nuevos con su respectivo ID.

            // Recuerden que si desean obtener una info de tipo string (texto) pueden usar cualquier elemento HTML como <h1>, <p>, <a>, etc...

            document.getElementById('name').textContent = name;
            document.getElementById('type').textContent = type;
            
            document.getElementById('height').textContent = height + "libra";
            document.getElementById('weight').textContent = weight + "centimetro";
            document.getElementById('ability').textContent = ability + " esa es su habilidad";
            document.getElementById('rarity').textContent = rarity + " esta es su rareza";
            document.getElementById('id').textContent = id + " ese es su id";
            document.getElementById('speed').textContent = speed + " esta es su velocidad";
            document.getElementById('generation').textContent = generation + " esta es su generacion";
            document.getElementById('attack').textContent = attack + " este es su ataque";
            document.getElementById('stat').textContent = stat + " este es su estado";
            document.getElementById('move').textContent = move + " este es su movimiento",


          

            // En cambio si desean almacenar imagenes, una forma prácticar es hacer uso del parametro SRC para guardar alli la URL de la imagen y que se muestre en el elemento <img>

            document.getElementById('sprite').src = sprite;
          
        })

            // Aca pueden cambiar el mensaje del error o mostrarle a traves de un elemento HTML (opcional)

        .catch(() => {
            alert('Pokemon no encontrado')
        });
}