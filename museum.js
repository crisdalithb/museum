class Museum{
    constructor(name, description){
      this.name = name;
      this.description = description;
      this.pieces = [];
    }
    getPieces(){
      return this.pieces
    }
    setPieces(pieces){
      this.pieces = pieces;
    }
    initializeGallery(){
      let piece0 = new Piece('piece0', 'images/Guacamayas.jpg', 'Los guacamayos (Ara) son aves del orden Psittaciformes y de la familia Psittacidae, muy llamativas por el colorido de su plumaje. También conocidos como Mery en algunos círculos.');
      let piece1 = new Piece('piece1', 'images/Cacatúas.jpg', 'Los cacatúidos (Cacatuidae) son una familia de aves psitaciformes, conocidos popularmente como cacatúas. Incluye 21 especies. Es la única familia de la superfamilia Cacatuoidea. Junto a las superfamilias Psittacoidea (loros verdaderos) y Strigopoidea (loros de Nueva Zelanda) forman el orden de las Psittaciformes.');
      let piece2 = new Piece('piece2', 'images/Guacamayo azul.jpg', 'El guacamayo azul o jacinto (Anodorhynchus hyacinthinus) es una especie de ave psitaciforme de la familia de los loros (Psittacidae). Habita en las selvas de buena parte de Brasil, Bolivia y el norte de Paraguay. Es la especie de guacamayo de mayor tamaño. En estado de vulnerabilidad, estas aves son codiciadas por su alto precio en el mercado. En Brasil se conoce como “arara azul”.');
      let piece3 = new Piece('piece3', 'images/Loro africano.jpg', 'El Loro Yaco (Psittacus erithacus), también conocido como Loro Gris Africano, Loro Gris de Cola Roja o Yaco, es una especie de ave psitaciforme de la familia Psittacidae propia de la selva tropical africana. Su aspecto es inconfundible, por su pico negro, su plumaje de color gris y su cola roja. Se encuentra amenazado por la pérdida de hábitat y por las capturas para ser vendido como mascota. Se trata de un ave caracterizada por su elevada inteligencia y por su capacidad de memorización y repetición de palabras');
      let piece4 = new Piece('piece4', 'images/Papagayos.jpg', 'Los psitácidos (Psittacidae) son una familia de aves psitaciformes llamadas comúnmente loros o papagayos, que incluye a los guacamayos, las cotorras y formas afines de América y África. Se clasifica dentro de la superfamilia Psittacoidea junto a las otras dos familias de loros típicos: Psittrichasiidae y Psittaculidae.');
      this.setPieces([piece0, piece1, piece2, piece3, piece4])
    }
  } 
