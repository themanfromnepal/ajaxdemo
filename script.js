// Fetching Local Text File

document.getElementById('btn-text').addEventListener('click', loadText);


function loadText(){
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'sample.txt', true);

    xhr.onload= function(){
        if(xhr.status == 200){
           document.getElementById('field-text').innerHTML = this.responseText;  
        }else if(this.status == 404){
            document.getElementById('field-text').innerHTML = 'Error occured in fetching the document.';  
        }
    }   

    xhr.send();
}

// Fetching Local JSON File

document.getElementById('btn-json').addEventListener('click', loadJson);


function loadJson(){
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'user.json', true);

    xhr.onload= function(){
        if(xhr.status == 200){
            var users = JSON.parse(this.responseText);

            var output ='';

            for(var i in users){
                output += '<ul>'+
                '<li> Id: ' +users[i].id +'</li>'+
                '<li> Name: ' +users[i].name +'</li>'+
                '<li> Email: ' +users[i].email +'</li>'+
                '</ul>';
            }
           
            document.getElementById('field-json').innerHTML = output;  

        }else if(this.status == 404){
            document.getElementById('field-json').innerHTML = 'Error occured in fetching the document.';  
        }
    }   

    xhr.send();
}

// Fetching data from External API

document.getElementById('btn-api').addEventListener('click', loadApi);


function loadApi(){
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload= function(){
        if(xhr.status == 200){
            var users = JSON.parse(this.responseText);

            var output ='';

            for( var i = 0; i<5; i++){
                output += 
                '<div class="api-users">'+
                    '<img src="'+users[i].avatar_url+'" width="100" height="100">'+
                    '<ul>'+
                    '<li> Id: ' +users[i].id +'</li>'+
                    '<li> Login: ' +users[i].login +'</li>'+
                    '</ul>'+
                '</div>';
            }
           
            document.getElementById('field-api').innerHTML = output;  

        }else if(this.status == 404){
            document.getElementById('field-api').innerHTML = 'Error occured in fetching the document.';  
        }
    }   

    xhr.send();
}

// Posting data to Local Database (PhPMyAdmin)

document.getElementById('postForm').addEventListener('submit', postDb);


function postDb(e){
    e.preventDefault();

    let name = document.getElementById('db-postname').value;
    var params = "name="+name;

    let xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload= function(){
        if(xhr.status == 200){
            console.log(this.responseText);
        }
    }   

    xhr.send(params);
    
}


// Fetching data from Local Database (PhPMyAdmin)

document.getElementById('db-getBtn').addEventListener('click', loadDb);


function loadDb(){
    

    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'fetch.php', true);

    xhr.onload= function(){

        if(xhr.status == 200){
            var users = JSON.parse(this.responseText);

            var output ='';

            for(var i in users){
                output += '<ul>'+
                '<li> Id: ' +users[i].id +'</li>'+
                '<li> Name: ' +users[i].name +'</li>'+
                '</ul>';
            }
           
            document.getElementById('field-db').innerHTML = output;  
        }
    }   

    xhr.send();
}




// OPEN- type, url/file, async

// OPTIONAL - used for loaders
    //  xhr.onprogress = function(){
    //     console.log('I am loading ', 'READYSTATE', this.readyState);
    // }

// xhr.onreadystatechange = function(){
    //     console.log('READYSTATE: ', this.readyState);

    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText);
    //     }
    // }

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"