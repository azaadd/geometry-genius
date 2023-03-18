document.getElementById('btn-parallelogram-calculate').addEventListener('click', function(){

    const firstNumberField = document.getElementById('parallelogram-b');
    const inputFirstNumberFieldString = firstNumberField.value;
    const inputFirstNumberField = parseFloat(inputFirstNumberFieldString);
    
    const secondNumberField = document.getElementById('parallelogram-h');
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
        alert('Parallelogram value cannot be zero');
        return;
    }

    
    else if(inputSecondNumberField == 0){
        alert('Parallelogram value cannot be zero');
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



    
    const numberCalculation = inputFirstNumberField * inputSecondNumberField;
    
    firstNumberField.value = '';
    secondNumberField.value = '';
    console.log(numberCalculation);
    
});