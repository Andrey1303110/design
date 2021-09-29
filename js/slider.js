let width = window.innerWidth;
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let share_button = document.querySelector('#share_button');
let share_panel = document.querySelector('#share_panel');
let close_but = document.querySelector('#close');

/*window.addEventListener('resize', function(){
    let width = window.innerWidth;
    if (width < 480) {
        document.location.reload();
    }
}, true);*/


if (width > 992) {
    share_button.addEventListener('click', e => {
        share_panel.classList.add('active');
    });
    
    close_but.addEventListener('click', e => {
        share_panel.classList.remove('active');
    });
    
}

if (width < 480) {
    document.addEventListener('click', event => {
        if (event.target != left && event.target != right) {
          return;
        }
        else {
            slide(event.target.id);
        }
    })
    
    let count = 1;
    
    function slide(direction) {
        let products = document.querySelectorAll('.product');
        let margin = (width/100*15)*2;
        let image_width = 235;
        let first_position = ((image_width + margin) * (products.length-1))/2;
        let current_position;
    
        if (direction == 'initial') {
            current_position = first_position;
            for (var i = 0; i < products.length; ++i) {
                products[i].style.transform = `translateX(${first_position}px)`;
            }
        }
        if (direction != 'initial') {
    
            if (direction == 'left') {
                count--;
                if (count < 1) { count = products.length }
                current_position = first_position - ((image_width + margin) * (count-1));
                for (var k = 0; k < products.length; ++k) {
                    products[k].style.transform = `translateX(${current_position}px)`;
                }
            }
            if (direction == 'right') {
                count++;
                if (count > products.length) { count = 1 }
                current_position = first_position - ((image_width + margin) * (count-1));
                for (var k = 0; k < products.length; ++k) {
                    products[k].style.transform = `translateX(${current_position}px)`;
                }
            }
            console.log(count);
        }
    }
    
    slide('initial');
}
