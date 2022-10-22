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
    }

    return {play}
}





const Grid = (gridContainer) => {

    const player1 = Player('player 1', identify);
    const player2 = Player('player 1', identify);

    for (let i = 0; i < 9; i++) {
        id = i;
        const square = new Square(id, player1, player2);
        gridContainer.appendChild(square)
        console.log('added square')
    }




    console.log('all squares added')
}

Grid(gridContainer);




