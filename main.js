let dataClass = [];



if (window.DeviceOrientationEvent) 
{
    window.addEventListener("deviceorientation", function (event) 
    { 
        let para = document.createElement("p");
        document.body.appendChild(para);
        para.innerText = event.alpha + ',' + event.beta + ',' + event.gamma;
    }, true);

} 
else if (window.DeviceotiMonEvent)
{
    window.addEventListener('devicemotion', function (event)
    { 
        let para = document.createElement("p");
        document.body.appendChild(para);
        para.innerText = event.x + ',' + event.y + ',' + event.z
    }, true);
} 
else 
{
    window.addEventListener("MozOrientation", function () 
    {
        return
    }, true);
}
