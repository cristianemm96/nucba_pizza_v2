export const minID = []
export const maxID = []

export const setRango = (pizzeria) =>{
   minID.push(pizzeria.getMinID()) 
   maxID.push(pizzeria.getMaxID())
}


