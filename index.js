let count = 0;

document.getElementById('add').addEventListener('click', function(e){
    count = count +1
    document.getElementById('count').innerText = count;
})

document.getElementById('minus').addEventListener('click', function(e){
    count = count - 1
    document.getElementById('count').innerText = count;
})