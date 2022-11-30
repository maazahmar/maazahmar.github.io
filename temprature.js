var data = fetch('https://api.openweathermap.org/data/2.5/weather?q=biratnagar&appid=dc3bf54a01346232d251df2a76043850');
data.then((value)=>value.json()).then((res)=>{
    var temprature = res['main']['temp'];
    var icon = res['weather'][0]['icon'];
    icon = icon.toString();
    if(icon.includes('d')){
        
        icon  = icon.replace('d','n'); 
    }
    document.getElementById('temp').innerHTML = conversonal(temprature) + '°C';
    document.getElementById('icon').setAttribute('src','https://openweathermap.org/img/wn/'+icon + '.png')
    console.log(document.getElementById('icon').getAttribute('src'));
    document.getElementById('icon').setAttribute('width','35');
    document.getElementById('icon').setAttribute('filter','grayscale(100%)');
})

function conversonal(val){
    return (val - 273).toFixed(1);
}