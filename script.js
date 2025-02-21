function firstWord(str) {
   let trimmedStr = str.trim();
    let spaceIndex = trimmedStr.indexOf(" ");

    // If there is no space, return the entire string
    return spaceIndex === -1 ? trimmedStr : trimmedStr.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
