import {
  filterAll
} from '../src/todo.js'
import {
  expect, test
} from '@jest/globals'
test('filter should show all checkboxes', () => {
  document.body.innerHTML =

      '<div>  <input type="checkbox" style="display: none;" checked> </div>' +
      '<div>  <input type="checkbox" ></div>' +
      '<div>  <input type="checkbox" ></div>' +
      '<div>  <input type="checkbox" ></div>'
  filterAll()
  const div = document.querySelectorAll('div')
  expect(div[0].style.display).toBe('flex')
  expect(div[1].style.display).toBe('flex')
  expect(div[2].style.display).toBe('flex')
  expect(div[3].style.display).toBe('flex')
})
