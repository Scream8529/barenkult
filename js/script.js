function Myfunct(){
	let topNav = document.querySelector('.topnav');
	let burger1 = document.querySelector('.burgerline1');
	let burger2 = document.querySelector('.burgerline2');
	let burger3 = document.querySelector('.burgerline3');
	topNav.classList.toggle("activ_menu");
	burger1.classList.toggle("anim");
	burger2.classList.toggle("anim");
	burger3.classList.toggle("anim");
}

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			} 
        }
	}	    
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
		setTimeout(() => {
			animOnScroll();
        }, 300);
    }






