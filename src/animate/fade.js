/* eslint-disable no-param-reassign */

function recurseWithDelayDown($element, startFrom, stopAt) {
    window.setTimeout(() => {
        if(startFrom > stopAt) {
            startFrom -= 0.1;
            recurseWithDelayDown($element, startFrom, stopAt);
            $element.style.opacity = startFrom;
        }else{
            $element.style.display = 'none';
        }
    }, 30);
}

function recurseWithDelayUp($element, startFrom, stopAt) {
    window.setTimeout(() => {
        if(startFrom < stopAt) {
            startFrom += 0.1;
            recurseWithDelayUp($element, startFrom, stopAt);
            $element.style.opacity = startFrom;
        }else{
            $element.style.display = 'block';
        }
    }, 30);
}


export function fadeIn($element) {
    $element.style.display = 'block';
    $element.style.opacity = 0;
    recurseWithDelayUp($element, 0, 1);
}

export function fadeOut($element) {
    $element.style.display = 'block';
    $element.style.opacity = 1;
    recurseWithDelayDown($element, 1, 0);
}
