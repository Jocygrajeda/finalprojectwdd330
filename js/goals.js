

document.addEventListener('DOMContentLoaded', function() {
    const addGoalForm = document.getElementById('addGoalForm');
    const goalsContainer = document.getElementById('goalsContainer');

    loadGoals();

    addGoalForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const goalTitle = document.getElementById('goalTitle').value;
        const goalTarget = document.getElementById('goalTarget').value;
        const goalProgress = document.getElementById('goalProgress').value;

        const goal = {
            title: goalTitle,
            target: goalTarget,
            progress: goalProgress
        };

        saveGoal(goal);

        displayGoal(goal);

        addGoalForm.reset();
    });

    function saveGoal(goal) {
        let goals = JSON.parse(localStorage.getItem('goals')) || [];

        goals.push(goal);
        localStorage.setItem('goals', JSON.stringify(goals));
    }

    function loadGoals() {
        let goals = JSON.parse(localStorage.getItem('goals')) || [];

        goals.forEach(goal => {
            displayGoal(goal);
        });
    }

    function displayGoal(goal) {
        const newGoalHTML = `
            <div class="goal">
                <h3>${goal.title}</h3>
                <p>Target: ${goal.target}</p>
                ${goal.progress ? `<p>Progress: ${goal.progress}</p>` : ''}
            </div>
        `;

        goalsContainer.insertAdjacentHTML('beforeend', newGoalHTML);
    }
});
