const gridContainer = document.getElementById('boxes')
let playerTurn = 0;
let identify = 0;
let default_name = 'player';



const Square = function (num, player1, player2) {
    let clicked = false;
    const id = num;
    console.log(player1)

    const play = () => {
        if (playerTurn == 0  && clicked == false) {
            square.appendChild(cross)
            console.log(id)
            playerTurn = 1;
            player1.play(id);
            clicked = true;
        } else {
            square.appendChild(naught)
            player2.play(id)


            playerTurn = 0;
            clicked = true;
        }
    }

    const square = document.createElement('div');
    square.addEventListener('click', play)


    const cross = document.createElement('img');
    cross.setAttribute('src', './images/cross.png');
    

    const naught = document.createElement('img');
    naught.setAttribute('src', './images/naught.png')

    square.classList.add('grid-square')
    return square

}

const Player = function(nam = default_name, identity) {
    const name = nam;
    const id = identity;
    identify += 1;
    let score = 0;

    let playerSquares = [];
    console.log(playerSquares)

    play = (square) => {
        playerSquares.push(square);
        console.log(playerSquares)

        /* Brute force method of checking for victory */


        const column1 = [0, 1, 2];
        const checkColum1 = column1.every(cell => {
            return playerSquares.includes(cell)
        })
        const column2 = [3, 4, 5];
        const checkColumn2 = column2.every(cell => {
            return playerSquares.includes(cell)
        })
        const column3 = [6, 7, 8];
        const checkColumn3 = column3.every(cell => {
            return playerSquares.includes(cell)
        })
        const row1 = [0, 3, 6];
        const checkRow1 = row1.every(cell => {
            return playerSquares.includes(cell)
        })
        const row2 = [1, 4, 7];
        const checkRow2 = row2.every(cell => {
            return playerSquares.includes(cell)
        })
        const row3 = [2, 5, 8];
        const checkRow3 = row3.every(cell => {
            return playerSquares.includes(cell)
        })
        const diag1 = [0, 4, 8];
        const checkDiag1 = diag1.every(cell => {
            return playerSquares.includes(cell)
        })
        const diag2 = [2, 4, 6];
        const checkDiag2 = diag2.every(cell => {
            return playerSquares.includes(cell)
        })

        if (checkColum1 || checkColumn2 || checkColumn3 || checkRow1 || checkRow2 || checkRow3 || checkDiag1 || checkDiag2) {
            console.log(name + 'You win!')
        }
        




    }

       

    

    reset = () => {
        playerSquares = [];
        console.log('new game')
    }

    return {play}
}





const Grid = (gridContainer) => {

    const player1 = Player('player 1', identify);
    const player2 = Player('player 2', identify);

    for (let i = 0; i < 9; i++) {
        id = i;
        const square = new Square(id, player1, player2);
        gridContainer.appendChild(square)
        console.log('added square')
    }




    console.log('all squares added')
}

Grid(gridContainer);




