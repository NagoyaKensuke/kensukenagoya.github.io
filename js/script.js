// プロジェクトのデータ
const projects = [
    {
      name: "Pythonプロジェクト1",
      description: "このプロジェクトでは..."
    },
    {
      name: "AWSプロジェクト1",
      description: "このプロジェクトでは..."
    },
    // 他のプロジェクト
  ];
  
  // プロジェクトを動的に追加
  const projectList = document.getElementById('project-list');
  
  projects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectDiv);
  });
  