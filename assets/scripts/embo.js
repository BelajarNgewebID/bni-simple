/*
	* EmboJS v1.5.0
	* Created by Riyan Satria (c) 2019
	* Licensed open-source under General Public License 3.0
*/

function $(select) {
	let ret = []
	// Selecting a dom
	let sel = document.querySelectorAll(select)
	if(!sel) {
		sel = document.querySelector(select)
	}
	sel.klik = function(callback) {
		// Click Event
		sel.forEach(res => {
			res.addEventListener("click", callback)
		})
	}
	sel.atribut = function(attr, vals = null) {
		let val = vals || 0
		if(val == "") {
			sel.forEach(res => {
				ret.push(res.getAttribute(attr))
			})
		}else {
			sel.forEach(res => {
				res.setAttribute(attr, val)
			})
		}
		if(ret.length <= 1) {
			ret = ret.toString()
		}
		return ret
	}
	sel.klikGanda = function(callback) {
		// Double-click event
		sel.forEach(res => {
			sel.addEventListener("dblclick", callback)
		})
	}
	sel.tulis = function(evt) {
		// replacing HTML
		sel.forEach(res => {
			res.innerHTML = evt
		})
	}
	sel.isi = function(vals) {
		// setting value of input
		let val = vals || 0
		if(val == "") {
			sel.forEach(res => {
				ret.push(res.value)
			})
		}else {
			sel.forEach(res => {
				res.value = val
			})
		}
		return ret
	}
	sel.pengaya = function(style) {
		// adding extra-style
		sel.forEach(res => {
			res.setAttribute("style", style)
		})
	}
	sel.hilang = function() {
		// make the dom disappear
		sel.forEach(res => {
			let op = 1
			let timer = setInterval(() => {
				if(op <= 0.1) {
					clearInterval(timer)
					res.style.display = "none";
				}
				res.style.opacity = op
				res.style.filter = 'alpha(opacity=' + op * 100 + ')'
				op -= op * 0.1
			}, 10)
		})
	}
	sel.muncul = function() {
		// make the dom appear
		sel.forEach(res => {
			let op = 0.01
			res.style.opacity = op
			res.style.display = "block";
			let timer = setInterval(() => {
				if(op >= 1) {
					clearInterval(timer)
				}
				res.style.opacity = op
				res.style.filter = 'alpha(opacity=' + op * 100 + ')'
				op += op * 0.1
			}, 10)
		})
	}
	sel.kirim = function(callback) {
		sel.onsubmit = function() {
			return callback
		}
	}
	sel.di = function(aksi, callback) {
		if(aksi == 'kirim') {
			sel.forEach(res => {
				res.onsubmit = function() {
					return callback
				}
			})
		}else if(aksi == 'klik') {
			sel.forEach(res => {
				res.addEventListener('click', callback)
			})
		}else if(aksi == 'ketik') {
			sel.forEach(res => {
				res.addEventListener('input', callback)
			})
		}else if(aksi == 'ganti') {
			sel.forEach(res => {
				res.addEventListener('change', callback)
			})
		}
	}
	sel.append = function(child) {
		sel.forEach(res => {
			document.querySelector(select).appendChild(child)
		})
	}
	if(ret.length !== 0) {
		sel = ret
	}
	return sel
}

function mengarahkan(tujuan) {
	// redirecting to any page
	document.location = tujuan;
}

// Ajax Handler
function pos(url, data, efek, isFile = 0) {
	// Post an ajax request
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);

	if(isFile == '') {
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	}else {
		//
	}
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			efek(xhr.responseText);
		}else {
			// console.log("gagal mengirim data");
		}
	}
	xhr.send(data);
}

function ambil(url, sukses) {
	// Request ajax get
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == XMLHttpRequest.DONE) {
			var respon = parseScript(xhr.responseText);
			sukses(respon);
		}else {
			// console.log("gagal mengambil data");
		}
	}
	xhr.send(null);
}

function ambilJSON(url, sukses) {
	// Request ajax get if the response are in json format
	var xhr = new XMLHttpRequest()
	xhr.open('GET', url, true)

	xhr.onload = function() {
		if(xhr.status >= 200 && xhr.status < 400) {
			var data = JSON.parse(xhr.responseText)
			sukses(data)
		}else {
			console.log("gagal mengambil json")
		}
	}

	xhr.send(null)
}

function submit(sel, callback) {
	$(sel).onsubmit = function(e) {
		return callback(e)
	}
}

// Keyboard Event
function tekan(key, fungsi) {
	document.addEventListener("keydown", function(e) {
		let ctrl = key.split(" ")
		if(ctrl[0] == "ctrl") {
			if(e.ctrlKey && e.key === ctrl[1]) {
				fungsi()
			}
		}else if(ctrl[0] == "alt") {
			if(e.altKey && e.key === ctrl[1]) {
				fungsi()
			}
		}else if(ctrl[0] == "shift") {
			if(e.shiftKey && e.key === ctrl[1]) {
				fungsi()
			}
		}else {
			if(e.key == key) {
				fungsi()
			}
		}
	})
	return false
}

// Scrolling
function scrollKe(dom) {
	// Scroll to dom what you want to look
	document.querySelector(dom).scrollIntoView({
		behavior: 'smooth'
	});
}

function scroll(val) {
	// scrolling from top of page
	window.scroll({
		top: val,
		behavior: 'smooth'
	});
}

function munculPopup(sel, opt = null) {
	$(".bg").muncul()
	$(sel).muncul()
	setTimeout(function() {
		$(sel + " .popup").pengaya("top: 0px")
		opt
	}, 50);
}
function hilangPopup(sel) {
	$(".bg").hilang()
	$(sel + " .popup").pengaya("top: -550%");
	setTimeout(function() {
		$(sel).hilang();
	}, 250);
}

function setUrlAddr(url) {
	window.history.replaceState("a", "b", url);
}

function parseScript(_source) {
	var source = _source;
	var scripts = new Array();

	while(source.indexOf("<script") > -1 || source.indexOf("</script") > -1) {
		var s = source.indexOf("<script");
		var s_e = source.indexOf(">", s);
		var e = source.indexOf("</script");
		var e_e = source.indexOf(">", e);

		scripts.push(source.substring(s_e+1, e));
		source = source.substring(0, s) + source.substring(e_e+1);
	}

	for(var i = 0; i < scripts.length; i++) {
		try {
			eval(scripts[i]);
		} catch(ex) {
			//
		}
	}
	return source;
}

// cookie handle
function setCookie(name, val, expDays) {
	var d = new Date()
	d.setTime(d.getTime() + (expDays*24*60*60*1000))
	var expires = "expires=" + d.toUTCString()
	document.cookie = name + "=" + val + ";" + expires + ";path=/"
}

function getCookie(cname) {
	var name = cname + "="
	var decodedCookie = decodeURIComponent(document.cookie)
	var ca = decodedCookie.split(';')
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i]
		while(c.charAt(0) == " ") {
			c = c.substring(1)
		}
		if(c.indexOf(name) == 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ""
}
function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}
function getExt(val) {
	let re =/(?:\.([^.]+))?$/
	let ext = re.exec(val)[1]
	return ext
}