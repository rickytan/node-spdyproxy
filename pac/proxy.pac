var proxy_list = [
	"google.com",
	"youtube.com",
	"twitter.com",
	"timg.com",
	"yimg.com",
	"googleusercontent.com",
	"googlecode.com",
	"blogspot.com",
	"facebook.com"
];

var black_list = [
	"pubstat.sandai.net",
	"mcfg.sandai.net",
	"biz5.sandai.net",
	"float.sandai.net",
	"cl.kankan.xunlei.com",
	"211.94.190.80",
	"mtips.xunlei.com",
	"211.94.190.80",
	"mtips.xunlei.com",
	"adsresult.joywell.com.cn",
	"advstat.xunlei.com",
	"wy.xunlei.com",
	"kkpgv.xunlei.com",
	"statis.kankan.xunlei.com",
	"server1.adpolestar.net",
	"mpv.sandai.net",
	"vid.atm.youku.com",
	"valo.atm.youku.com",
	"valf.atm.youku.com",
	"walp.atm.youku.com",
	"static.atm.youku.com",
	"vid.atm.youku.com",
	"valo.atm.youku.com",
	"valf.atm.youku.com",
	"walp.atm.youku.com",
	"static.atm.youku.com",
	"*.p2v.tudou.com*",
	"at-img1.tdimg.com",
	"at-img2.tdimg.com",
	"at-img3.tdimg.com",
	"adplay.tudou.com",
	"adcontrol.tudou.com",
	"stat.tudou.com",
	"v2.stat.ku6.com",
	"v3.stat.ku6.com",
	"v0.stat.ku6.com",
	"v1.stat.ku6.com",
	"st.vq.ku6.cn",
	"stat2.888.ku6.com",
	"pq.stat.ku6.com",
	"mcfg.sandai.net",
	"biz5.sandai.net",
	"server1.adpolestar.net",
	"advstat.xunlei.com",
	"mpv.sandai.net",
	"images.sohu.com",
	"dcads.sina.com.cn",
	"pubstat.sandai.net",
	"float.sandai.net ",
	"recommend.xunlei.com",
	"cl.kankan.xunlei.com",
	"googlesyndication.com",
	"pagead2.googlesyndication.com",
	"doubleclick.net",
	"union.baidu.com",
	"googleads.g.doubleclick.net",
	"cpro.baidu.com",
	"biz5.sandai.net",
	"*ad*.00000000*"
];

var https = "HTTPS 107.181.148.150:1897;";
var direct = "DIRECT";
var deny = "PROXY 127.0.0.1;";

function FindProxyForURL(url, host) {
	alert(myIpAddress());
	
	black_list.forEach(function(value, key) {
		var domain = value;
		if (shExpMatch(host, domain)) {
			return deny;
		}
	});

	proxy_list.forEach(function(value, key) {
		var domain = value;
		if (domain.indexOf('.') > 0)
			domain = '.' + domain;
		if (dnsDomainIs(host, domain)) {
			return https;
		}
	});
	return direct;
}
