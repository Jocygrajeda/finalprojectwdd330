document.addEventListener('DOMContentLoaded', function() {
    const foodForm = document.getElementById('foodForm');
    const foodLog = document.getElementById('foodLog');
    const totalsDiv = document.getElementById('totals');
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    foodForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const foodName = document.getElementById('foodName').value;
        const calories = parseInt(document.getElementById('calories').value) || 0;
        const protein = parseInt(document.getElementById('protein').value) || 0;
        const carbs = parseInt(document.getElementById('carbs').value) || 0;
        const fat = parseInt(document.getElementById('fat').value) || 0;

        //calculate totals
        totalCalories += calories;
        totalProtein += protein;
        totalCarbs += carbs;
        totalFat += fat;

        displayFood(foodName, calories, protein, carbs, fat);
        displayTotals();
        
        foodForm.reset();
    });

    function displayFood(name, calories, protein, carbs, fat) {
        const foodEntry = document.createElement('div');
        foodEntry.classList.add('food-entry');
        foodEntry.innerHTML = `
            <p><strong>${name}</strong></p>
            <p>Calories: ${calories}</p>
            <p>Protein: ${protein}g</p>
            <p>Carbs: ${carbs}g</p>
            <p>Fat: ${fat}g</p>
        `;
        foodLog.appendChild(foodEntry);
    }

    function displayTotals() {
        totalsDiv.innerHTML = `
            <h3>Totals:</h3>
            <p>Total Calories: ${totalCalories}</p>
            <p>Total Protein: ${totalProtein}g</p>
            <p>Total Carbs: ${totalCarbs}g</p>
            <p>Total Fat: ${totalFat}g</p>
        `;
    }
});
