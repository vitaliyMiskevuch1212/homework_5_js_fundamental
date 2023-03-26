(function (){
    function propsCount(curentObject){
        return Object.keys(curentObject).length
    }
    const dog = {
        name: 'Buddy',
        breed: 'Golden Retriever',
        age: 5,
        weight: 70,
        color: 'golden',
        favoriteFoods: ['chicken', 'beef', 'carrots'],
        owner: {
            name: 'John',
            age: 30,
            address: '123 Main St'
        }
    };
    console.log(`Length: ${propsCount(dog)}`)
})()