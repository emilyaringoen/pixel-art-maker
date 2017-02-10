document.addEventListener('DOMContentLoaded', function() {
    //create Canvas Element
    var canvas = document.getElementsByClassName('canvas')[0]
    var palette = document.getElementsByClassName('palette')[0]
    var square, line, circle, row;

    function createCanvas() {
        //var create canvas element
        for (var i = 0; i < 20; i++) {
            row = document.createElement('div')
            row.setAttribute('class', 'row')
            row.style.lineHeight = '0'
            row.style.lineSpacing = 'none'
            for (var j = 0; j < 50; j++) {
                square = document.createElement('div')
                square.setAttribute('class', 'square')
                square.style.height = '20px'
                square.style.width = '20px'
                square.style.border = '1px solid black'
                square.style.display = 'inline-block'
                row.appendChild(square)
            }
            canvas.appendChild(row)
        }
    }
    createCanvas()
    //
    function createPalette() {
        var colors = ['DarkSeaGreen', 'DarkSalmon', 'LightSeaGreen', 'SandyBrown', 'Thistle', 'Coral', 'Aquamarine', 'MistyRose', 'White', 'Black'];
        for (var i = 0; i < 1; i++) {
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
                circle.style.margin = '10px'
                circle.style.backgroundColor = colors[j]
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

    var clickedColor = 'white'
    var clickMe = function() {
      if (event.target.classList.contains('circle')) {
        clickedColor = event.target.style.backgroundColor
      }
    }

    palette.addEventListener('click', clickMe)
    // var red = false;
    // var blue = false;
    // var green = false;
    //
    // var colorMe = function () {
    //   if (red === true) {
    //   event.target.classList.toggle('red')
    //   red = false;
    // } else if (blue === true) {
    //   event.target.classList.toggle('blue')
    //   blue = false;
    // } else if (green === true) {
    //   event.target.classList.toggle('green')
    //   green = false;
    // }
    // }
    //
    // var pickColor = function () {
    //   var current = event.target
    //   if (current.classList.contains('red')) {
    //     red = true;
    //   } else if (current.classList.contains('blue')){
    //     blue = true;
    //   } else if (current.classList.contains('green')){
    //     green = true;
    //   }
    // }
    //
    // palette.addEventListener('click', pickColor)
    // canvas.addEventListener('click', colorMe)


});
