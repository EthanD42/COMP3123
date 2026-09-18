


function findAngle(angle) {
    if (angle < 0) {
        return "Invalid angle";
    } else if (angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }

}

console.log(findAngle(180));