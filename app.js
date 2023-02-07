let testCon = document.querySelector('.container')

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
        test[0].answers[idEl].selectAnswer = true
        console.log(test[0].answers[idEl].selectAnswer);
    }
})


