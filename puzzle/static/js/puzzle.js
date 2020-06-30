// If URL contains hash, check if it's answer
let answer = document.getElementById('puzzle-answer');
let toggle = document.getElementById('puzzle-answer-toggle-button')
let answer_style = 'none';
let toggle_text = 'Show';
if (window.location.hash) {
    let hash = window.location.hash.substring(1);
    if (hash.toLowerCase() === 'answer') {
        document.title = document.title + ' - Answer'
        answer_style = 'block';
        toggle_text = 'Hide'
    }
}
answer.style.display = answer_style
toggle.innerHTML = toggle_text

function toggleAnswer() {
    let answer = document.getElementById('puzzle-answer');
    let toggle = document.getElementById('puzzle-answer-toggle-button')
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        toggle.innerHTML = 'Hide';
    } else {
        answer.style.display = 'none';
        toggle.innerHTML = 'Show';
    }
}



