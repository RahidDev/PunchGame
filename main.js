let dataClass = [];

/// WritePointer - When you reach end of buffer set point to 0. A ring od ata almost like a loop of tape. 
/// Store 1000 values when it hits 1,000 reset to 0.
/// Read data from write pointer - 500 (may take u to 0) and read the data behind the writepointer.

if (window.DeviceOrientationEvent) 
{

    let para = document.createElement("p");
    document.body.appendChild(para);

    let para2 = document.createElement("p");
    document.body.appendChild(para2);

    let para3 = document.createElement("p");
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
    window.addEventListener('devicemotion', function (event)
    { 
        // let para2 = document.createElement("p");
        // document.body.appendChild(para2);
        // para2.innerText = 'X:' + event.accelerationIncludingGravity.x;
    }, true);
} 
else 
{
    window.addEventListener("MozOrientation", function () 
    {
        return
    }, true);
}