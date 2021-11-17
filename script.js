let button = document.getElementById('button');
console.log(button);
button.addEventListener('click', function(){
    console.log('clicked')
    let input = document.getElementById('text');
    let a = input.value;
    console.log(a);
    //console.log(input);

let html = `
<b>
<div>${input.value}<span>&#215;</span>1=${input.value*1}</div>
<div>${input.value}<span>&#215;</span>2=${input.value*2}</div>
<div>${input.value}<span>&#215;</span>3=${input.value*3}</div>
<div>${input.value}<span>&#215;</span>4=${input.value*4}</div>
<div>${input.value}<span>&#215;</span>5=${input.value*5}</div>
<div>${input.value}<span>&#215;</span>6=${input.value*6}</div>
<div>${input.value}<span>&#215;</span>7=${input.value*7}</div>
<div>${input.value}<span>&#215;</span>8=${input.value*8}</div>
<div>${input.value}<span>&#215;</span>9=${input.value*9}</div>
<div>${input.value}<span>&#215;</span>10=${input.value*10}</div>

</b>
`

console.log(html);
let c = document.getElementById('contaner');
    c.innerHTML = html;
});









