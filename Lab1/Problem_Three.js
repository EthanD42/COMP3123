


function lastThree(string) {


    if (string.length <= 3) return null;

    let lastThreeChars = string.slice(-3);

    let result = lastThreeChars + string.slice(0, -3);
    return result;
}


console.log(lastThree("Everybody"));