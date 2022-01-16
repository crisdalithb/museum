class Piece{
    constructor(id, image, description){
      this.id = id;
      this.image = image;
      this.description = description;
    }
    getImage(){
      return this.image;
    }
    setImage( image ){
      this.image = image
    }
    getDescription(){
      return this.description
    }
    setDescription( description ){
      this.description = description
    }
  } 
