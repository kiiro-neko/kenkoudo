'use strict';

document.getElementById('menu-btn').addEventListener('click',(evt) => {
    evt.currentTarget.classList.toggle('close');
    document.getElementById('gnavi').classList.toggle('open');
});
