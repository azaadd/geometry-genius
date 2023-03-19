document.getElementById('btn-rectangle-calculate').addEventListener('click', function(){

    const name = document.getElementById('rectangle-name').innerText;

    const firstNumberField = document.getElementById('rectangle-w');
    const inputFirstNumberFieldString = firstNumberField.value;
    const inputFirstNumberField = parseFloat(inputFirstNumberFieldString);
    
    const secondNumberField = document.getElementById('rectangle-l');
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
        alert('Rectangle value cannot be zero');
        return;
    }

    
    else if(inputSecondNumberField == 0){
        alert('Rectangle value cannot be zero');
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
        const numberCalculation = (inputFirstNumberField * inputSecondNumberField).toFixed(2);
        
        //  displayData function call
        displayData(name, numberCalculation);

    }
    
    firstNumberField.value = '';
    secondNumberField.value = '';
    
});
//  multiBackgroundColor function call
multiBackgroundColor('color-2');