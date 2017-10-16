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
