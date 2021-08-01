const quizDB = [
    {
        question:"Q1: What is the full form of html?",
        a: "Hyper Text Markup Language",
        b: "Holistick Technical Method Library",
        c: "Hyper Tax Makes Line",
        d: "None of the above",
        ans: "ans1"

    },
    {
        question:"Q2: HTML is a subset of ______",
        a: "SGMD",
        b: "SGML",
        c: "SGMH",
        d: "None of the above",
        ans: "ans2"
    },{
        question:"Q3: ALL HTML tags are enclosed in what?",
        a: "# and #",
        b: "? and !",
        c: "< and >",
        d: "{ and }",
        ans: "ans3"
    },{
        question:"Q4: To create HTML page, you need _____",
        a: "Web browser",
        b: "text editor",
        c: "Both [A] and [B]",
        d: "None of the above",
        ans: "ans3"
    },{
        question:"Q5: <a> and </a> are the tags used for ______",
        a: "Adding image",
        b: "Aligning text",
        c: "Audio-voiced text",
        d: "Adding links to your page",
        ans: "ans4"
    },{
        question:"Q6: The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    },{
        question:"Q7: Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "ans3"
    },{
        question:"Q8: Which of the following tag is used for inserting the largest heading in HTML?",
        a: "<h3>",
        b: "<h1>",
        c: "<h5>",
        d: "<h6>",
        ans: "ans2"
    },{
        question:"Q9: Which of the following tag is used to define options in a drop-down selection list?",
        a: "<select>",
        b: "<list>",
        c: "<dropdown>",
        d: "<option>",
        ans: "ans4"
    },
    {
        question:"Q10: Which of the following tag is used to insert a line-break?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans: "ans1"
    }
    
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const showscore=document.querySelector('#showscore');
const answers = document.querySelectorAll('.answer');
// const start_btn = document.querySelector("#btn2");
let qcount=0;
let score=0;

// start_btn.addEventListener('click',()=>{
//     main-div1.classList.add("main-div");
//      //show info box
//     home.classList.remove("home1");
// });

const loadQuestion = () => {
    const qlist = quizDB[qcount];
    question.innerText = qlist.question;
    option1.innerText = qlist.a;
    option2.innerText = qlist.b;
    option3.innerText = qlist.c;
    option4.innerText = qlist.d;

}
loadQuestion();

const getCheckAnswer = ()=>{
    let answer;
answers.forEach((curansele)=>{
    if(curansele.checked){
        answer = curansele.id;
    }
   
});
return answer;

};

const deselectAll = ()=>{
    answers.forEach((curansele) => curansele.checked=false);
}
submit.addEventListener('click',()=>{
    const checkanswer = getCheckAnswer();
    console.log(checkanswer);
    if(checkanswer===quizDB[qcount].ans){
        score++;
    };
    // next que
    qcount++;

    deselectAll();

    if(qcount<quizDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML =
        `<h3>You scored ${score}/${quizDB.length}</h3> 
       <a href="index.html"> <button class="btn" > Exit </button></a>
        `;
    
        showscore.classList.remove('scorearea');

    }
})



