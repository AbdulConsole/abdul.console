document.getElementById('next-button').addEventListener('click', () => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('upload-screen').style.display = 'block';
});

document.getElementById('image-upload').addEventListener('change', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
        document.getElementById('upload-screen').style.display = 'none';
        document.getElementById('puzzle-screen').style.display = 'block';
        initializePuzzle();
    }, 10000);
});

function initializePuzzle() {
    const puzzleContainer = document.getElementById('puzzle-container');
    const imageFile = document.getElementById('image-upload').files[0];
    const imageSrc = URL.createObjectURL(imageFile);
    const gridSize = 3; // 3x3 grid

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
        const pieceWidth = img.width / gridSize;
        const pieceHeight = img.height / gridSize;

        puzzleContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${pieceWidth}px)`;
        puzzleContainer.style.gridTemplateRows = `repeat(${gridSize}, ${pieceHeight}px)`;

        let pieces = [];
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const piece = document.createElement('div');
                piece.classList.add('puzzle-piece');
                piece.style.width = `${pieceWidth}px`;
                piece.style.height = `${pieceHeight}px`;
                piece.style.backgroundImage = `url(${img.src})`;
                piece.style.backgroundPosition = `${-col * pieceWidth}px ${-row * pieceHeight}px`;
                piece.style.backgroundSize = `${img.width}px ${img.height}px`;
                piece.dataset.row = row;
                piece.dataset.col = col;
                pieces.push(piece);
            }
        }

        pieces = shuffleArray(pieces);
        const lastPiece = pieces.pop();
        lastPiece.classList.add('empty');
        lastPiece.style.backgroundImage = 'none';

        puzzleContainer.innerHTML = '';
        pieces.forEach(piece => puzzleContainer.appendChild(piece));
        puzzleContainer.appendChild(lastPiece);

        document.querySelectorAll('.puzzle-piece').forEach(piece => piece.addEventListener('click', handlePieceClick));
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handlePieceClick(event) {
    const piece = event.target;
    const emptyPiece = document.querySelector('.puzzle-piece.empty');

    if (!piece.classList.contains('empty') && isAdjacent(piece, emptyPiece)) {
        movePiece(piece, emptyPiece);
        if (isPuzzleSolved()) {
            alert('Congratulations! 🎉');
        }
    }
}

function isAdjacent(piece1, piece2) {
    const row1 = parseInt(piece1.dataset.row);
    const col1 = parseInt(piece1.dataset.col);
    const row2 = parseInt(piece2.dataset.row);
    const col2 = parseInt(piece2.dataset.col);

    return (Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2);
}

function movePiece(piece1, piece2) {
    const tempRow = piece1.dataset.row;
    const tempCol = piece1.dataset.col;

    piece1.dataset.row = piece2.dataset.row;
    piece1.dataset.col = piece2.dataset.col;

    piece2.dataset.row = tempRow;
    piece2.dataset.col = tempCol;

    piece1.classList.add('empty');
    piece2.classList.remove('empty');

    // Swap the pieces visually
    piece1.style.backgroundImage = piece2.style.backgroundImage;
    piece1.style.backgroundPosition = piece2.style.backgroundPosition;

    piece2.style.backgroundImage = 'none';
    piece2.style.backgroundPosition = 'none';
}

function isPuzzleSolved() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    const gridSize = 3; // Adjust if the grid size changes
    const size = parseInt(pieces[0].style.width);

    for (const piece of pieces) {
        if (!piece.classList.contains('empty')) {
            const row = parseInt(piece.dataset.row);
            const col = parseInt(piece.dataset.col);
            const bgPos = piece.style.backgroundPosition;
            const expectedPos = `${-col * size}px ${-row * size}px`;
            if (bgPos !== expectedPos) {
                return false;
            }
        }
    }
    return true;
}