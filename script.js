const wrapModal = document.querySelector('.wrap_Modal')

document
  .querySelector('.btnOpenModal')
  .addEventListener('click', ()=>{
    wrapModal.style.visibility = 'visible'
  })

let targetClassList = ''

wrapModal.addEventListener('click', (e)=>{
  targetClassList = e.target.classList[0]

  const classList = ['fade', 'btnClose']

  const containClassFade = classList.some(item => item === targetClassList)

  if (containClassFade) { wrapModal.style.visibility = 'hidden' }
})


document
  .querySelector('.btnSubmit')
  .addEventListener('click', (e) => {
    e.preventDefault()

    const arrInputRadioAndCheckedValue = []

    const form = document.querySelector('form')
    const inputRadio = document.querySelectorAll('input[name="inputRadio"]:checked')
    const inputCheckbox = document.querySelectorAll('input[name="dateCheckbox"]:checked')
    const outputMessage = document.querySelector('.output .message')

    const { recipientName, dateStart, dateEnd } = form
    
    inputRadio.forEach(item => {
      arrInputRadioAndCheckedValue.push( item.value )
    })

    inputCheckbox.forEach(item => {
      arrInputRadioAndCheckedValue.push( item.value )
    })

    const message =  `${recipientName.value}, ${dateStart.value}, ${dateEnd.value}`

    outputMessage.innerHTML = message + arrInputRadioAndCheckedValue.join(', ')
  })
