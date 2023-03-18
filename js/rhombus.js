document.getElementById('btn-rhombus-calculate').addEventListener('click', function(){

    const firstNumberField = document.getElementById('rhombus-d1');
    const inputFirstNumberFieldString = firstNumberField.value;
    const inputFirstNumberField = parseFloat(inputFirstNumberFieldString);
    
    const secondNumberField = document.getElementById('rhombus-d2');
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
        alert('Rhombus value cannot be zero');
        return;
    }

    
    else if(inputSecondNumberField == 0){
        alert('Rhombus value cannot be zero');
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



    
    const numberCalculation = 0.5 *inputFirstNumberField * inputSecondNumberField;
    
    firstNumberField.value = '';
    secondNumberField.value = '';
    console.log(numberCalculation);
    
});