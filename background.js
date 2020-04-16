// Global Constants 

const WEBSITE_SCORES = {
	'github.com':{
		'co2': 1.57795650547,
		'energy':0.0033220136957243084,
		'bytes': 1976169
	},
	'youtube.com': {
		'co2': 2.65526655104,
		'energy': 0.006168056824244559,
		'bytes': 3669197
	},
	'facebook.com': {
		'co2': 1.19358859193,
		'energy': 0.0027726490423083303,
		'bytes': 1649368
	},
	'bilibili.com': {
		'co2': 3.31845897436,
		'energy': 0.006986229419708252,
		'bytes': 4155904
	},
	'live.com': {
		'co2': 1.590868930798,
		'energy': 0.003349197749048471,
		'bytes': 1992340
	},
	'baidu.com': {
		'co2': 0.104824523674,
		'energy': 0.00022068320773541925,
		'bytes': 131278
	},
	'google.com': {
		'co2': 0.265093397341,
		'energy': 0.0006157992454245687,
		'bytes': 366321
	},
	'microsoft.com': {
		'co2': 0.594241455663,
		'energy': 0.0012510346435010433,
		'bytes': 744204
	},
	'amazon.com': {
		'co2': 2.51435287832,
		'energy': 0.005293374480679631,
		'bytes': 3148874
	},
	'instagram.com': {
		'co2': 0.65191498585,
		'energy': 0.0013724526017904282,
		'bytes': 816432
	},
	'yahoo.com': {
		'co2': 0.785452508251,
		'energy': 0.0016535842278972267,
		'bytes': 983669
	},
	'bing.com': {
		'co2': 2.4076215541,
		'energy': 0.005068676955997943,
		'bytes': 3015208
	},
	'naver.com': {
		'co2': 1.48237693019,
		'energy': 0.00312079353723675,
		'bytes': 1856469
	},
	'stackoverflow.com': {
		'co2': 0.259762448724,
		'energy': 0.0005468683131039143,
		'bytes': 325316
	},
	'ebay.com': {
		'co2': 1.44092318206,
		'energy': 0.0030335224885493514,
		'bytes': 1804554
	},
	'xvideos.com': {
		'co2': 0.638390915119,
		'energy': 0.0013439808739349245,
		'bytes': 799495
	},
	'qq.com': {
		'co2': 1.11262850103,
		'energy': 0.002342375791631639,
		'bytes': 1393411
	},
	'duckduckgo.com': {
		'co2': 0.207221970409,
		'energy': 0.000481366696767509,
		'bytes': 286351
	},
	'whatsapp.com': {
		'co2': 0.963747143047,
		'energy': 0.0020289413537830114,
		'bytes': 1206958
	},
	'xnxx.com': {
		'co2': 0.454397437978,
		'energy': 0.0009566261852160095,
		'bytes': 569069
	},
	'aliexpress.com': {
		'co2': 1.85037985432,
		'energy': 0.0038955365354195236,
		'bytes': 2317341
	},
	'wikipedia.org': {
		'co2': 0.0403150975471,
		'energy': 8.487388957291842e-05,
		'bytes': 50489
	},
	'tmall.com': {
		'co2': 0.42784915294,
		'energy': 0.0009007350588217377,
		'bytes': 535821
	},
	'paypal.com': {
		'co2': 0.478071947815,
		'energy': 0.0010064672585576773,
		'bytes': 598718
	},
	'twitch.tv': {
		'co2': 2.91695289384,
		'energy': 0.00614095346070826,
		'bytes': 3653074
	},
	'roblox.com': {
		'co2': 1.34750113403,
		'energy': 0.0028368444927036763,
		'bytes': 1687556
	},
	'blogspot.com': {
		'co2': 1.8530367212127,
		'energy': 0.0023568663327023388,
		'bytes': 1402031
	},
	'twitter.com': {
		'co2': 0.608319680323,
		'energy': 0.0012806730112060905,
		'bytes': 761835
	},
	'ok.ru': {
		'co2': 1.61237712996,
		'energy': 0.003394478168338537,
		'bytes': 2019276
	},
	'zoom.us': {
		'co2': 2.2967899699,
		'energy': 0.004835347305051982,
		'bytes': 2876407
	},
	'taobao.com': {
		'co2': 1.22602564225,
		'energy': 0.002581106615252793,
		'bytes': 1535425
	},
	'livejasmin.com': {
		'co2': 1.71487724141,
		'energy': 0.0036102678766474126,
		'bytes': 2147643
	},
	'netflix.com': {
		'co2': 1.18740271026,
		'energy': 0.002758279535919428,
		'bytes': 1640820
	},
	'sina.com.cn': {
		'co2': 1.3176555412955,
		'energy': 0.002774010682478547,
		'bytes': 1650178
	},
	'office.com': {
		'co2': 0.351187466527,
		'energy': 0.0007393420347943902,
		'bytes': 439813
	},
	'linkedin.com': {
		'co2': 0.201481265598,
		'energy': 0.0004241710854694247,
		'bytes': 252327
	},
	'globo.com': {
		'co2': 1.29734142008,
		'energy': 0.002731245094910264,
		'bytes': 1624738
	},
	'pornhub.com': {
		'co2': 1.30983862921,
		'energy': 0.002757555008865893,
		'bytes': 1640389
	},
	'vk.com': {
		'co2': 0.81519236858,
		'energy': 0.0017161944601684809,
		'bytes': 1020914
	},
	'rakuten.com': {
		'co2': 0.832370341872,
		'energy': 0.0017523586144670843,
		'bytes': 1042427
	},
	'msn.com': {
		'co2': 1.095202995,
		'energy': 0.0023056905157864092,
		'bytes': 1371588
	},
	'yandex.ru': {
		'co2': 0.68946969416,
		'energy': 0.001451515145599842,
		'bytes': 863464
	},
	'xhamster.com': {
		'co2': 0.831870825511,
		'energy': 0.0019323960226029157,
		'bytes': 1149526
	},
	'cnn.com': {
		'co2': 4.0523384366,
		'energy': 0.008531238813884555,
		'bytes': 5074985
	},
	'pinterest.com': {
		'co2': 1.20357681869,
		'energy': 0.002533845934085548,
		'bytes': 1507311
	},
	'reddit.com': {
		'co2': 11.7396687312,
		'energy': 0.024715092065744102,
		'bytes': 14702287
	},
	'mail.ru': {
		'co2': 1.37632512324,
		'energy': 0.0028975265752524135,
		'bytes': 1723654
	}
}


