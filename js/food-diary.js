document.addEventListener('DOMContentLoaded', function() {
    const foodForm = document.getElementById('foodForm');
    const foodLog = document.getElementById('foodLog');
    const totalsDiv = document.getElementById('totals');
    const searchButton = document.getElementById('searchButton');
    const appId = '663be381';
    const appKey = '2393936334c903c104747f3c47cef317';

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    searchButton.addEventListener('click', function() {
        const foodSearch = document.getElementById('foodSearch').value.trim();
        if (foodSearch === '') {
            alert('Please enter a food item to search.');
            return;
        }
        
        const url = `https://api.nutritionix.com/v2/search/instant?query=${encodeURIComponent(foodSearch)}&appId=${appId}&appKey=${appKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.common.length > 0) {
                    const foodName = data.common[0].food_name;
                    const calories = data.common[0].nf_calories;
                    const protein = data.common[0].nf_protein;
                    const carbs = data.common[0].nf_total_carbohydrate;
                    const fat = data.common[0].nf_total_fat;

                    totalCalories += calories;
                    totalProtein += protein;
                    totalCarbs += carbs;
                    totalFat += fat;

                    displayFood(foodName, calories, protein, carbs, fat);
                    displayTotals();
                } else {
                    alert('Food item not found. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('An error occurred while fetching data. Please try again later.');
            });
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
