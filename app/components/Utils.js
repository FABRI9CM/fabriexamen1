// components/Utils.ts
export function loadRepositories(carouselContainerId) {
  const carouselContainer = document.getElementById(carouselContainerId);

  fetch('https://api.github.com/users/FABRI9CM/repos')
    .then(response => response.json())
    .then(data => {
      data.forEach(repo => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('flex-none', 'w-100', 'snap-center');

        projectElement.innerHTML = `
          <div class="bg-gray-900 shadow-2xl rounded-lg overflow-hidden">
            <div class="rounded-full overflow-hidden mx-auto w-40 h-40 flex items-center justify-center bg-gray-950">
              <img src="${repo.owner.avatar_url}" alt="${repo.name}" class="shadow-2xl w-full h-full object-cover rounded-full" style="object-fit: cover;">
            </div>
            <div class="p-4">
              <h3 class="text-white text-lg font-bold mb-2">${repo.name}</h3>
              <p class="text-white">${repo.description}</p>
              <button class="text-white font-bold py-2 px-4 rounded mt-4 bg-orange-600 shadow-lg shadow-orange-500/50 flex-shrink-0 hover:scale-110 transition-transform duration-300" onclick="window.open('${repo.html_url}', '_blank')">
                Ver Proyecto
              </button>
              <button class="text-white font-bold py-2 px-4 rounded mt-4 bg-orange-600 shadow-lg shadow-orange-500/50 flex-shrink-0 hover:scale-110 transition-transform duration-300" onclick="window.open('${repo.html_url}/archive/refs/heads/main.zip', '_blank')">
                Descargar Proyecto
              </button>
            </div>
          </div>
        `;

        carouselContainer.appendChild(projectElement);
      });
    })
    .catch(error => {
      console.error('Error al obtener los repositorios:', error);
    });
}
