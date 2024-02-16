cambiarModelo =document.getElementById('cambiar');


cambiarModelo.addEventListener('click',()=>{
appvisualizar = document.getElementById('app');
webvisualizar = document.getElementById('web');

	if (appvisualizar.style.display=="none") {
		webvisualizar.style.display="none";
		appvisualizar.style.display="flex";
	} else if (appvisualizar.style.display="flex") {
		appvisualizar.style.display="none";
		webvisualizar.style.display="flex";
		
	}
});