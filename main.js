let dataClass = [];
let max = 0 
/// WritePointer - When you reach end of buffer set point to 0. A ring od ata almost like a loop of tape. 
/// Store 1000 values when it hits 1,000 reset to 0.
/// Read data from write pointer - 500 (may take u to 0) and read the data behind the writepointer.
if (window.DeviceOrientationEvent) 
{
    let para = document.createElement("p");
    para.className = "Data"
    document.body.appendChild(para);

    let para2 = document.createElement("p");
    para2.className = "Data"
    document.body.appendChild(para2);

    let para3 = document.createElement("p");
    para3.className = "Data"
    document.body.appendChild(para3);

    window.addEventListener("deviceorientation", function (event) 
    { 
        //+ ', Beta:' + event.beta + ',Gamma: ' + event.gamma
        let Alpha = event.alpha
        let Gamma = event.gamma
        let Beta = event.beta

        para.innerText = 'Alpha: ' + Alpha
        para2.innerText = 'Gamma: ' + Gamma
        para3.innerText = 'Beta: ' + Beta
    }, true);
} 
else
{
    window.addEventListener("MozOrientation", function () 
    {
        return
    }, true);
}
if (window.DeviceMotionEvent)
{

    let para = document.createElement("p");
    para.className = "Data"
    document.body.appendChild(para);

    let para2 = document.createElement("p");
    para2.className = "Data"
    document.body.appendChild(para2);

    let para3 = document.createElement("p");
    para3.className = "Data"
    document.body.appendChild(para3);

    let para4 = document.createElement("p");
    para4.className = "Data"
    document.body.appendChild(para4);
    
    window.addEventListener('devicemotion', function (event)
    { 
        let Z = event.acceleration.x;
        let X = event.acceleration.z;
        let Y = event.acceleration.y;
         
    if ( X > max) max = X
    if ( Y > max) max = Y
    if ( Z > max) max = Z

        para.innerText = 'Z: ' + Z
        para2.innerText = 'X: ' + X
        para3.innerText = 'Y: ' + Y
        para4.innerText = 'Max: ' + max
    }, true);
} 

else 
{
    window.addEventListener("MozOrientation", function () 
    {
        return
    }, true);
}

function reset()
{
    alert('Max: ' + max);
    max = 0
}