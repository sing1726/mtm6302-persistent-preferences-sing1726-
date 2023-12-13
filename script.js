// script.js
document.addEventListener('DOMContentLoaded', function () {
  const itemList = document.getElementById('itemList');
  const themeSelect = document.getElementById('theme');
  const listStyleSelect = document.getElementById('listStyle');

  // Load preferences from local storage
  const savedTheme = localStorage.getItem('theme') || 'theme1';
  const savedListStyle = localStorage.getItem('listStyle') || 'listStyle1';

  // Apply saved preferences
  document.body.classList.add(savedTheme);
  itemList.classList.add(savedListStyle);

  // Set initial values for preference controls
  themeSelect.value = savedTheme;
  listStyleSelect.value = savedListStyle;

  // Add items dynamically to the list
  const items = ['BMW', 'VOLKSWAGEN', 'HONDA', 'AUDI', 'KTM'];
  items.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    itemList.appendChild(listItem);
  });

  // Event listeners for preference changes
  themeSelect.addEventListener('change', function () {
    const selectedTheme = themeSelect.value;
    document.body.classList.remove(savedTheme);
    document.body.classList.add(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    savedTheme = selectedTheme;
  });

  listStyleSelect.addEventListener('change', function () {
    const selectedListStyle = listStyleSelect.value;
    itemList.className = '';
    itemList.classList.add(selectedListStyle);
    localStorage.setItem('listStyle', selectedListStyle);
    savedListStyle = selectedListStyle;
  });
});