const MEAN_WEBSITE_SCORE = {
	'co2': 1.36,
	'energy': 0.0028596660323476175,
	'bytes': 1701132
}

chrome.browserAction.setTitle({ 'title': 'co2-monitor' })
chrome.browserAction.setIcon({ 'path': 'resources/browser_action_icons/co2_icon1.ico' })

// Global variables 

var CO2_SCORE;
var last_co2_score_saved = 0;
var current_icon = 'icon1'

// Funtions

function compute_badge() {
	icon_number = current_icon.substr(current_icon.length - 1);
	chrome.browserAction.setBadgeText(badge = {
		text: (icon_number).toString()
	})
}

function compute_icon(co2_score) {

	grid_icon = {
		'icon1': 70,
		'icon2': 140,
		'icon3': 210,
		'icon4': 300,
		'icon5': 400,
		'icon6': 700,
		'icon7': 900,
		'icon8': 1100
	}


	if (co2_score > grid_icon[current_icon]) {

		let new_icon = 'undefined';
		let keys_grid = Object.keys(grid_icon);
		let i = 0;
		while (new_icon === 'undefined') {
			if (co2_score < grid_icon[keys_grid[i]]) {
				new_icon = keys_grid[i]
			}
			i = i + 1
		}

		current_icon = new_icon

		chrome.browserAction.setIcon({ 'path': 'resources/browser_action_icons/co2_' + current_icon + '.ico' })

	}

}

function save_co2_score(co2_score) {

	var day = new Date();
	var date = day.getDay()

	chrome.storage.sync.set({ last_day: date })

	if (date == 0) {
		chrome.storage.sync.set({ score0: co2_score })
	}
	else if (date == 1) {
		chrome.storage.sync.set({ score1: co2_score }, function () {
		});
	}
	else if (date == 2) {
		chrome.storage.sync.set({ score2: co2_score })
	}
	else if (date == 3) {
		chrome.storage.sync.set({ score3: co2_score })
	}
	else if (date == 4) {
		chrome.storage.sync.set({ score4: co2_score })
	}
	else if (date == 5) {
		chrome.storage.sync.set({ score5: co2_score })
	}
	else if (date == 6) {
		chrome.storage.sync.set({ score6: co2_score })
	}
}

