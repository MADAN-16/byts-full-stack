function fn(){
    const fahren=parseFloat(document.getElementById('fran').value);
    const celcius=(fahren- 32) * 5/9;
    document.getElementById('output').innerText=celcius;


}