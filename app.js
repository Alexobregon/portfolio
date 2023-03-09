fetch('project-data.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects');
        data.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            const projectImg = document.createElement('img');
            projectImg.src = project.image_url;
            projectImg.alt = project.title;
            projectDiv.appendChild(projectImg);

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.title;
            projectDiv.appendChild(projectTitle);

            const projectDesc = document.createElement('p');
            projectDesc.textContent = project.description;
            projectDiv.appendChild(projectDesc);

            const projectLink = document.createElement('a');
            projectLink.href = project.link_url;
            projectLink.textContent = 'View project';
            projectDiv.appendChild(projectLink);

            projectsContainer.appendChild(projectDiv);
        });
    });
