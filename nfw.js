const h = document.querySelector('header');
// const bn = document.getElementById('bn');
var n_ = document.querySelector('nav.pt');
function wos() {
    cn();
}
function dn(n) {
    if (n === 'bn' && n_.style.display === 'flex') {
        cn();
    } else {
        n_.style.height = 1 + window.innerHeight - h.offsetHeight - (parseInt(window.getComputedStyle(h).marginBottom, 10) * 2) + 'px';
        n_.style.marginTop = h.offsetHeight + parseInt(window.getComputedStyle(h).marginBottom, 10) + 'px';
        n_.style.display = 'flex';
    }
    window.addEventListener('scroll', wos, true);
}
function cn() {
    n_.style.display = 'none';
    window.removeEventListener('scroll', wos, true);
}
const m_ = document.querySelector('main');
for (let i = 0; i < m_.getElementsByTagName('img').length; i++) {
    if (m_.getElementsByTagName('img')[i].src.replace(0,-4) !== '.svg') {
        m_.getElementsByTagName('img')[i].addEventListener('click', function() {
            dm(this);
        });
    }
}
var dmp = {};
const m = document.getElementById('m');
function wokd(nt) {
    if (nt.keyCode === 27) {
        cm();
    }
}
const mg = document.getElementById('mg');
const md = document.getElementById('md');
const mx = document.getElementById('mx');
mx.addEventListener('click', cm, true);
const ic = document.getElementsByClassName('ic');
for (let i = 0; i < ic.length; i++) {
    ic[i].addEventListener('click', function() {
        dm(this);
    });
}
const iis = document.getElementsByClassName('iis');
for (let i = 0; i < iis.length; i++) {
    iis[i].addEventListener('click', function() {
        dm(this);
    });
}
const mnol = document.getElementsByClassName('mnol')[0];
var animateImgsModalIntervalId;
function dm(n) {
    let mc,mi;
    dmp.sX = window.pageXOffset;
    dmp.sY = window.pageYOffset;
    if (n_ != null) {
        md.style.height = window.innerHeight - parseInt(window.getComputedStyle(mx).height, 10) - (parseInt(window.getComputedStyle(mx).marginTop, 10) * 3) + 'px';
        md.style.marginTop = parseInt(window.getComputedStyle(mx).marginTop, 10) + 'px';
    }
    switch (true) {
    case n.classList.contains('ic'):
        mc = 'm' + n.classList[0].slice(-1);
        mc = document.getElementById(mc);
        mc.style.display = 'flex';
        m.style.display = 'flex';
        dmp.mc = mc;
        dmp.oce = n;
        break;
    case n.classList.contains('iis'):
        mi = 'm' + n.dataset.ii;
        mi = document.getElementById(mi);
        mi.style.display = 'flex';
        m.style.display = 'flex';
        dmp.mi = mi;
        dmp.oce = n;
        break;
    case n.classList.contains('hi') || n.classList.contains('hil') || n.classList.contains('vi') || n.classList.contains('vil') || n.classList.contains('si'):
        if(n.classList.contains('animatedImg')){
            var spriteSheetUrl=n.getAttribute('data-spritesheet');
            var timings=n.getAttribute('data-timings').split(' ').map(function(a){return a.trim()}).map(function(a){return parseInt(a,10)});
            var width=parseInt(n.getAttribute('data-width'),10);
            var height=parseInt(n.getAttribute('data-height'),10);
            var xCount=Math.ceil(Math.sqrt(timings.length));
            var yCount=Math.floor(Math.sqrt(timings.length));
            //if(width>=height){mg.style.width=width+'px';}
            //else{mg.style.width=width/height*height+'px';}
            //mg.style.maxWidth=width+'px';
            var mdWidth=window.getComputedStyle().width.slice(0,-2);
            var mdHeight=window.getComputedStyle().height.slice(0,-2);
            mg.src=n.src;
            mg.style.backgroundImage="url('"+spriteSheetUrl+"')";
            mg.style.backgroundSize = (xCount * 100) + "% " + (yCount * 100) + "%";
            var animatedImg={
                width: width,
                height: height,
                count: timings.length,
                timings: timings,
                lastUpdated: performance.now(),
                currentImg: 0,
                element: n
            };
            animateImgsModalIntervalId=setInterval(function(){updateAnimatedImgsModal(n,animatedImg);},17);
            dmp.mga=true;
        }
        else{mg.setAttribute('src', n.src);}
        mg.style.display = 'inline-block';
        m.style.display = 'flex';
        dmp.mg = true;
        break;
    case n.classList.contains('mnol'):
        m.style.opacity = '0';
        m.style.transition = '1.5s opacity';
        mnol.style.display = 'flex';
        m.style.display = 'flex';
        setTimeout(function() {
            m.style.opacity = '1';
            m.ontransitionend = function() {
                m.style.transition = '.75s opacity';
                m.ontransitionend = null;
            }
        }, 750);
        dmp.id = "mnol";
        break;
    }
    window.addEventListener('keydown', wokd, true);
}
function cm() {
    window.scrollTo(dmp.sX, dmp.sY);
    switch (true) {
    case 'mc' in dmp:
        m.style.display = 'none';
        dmp.mc.style.display = 'none';
        break;
    case 'mi' in dmp:
        m.style.display = 'none';
        dmp.mi.style.display = 'none';
        break;
    case 'mg' in dmp:
        m.style.display = 'none';
        mg.removeAttribute('src');
        mg.removeAttribute('style');
        if(dmp.mga===true){clearInterval(animateImgsModalIntervalId);}
        break;
    case 'mnol' in dmp:
        m.style.opacity = '0';
        m.ontransitionend = function() {
            m.style.display = 'none';
        }
        ;
        mnol.style.display = 'flex';
        dmp.id = "mnol";
        break;
    }
    window.removeEventListener('keydown', wokd, true);
    dmp = {};
    // x = null;
}
const io = document.querySelectorAll('[data-io]');
function rio() {
    if (ww <= 425 && p === false && lf === false) {
        for (let i = 0; i < io.length; i++) {
            if (io[i].dataset.io === 'if' || io[i].dataset.io === 'is') {
                io[i].nextElementSibling.insertBefore(io[i], io[i].nextElementSibling.firstElementChild);
            } else if (io[i].dataset.io === 'o') {
                io[i].parentNode.parentNode.appendChild(io[i]);
            }
        }
    } else if (ww > 425 && ww <= 768 && t === false && d === true) {
        for (let i = 0; i < io.length; i++) {
            if (io[i].dataset.io === 'if' || io[i].dataset.io === 'is') {
                io[i].nextElementSibling.insertBefore(io[i], io[i].nextElementSibling.firstElementChild);
            } else if (io[i].dataset.io === 'o') {
                io[i].parentNode.parentNode.appendChild(io[i]);
            }
        }
    } else if (ww > 768 && d === false) {
        for (let i = 0; i < io.length; i++) {
            if (io[i].dataset.io === 'o') {
                io[i].parentNode.querySelector('[data-io="d"]').appendChild(io[i]);
            } else if (io[i].dataset.io === 'if') {
                io[i].parentNode.parentNode.insertBefore(io[i], io[i].parentNode.parentNode.firstElementChild);
            } else if (io[i].dataset.io === 'is') {
                io[i].parentNode.parentNode.insertBefore(io[i], io[i].parentNode.parentNode.firstElementChild.nextElementSibling);
            }
        }
    }
}
var shli;
if (document.getElementById('sh')){shli=document.getElementById('sh').getElementsByTagName('li');}
function rsh() {
    if (ww <= 425 && p === false) {
        shli[0].innerText = shli[0].innerText.replace('Mon', 'Monday');
        shli[1].innerText = shli[1].innerText.replace('Tue', 'Tuesday');
        shli[2].innerText = shli[2].innerText.replace('Wed', 'Wednesday');
        shli[3].innerText = shli[3].innerText.replace('Thu', 'Thursday');
        shli[4].innerText = shli[4].innerText.replace('Fri', 'Friday');
        shli[5].innerText = shli[5].innerText.replace('Sat', 'Saturday');
        shli[6].innerText = shli[6].innerText.replace('Sun', 'Sunday');
    } else if (ww > 425 && ww <= 768 && t === false && p === true) {
        shli[0].innerText = shli[0].innerText.replace('Monday', 'Mon');
        shli[1].innerText = shli[1].innerText.replace('Tuesday', 'Tue');
        shli[2].innerText = shli[2].innerText.replace('Wednesday', 'Wed');
        shli[3].innerText = shli[3].innerText.replace('Thursday', 'Thu');
        shli[4].innerText = shli[4].innerText.replace('Friday', 'Fri');
        shli[5].innerText = shli[5].innerText.replace('Saturday', 'Sat');
        shli[6].innerText = shli[6].innerText.replace('Sunday', 'Sun');
    }
}
const cf = document.querySelectorAll('[data-c]');
setInterval(function() {
    for (let i = 0; i < cf.length; i++) {
        let c = cf[i].dataset.c;
        if (cf[i].style.color === c) {
            cf[i].style.color = '';
        } else {
            for (let i = 0; i < cf.length; i++) {
                cf[i].style.color = c;
            }
        }
    }
}, 1500);
var ww;var d = true;var lf=false;var p=false;var t=false;
function r() {
    ww = window.innerWidth;
    if (ww <= 425 && p === false) {
        rsh();
        if (lf === false) {
            rio();
        }
        p = true;
        t = d = false;
    } else if (ww > 425 && ww <= 768 && t === false) {
        if (p === true) {
            rsh();
        }
        if (d === true) {
            rio();
        }
        t = true;
        p = d = false;
    } else if (ww > 768 && d === false) {
        rio();
        d = true;
        p = t = false;
    }
    if (n_ != null) {
        if (n_.style.display === 'flex') {
            dn('r');
        }
    }
    if (lf === false) {
        lf = true;
    }
}
///animationImgs begins
self.requestAnimationFrame=(function(){
    return (
        self.requestAnimationFrame ||
        self.webkitRequestAnimationFrame ||
        self.mozRequestAnimationFrame ||
        self.msRequestAnimationFrame ||
        self.oRequestAnimationFrame ||
        (function(callback){
            setTimeout(callback,1000/60);
        })
    );
})();

