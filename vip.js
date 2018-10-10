var thisURL = window.location.href,inum=1,vipOption;
var vipChannl = new Array(
//"http://Yourdomain.com/index.php?url=",
//"http://Yourdomain.com/index.php?url=",
//"http://Yourdomain.com/index.php?url=",
//"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
"http://Yourdomain.com/index.php?url=",
);

for (x in vipChannl)
{
  vipOption = vipOption + '<option value="'+vipChannl[x]+thisURL+'">VIP通道'+inum+++'</option>';
}

function insVIP(emID,rID,index=0,height="100%"){
var gemID = document.getElementsByClassName(emID)[0];
var newNode = document.createElement("select");
newNode.setAttribute("title","原整理by MarIxs");
gemID.appendChild(newNode);
newNode.setAttribute("onchange", "replacePlayer(this,'"+rID+"','"+height+"')");
newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
if (index!=0){
  newNode.selectedIndex=index;
  setTimeout(function () {
    var event = document.createEvent("UIEvents"); 
    event.initUIEvent("change", true, true);      
    newNode.dispatchEvent(event);
  }, 1000);
}
}

function replacePlayer(e,rID,height="100%"){
    var playerID = document.getElementById(rID);
    playerID.innerHTML = '';
    var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border","0");
    newplayerID.setAttribute("frameborder","no");
    newplayerID.setAttribute("scrolling","no");
    newplayerID.setAttribute("marginwidth","0");
    newplayerID.setAttribute("width","100%");
    newplayerID.setAttribute("height",height);
    newplayerID.src = e.value;
}
