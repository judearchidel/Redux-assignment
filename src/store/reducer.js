const intialState ={
    person: []
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case 'ADDPERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
           return {
               ...state,
               person: state.person.concat(newPerson)
           } 
        case 'DELETEPERSON':
           
            const upadtedArray = state.person.filter(person => person.id !== action.index)
            return{
                ...state,
                person: upadtedArray
            }
        default:
            return state

    }
}

export default reducer;