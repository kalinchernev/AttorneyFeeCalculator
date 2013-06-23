$(document).ready(function() {
	$('#input-button').click(function(event){
		event.preventDefault();
		inputValue = $('input[id=value-input]').val();
		selectValue = $("#selectlist-value option:selected").val();
		
		switch (selectValue) {
			case 'civilProcess':
				finalResult = basicCalculation(inputValue);
				vat = vatCalculate(finalResult);
				overall = overallCalculate(finalResult);
			break;

			case 'adminProcess':
			  	finalResult = basicCalculation(inputValue);
			  	vat = vatCalculate(finalResult);
			  	overall = overallCalculate(finalResult);
			break;

			case 'execProcess':
			  	finalResult = advancedCalculation(inputValue);
			  	vat = vatCalculate(finalResult);
			  	overall = overallCalculate(finalResult);
			break;
			
			default:
				finalResult = null;
				vat = null;
				overall = null;
			break;
		}

		$('input[id=value-output]').val(finalResult);
		$('input[id=value-vat]').val(vat);
		$('input[id=value-final]').val(overall);
	});
});

function basicCalculation(valueCalculation) {
	if (valueCalculation == 0 || valueCalculation == null) {
		return calculatedValue = 'Моля, въведете стойност';
	} else if(valueCalculation < 1000) {
		return  calculatedValue = 100;
	} else if (valueCalculation < 5000) {
		return calculatedValue = ( 0.06 * (valueCalculation - 1000)) + 200;
	} else if (valueCalculation < 10000) {
		return calculatedValue = ( 0.04 * (valueCalculation - 5000)) + 450;
	} else if (valueCalculation >= 10000) {
		return calculatedValue = ( 0.02 * (valueCalculation - 10000)) + 650;
	} 
	else {
		calculatedValue = 'Грешка!';
	}
}

function advancedCalculation(valueCalculation) {
	if (valueCalculation == 0 || valueCalculation == null) {
		return calculatedValue = 'Моля, въведете стойност';
	} else if(valueCalculation < 1000) {
		return  calculatedValue = 100/2;
	} else if (valueCalculation < 5000) {
		return calculatedValue = (( 0.06 * (valueCalculation - 1000)) + 200)/2;
	} else if (valueCalculation < 10000) {
		return calculatedValue = (( 0.04 * (valueCalculation - 5000)) + 450)/2;
	} else if (valueCalculation >= 10000) {
		return calculatedValue = (( 0.02 * (valueCalculation - 10000)) + 650)/2;
	} 
	else {
		calculatedValue = 'Грешка!';
	}
}

function vatCalculate(valueCalculation) {
	if (valueCalculation == 'Моля, въведете стойност') {
		return 'Въведете материален интерес';
	} else {
		return valueCalculation*0.2;
	}
}

function overallCalculate(valueCalculation) {
	if (valueCalculation == 'Моля, въведете стойност') {
		return 'Въведете материален интерес';
	} else {
		return valueCalculation*1.2;
	}
}
