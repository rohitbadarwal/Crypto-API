const bG = document.body.style;
const tds = document.querySelectorAll('td');
const trs = document.querySelectorAll('tbody > tr');


function clr(chckbox) {
    if (chckbox.checked) {
        bG.backgroundColor = "#191d28";
        for (var i = 0, j = tds.length; i < j; ++i)
            tds[i].style.color = "#fff";
        for (var i = 0, j = trs.length; i < j; ++i)
            trs[i].style.backgroundColor = "#2e3241";

    }
    else {
        bG.backgroundColor = "white";
        for (var i = 0, j = tds.length; i < j; ++i)
            tds[i].style.color = "#191d28";
        for (var i = 0, j = trs.length; i < j; ++i)
            trs[i].style.backgroundColor = "#d3d5d8";
    }
}


