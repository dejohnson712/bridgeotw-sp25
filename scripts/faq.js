// FAQ script file
    
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            button.classList.toggle('active');
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null); // close others
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});

