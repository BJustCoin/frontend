function elementInViewport(el){var bounds = el.getBoundingClientRect();return ((bounds.top + bounds.height > 0) && (window.innerHeight - bounds.top > 0));}

function scrolled(_block) {
    //try {
        box = _block.querySelector('.next_page_list');
        if (box && box.classList.contains("next_page_list")) {
            inViewport = elementInViewport(_block);
            if (inViewport) {
              box.classList.remove("next_page_list");
              paginate(box);
            }
        };
    //} catch {return}
};
function paginate(block) {
    var link_3 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    link_3.open('GET', location.protocol + "//" + location.host + block.getAttribute("data-link") + "&ajax=2", true);
    link_3.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
 
    link_3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var elem = document.createElement('span');
            elem.innerHTML = link_3.responseText;
            content = elem.querySelector(".is_paginate").innerHTML;
            target_block = document.body.querySelector(".is_paginate");
            //console.log("content", content);
            target_block.insertAdjacentHTML('beforeend', content);
            block.remove();
        }
    }
    link_3.send();
};

scrolled(document.body);