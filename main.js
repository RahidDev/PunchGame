let dataClass = [];


if (window.DeviceOrientationEvent) 
{
    window.addEventListener("deviceorientation", function (event) 
    { 
        console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
    }, true);

} 
else if (window.DeviceotiMonEvent)
{
    window.addEventListener('devicemotion', function ()
    { 

    }, true);
} 
else 
{
    window.addEventListener("MozOrientation", function () 
    {

    }, true);
}
