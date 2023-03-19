
document.getElementById('btn-ellipse-calculate').addEventListener('click', function(){

    const name = document.getElementById('ellipse-name').innerText;

    const firstNumberField = document.getElementById('ellipse-a');
    const inputFirstNumberFieldString = firstNumberField.value;
    const inputFirstNumberField = parseFloat(inputFirstNumberFieldString);
    
    const secondNumberField = document.getElementById('ellipse-b');
    const inputSecondNumberFieldString = secondNumberField.value;
    const inputSecondNumberField = parseFloat(inputSecondNumberFieldString);

    if(!inputFirstNumberField && inputFirstNumberField != 0){
        alert('Input field cannot be left blank');
        return;
    }
    else if(!inputSecondNumberField && inputSecondNumberField != 0){
        alert('Input field cannot be left blank');
        return;
    }

    else if(inputFirstNumberField == 0){
        alert('Ellipse value cannot be zero');
        return;
    }

    
    else if(inputSecondNumberField == 0){
        alert('Ellipse value cannot be zero');
        return;
    }

    else if(inputFirstNumberField < 0){
        alert('Please enter a positive number');
        return;
    }
    else if(inputSecondNumberField < 0){
        alert('Please enter a positive number');
        return;
    }
    else{
        serial += 1;
        const numberCalculation = (3.14 *inputFirstNumberField * inputSecondNumberField).toFixed(2);
        //  displayData function call
        displayData(name, numberCalculation);

    }
    
    firstNumberField.value = '';
    secondNumberField.value = '';
});
//  multiBackgroundColor function call
multiBackgroundColor('color-6');