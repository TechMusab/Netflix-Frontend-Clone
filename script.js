const questions = document.querySelectorAll('.questioncontainer');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        answers[index].classList.toggle('active');
    });
});