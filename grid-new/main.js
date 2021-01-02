const runGridCreate = function() {
    let grid = parseInt(document.getElementById("panelInput").value);
    let validInput = userInput(grid);

    if (validInput) {
        createGrid(grid);
        colorPixel();
    }
}

const userInput = function (number) {
    if(number >= 16 && number <= 64) {
        return true
    }
    else {
        alert("Please input number between 16 nad 64");
        return false;
    }
}

const colorPixel = function() {
    const elements = document.querySelectorAll('.pixel');
    elements.forEach(elem => {
        elem.addEventListener("mouseenter", function (event) {
            var colorChecbox = document.getElementById("rgb").checked;
            if (colorChecbox && elem.style.backgroundColor === "rgb(255, 255, 255)") {
                elem.style.backgroundColor = document.getElementById("colorPick").value;
            } else if (elem.style.backgroundColor === "rgb(255, 255, 255)") {
                elem.style.backgroundColor = "#" + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, 0);
            } else {
                elem.style.backgroundColor = "rgb(255, 255, 255)";
            }
        }, false)
    })
}

const createGrid = function (number) {
    $('.gridRow').remove();
    for (let i = 0; i < number; i++) {
        $('#' + 'grid').append('<div class="gridRow"></div>');
        for (let i = 0; i < number; i++) {
            $('.gridRow:last-child').append('<div style="background-color: rgb(255, 255, 255);" class="pixel"></div>');
        }
    }
}

document.getElementById("buttonCreate").addEventListener("click", runGridCreate);