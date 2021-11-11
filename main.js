let dataClass = [];

/// WritePointer - When you reach end of buffer set point to 0. A ring od ata almost like a loop of tape. 
/// Store 1000 values when it hits 1,000 reset to 0.
/// Read data from write pointer - 500 (may take u to 0) and read the data behind the writepointer.

if (window.DeviceOrientationEvent) 
{
    window.addEventListener("deviceorientation", function (event) 
    { 
        let para = document.createElement("p");
        document.body.appendChild(para);
        para.innerText = 'Alpha:' + event.alpha;
        //+ ', Beta:' + event.beta + ',Gamma: ' + event.gamma

    }, true);

} 
if (window.DeviceMotionEvent)
{
    window.addEventListener('devicemotion', function (event)
    { 
        let para2 = document.createElement("p");
        document.body.appendChild(para2);
        para2.innerText = 'X:' + event.accelerationIncludingGravity.x;
        console.log('Device Motion')
    }, true);
}