var animatedImgs=[];
function createAnimatedImage(element){
    var spriteSheetUrl=element.getAttribute('data-spritesheet');
    var timings=element.getAttribute('data-timings').split(' ').map(function(a){return a.trim()}).map(function(a){return parseInt(a,10)});
    var width=parseInt(element.getAttribute('data-width'),10);
    var height=parseInt(element.getAttribute('data-height'),10);
    var xCount=Math.ceil(Math.sqrt(timings.length));
    var yCount=Math.floor(Math.sqrt(timings.length));
    element.width=width;
    element.height=height;
    element.style.backgroundImage="url('"+spriteSheetUrl+"')";
    element.style.backgroundSize = (xCount * 100) + "% " + (yCount * 100) + "%";
    var animatedImg={
        width: width,
        height: height,
        count: timings.length,
        timings: timings,
        lastUpdated: performance.now(),
        currentImg: 0,
        element: element
    };
    animatedImgs.push(animatedImg);
}
function updateAnimatedImgs(){
    for(let i=0;i<animatedImgs.length;i++){
        var xCount=Math.ceil(Math.sqrt(animatedImgs[i].count));
        var inverseAspectRatio = animatedImgs[i].height / animatedImgs[i].width;
        animatedImgs[i].element.style.height = parseFloat(window.getComputedStyle(animatedImgs[i].element).width.slice(0,-2)) * inverseAspectRatio + 'px';
        var curTime = performance.now();
        if (curTime>animatedImgs[i].lastUpdated+animatedImgs[i].timings[animatedImgs[i].currentImg]){
            animatedImgs[i].currentImg=(animatedImgs[i].currentImg+1)%animatedImgs[i].count;
            var curX=animatedImgs[i].currentImg%xCount;
            var curY = Math.floor(animatedImgs[i].currentImg / xCount);
            curX *= 100;
            curY *= 100;
            animatedImgs[i].element.style.backgroundPosition = curX + "% " + curY + "%";
            animatedImgs[i].lastUpdated = curTime;
        }
    }
}
function updateAnimatedImgsModal(n,animatedImg){
    var xCount=Math.ceil(Math.sqrt(animatedImg.count));
    var inverseAspectRatio = animatedImg.height / animatedImg.width;
    //mg.style.height = parseFloat(window.getComputedStyle(mg).width.slice(0,-2)) * inverseAspectRatio + 'px';
    var curTime = performance.now();
    if (curTime>animatedImg.lastUpdated+animatedImg.timings[animatedImg.currentImg]){
        animatedImg.currentImg=(animatedImg.currentImg+1)%animatedImg.count;
        var curX=animatedImg.currentImg%xCount;
        var curY = Math.floor(animatedImg.currentImg / xCount);
        curX *= 100;
        curY *= 100;
        mg.style.backgroundPosition = curX + "% " + curY + "%";
        animatedImg.lastUpdated = curTime;
    }
}
function addAnimatedImgs() {
    var imgs = document.getElementsByClassName('animatedImg');
    for (let i = 0; i < imgs.length; i++) {
        createAnimatedImage(imgs[i]);
    }
}
///animateImgs ends
['DOMContentLoaded', 'load', 'resize'].forEach(function(nt) {
    window.addEventListener(nt, function() {//make sure this never returns a value and never uses preventDefault, otherwise won't trigger second load (calling requestAnimationFrame and addAnimatedImgs below)
        r();
    }); //removed true arg
});

function frame(){
    updateAnimatedImgs();
    window.requestAnimationFrame(frame);
}
window.addEventListener('load', function() {
    window.requestAnimationFrame(frame);
    addAnimatedImgs();
});
