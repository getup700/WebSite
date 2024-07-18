var currentUrl = window.location.href;
console.log(currentUrl);

var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                window.close();

            }else{
                
                console.error(xhr.responseText);
            }
        }
    }

    xhr.open("post",'http://localhost:5000/api/FeiShu/ReceiveCode/redirect_url',true);
    xhr.setRequestHeader("Content-type","application/json");
    var obj={
        "redirect_url":currentUrl
    }
    var body = JSON.stringify(obj);
    xhr.send(body);