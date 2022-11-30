var data = fetch('https://api.openweathermap.org/data/2.5/weather?q=biratnagar&appid=dc3bf54a01346232d251df2a76043850');
data.then((value)=>value.json()).then((res)=>{
    var temprature = res['main']['temp'];
    var icon = res['weather'][0]['icon'];
    document.getElementById('temp').innerHTML = conversonal(temprature) + '°C';
})

function conversonal(val){
    return (val - 273).toFixed(1);
}