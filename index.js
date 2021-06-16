
function saturdayFun(activity = "roller-skate") {   //this is function declaration
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {  //this is function expression as specified
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wish = '*') {
    return function(adjective = 'a hard worker'){
        return `You are ${wish}${adjective}${wish}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
};

function actionApplyer(start, array) {
    if (array.length === 0) {
        return start
    }

    for(let i = 0; i< array.length; i++) {
        start = array[i](start)
    }
    return start
}