window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    const aiModeButton = document.querySelector('#ai-mode');
    const twoPlayerModeButton = document.querySelector('#two-player-mode');
    const gameModeDisplay = document.querySelector('#game-mode-display');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;
    let isAiMode = false;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const handleResultValidation = () => {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes('')) {
            announce(TIE);
            isGameActive = false;
        }
    };

    const isValidAction = (tile) => tile.innerText === '';

    const updateBoard = (index) => board[index] = currentPlayer;

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
        if (isAiMode && currentPlayer === 'O' && isGameActive) {
            setTimeout(aiTurn, 300);
        }
    };

    const userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            if (isGameActive) changePlayer();
        }
    };

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        currentPlayer = 'X';
        announcer.classList.add('hide');
        playerDisplay.innerText = 'X';
        playerDisplay.classList.remove('playerO');
        playerDisplay.classList.add('playerX');

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX', 'playerO');
        });

        gameModeDisplay.innerText = isAiMode ? "Playing vs AI" : "";
        aiModeButton.classList.toggle('hide', isAiMode);
        twoPlayerModeButton.classList.toggle('hide', !isAiMode);
    };

    const aiTurn = () => {
        if (!isGameActive) return;

        let bestMove = getBestMove();
        if (bestMove !== null) {
            userAction(tiles[bestMove], bestMove);
        }
    };

    const getBestMove = () => {
        for (const [a, b, c] of winningConditions) {
            if (board[a] === 'O' && board[b] === 'O' && board[c] === '') return c;
            if (board[a] === 'O' && board[b] === '' && board[c] === 'O') return b;
            if (board[a] === '' && board[b] === 'O' && board[c] === 'O') return a;
        }

        for (const [a, b, c] of winningConditions) {
            if (board[a] === 'X' && board[b] === 'X' && board[c] === '') return c;
            if (board[a] === 'X' && board[b] === '' && board[c] === 'X') return b;
            if (board[a] === '' && board[b] === 'X' && board[c] === 'X') return a;
        }

        if (board[4] === '') return 4;

        const corners = [0, 2, 6, 8];
        for (let i of corners) if (board[i] === '') return i;

        const edges = [1, 3, 5, 7];
        for (let i of edges) if (board[i] === '') return i;

        return null;
    };

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    aiModeButton.addEventListener('click', () => {
        isAiMode = true;
        resetBoard();
    });

    twoPlayerModeButton.addEventListener('click', () => {
        isAiMode = false;
        resetBoard();
    });

    resetButton.addEventListener('click', resetBoard);
});

function Home() {
    window.location.href = "1980's Decade.html";
}
