var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists = document.getElementById("lists").getElementsByTagName("ul");
for(var i = 0;i < tabs.length;i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    for(var i = 0;i < tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}

var seckillNav = document.getElementById("seckillNav");

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
    if(scrollTop >= 260){
        seckillNav.className = "seckill-nav seckill-navfixed";
    }
    else{
        seckillNav.className = "seckill-nav";
    }
}

var navList = document.getElementById("navList").getElementsByTagName("li");

for(var i = 0;i < navList.length; i++){
    navList[i].onmousemove = function(){
        if(this.className === "nav-category")
        this.className = "nav-category show";
    }
    navList[i].onmouseout = function(){
        if(this.className === "nav-category show")
        this.className = "nav-category";
    }
}
