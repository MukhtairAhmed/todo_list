function bnt(){
    var user_data = document.getElementById("data");
    var list_data = document.createElement("li");
    var ulist = document.getElementById("ulist");
    var del_btn = document.createElement("button");
    var add_btn = document.createElement("button");
    del_btn.innerHTML = "delete";
    add_btn.innerHTML = "add";
    del_btn.setAttribute("id","del");
    add_btn.setAttribute("id","add")
    
    list_data.innerHTML = user_data.value;
    ulist.appendChild(list_data);
    ulist.appendChild(del_btn);
    ulist.appendChild(add_btn);
    
    if(user_data.value === ""){
        list_data.remove();
        add_btn.remove();
        del_btn.remove();
    }
    
    del_btn.addEventListener("click",function(){
        user_data.value = "";
        list_data.remove("");
        del_btn.remove("");
        add_btn.remove("")
    });
    
    add_btn.addEventListener("click",function(){
        var client_data = prompt();
        list_data.innerHTML = client_data;
    })
    
    }
    