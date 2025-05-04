// Search script file

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload

            const jobCategory = document.getElementById("jobCategory").value.trim().toLowerCase();
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = ""; // Clear previous results

            // Sample training opportunities 
            const trainingData = {
                "it": ["Coding Bootcamp", "Data Science Workshop", "Cybersecurity Training"],
                "healthcare": ["Nursing Certification", "Medical Assistant Program", "CPR Training"],
                "business": ["Entrepreneurship Course", "Project Management Training", "Financial Planning"],
                "education": ["Teaching Certification", "Child Development Workshop", "Special Education Training"]
            };

            // Check if entered category exists in dataset
            if (trainingData[jobCategory]) {
                trainingData[jobCategory].forEach(training => {
                    const trainingItem = document.createElement("p");
                    trainingItem.textContent = training;
                    resultsDiv.appendChild(trainingItem);
                });
            } else {
                resultsDiv.innerHTML = "<p>No training opportunities found. Try a different category.</p>";
            }
        });
    } else {
        console.error("Form element with id 'searchForm' not found.");
    }
});
