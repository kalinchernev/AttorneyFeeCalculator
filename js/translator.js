var translations = { 
	"en": { 
			"document_title": "Attorney Fee Calculator",
			"title": "Calculator", 
			"input": "Case interest value", 
			"input-placeholder": "Enter a value in BGN", 
			"options": "Type of attorney process",
			"optionCivil": "Civil processes",
			"optionAdmin": "Administration processes",
			"optionExec": "Executive processes",
			"calcButton": "Calculate",
			"endResultLegend": "Prices and Taxes",
			"output": "Minimal attorney fee:",
			"vat": "VAT:",
			"final": "Overall price:",
		},
	"bg": { 
			"document_title": "Калкулатор правни цени и такси",
			"title": "Калкулатор", 
			"input": "Материален интерес",
			"input-placeholder": "Въведете стойност в лв.",
			"options": "Тип процесуално представителство:",
			"optionCivil": "Граждански дела",
			"optionAdmin": "Административни дела",
			"optionExec": "Изпълнителни дела",
			"calcButton": "Пресметни",
			"endResultLegend": "Цени и такси",
			"output": "Минимално адвокатско възнаграждение:",
			"vat": "ДДС:",
			"final": "Крайна цена:",
		},
};

$(document).ready(function() {
	$("button.translate-english").click(function(){
		translateEnglish();
	});

	$("button.translate-bulgarian").click(function(){
		translateBulgarian();
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
	$(app_document_title).html(translations["en"]["document_title"]);
	$(app_title).html(translations["en"]["title"]);
	$(app_input).html(translations["en"]["input"]);
	$(app_input_placeholder).attr("placeholder",translations["en"]["input-placeholder"]);
	$(app_options).html(translations["en"]["options"]);
	$(app_options_civil).html(translations["en"]["optionCivil"]);
	$(app_options_admin).html(translations["en"]["optionAdmin"]);
	$(app_options_exec).html(translations["en"]["optionExec"]);
	$(app_calc_button).html(translations["en"]["calcButton"]);
	$(app_end_legend).html(translations["en"]["endResultLegend"]);
	$(app_output).html(translations["en"]["output"]);
	$(app_vat).html(translations["en"]["vat"]);
	$(app_final).html(translations["en"]["final"]);
}

function translateBulgarian() {
	$(app_currency).html(currency("bg"));
	$(app_document_title).html(translations["bg"]["document_title"]);
	$(app_title).html(translations["bg"]["title"]);
	$(app_input).html(translations["bg"]["input"]);
	$(app_input_placeholder).attr("placeholder",translations["bg"]["input-placeholder"]);
	$(app_options).html(translations["bg"]["options"]);
	$(app_options_civil).html(translations["bg"]["optionCivil"]);
	$(app_options_admin).html(translations["bg"]["optionAdmin"]);
	$(app_options_exec).html(translations["bg"]["optionExec"]);
	$(app_calc_button).html(translations["bg"]["calcButton"]);
	$(app_end_legend).html(translations["bg"]["endResultLegend"]);
	$(app_output).html(translations["bg"]["output"]);
	$(app_vat).html(translations["bg"]["vat"]);
	$(app_final).html(translations["bg"]["final"]);
}

// Setting variables for the DOM placement of the calculator elements 

var app_currency = "span.value-input.suffix";
var app_document_title = "head title";
var app_title = "h2.translateable";
var app_input = "label[for='value-input'].translateable";
var app_input_placeholder = "input#value-input.translateable";
var app_options = "label[for='selectlist-value']";
var app_options_civil = "option[value='civilProcess'].translateable";
var app_options_admin = "option[value='adminProcess'].translateable";
var app_options_exec = "option[value='execProcess'].translateable";
var app_calc_button = "button#input-button.translateable";
var app_end_legend = "legend";
var app_output = "label[for='output']";
var app_vat = "label[for='vat']";
var app_final = "label[for='final']";

