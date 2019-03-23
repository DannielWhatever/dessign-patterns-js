const _ = require('lodash');

// Main
function runExample() {
    
    // declare different strategies
    const strategiesToFind = {
        'FindWithLodash' : FindWithLodash,
        'FindWithVanilla': FindWithVanilla
    };

    // select the strategy
    const selectedStrategy = process.env.FINDSTRATEGY || 'FindWithLodash';
    const finder = new strategiesToFind[selectedStrategy]

    // sample data, to find
    const users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];
    
    const predicate = obj => obj.age < 40;

    // execute
    const result = finder.find(users, predicate);
    console.log('Result', result);
       
}



// Strategy interface
class FindStrategy {
    find(collection, predicate) { throw new Error("this is so abstract!")}
}

// And possible different implementations
class FindWithLodash extends FindStrategy{
    find (collection, predicate) {
        return _.find(collection, predicate);
    }
}

class FindWithVanilla extends FindStrategy{
    find (collection, predicate) {
        return collection.find(predicate);
    }
}


// init
runExample();