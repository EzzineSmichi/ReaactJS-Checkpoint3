function FullName (){

    const person = {
        firstName : 'Ezzine',
        lastName : 'Smichi'
    }
    
    return (
        
        <h1>{person.firstName} {person.lastName}</h1>
        
    );
    
}

export default FullName;