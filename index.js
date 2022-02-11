let count = 0;

document.getElementById('add').addEventListener('click', function(e){
    count = count +1
    control('count')
})

document.getElementById('minus').addEventListener('click', function(e){
    count = count - 1
    control('count')
    
})
 
function control(id)
document.getElementById(id).innerText = count;


