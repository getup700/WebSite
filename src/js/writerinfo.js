
var queryBtn = document.getElementById('queryWriterInfo');
if(queryBtn){

}else{
    console.error('Element not found or is null.');
}


document.getElementById('button-container').addEventListener('click', 
    function(event) {
        if (event.target && event.target.id === 'queryWriterInfo') {
            alert('Button clicked!');
            // 在这里放置你要执行的 JavaScript 代码
            updateWriterInfo();
        }
});


function updateWriterInfo(){
    var xhr = new XMLHttpRequest();
    xhr.open("get",'http://39.106.54.114:672/api/type/types',true);

    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status<400){
            var data = JSON.parse(xhr.responseText);
            updateUIWithData(data);
        }else{
            console.error('Failure to load data;status:'+xhr.status);
        }
    }
}

function updateUIWithData(data){
    var tableBody = document.querySelector('#table-body');
    tableBody.innerHTML = '';

    data.forEach(function(row) {
        var tr = document.createElement('tr');
        Object.values(row).forEach(function(value) {
            var td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
            });
            // 将行添加到表格的主体部分
            tableBody.appendChild(tr);  
        });
}