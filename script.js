var font_import = document.createElement("link");
font_import.rel = "stylesheet";
font_import.href = fontface_url;
document.getElementsByTagName("head")[0].appendChild(font_import)
document.getElementsByTagName("body")[0].classList.add("ff-" + this_font);
document.getElementById("font-sample").classList.add("ff-" + this_font);
setInfo(); showWeights(font_weights); sampleTextShow();

function setInfo() {
	document.title = default_site_name + " | " + this_font;
	document.getElementById("page-title").innerText = default_site_name;
	document.getElementById("font-title").innerText = "فونت " + font_name;
	document.getElementById("font-name").innerText = this_font;
	document.getElementById("font-version").innerText = font_version;
	if (font_creator != null) {
		document.getElementById("font-creator-div").classList.remove("d-none");
		document.getElementById("font-creator").innerText = font_creator;
	} else {
		document.getElementById("font-creator-div").classList.add("d-none");
	}
	for (i = 0; i < font_weights.length; i++) {
		weightsP = document.getElementById("font-weights");
		weightsP.innerHTML = weightsP.innerHTML + '\n\t\t\t<span class="badge bg-success">' + font_weights[i] + '</span>';
	}
	if (font_buyable == true) {
		document.getElementById("font-shop-div").classList.remove("d-none");
		document.getElementById("font-shop").innerHTML = font_shop_domain + '<i class="bi bi-box-arrow-up-left align-middle mx-1" style="font-size: .8rem!important;"></i>';
		document.getElementById("font-shop").href = font_shop_url;
	} else {
		document.getElementById("font-shop-div").classList.add("d-none");
	}
	document.getElementById("fontface-code").innerText = '@import url("' + fontface_url + '");';
	if (previous_font != null) {
		document.getElementById("previous-font-link-div").classList.remove("disabled");
		document.getElementById("previous-font-link").href = "../" + previous_font + "/index.html";
	} else {
		document.getElementById("previous-font-link-div").classList.add("disabled");
	}
	if (next_font != null) {
		document.getElementById("next-font-link-div").classList.remove("disabled");
		document.getElementById("next-font-link").href = "../" + next_font + "/index.html";
	} else {
		document.getElementById("next-font-link-div").classList.add("disabled");
	}
	document.getElementById("font-sampleTitle").innerText = "نمونه فونت " + font_name;
	document.getElementById("sample-text-input").placeholder = default_sample_text;
}

function showWeights(weights) {
	modal = document.getElementById("modal-body");
	for (var i = 0; i < weights.length; i++) {
		content = modal.innerHTML;
		if (weights[i] != "italic") {
			modal.innerHTML = content + '\n\t\t\t<div class="d-flex flex-row align-items-center my-1">\n\t\t\t  <span class="badge rounded-pill bg-success">' + weights[i] + '</span>\n\t\t\t  <p class="fw-' + weights[i] + ' w-100 text-center text-break my-auto sample-text"></p>\n\t\t\t</div>';
		} else if (weights[i] == "italic") {
			for (var j = 0; j < weights.length - 1; j++) {
				modalHTML = modal.innerHTML;
				modal.innerHTML = modalHTML + '<div class="d-flex flex-row align-items-center my-1"><span class="badge rounded-pill bg-success">' + weights[j] + 'i</span><p class="fw-' + weights[j] + ' w-100 fst-italic text-center text-break my-auto sample-text"></p></div>';
			}
		}
	}
}

function sampleTextShow() {
	texts = document.getElementsByClassName("sample-text");
	input = document.getElementById("sample-text-input");
	for (var i = 0; i < texts.length; i++) {
		if (input.value == "") {
			texts[i].innerText = default_sample_text;
		} else {
			texts[i].innerText = input.value;
		}
	}
}

var copyCode = new Clipboard(".btn-copy");
copyCode.on("success", function(event) {
	event.clearSelection();
	event.trigger.innerHTML = '<i class="bi bi-clipboard-check"></i>';
	event.trigger.classList.add("btn-success");
	event.trigger.classList.remove("btn-warning");
	window.setTimeout(function() {
		event.trigger.innerHTML = '<i class="bi bi-clipboard"></i>';
		event.trigger.classList.add("btn-warning");
		event.trigger.classList.remove("btn-success");
		event.trigger.classList.remove("btn-danger");
	}, 2300);
});

copyCode.on("error", function(event) { 
	event.trigger.innerHTML = '<i class="bi bi-clipboard-x"></i>';
	event.trigger.classList.add("btn-danger");
	event.trigger.classList.remove("btn-warning");
	window.setTimeout(function() {
		event.trigger.innerHTML = '<i class="bi bi-clipboard"></i>';
		event.trigger.classList.add("btn-warning");
		event.trigger.classList.remove("btn-success");
		event.trigger.classList.remove("btn-danger");
	}, 2000);
});