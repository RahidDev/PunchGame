let dataClass = [];



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
