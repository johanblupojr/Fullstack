/* Objects for Lookups
    function phoneticLookup(val){
        var result = "";

        var lookup = {
            "alpha": "Adams",
            "beta": "Boston",
            "charlie": "Chicago"
        };
        result = lookup[val];
        return result;
    }

    console.log(phoneticLookup("charlie"));
*/

/* Testing Object Properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleight"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));
*/

/*Manipulating Complex Objects
var myMusic = [
    {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
    },
    {
        "artist": "Elvis Presley",
        "title": "Can't Help Falling in Love"
    }
]

console.log(myMusic)
*/

/*Nested Obejects

var myStorage = {
    "car": {
        "inside": {
            "glovebox": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}
var gloveBoxContents = myStorage.car.inside["glovebox"];
console.log(gloveBoxContents);

*/

/*Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list:  [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);
*/

