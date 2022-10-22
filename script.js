const gridContainer = document.getElementById('boxes')
let playerTurn = 1;









const Square = function (num) {
    let clicked = false;
    const id = num;

    const play = () => {
        if (playerTurn == 0  && clicked == false) {
            square.appendChild(cross)
            console.log(id)
            playerTurn = 1;
            clicked = true;
        } else {
            square.appendChild(naught)
            console.log(id)

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



const Grid = (gridContainer) => {
    for (let i = 0; i < 9; i++) {
        id = i;
        const square = new Square(id);
        gridContainer.appendChild(square)
        console.log('added square')
    }

    console.log('all squares added')
}

Grid(gridContainer);




class player {
    constructor (name, score) {
        this.name = name; 
        this.score = score
        this.checkWin = () => {

        }
        this.checkTurn = () => {

        }
    }

}