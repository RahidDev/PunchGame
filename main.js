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
        para.innerText = 'Alpha:' + event.alpha + ', Beta:' + event.beta + ',Gamma: ' + event.gamma;

    }, true);

} 
else if (window.DeviceotiMonEvent)
{
    window.addEventListener('devicemotion', function (event)
    { 
    }, true);
} 
else 
{
    window.addEventListener("MozOrientation", function () 
    {
        return
    }, true);
}
