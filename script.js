// Handle skill button clicks
document.querySelectorAll('.skill-btn').forEach(button => {
    button.addEventListener('click', () => {
      const skill = button.getAttribute('data-skill').toLowerCase(); // convert to lowercase
      let description = '';
  
      switch (skill) {
        case 'html':
          description = 'HTML is the standard markup language for creating web pages.';
          break;
        case 'css':
          description = 'CSS styles HTML elements and controls the layout of web pages.';
          break;
        case 'javascript':
          description = 'JavaScript enables interactive web features and dynamic content.';
          break;
        default:
          description = 'Unknown skill.';
      }
  
      document.getElementById('skill-description').textContent = description;
    });
  });
  
  // Load projects from JSON
  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      const container = document.getElementById('projects-container');
      projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error loading projects:', error);
    });
  
  // Toggle dark mode
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  