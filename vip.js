var inum = 1,vipOption = "";
var vipChannl = new Array(
{"name":"超清","value":"http://000o.cc/jx/ty.php?url="},
{"name":"超清","value":"http://qtv.soshane.com/ko.php?url="},
{"name":"超清","value":"http://qtv.soshane.com/ko.php?url="},
{"name":"超清","value":"http://014670.cn/jx/ty.php?url="},
{"name":"超清","value":"http://player.jidiaose.com/supapi/iframe.php?v="},
{"name":"超清","value":"http://player.jidiaose.com/supapi/iframe.php?v="},
{"name":"超清","value":"http://player.jidiaose.com/supapi/iframe.php?v="},
{"name":"超清","value":"http://014670.cn/jx/ty.php?url="},
{"name":"超清","value":"http://player.jidiaose.com/supapi/iframe.php?v="},
{"name":"超清","value":"http://www.vipjiexi.com/yun.php?url="},
{"name":"超清","value":"http://player.jidiaose.com/supapi/iframe.php?v="},
{"name":"超清","value":"http://jx.api.163ren.com/vod.php?url="},
{"name":"超清","value":"http://000o.cc/jx/ty.php?url="},
{"name":"超清","value":"http://player.jidiaose.com/supapi/iframe.php?v="},
{"name":"超清","value":"http://jx.api.163ren.com/vod.php?url="},
{"name":"超清","value":"http://000o.cc/jx/ty.php?url="},
{"name":"超清","value":"http://000o.cc/jx/ty.php?url="},
{"name":"超清","value":"http://000o.cc/jx/ty.php?url="},
{"name":"高清","value":"http://api.lequgirl.com/?url="},
{"name":"标清","value":"http://jx.vgoodapi.com/jx.php?url="},
{"name":"标清","value":"http://api.nepian.com/ckparse/?url="},
{"name":"标清","value":"http://jx.vgoodapi.com/jx.php?url="},
{"name":"标清","value":"http://api.koflv.cn/url.php?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://aikan-tv.com/?url="},
{"name":"标清","value":"http://www.a305.org/weixin.php?url="},
{"name":"标清","value":"http://www.iwkan.cn/jx2/?url="},
{"name":"标清","value":"http://api.ledboke.com/?url="},
{"name":"标清","value":"http://api.xfsub.com/index.php?url="},
{"name":"标清","value":"http://jx.du2.cc/jx6.php?url="},
{"name":"标清","value":"http://jx.du2.cc/?url="},
{"name":"标清","value":"https://api.pangujiexi.com/player.php?url="},
{"name":"标清","value":"http://api.ledboke.com/vip/?url="},
{"name":"标清","value":"http://api.91exp.com/svip/?url="},
{"name":"标清","value":"http://17kyun.com/api.php?url="},
{"name":"标清","value":"http://www.82190555.com/index/qqvod.php?url="},
{"name":"标清","value":"http://jiexi.92fz.cn/player/vip.php?url="},
{"name":"标清","value":"http://jiexi.071811.cc/jx2.php?url="},
{"name":"标清","value":"http://www.27v9.cn/index.php?url="},
{"name":"标清","value":"http://www.ckplayer.tv/kuku/?url="},
{"name":"标清","value":"http://api.xyingyu.com/?url="},
{"name":"标清","value":"https://api.pangujiexi.com/player.php?url="},
{"name":"标清","value":"http://api.lvcha2017.cn/?url="},
{"name":"标清","value":"http://www.aktv.men/?url="},
{"name":"标清","value":"http://api.visaok.net/?url="},
{"name":"标清","value":"http://api.xyingyu.com/?url="},
{"name":"标清","value":"http://api.greatchina56.com/?url="},
{"name":"标清","value":"http://jx.618g.com/?url="},
{"name":"标清","value":"http://api.baiyug.vip/index.php?url="},
{"name":"标清","value":"http://api.xyingyu.com/?url="},
{"name":"标清","value":"http://api.baiyug.vip/index.php?url="},
{"name":"标清","value":"http://api.visaok.net/?url="},
{"name":"标清","value":"http://jx.618g.com/?url="},
{"name":"标清","value":"http://yun.baiyug.cn/vip/?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/?url="},
{"name":"标清","value":"https://api.flvsp.com/?url="},
{"name":"标清","value":"http://api.xfsub.com/index.php?url="},
{"name":"标清","value":"http://jiexi.071811.cc/jx2.php?url="},
{"name":"标清","value":"http://www.82190555.com/index/qqvod.php?url="},
{"name":"标清","value":"http://api.pucms.com/?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"https://api.flvsp.com/?url="},
{"name":"标清","value":"http://www.82190555.com/index/qqvod.php?url="},
{"name":"标清","value":"http://api.visaok.net/?url="},
{"name":"标清","value":"http://api.xyingyu.com/?url="},
{"name":"标清","value":"http://api.greatchina56.com/?url="},
{"name":"标清","value":"http://jx.618g.com/?url="},
{"name":"标清","value":"http://api.xyingyu.com/?url="},
{"name":"标清","value":"http://api.greatchina56.com/?url="},
{"name":"标清","value":"http://api.visaok.net/?url="},
{"name":"标清","value":"http://jx.618g.com/?url="},
{"name":"标清","value":"http://api.xfsub.com/index.php?url="},
{"name":"标清","value":"http://wwwhe1.177kdy.cn/4.php?pass=2&url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://www.82190555.com/index/qqvod.php?url="},
{"name":"标清","value":"http://17kyun.com/api.php?url="},
{"name":"标清","value":"http://jx.biaoge.tv/index.php?url="},
{"name":"标清","value":"http://www.85105052.com/admin.php?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://www.ibb6.com/x1/?url="},
{"name":"标清","value":"http://api.91exp.com/svip/?url="},
{"name":"标清","value":"http://www.wmxz.wang/video.php?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://api.pucms.com/index.php?url="},
{"name":"标清","value":"http://api.97kn.com/?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://api.nepian.com/ckparse/?url="},
{"name":"标清","value":"http://api.pucms.com/index.php?url="},
{"name":"标清","value":"http://yun.mt2t.com/yun?url="},
{"name":"标清","value":"http://y.mt2t.com/lines?url="},
{"name":"标清","value":"http://www.sfsft.com/video.php?url="},
{"name":"标清","value":"http://www.82190555.com/video.php?url="},
{"name":"标清","value":"http://2.jx.72du.com/video.php?url="},
{"name":"标清","value":"http://jx.vgoodapi.com/jx.php?url="},
{"name":"标清","value":"http://www.dgua.xyz/webcloud/?url="},
{"name":"标清","value":"http://api.91exp.com/svip/?url="},
{"name":"标清","value":"http://api.xfsub.com/index.php?url="},
{"name":"标清","value":"http://jiexi.071811.cc/jx.php?url="},
{"name":"标清","value":"http://jiexi.92fz.cn/player/vip.php?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://www.82190555.com/index/qqvod.php?url="},
{"name":"标清","value":"http://www.wmxz.wang/video.php?url="},
{"name":"标清","value":"http://api.97kn.com/?url="},
{"name":"标清","value":"http://www.52jiexi.com/yun.php?url="},
{"name":"标清","value":"http://vipjiexi.com/vip.php?url="},
{"name":"标清","value":"http://www.wmxz.wang/video.php?url="},
{"name":"标清","value":"http://jiexi.92fz.cn/player/vip.php?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://jiexi.92fz.cn/player/vip.php?url="},
{"name":"标清","value":"http://api.nepian.com/ckparse/?url="},
{"name":"标清","value":"http://aikan-tv.com/?url="},
{"name":"标清","value":"https://api.flvsp.com/?url="},
{"name":"标清","value":"http://api.xfsub.com/index.php?url="},
{"name":"标清","value":"https://api.flvsp.com/?url="},
{"name":"标清","value":"http://jiexi.92fz.cn/player/vip.php?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="},
{"name":"标清","value":"http://www.wmxz.wang/video.php?url="},
{"name":"标清","value":"http://2.jx.72du.com/video.php?url="},
{"name":"标清","value":"http://www.vipjiexi.com/yun.php?url="},
{"name":"标清","value":"http://yun.mt2t.com/yun?url="},
{"name":"标清","value":"http://yun.mt2t.com/yun?url="},
{"name":"标清","value":"http://www.wmxz.wang/video.php?url="},
{"name":"标清","value":"http://www.vipjiexi.com/yun.php?url="},
{"name":"标清","value":"http://api.baiyug.cn/vip/index.php?url="}
)

for (x in vipChannl) {
	vipOption = vipOption + '<option value="' + vipChannl[x].value + '">💎 VIP'+vipChannl[x].name +'解析道' + inum++ + '</option>';
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
