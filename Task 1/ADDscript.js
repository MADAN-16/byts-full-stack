function fn(){
    const firstnumber=parseFloat(document.getElementById('f-num').value);
    const secondnumber=parseFloat(document.getElementById('s-num').value);
    const sum=firstnumber+secondnumber;
    document.getElementById("output").innerText=sum;
}