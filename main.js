
const body = document.querySelector('body');
body.style.margin = '0';
body.style.height = '100vh';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';


// Contenedor padre
const divContainer = document.querySelector('.container');
divContainer.style.backgroundColor = '#f6f6f6';
divContainer.style.width = '200px';
divContainer.style.height = '200px';
divContainer.style.color = 'white';
divContainer.style.borderRadius = '10px';
divContainer.style.display = 'flex';
divContainer.style.flexDirection  = 'column';
divContainer.style.justifyContent = 'center';
divContainer.style.alignItems = 'center';
divContainer.style.position = 'relative';


// Estilos para el svg
const svgElement = document.querySelector('svg');
svgElement.style.width = '45px'; 
svgElement.style.height = '45px'; 


// Estilos contenedor del svg
styleIcon = document.querySelector('.icon');
styleIcon.style.width = '65px'; 
styleIcon.style.height = '65px'; 
styleIcon.style.backgroundColor = '#e69732';
styleIcon.style.borderRadius = '50px';
styleIcon.style.display = 'flex';
styleIcon.style.justifyContent = 'center';
styleIcon.style.alignItems = 'center';
styleIcon.style.cursor = 'pointer';

styleIcon.addEventListener('mouseover', () => {
    spanText.style.visibility = 'visible';
    spanText.style.opacity = '1';
});

styleIcon.addEventListener('mouseout', () => {
    spanText.style.visibility = 'hidden';
});


// Estilos para el span de texto
const spanText = document.querySelector('.spanToPay');
spanText.style.position = 'absolute';
spanText.style.left = '95px';
spanText.style.top = '25px'; 
spanText.style.color = '#f6f6f6'
spanText.style.fontWeight = 'bold';
spanText.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
spanText.style.backgroundColor = 'rgba(71, 180, 190, 0.5)';
spanText.style.fontSize = '14px';
spanText.style.padding = '8px';
spanText.style.borderRadius = '10px';
spanText.style.visibility = 'hidden';
spanText.style.opacity = '0'; 
spanText.style.transition = 'opacity 1s ease';
spanText.style.fontFamily = 'Arial, sans-serif';

const triangle = document.createElement('div');
triangle.style.position = 'absolute';
triangle.style.bottom = '-8px';  
triangle.style.left = '10px';
triangle.style.width = '0';
triangle.style.height = '0';
triangle.style.borderLeft = '5px solid transparent';
triangle.style.borderRight = '5px solid transparent';
triangle.style.borderTop = '8px solid rgba(71, 180, 190, 0.5)';
spanText.appendChild(triangle);
