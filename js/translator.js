var translations = { 
	"en": { 
			"title": "Calculator", 
			"input": "Case interest value", 
			"input-placeholder": "Enter a value in BGN", 
			"options": "Type of attorney process",
			"optionCivil": "Civil processes",
			"optionAdmin": "Administration processes",
			"optionExec": "Executive processes",
			"calcButton": "Calculate",
		},
	"bg": { 
			"title": "Калкулатор", 
			"input": "Материален интерес",
			"input-placeholder": "Въведете стойност в лв.",
			"options": "Тип процесуално представителство:",
			"optionCivil": "Граждански дела",
			"optionAdmin": "Административни дела",
			"optionExec": "Изпълнителни дела",
			"calcButton": "Пресметни",
		},
};

$(document).ready(function() {
	$("button.translate-english").click(function(){
		translateEnglish();
	});
});


// Returning correct currency label 

function currency(lang) {
	if(lang == "en") {
		return "BGN";
	} else if (lang="bg") {
		return "лева";
	}
}


// English translation function

function translateEnglish() {
	$(app_currency).html(currency("en"));

	$(app_title).html(translations["en"]["title"]);
	$(app_input).html(translations["en"]["input"]);
	$(app_input_placeholder).attr("placeholder",translations["en"]["input-placeholder"]);
	$(app_options).html(translations["en"]["options"]);
	$(app_options_civil).html(translations["en"]["optionCivil"]);
	$(app_options_admin).html(translations["en"]["optionAdmin"]);
	$(app_options_exec).html(translations["en"]["optionExec"]);
	$(app_calc_button).html(translations["en"]["calcButton"]);
}


// Setting variables for the DOM placement of the calculator elements 

var app_currency = "span.value-input.suffix";
var app_title = "h2.translateable";
var app_input = "label[for='value-input'].translateable";
var app_input_placeholder = "input#value-input.translateable";
var app_options = "label[for='selectlist-value']";
var app_options_civil = "option[value='civilProcess'].translateable";
var app_options_admin = "option[value='adminProcess'].translateable";
var app_options_exec = "option[value='execProcess'].translateable";
var app_calc_button = "button#input-button.translateable";

