document.getElementById('triangle-calculate').addEventListener('click', function(){
    const firstTriangleField = document.getElementById('triangle-b');
    const inputFirstTriangleFieldString = firstTriangleField.value;
    const inputFirstTriangleField = parseFloat(inputFirstTriangleFieldString);
    
    
    

    const secondTriangleField = document.getElementById('triangle-h');
    const inputSecondTriangleFieldString = secondTriangleField.value;
    const inputSecondTriangleField = parseFloat(inputSecondTriangleFieldString);

    if(isNaN(inputFirstTriangleField && inputSecondTriangleField)){
        alert('Please enter a valid number');
        return;
    }
    else if(inputFirstTriangleField && inputSecondTriangleField < 0){
        alert('Please enter a positive number');
        return;
    }
    
    
    
    
    
    const triangleCalculation = 0.5 * inputFirstTriangleField * inputSecondTriangleField;
    
    

    
    firstTriangleField.value = '';
    secondTriangleField.value = '';
    console.log(triangleCalculation);
    
    
    

    
   
    

    
});