import {
  filterCompleted
} from '../src/todo.js'
import {
  expect, test
} from '@jest/globals'
test('filter should show 1 completed checkbox', () => {
  document.body.innerHTML =

        '<div>  <input type="checkbox" checked> </div>' +
        '<div>  <input type="checkbox" ></div>' +
        '<div>  <input type="checkbox" ></div>' +
        '<div>  <input type="checkbox" ></div>'
  filterCompleted()
  const div = document.querySelectorAll('div')
  expect(div[0].style.display).toBe('flex')
  expect(div[1].style.display).toBe('none')
  expect(div[2].style.display).toBe('none')
  expect(div[3].style.display).toBe('none')
})
