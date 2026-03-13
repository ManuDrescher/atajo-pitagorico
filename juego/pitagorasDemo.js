let demoCanvas;
let dctx;
let stepDemo = 0;

function mostrarDemo(){

document.getElementById("demo").style.display="block";

demoCanvas = document.getElementById("demoCanvas");
dctx = demoCanvas.getContext("2d");

drawDemo();

}

function nextDemo(){

stepDemo++;

drawDemo();
writeStep();

}

function writeStep(){

let steps = document.getElementById("steps");

function add(text){

let p = document.createElement("p");
p.innerHTML = text;

steps.appendChild(p);

if (window.MathJax){
MathJax.typesetPromise([p]);
}

}

if(stepDemo===1){
add("1. Empezamos con un triángulo rectángulo. Representa un recorrido posible entre Caperucita 🧺 y el lobo 🐺.");
}

if(stepDemo===2){
add("2. Agregamos tres triángulos rectángulos iguales. Es como si armáramos el mapa completo del pueblo: cuatro recorridos posibles que juntos forman un gran cuadrado.");
}

if(stepDemo===3){
add("3. Observamos los lados del cuadrado grande. Cada lado mide \\(c_1 + c_2\\).");
}

if(stepDemo===4){
add("4. Las hipotenusas de los triángulos forman un cuadrado en el centro. Cada lado mide \\(h\\), el atajo del lobo.");
}

if(stepDemo===5){
add("5. El área del cuadrado grande es: \\((c_1 + c_2)^2\\).");
}

if(stepDemo===6){
add("6. El área de un triángulo es: \\(\\frac{c_1 c_2}{2}\\).");
}

if(stepDemo===7){
add("7. Como hay cuatro triángulos: \\(4 \\cdot \\frac{c_1 c_2}{2}\\).");
}

if(stepDemo===8){
add("8. Entonces el área total también puede escribirse como:<br> \
\\((c_1+c_2)^2 = 4 \\cdot \\frac{c_1c_2}{2} + h^2\\)");
}

if(stepDemo===9){
add("9. Expandimos el cuadrado:<br> \
\\(c_1^2 + 2c_1c_2 + c_2^2\\)");
}

if(stepDemo===10){
    add("10. Observamos que el término aparece en ambos lados:<br> \
    \\(c_1^2 + {\\color{orange}{2c_1c_2}} + c_2^2 = {\\color{orange}{2c_1c_2}} + h^2\\)");
    }

if(stepDemo===11){
add("11. Como aparece en ambos lados, se cancela:<br> \
\\(c_1^2 + \\enclose{horizontalstrike}{2c_1c_2} + c_2^2 = \
\\enclose{horizontalstrike}{2c_1c_2} + h^2\\)");
}

if(stepDemo===12){
add("12. Entonces queda:<br> \
\\(c_1^2 + c_2^2 = h^2\\)");
}

if(stepDemo===13){
add("Aplicamos al problema:<br> \
\\(36^2 + 48^2 = 3600\\)<br> \
\\(h = 60\\). 🐺 El lobo recorrió solo 60 pasos.");
}

}

function drawDemo(){

dctx.clearRect(0,0,460,460);

dctx.lineWidth = 2;
dctx.strokeStyle = "black";
dctx.fillStyle = "#f4a261";

let c1 = 120;
let c2 = 80;

let size = c1 + c2;

let x = 70;
let y = 70;

if(stepDemo>=1){
dctx.strokeStyle = (stepDemo===1) ? "red" : "black";
dctx.lineWidth = (stepDemo===1) ? 4 : 2;
}

dctx.strokeRect(x,y,size,size);

if(stepDemo>=3){

dctx.font="14px serif";
dctx.fillStyle="black";

let midTopX = x + size/2;
let midTopY = y;

let midRightX = x + size;
let midRightY = y + size/2;

let midBottomX = x + size/2;
let midBottomY = y + size;

let midLeftX = x;
let midLeftY = y + size/2;

dctx.fillText("c1 + c2", midTopX - 20, midTopY - 10);
dctx.fillText("c1 + c2", midRightX + 6, midRightY);
dctx.fillText("c1 + c2", midBottomX - 20, midBottomY + 16);
dctx.fillText("c1 + c2", midLeftX - 36, midLeftY);

}

function tri(px,py,dx,dy){

dctx.beginPath();
dctx.moveTo(px,py);
dctx.lineTo(px+dx,py);
dctx.lineTo(px,py+dy);
dctx.closePath();

dctx.fillStyle="#f4a261";
dctx.fill();
dctx.stroke();

let Ax = px;
let Ay = py;

let Bx = px + dx;
let By = py;

let Cx = px;
let Cy = py + dy;

let midABx = (Ax + Bx)/2;
let midABy = (Ay + By)/2;

let midACx = (Ax + Cx)/2;
let midACy = (Ay + Cy)/2;

let midBCx = (Bx + Cx)/2;
let midBCy = (By + Cy)/2;

dctx.font="16px serif";

dctx.fillText("🌳", Ax - 6, Ay + 14);
dctx.fillText("🚩", Bx - 6, By + 14);
dctx.fillText("🏠", Cx - 6, Cy + 14);

dctx.fillText("🧺", midABx - 8, midABy + 12);
dctx.fillText("🧺", midACx - 8, midACy + 12);

dctx.fillText("🐺", midBCx - 8, midBCy + 6);

dctx.font="14px serif";
dctx.fillStyle="black";

if(stepDemo < 3){
dctx.fillText("c1", midABx - 10, midABy - 16);
dctx.fillText("c2", midACx - 26, midACy + 2);
}

dctx.fillText("h", midBCx + 10, midBCy);

}

if(stepDemo>=1){
tri(x, y, c1, c2);
}

if(stepDemo>=2){
tri(x + size, y, -c2, c1);
tri(x + size, y + size, -c1, -c2);
tri(x, y + size, c2, -c1);
}

if(stepDemo>=4){

if(stepDemo===4){
dctx.strokeStyle="red";
}

dctx.lineWidth=3;

let p1x = x + c1;
let p1y = y;

let p2x = x + size;
let p2y = y + c1;

let p3x = x + c2;
let p3y = y + size;

let p4x = x;
let p4y = y + c2;

dctx.beginPath();
dctx.moveTo(p1x,p1y);
dctx.lineTo(p2x,p2y);
dctx.lineTo(p3x,p3y);
dctx.lineTo(p4x,p4y);
dctx.closePath();
dctx.stroke();

if(stepDemo>=5){
dctx.font="14px serif";
dctx.fillStyle="black";
dctx.fillText("h²",(p1x+p3x)/2 - 6,(p1y+p3y)/2 + 12);
}

}

if(stepDemo>=1){

dctx.font="14px serif";
dctx.fillStyle="black";

dctx.fillText("🧺 caminos de Caperucita (c1, c2)", x, y + size + 40);
dctx.fillText("🐺 atajo del lobo (h)", x, y + size + 60);

}

}
