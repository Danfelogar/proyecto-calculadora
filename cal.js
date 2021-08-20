const display = document.getElementById("display");
//pasamos de string a number
const numberDisplay = parseInt(display)
//limitar 5 cifras significativas
const limitDisplay = numberDisplay.toFixed(7);
//fumcion para mostrar numero en pantalla
const dis = (val) =>{
    display.value += val;
};
//fumcion para borrar en pantalla
const del = () =>{
    display.value='';// esto('') signifca vacio 
};
//fumcion para resolver ejercicio
const slove = () =>{
    let x = display.value;
    let y = eval(x);//transforma strings en number 
    display.value=y;
};
//fumcion para potencia
const x2 = () =>{
    display.value= Math.pow(display.value,2);
};
//fumcion para seno
const sin = () =>{
    display.value= Math.sin(display.value*(Math.PI/180));
};
//fumcion para coseno
const cos = () =>{
    display.value= Math.cos(display.value*(Math.PI/180));
};
//fumcion para tangente
const tan = () =>{
    display.value= Math.tan(display.value*(Math.PI/180));
};
//fumcion para seno
const csc = () =>{
    display.value= Math.asin(display.value)*(180/Math.PI);
};
//fumcion para coseno
const sec = () =>{
    display.value= Math.acos(display.value)*(180/Math.PI);
};
//fumcion para tangente
const ctg = () =>{
    display.value= Math.atan(display.value)*(180/Math.PI);
};
//fumcion para logaritmo base 10
const log = () =>{
    display.value= Math.log10(display.value);
};
//fumcion para logaritmo natural
const ln = () =>{
    display.value= Math.log(display.value);
};
//fumcion para raiz
const sqrt = () =>{
    display.value= Math.sqrt(display.value);
};
//fumcion para porcentajes
const per = () =>{
    display.value= (display.value/100);
};
//fumcion para llamar pi
const pi = () =>{
    const numberPi=Math.PI;
    display.value= numberPi.toFixed(5);
};