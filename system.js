class System{

    constructor(){}

  authenticate(actualCode,enterCode){
      if(actualCode===enterCode.toUpperCase()){

        return true
         
        
      }
      else{
          return false

      }

      
  }
}

