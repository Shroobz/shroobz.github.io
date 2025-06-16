document.addEventListener('DOMContentLoaded', () => {
  fetch('folders.json')
    .then(response => response.json())
    .then(folders => {
      const container = document.getElementById('cards');

      folders.forEach((folder, index) => {
        const card = document.createElement('div');
        card.className = `card`;
        card.style.animationDelay = `${index * 100}ms`;

        card.innerHTML = `
          <h2>${folder.name}</h2>
          <p>${folder.description}</p>
          <a href="${folder.path}/"">Visit →</a>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Error loading folders:', err);
      document.getElementById('cards').innerHTML = '<p class="text-red-500">Failed to load pages.</p>';
    });
});
