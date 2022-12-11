export default {
	install(app) {

		app.directive('autosize', {

			mounted(el, bindings){

				let maxSize = +bindings.value || 999999,
					resize = () => {

						el.style.height = '';

						if(el.scrollHeight > el.offsetHeight){
							el.style.height = Math.min(maxSize, el.scrollHeight) + 'px';
						}
					}

				el.addEventListener('input', resize);

				setTimeout(resize, 300);

			}

		});

	}

}