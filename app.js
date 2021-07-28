/* const numbers = [21,34,64, 99, 142];
const negatives = numbers.map(function(num){
    return num * -1;
});

const doubles = numbers.map(function(num){
    console.log(num *2);
});

const todos = [
    {
        id : 1,
        text : 'walk the dog',
        priority : 'high'
    },
    {
        id : 2,
        text: 'walk the chickens',
        priority: 'medium'
    },
    {
        id : 3,
        text : 'feed the cats',
        priority : 'low'
    },
    {
        id : 4,
        text : 'play with the dog',
        priority : 'super low',
    }
];

const todoText = todos.map(function(todo){
    return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));

function myMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const val = callback(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
}

const priorityMap = myMap(todos, function(todo) {
    return todo.priority;
});



const words = [
    'immunoelectrophoeritcally',
    'rotavator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirreled',
    'crypt'
];

const longWords = words.filter(function(word) {
    return word.length >=20;
})

words.filter(function(w) {
    return w[0] === 'c' || w[0] === 'u';
});

function(word) {
    for (let char of word) {
        if (isVowel(char)) return true;
        }
        return false;
};

const isVowel = function(char) {
    return 'aeiou'.indexOf(char) !== -1;
};
 */


function doubleValues(array) {
    return array.map(function(value) {
        return value * 2
    })
}

function onlyEvenValues(array) {
    return array.filter(function(ele) {
        return ele % 2 === 0
    })
}

function showFirstAndLast(array) {
    return array.map(function(word) {
        return word[0] + word.slice(-1)
        })
}

function addKeyAndValue(array, key, value) {
    for (i = 0; i < array.length; i++) {
        obj = array[i];
        obj[key] = value;
    }
    return array;

}

function vowelCount(string) {
    let array = string.toLowerCase().split('');
    let count = {};
    for ( let i = 0; i < array.length; i++) {
        // get the letter
        letter = array[i];
        if(count[letter]) {
            count[letter] += 1
            

        } else {
            count[letter] = 1
        }
    }

    return count;

}

function valTimesIndex(array) {
    return array.map(function(value, index) {
        return value * index
    })
}

function extractKey(array, key) {
    return array.map(function(obj) {
        return obj[key]

    })
}

function extractFullName(array) {
    return array.map(function(obj) {
        return obj.first + ' ' + obj.last
    })
}

function filterByValue(array, key) {
    return array.filter(function(obj) {
        return obj[key] !== undefined;
    });
}

function find(array, value) {
   const eligibleEle = array.filter(function(ele) {
        return ele === value
    })
    return eligibleEle[0];
}

function findInObj(array, key, value) {
    return array.filter(function(obj) {
        return obj[key] === value
    })[0]
}

function removeVowels(string) {
    array = string.toLowerCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return array.filter(function(ele) {
        return vowels.indexOf(ele) === -1
    }).join('')
}

function doubleOddNumbers(array) {
    const oddNumbers = array.filter(function(num) {
        return num % 2 !== 0
    })
    return oddNumbers.map(function(num) {
        return num * 2
    })
}

