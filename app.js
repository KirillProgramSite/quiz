let testCon = document.querySelector('.container');
let resBtn = document.querySelector('.res');
let nextBtn = document.querySelector('.next'); 

let correctAnswer = 0;

let test = [
    {
        title: "Вопрос 1", answers: [
            { id: 0 ,title: '1 ответ', selectAnswer: false },
            { id: 1 ,title: '2 ответ', selectAnswer: false },
            { id: 2 ,title: '3 ответ', selectAnswer: false },
            { id: 3 ,title: '4 ответ', selectAnswer: false },
        ]
    },
    {
        title: "Вопрос 2", answers: [
            { id: 0 ,title: '1 ответ', selectAnswer: false },
            { id: 1 ,title: '2 ответ', selectAnswer: false },
            { id: 2 ,title: '3 ответ', selectAnswer: false },
            { id: 3 ,title: '4 ответ', selectAnswer: false },
        ]
    }
]

let h1 = document.createElement('h1')
h1.textContent = test[0].title
testCon.appendChild(h1)


test[0].answers.map(answer => {
    let div = document.createElement('div')

    div.innerHTML = `
        <div class="mod" data-selected="${answer.selectAnswer}">
            <h1 data-id="${answer.id}">${answer.title}</h1>
        </div>
    `

    testCon.appendChild(div)
})


testCon.addEventListener('click', e => {
    let idEl = e.target.dataset.id

    if(!document.querySelector('.mod')){
        console.error('Не тот класс')
    } else {
        test[0].answers[idEl].selectAnswer = !test[0].answers[idEl].selectAnswer
        if(test[0].answers[idEl].selectAnswer === true) {
            e.target.style.background = 'red'
            e.target.style.color = 'white'
            correctAnswer += 1
        } else {
            e.target.style.background = ''
            e.target.style.color = ''
            correctAnswer -= 1
        }

    }
})

resBtn.addEventListener('click', e => {
    console.log(correctAnswer);
})
