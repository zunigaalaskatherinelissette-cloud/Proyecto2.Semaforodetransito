const btn = document.getElementById('btnCambio');
const aviso = document.getElementById('aviso');
btn.addEventListener('click', () => {
 aviso.textContent = "Sistema de tránsito operativo";
});
// Estudiante A activa paso verde
document.getElementById('luz-roja').classList.remove('activo');
document.getElementById('luz-verde').classList.add('activo');
aviso.textContent = "ADELANTE - VÍA LIBRE";