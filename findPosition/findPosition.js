function treatInput(input) {
    let linhaDesafio = linhas.trim().split("\n");

    let splitByComma = linhaDesafio[0].split(',');

    let separateIndexesWithComma = [];

    for (let i = 0; i < splitByComma.length; i++) {
        separateIndexesWithComma[i] = splitByComma[i].replace(/[\s]/g, ",");
    }

    let separatedArray = [];

    let theFinalArray = [];

    for (let i = 0; i < splitByComma.length; i++) {
        separatedArray[i] = separateIndexesWithComma[i].split(',');
        for (let j = 0; j < separatedArray[i].length; j++) {
            separatedArray[i][j] = parseInt(separatedArray[i][j]);
        }
    }

    for (let i = 0; i < splitByComma.length; i++) {
        for (let j = 0; j < separatedArray[i].length; j++) {
            if (!separatedArray[i][j]) {
                let slice = separatedArray[i].slice(j + 1);
                theFinalArray.push(slice);
                break;
            }
            if (separatedArray[i][j]) {
                theFinalArray.push([separatedArray[i][j]]);
            }
        }
    }

    return theFinalArray;
}

function scoreRanksFunc(theFinalArray) {
    let scoresRank = order(theFinalArray[3]);

    return scoresRank;
}

function order(scoresRankArray) {
    let arrayOrdered = scoresRankArray.sort((a, b) => b - a);
    return noRepeatingNumberInArray(arrayOrdered);
}

function noRepeatingNumberInArray(scoresRankArray) {
    return scoresRankArray.filter((num, index) => {
        return scoresRankArray.indexOf(num) == index;
    });
}

function userPositionOnTheRank(scoreRanks) {
    let userScore = [...theFinalArray[1]];

    let position = [];

    for (let i = 0; i < userScore.length; i++) {
        for (let j = 0; j < scoreRanks.length; j++) {
            if (userScore[i] >= scoreRanks[j]) {
                let whichPosition = j + 1;
                position.push(whichPosition);
                break;
            }
        }
        if (position[i] === 0) {
            position[i] = scoreRanks.length + 1;
        }
    }

    for (let i = 0; i < position.length; i++) {
        console.log(`Sua posição é: ${position[i]}º lugar`);
    }

}

let inputLine = ' 2, 5 10, 6, 5 1 5 7 1 8 ';

let theFinalArray = treatInput(inputLine);

let scoreRanks = scoreRanksFunc(theFinalArray);

userPositionOnTheRank(scoreRanks);