function get_co2_score() {
	chrome.storage.sync.get(['last_date'], function (data) {
		let day = new Date().getDay();
		if (day != data.last_date) {
			CO2_SCORE = 0
			chrome.storage.sync.set({ last_date: day })
		}
	});
	return CO2_SCORE
}

var update_co2_score = function (details) {

	website_keys = Object.keys(WEBSITE_SCORES)
	co2_website = 0; 

	if ('initiator' in details) { // chrome

		website_name = details["initiator"]

		for (key in website_keys) {
			if (website_name.includes(website_keys[key]))
				website_name = website_keys[key]
		}

		if (website_name in WEBSITE_SCORES) {
			website_score = WEBSITE_SCORES[website_name]
		}
		else {
			website_score = MEAN_WEBSITE_SCORE
		}

		var content_length = 1; // in case there is no content-length in the reponse header
		for (i in details["responseHeaders"]) {
			if (details["responseHeaders"][i]["name"] === "content-length") {
				content_length = details["responseHeaders"][i]["value"]
			}
		}

		co2_score = get_co2_score()
		co2_website = (content_length * website_score['co2']) / website_score['bytes']	

	}
	else{ //firefox

		website_name = details["url"]

		for (key in website_keys) {
			if (website_name.includes(website_keys[key]))
				website_name = website_keys[key]
		}

		if (website_name in WEBSITE_SCORES) {
			website_score = WEBSITE_SCORES[website_name]
		}
		else {
			website_score = MEAN_WEBSITE_SCORE
		}

		var content_length = 1; // in case there is no content-length in the reponse header
		for (i in details["responseHeaders"]) {
			if (details["responseHeaders"][i]["name"] === "content-length") {
				content_length = details["responseHeaders"][i]["value"]
			}
		}

		co2_score = get_co2_score()
		co2_website = (content_length * website_score['co2']) / website_score['bytes']	

	}

	co2_score = get_co2_score()
	CO2_SCORE = co2_score + co2_website;
	compute_icon(CO2_SCORE)
};


(function save_co2_score_loop() {
	setTimeout(function () {
		save_co2_score(CO2_SCORE)  //  your code here   
		save_co2_score_loop();
	}, 10000)
})();


// Callbacks

// Each time a new header is received or sent, we need to update the data transfert code.  
chrome.webRequest.onHeadersReceived.addListener(
	update_co2_score, { urls: ["<all_urls>"] }, ["responseHeaders"]);



chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.sync.set({ last_date: -1 });
	chrome.storage.sync.set({ score0: 0 });
	chrome.storage.sync.set({ score1: 0 });
	chrome.storage.sync.set({ score2: 0 });
	chrome.storage.sync.set({ score3: 0 });
	chrome.storage.sync.set({ score4: 0 });
	chrome.storage.sync.set({ score5: 0 });
	chrome.storage.sync.set({ score6: 0 });
});


chrome.runtime.onStartup.addListener(function (){
	chrome.storage.sync.get(['last_date'], function (data) {
		let day = new Date().getDay();
		if (day != data.last_date) {
			CO2_SCORE = 0
			chrome.storage.sync.set({ last_date: day })
			compute_icon(CO2_SCORE)
		}
		else {
			if (day == 0){
				chrome.storage.sync.get(['score0'], function (data){
					CO2_SCORE = data.score0
				});
			}
			else if (day == 1) {
				chrome.storage.sync.get(['score1'], function (data){
					CO2_SCORE = data.score1
				});
			}
			else if (day == 2) {
				chrome.storage.sync.get(['score2'], function (data){
					CO2_SCORE = data.score2
				});
			}
			else if (day == 3) {
				chrome.storage.sync.get(['score3'], function (data){
					CO2_SCORE = data.score3
				});
			}
			else if (day == 4) {
				chrome.storage.sync.get(['score4'], function (data){
					CO2_SCORE = data.score4
				});
			}
			else if (day == 5) {
				chrome.storage.sync.get(['score5'], function (data){
					CO2_SCORE = data.score5
				});
			}
			else if (day == 6) {
				chrome.storage.sync.get(['score6'], function (data){
					CO2_SCORE = data.score6
				});
			}	
		}
	});

})