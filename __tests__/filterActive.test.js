import {
  filterActive
} from '../src/todo.js'
import {
  expect, test
} from '@jest/globals'
test('filter should show 3 checkboxes', () => {
  document.body.innerHTML =

    '<div>  <input type="checkbox" checked> </div>' +
    '<div>  <input type="checkbox" ></div>' +
    '<div>  <input type="checkbox" ></div>' +
    '<div>  <input type="checkbox" ></div>'
  filterActive()
  const div = document.querySelectorAll('div')
  expect(div[0].style.display).toBe('none')
  expect(div[1].style.display).toBe('flex')
  expect(div[2].style.display).toBe('flex')
  expect(div[3].style.display).toBe('flex')
})
