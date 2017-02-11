document.addEventListener('DOMContentLoaded', function() {
    //create Canvas Element
    var canvas = document.getElementsByClassName('canvas')[0]
    var palette = document.getElementsByClassName('palette')[0]
    var square, line, circle, row;

    //var create canvas element
    function createCanvas() {
        for (var i = 0; i < 25; i++) {
            row = document.createElement('div')
            row.setAttribute('class', 'row')
            row.style.lineHeight = '0'
            row.style.lineSpacing = 'none'
            for (var j = 0; j < 60; j++) {
                square = document.createElement('div')
                square.setAttribute('class', 'square')
                square.style.height = '15px'
                square.style.width = '15px'
                square.style.border = '1px solid SlateGray'
                square.style.display = 'inline-block'
                row.appendChild(square)
            }
            canvas.appendChild(row)
        }
    }
    createCanvas()

    //create palette of colors
    function createPalette() {
        var colors = ['#bd2e1a', '#ff5555', '#ffb260', '#fffd61', '#b6f577', '#6cf2ae', '#64a6ed', '#506de8', '#9775bd', '#603ab8'];
        var greyScale = ['', '#fff', '#bbb', '#999', '#777', '#666', '#555', '#333', '#222', '#000'];

        for (var i = 0; i < 2; i++) {
            line = document.createElement('div')
            line.setAttribute('class', 'line')
            line.style.lineHeight = 'none';
            for (var j = 0; j < 10; j++) {
                circle = document.createElement('div')
                circle.className = 'circle'
                circle.style.width = '20px'
                circle.style.height = '20px'
                circle.style.border = '1px solid black'
                circle.style.display = 'inline-block'
                circle.style.borderRadius = '50%'
                circle.style.margin = '8px'
                if (i === 0) {
                    circle.style.backgroundColor = colors[j]
                } else if (i === 1) {
                    circle.style.backgroundColor = greyScale[j]
                }
                line.appendChild(circle)
            }
            palette.appendChild(line)
        }
    }
    createPalette()

    var colorMe = function() {
        if (event.target.classList.contains('square')) {
            event.target.style.backgroundColor = clickedColor
            canvas.addEventListener('mouseover', colorMe)
            canvas.addEventListener('mouseup', function() {
                canvas.removeEventListener('mouseover', colorMe)
            })
        }
    }

    canvas.addEventListener('mousedown', colorMe)

    var clickedColor = 'SlateGray'
    var clickMe = function() {
        if (event.target.classList.contains('circle')) {
            clickedColor = event.target.style.backgroundColor
        }
    }

    palette.addEventListener('click', clickMe)

    //User selection of color
    var input = document.getElementById('userColor')
    var select = document.getElementById('select')

    function userPick() {
        clickedColor = input.value
    }

    select.addEventListener('click', userPick)

    //refresh page using refresh button
    var refresh = document.getElementById('refresh')
    var clearAll = function() {
        window.location.reload()
    }

    refresh.addEventListener('click', clearAll)

    //save current canvas

    var save = document.getElementById('save')

    var saveCanvas = function() {
        var saveArr = []
        var squares = document.getElementsByClassName('square')
        for (var i = 0; i < squares.length; i++) {
            saveArr.push(squares[i].style.backgroundColor)
        }
        localStorage.setItem('savedCanvas', JSON.stringify(saveArr))
    }

    save.addEventListener('click', saveCanvas)

    //reload saved canvas
    var load = document.getElementById('load')

    var getCanvas = function() {
        var savedArr = JSON.parse(localStorage.getItem('savedCanvas'))
        console.log(savedArr)
        var squares = document.getElementsByClassName('square')
        for (var i = 0; i < savedArr.length; i++) {
          squares[i].style.backgroundColor = savedArr[i]
        }
    }

    load.addEventListener('click', getCanvas)
});
