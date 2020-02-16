function theMap() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newNums = nums.map((x) => x + ' ')
    $('#one').html(`
    ${newNums} 
    `)
    console.log('one', newNums)
}

function theDoble() {
    const nums = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9,];
    const newNums = nums.map((x) => x * 2 + ' ');
    $('#two').append(`
    ${newNums}
    `)
    console.log('two', newNums)
}

function theDiv() {
    const nums = [100, 200, 8, 10];
    const newNums = nums.map((x) => x / 2);
    $('#three').html(`
    ${newNums}
    `)
    console.log('three', newNums)
}

function mapMake() {
    const items = ['shoe', 'boot', 'hat'];
    const materials = ['synthetic', 'leather', 'felt'];
    const group = items.map((item) => {
        return item
    });
    const type = materials.map((material) => {
        return material
    })
    console.log('items map', group, type)
}

// function valuePairs() {
//     const pairs = [
//         {
//             House: 6,
//             Car: 'Renault'
//         },

//         {
//             House: 12,
//             Car: 'Ford'
//         },

//         {
//             House: 2,
//             Car: 'Citroen'
//         }
//     ];
//     // const values = pairs.map((pair) => {
//     //     console.log('four', pair.House, pair.Car)
//     //     let returnedPair = {}
//     //     returnedPair[pair.House] + pair.Car
//     //     return returnedPair
//     //     // return (
//     //     //     pair.House,
//     //     //     pair.Car
//     //     // )
//     // });
//     $('#four').html(`
//     <h3>House Number:${values}</h3>
//     <h3>Car Type:${values}</h3>
//     `)

// }

function tutorial() {

    const numbers = [2, 4, 8];
    const addTwo = number => number + 1
    // const result = numbers.map(addTwo) 
    const result = mapArray(addTwo, numbers)
    mapArray(addTwo, numbers)  //for functional programming you pass in the transform first, value second

    function mapArray(transform, array) {
        let transformedArray = [];
        for (let i = 0; i < array.length; i++) {
            // const currentItem = array[i];
            // const transformed = transform(currentItem)
            // transformedArray.push(transformed)
            transformedArray.push(transform(array[i])) //more efficient version of the above three lines
        }
        return transformedArray;
    }
    console.log('tutorial example', result)
}

function menu() {
    const food = ['beef', 'chicken', 'pork'];
    const addNoodles = ingredient => ingredient + ' and noodles';
    const dish = cooked(addNoodles, food);

    function cooked(transform, array) {
        transformedArray = [];
        for (let i = 0; i < array.length; i++) {
            const currentItem = array[i];
            const transformed = transform(currentItem);
            transformedArray.push(transformed);
        }
        return transformedArray;
    }
    console.log('menu =', dish)
}

function takeAway() {
    const mainIngredient = ['chips', 'beef', 'chicken', 'cheesecake'];
    const spiceItup = mainIngredient => mainIngredient + ' and curry sauce, yum!';
    const hot = served(spiceItup, mainIngredient);

    function served(transform, array) {
        finishedDish = [];
        for (let i = 0; i < array.length; i++) {
            // const currentItem = array[i];
            // const transformed = transform(currentItem);
            // finishedDish.push(transformed);
            finishedDish.push(transform(array[i]))
        }
        return finishedDish
    }
    console.log('curry!', hot)
    $('#five').html(`
    ${hot}
    `)
}

function filterArrayHome() {
    const numbers = [2, 4, 8, 9]
    const isMoreThan5 = number => number > 5;
    const result =
        filterArray(isMoreThan5, numbers);
    // numbers.filter(isMoreThan5);

    function filterArray(predicate, array) {
        filteredArray = [];
        for (let i = 0; i < array.length; i++) {
            const currentItem = array[i];
            if (predicate(currentItem)) {
                return filteredArray.push(currentItem)
            }
        }
        return filteredArray
    }
    console.log('filter practise', result)
}

function run() {
    theMap();
    theDoble();
    theDiv();
    mapMake();
    // valuePairs();
    tutorial();
    menu();
    takeAway();
    filterArrayHome();
}

$(run);