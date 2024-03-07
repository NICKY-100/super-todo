// click event for showAll,
function filterActive () {
// create a checkbox and getting the results using querySelectorAll
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  // show active
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      checkboxes[i].parentElement.style.display = 'flex'
    } else {
      checkboxes[i].parentElement.style.display = 'none'
    }
  }
}

function filterAll () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].parentElement.style.display = 'flex'
  }
}

function filterCompleted () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  // show completed
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      checkboxes[i].parentElement.style.display = 'none'
    } else {
      checkboxes[i].parentElement.style.display = 'flex'
    }
  }
}

export {
  filterActive,
  filterAll,
  filterCompleted
}
