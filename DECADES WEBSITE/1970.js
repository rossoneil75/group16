function highlightSection(sectionId) {
    document.querySelectorAll('.article').forEach(section => {
        section.classList.remove('highlight');
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('highlight');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            section.classList.remove('highlight');
        }, 3500);
    }
}

function openQuiz() {
    document.getElementById('quizModal').style.display = 'block';
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}

function submitQuiz() {
    const answers = {
        q1: '1975',
        q2: 'Star Wars',
        q3: 'Floppy Disk',
        q4: 'Instant Cup Noodles',
        q5: 'A New Hope',
        q6: 'FIFA World Cup',
        q7: 'Bell Bottoms'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const result = document.getElementById('quizResult');

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = form[question].value;
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    result.innerHTML = `<p>You scored ${score} out of ${Object.keys(answers).length}!</p>`;
}
