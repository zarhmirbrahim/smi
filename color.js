// function ColorFrame()
// {
//     var ms=(new Date()).getMilliseconds();
//     if (!(ms%5))
//         ColorChange(ms);
//     window.requestAnimationFrame(ColorFrame);
// }
// function ColorChange(time)
// {
//     var titre=document.getElementById("Titre");
//     var color = "rgb(" + (Math.sin(time)*0.5+0.5)*255 + ",";
//     color += (Math.sin(time +0.666*Math.PI)*0.5+0.5)*255 + ",";
//     color += (Math.sin(time +1.333*Math.PI) *0.5+0.5)*255 + ")";
//     titre.style.color=color;
// }
// window.requestAnimationFrame(ColorFrame);


var atime = 1.0;
var negative = true;
const aadd = 0.05;

function ColorFrame()
{
    var ms=(new Date()).getMilliseconds();
    if (!(ms%5))
        ColorChange();
    window.requestAnimationFrame(ColorFrame);
}

function ColorChange()
{
    if (negative)
    {
        atime -= aadd;
        if (atime < 0.4)
            negative = false;
    }
    else
    {
        atime += aadd;
        if (atime > 1.4)
            negative = true;
    }
    var titre=document.getElementById("Titre");
    var color = "rgba(0, 0, 255, " + atime + ")";
    titre.style.color=color;
}

window.requestAnimationFrame(ColorFrame);