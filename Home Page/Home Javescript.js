document.addEventListener('DOMContentLoaded',function(){
const lesson = document.getElementById('lesson');
lesson.addEventListener('click',() => {
    window.location.href = '#lessonslink'
})

const quiz = document.getElementById('quiz');
quiz.addEventListener('click',() => {
    window.location.href = '../Quiz Page/quiz.html'
})

const content = document.getElementById('content');
content.addEventListener('click',() => {
    window.location.href = '#contentlink'
})

const currentURL = window.location.href;
const links = document.querySelectorAll('header a');

links.forEach(link => {
    if (link.href === currentURL){
        link.classList.add('active-link');
    }
});


})