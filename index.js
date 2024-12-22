var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

let len = canvas.width / 3
let curve = new Kochcurve(canvas.width/3, canvas.height/2 , len , 0 , 10 , "white")
curve.create()

renderCanvas()

function renderCanvas(){

    c.clearRect(0,0,canvas.width,canvas.height)

    curve.draw()

    requestAnimationFrame(renderCanvas)
}
