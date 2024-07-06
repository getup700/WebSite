
var queryBtn = document.getElementById('queryWriterInfo');
if(queryBtn){
    queryBtn.addEventListener("click",function(event){
        // alert('Button clicked!');
        // 在这里放置你要执行的 JavaScript 代码
        updateWriterInfo();
    })
}else{
    console.error('Element not found or is null.');
}

function updateWriterInfo(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                var data = JSON.parse(xhr.responseText);
                updateUIWithData(data);
            }else{
                console.error('Failure to load data;status:'+xhr.status);
            }
        }
    }
    xhr.open("get",'http://39.106.54.114:672/api/type/types',true);
    xhr.send();
}

function updateUIWithData(data){
    var tableBody = document.querySelector('#table-body');
    tableBody.innerHTML = '';

    data.data.forEach(function(row) {
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