import {
  filterActive,
  filterAll,
  filterCompleted
} from './todo.js'
import { $e } from 'super-libraries'

const app = document.getElementById('app')
// adding todo class / section for form
const section = $e('SuperBox', { attributes: [['class', 'todo']], tag: 'section' })
section.appendTo(app)
// create a SuperForm
// appending section to form
const form = $e('SuperForm', { attributes: [['class', 'todo__form']] })
form.appendTo(section)

// create a todo list using type and text
const todo = $e('SuperInput', { attributes: [['class', 'todo__input'], ['placeholder', 'Type here']], type: 'text', name: 'todoitem' })

const submit = $e('SuperButton', { attributes: [['class', 'todo__submit']], type: 'submit', text: 'Add' })
const myFooter = $e('SuperBox', { attributes: [['class', 'todo__footer']], tag: 'footer' })
const showAll = $e('SuperButton', { attributes: [['class', 'todo__show-item']], type: 'button', text: 'All' })
const completeAll = $e('SuperButton', { attributes: [['class', 'todo__show-item']], type: 'button', text: 'Complete All' })
const showCompleted = $e('SuperButton', { attributes: [['class', 'todo__show-item']], type: 'button', text: 'Show Completed' })
const showActive = $e('SuperButton', { attributes: [['class', 'todo__show-item']], type: 'button', text: 'Show Active' })
const activeAll = $e('SuperButton', { attributes: [['class', 'todo__show-item']], type: 'button', text: 'Active All' })

const ol = $e('SuperBox', { attributes: [['class', 'todo__items']], tag: 'ol' })
const showButtons = $e('SuperBox', { tag: 'div' })
showButtons.appendTo(myFooter)
const showToggle = $e('SuperBox', { tag: 'div' })
showToggle.appendTo(myFooter)

let filterType = 'show-all'

todo.appendTo(form)

submit.appendTo(form)

form.appendTo(section)
ol.appendTo(section)
myFooter.appendTo(section)
showAll.appendTo(showButtons)
completeAll.appendTo(showToggle)
showCompleted.appendTo(showButtons)
showActive.appendTo(showButtons)
activeAll.appendTo(showToggle)
// list represents ol

form.submit(() => {
  // only add text if exist
  const todoValue = form.getVal('todoitem')
  if (!todoValue) {
    return
  }

  // list1 is li
  const li = $e('SuperBox', { attributes: [['class', 'todo__item']], tag: 'li' })
  li.appendTo(ol)
  // create button type with text delete
  const addBtn = $e('SuperButton', { attributes: [['class', 'todo__delete']], type: 'button' })
  const todoDelete = $e('SuperBox', { attributes: [['class', 'fa-solid fa-xmark']], tag: 'i' })
  todoDelete.appendTo(addBtn)
  addBtn.click(() => {
    li.remove()
  })

  const inputId = Math.random()
  const input = $e('SuperInput', { type: 'checkbox', name: 'checkbox', attributes: [['id', inputId], ['class', 'todo__checkbox']] })
  const label = $e('SuperBox', { tag: 'label', attributes: [['class', 'todo__label'], ['for', inputId]], text: 'todo__item' })
  // add click event on mouseup
  input.element.addEventListener('change', () => {
    if (filterType === 'active') {
      filterActive()
    } else if (filterType === 'show-all') {
      filterAll()
    } else if (filterType === 'completed') {
      filterCompleted()
    }
  })

  label.addText(todoValue)
  input.appendTo(li)
  label.appendTo(li)
  addBtn.appendTo(li)

  console.log(todoValue)
  todo.clear()

  if (filterType === 'active') {
    filterActive()
  } else if (filterType === 'show-all') {
    filterAll()
  } else if (filterType === 'completed') {
    filterCompleted()
  }
})

showAll.click(() => {
  filterType = 'show-all'
  console.log('showAll')
  filterAll()
})

// complete all
completeAll.click(() => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true
  }
  console.log('completeAll')
})

showCompleted.click(() => {
  filterType = 'completed'
  console.log('showCompleted')
  filterCompleted()
})
showActive.click(() => {
  filterType = 'active'
  filterActive()
})

activeAll.click(() => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false
  }
})
