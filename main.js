
const body = document.querySelector('body');
body.style.backgroundColor = '#5e287e';
// Contenedor padre
const divContainer = document.querySelector('.container');
divContainer.style.backgroundColor = '#D2386E';
divContainer.style.width = '200px';
divContainer.style.height = '200px';
divContainer.style.color = 'white';
divContainer.style.borderRadius = '10px';
divContainer.style.display = 'flex';
divContainer.style.flexDirection  = 'column';
divContainer.style.justifyContent = 'center';
divContainer.style.alignItems = 'center';
divContainer.style.gap = '25px';


// Estilos para el svg
const svgElement = document.querySelector('svg');
svgElement.style.width = '65px'; 
svgElement.style.height = '65px'; 


// Estilos contenedor del svg
styleIcon = document.querySelector('.icon');
styleIcon.style.width = '100px'; 
styleIcon.style.height = '100px'; 
styleIcon.style.backgroundColor = '#e69732';
styleIcon.style.borderRadius = '50px';
styleIcon.style.display = 'flex';
styleIcon.style.justifyContent = 'center';
styleIcon.style.alignItems = 'center';

//Estilos boton de pagos
const buttonBuy = document.querySelector('button');
buttonBuy.style.height = '28px';
buttonBuy.style.backgroundColor = '#0066ad';
buttonBuy.style.borderRadius = '10px';
buttonBuy.style.border = 'none';
buttonBuy.style.fontWeight = 'bold';
buttonBuy.style.color = '#f6f6f6';
buttonBuy.style.transition = 'transform 0.2s ease';

buttonBuy.addEventListener('mouseenter', () => {
  buttonBuy.style.transform = 'translateY(-3px)';
});

buttonBuy.addEventListener('mouseleave', () => {
  buttonBuy.style.transform = 'translateY(0)';
});