var bg = document.getElementById('dimmable');
var imgs = document.querySelectorAll('.gallery__content img, .art-gen__content img, .post__content img');

function toggle_visibility() {
    var e = document.getElementById('mobile-menu');

    if(e.classList.contains('hidden')) {
        e.classList.remove('hidden'),
        dim_background();
        
    } else {
        e.classList.add('hidden'),
        undim_background();
    }
}

function dim_background() {
    bg.classList.add("dimmed-background");
    bg.classList.remove("undimmed-background");
    for (let i of imgs) {
        i.style.opacity = '0.2';
    }
}

function undim_background() {
    bg.classList.remove("dimmed-background");
    bg.classList.add("undimmed-background");
        for (let i of imgs) {
            i.style.opacity = '1';
        }
}

document.getElementById('navToggleButton').onclick = function() {
    toggle_visibility()
}
