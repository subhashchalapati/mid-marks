//for background***
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.1890508074044899,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":164.279696714406,"line_linked":{"opacity":0.4610773841543074}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":0.614995787700084,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


// particlesJS("particles-js",
//             {"particles":{"number":{"value":80,
//                                     "density":{"enable":true,"value_area":800}
//                                    },
//                           "color":{"value":"#ffffff"},
//                           "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
//                                                    "polygon":{"nb_sides":5},
//                                                    "image":{"src":"img/github.svg","width":100,"height":100}
//                                   },
//                                    "opacity":{"value":0.1890508074044899,
//                                               "random":false,
//                                               "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}
//                                              },
//                                    "size":{"value":3,
//                                            "random":true,
//                                            "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}
//                                           },
//                                    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
//                                    "move":{"enable":true,
//                                            "speed":6,
//                                            "direction":"none",
//                                            "random":false,
//                                            "straight":false,
//                                            "out_mode":"out",
//                                            "bounce":false,
//                                            "attract":{"enable":false,"rotateX":600,"rotateY":1200}
//                                           }
//                       },
//              "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":164.279696714406,"line_linked":{"opacity":0.4610773841543074}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":0.614995787700084,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() 
// { 
//         stats.begin();
// stats.end();
// if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
// {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
// }
// requestAnimationFrame(update); };
// requestAnimationFrame(update);;

//for background******



function printpage(){
        window.print();
}
function myFunction(mid1,mid2,mid3){
    var mid1 = parseInt(document.getElementById("mid1").value);
    var mid2 = parseInt(document.getElementById("mid2").value);
    var mid3 = parseInt(document.getElementById("mid3").value);
    var sum = mid1 + mid2 + mid3;
    var avg = (mid1+mid2+mid3)/3;
    if(mid1>30 || mid2>30 || mid3>30){
        var y = document.getElementById("snackbar2")
        y.className = "show";
        setTimeout(function()
                        {
                                  y.className = y.className.replace("show", ""); 
                        }, 3000);
        }
    else{
        if(mid1==mid2 && mid1==mid3)
              {
                     var x = document.getElementById("snackbar")
                     x.className = "show";
                     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

              }   
        if (mid1>mid2)
            {
                midd=mid1;    
                low=mid2;   
            }
        else{
                 midd=mid2;  
                 low=mid1;  
            }
        if (midd>mid3)
            {
                high=midd;    
                if(low>mid3)
                        {   
                             midd=low;                
                             low=mid3;
                        }
                else
                 midd=mid3;      
            }
        else
            high=mid3; 

        var res = high*0.5+midd*0.35+low*0.15 ;

        document.getElementById("demo4").value = high*0.5;
        document.getElementById("demo5").value = midd*0.35;
        document.getElementById("demo6").value = low*0.15;
        document.getElementById("res").value = res;
        document.getElementById("demo1").innerHTML = "sum is =" + sum ;
        document.getElementById("demo2").innerHTML = "avg is =" + avg ;
        mid1=mid2=mid3=0;
    }   
}

function refresh()
{
        location.reload(1);
}

window.onload = function()
{
        document.getElementById("mid1").focus();
}
