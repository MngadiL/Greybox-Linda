var image1 = document.getElementById('chart1');
//var chartone = document.getElementById('chart1');
var close_img = document.getElementsByClassName('Close-btn')[0];

image1.addEventListener('click',openimg1);

function openimg1(){ 
    image1.style.width = '1200px';
    image1.style.height = '700px';
}
close_img.addEventListener('click',Closs);

function Closs(){ 
    image1.style.width = '600px';
    image1.style.height = '300px';
}

var image2 = document.getElementById('chart2');
//var chartone = document.getElementById('chart1');
var close_img1 = document.getElementsByClassName('Close-btn1')[0];

image2.addEventListener('click',openimg2);

function openimg2(){ 
    image2.style.width = '1200px';
    image2.style.height = '700px';
}
close_img1.addEventListener('click',Closs1);

function Closs1(){ 
    image2.style.width = '600px';
    image2.style.height = '300px';
}

var image3 = document.getElementById('chart3');
//var chartone = document.getElementById('chart1');
var close_img2 = document.getElementsByClassName('Close-btn2')[0];

image3.addEventListener('click',openimg3);

function openimg3(){ 
    image3.style.width = '1200px';
    image3.style.height = '700px';
}
close_img2.addEventListener('click',Closs2);

function Closs2(){ 
    image3.style.width = '600px';
    image3.style.height = '300px';
}

var image4 = document.getElementById('chart4');
//var chartone = document.getElementById('chart1');
var close_img3 = document.getElementsByClassName('Close-btn3')[0];

image4.addEventListener('click',openimg4);

function openimg4(){ 
    image4.style.width = '1200px';
    image4.style.height = '700px';
}
close_img3.addEventListener('click',Closs3);

function Closs3(){ 
    image4.style.width = '600px';
    image4.style.height = '300px';
}



//var menu_button = document.createElement('button');
//menu_button.innerHTML = 'Menu';
//document.body.appendChild(menu_button);


function pic_function(){ 
    if (css_stuff.matches){ 

        var close_img = document.getElementsByClassName('Close-btn')[0];
        
        image1.addEventListener('click',openimg1);
        
        function openimg1(){ 
            image1.style.width = '400px';
            image1.style.height = '250px';
        }
        
        close_img.addEventListener('click',Closs);
        
        function Closs(){ 
            image1.style.width = '70%';
            image1.style.height = '50%';
        }

        var close_img1 = document.getElementsByClassName('Close-btn1')[0];
        image2.addEventListener('click',openimg2);
        function openimg2(){ 
            image2.style.width = '400px';
            image2.style.height = '250px';
        }
        
        close_img1.addEventListener('click',Closs1);
        
        function Closs1(){ 
            image2.style.width = '70%';
            image2.style.height = '50%';
        }

        var close_img2 = document.getElementsByClassName('Close-btn2')[0];
        image3.addEventListener('click',openimg3);
        
        function openimg3(){ 
            image3.style.width = '400px';
            image3.style.height = '250px';
        }
        close_img2.addEventListener('click',Closs2);
        
        function Closs2(){ 
            image3.style.width = '70%';
            image3.style.height = '50%';
        }

        var close_img3 = document.getElementsByClassName('Close-btn3')[0];
        
        image4.addEventListener('click',openimg4);
        function openimg4(){ 
            image4.style.width = '400px';
            image4.style.height = '250px';
        }
        close_img3.addEventListener('click',Closs3);
        
        function Closs3(){ 
            image4.style.width = '70%';
            image4.style.height = '50%';
        }
    }

}



const css_stuff = window.matchMedia("(max-width: 700px)");
pic_function(css_stuff)
css_stuff.addEventListener('click',pic_function );




var all_images = document.getElementsByTagName("img");
all_images.classList.add('img-responsive');
