let testCon = document.querySelector('.container')
let correctAnswer = 0;

let test = [
    {
        title: "Вопрос", answers: [
            { id: 0 ,title: '1 ответ', selectAnswer: false }
        ]
    }
]


test[0].answers.map(answer => {
    let div = document.createElement('div')
    // div.classList.add('mod')

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

    console.log(correctAnswer);
})


