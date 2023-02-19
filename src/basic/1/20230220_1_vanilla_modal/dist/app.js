const modal = document.querySelector('dialog')
const open = document.querySelector('.open')



open.addEventListener('click', () => {
  modal.showModal()
})

modal.addEventListener('close', () => {
  if(modal.returnValue === 'confirm') document.querySelector('#agree').checked = true
  if(modal.returnValue === 'deny') document.querySelector('#agree').checked = false
})