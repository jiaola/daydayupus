// If URL contains hash, check if it's answer
let answer = document.getElementById('puzzle-answer');
let answer_style = 'none';
if (window.location.hash) {
    let hash = window.location.hash.substring(1);
    if (hash === 'answer') {
        document.title = document.title + ' - Answer'
        answer_style = 'block';
    }
}
answer.style.display = answer_style

function toggleAnswer() {
    let answer = document.getElementById('puzzle-answer');
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}



