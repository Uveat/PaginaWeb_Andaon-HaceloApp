const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible")
    }
)
/* Contador - CountTo */
var a = 0;
$(window).scroll(function() {
    if ($('#contador').length) { // verificando si la sección CountTo existe en la página, si no, no ejecutará el script y evitará errores	
        var oTop = $('#contador').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({
            countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                $this.text(this.countNum);
                //alert('finished');
                }
            });
        });
        a = 1;
        }
    }
});