var inum = 1,
	vipOption = "";
var vipChannl = new Array(
	"http://j.88gc.net/jx/?url=", 
	"http://vip.jlsprh.com/index.php?url=", 
	"http://www.0335haibo.com/tong.php?url=", 
	"http://api.wlzhan.com/sudu/?url=", 
	"http://aikan-tv.com/?url=", 
	"http://jx.vgoodapi.com/jx.php?url=",
	"http://000o.cc/jx/ty.php?url=",
	"http://j.zz22x.com/jx/?url=",
	"http://qtv.soshane.com/ko.php?url=",
	"http://api.wlzhan.com/sudu/?url=",
	"http://www.kkflv.com/kkflv/index.php?url=",
	"http://q.z.vip.totv.72du.com/?url=",
	"http://qtv.soshane.com/ko.php?url=",
	"http://m.laozi99.com/m3u8.php?url=",
	"http://www.a305.org/x3/tong.php?url",
	"http://jx.2012net.com/index.php?url=",
	"http://y.qin52.com/xnflv/index.php?url=",
	"http://j.chanchangou.com/vip/index.php?url=",
	"http://api.koflv.cn/url.php?url=", 
	"http://api.haitian.tv/vip/?url=",
	"http://98api.com/api?url=", 
	"http://www.19fa.com//api/index.php?url=",
	"https://www.a305.org/x3/tong.php?url=",
	"http://api.mgyy.tv/mgvip/?url=", 
	"http://jx.myxit.cn/vip/?url=",
	"http://www.99av.win:81/?url=",
	"http://014670.cn/jx/ty.php?url=",
	"http://jx.mdjsheying.com/api/index.php?url=",
	"http://y.qin52.com/xnflv/index.php?url=", 
	"http://api.baiyug.cn/vip/index.php?url=", 
	"http://at520.cn/atjx/jiexi.php?url=", 
	"http://www.662820.com/xnflv/index.php?url=",
	"http://ku.kuuhui.com/svipjx/liulanqichajian/browserplugin/qianru/qianru.php?id="
	);for (x in vipChannl) {
	vipOption = vipOption + '<option value="' + vipChannl[x] + '">💎 VIP解析道' + inum++ + '</option>';
}

function insVIP(emID, rID) {
	var gemID = document.getElementsByClassName(emID)[0];
	var newNode = document.createElement("select");
	newNode.setAttribute("title", "Insert VIPChannl by FUCK.");
	newNode.setAttribute("style", "border:2px solid #0088f5;color:#0088f5;outline:0");
	gemID.appendChild(newNode);
	newNode.setAttribute("onchange", "replacePlayer(this,'" + rID + "')");
	newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>' + vipOption;
}

function replacePlayer(e, rID) {
	var playerID = document.getElementById(rID);
	var thisURL = window.location.href.match('http[^\?]*')[0];
	playerID.innerHTML = '';
	var newplayerID = document.createElement("iframe");
	playerID.appendChild(newplayerID);
	newplayerID.setAttribute("border", "0");
	newplayerID.setAttribute("frameborder", "no");
	newplayerID.setAttribute("scrolling", "no");
	newplayerID.setAttribute("marginwidth", "0");
	newplayerID.setAttribute("width", "100%");
	newplayerID.setAttribute("height", "100%");
	newplayerID.src = e.value + thisURL;
}
