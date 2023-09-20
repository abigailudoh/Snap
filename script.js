const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu')

    toggle.classList.toggle('show-icon')
  })
}

showMenu('nav__toggle','nav-menu')

// Show dropdown menu
const dropdownItems = document.querySelectorAll('.dropdown_item')

//1. Select each dropdown item
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('#dropdown_button')

  //2. Select each button click
  dropdownButton.addEventListener('click', () => {
    //7. Select the current show-dropdown class
    const showDropdown = document.querySelectorAll('.show-dropdown')
    
    //5. call the toggleItem function
    toggleItem(item)

    //8. Remove the show-dropdown class from other items
    if(showDropdown && showDropdown != item){
      toggleItem(showDropdown)
    }
  })
})

//3. Create a function to display the dropdown
const toggleItem = (item) => {
  //3.1 Select each dropdown item
  const dropdownContainer = item.querySelector('.dropdown_container')

  //6. If the same item contains the show-dropdown class, remove
  if(item.classList.contains('show-dropdown')){
    dropdownContainer.removeAttribute('style')
    item.classList.remove('show-dropdown')
  } else {
     //4. Add the maximum height to the dropdown content and add the show dropdown class
     dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
     item.classList.add('show-dropdown')
  } 
}