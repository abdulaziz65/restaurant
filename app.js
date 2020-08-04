var scrollbutton = document.getElementById("scrolltopBtn");
var aboutinfoAnim= document.getElementById("aboutinfo");
var aboutimgAnim= document.getElementById("aboutimage");
var gitem1Anim= document.getElementById("item1");
var gitem2Anim= document.getElementById("item2");
var gitem3Anim= document.getElementById("item3");
var gitem4Anim= document.getElementById("item4");
var gitem5Anim= document.getElementById("item5");
var gitem6Anim= document.getElementById("item6");
var gitem7Anim= document.getElementById("item7");
var gitem8Anim= document.getElementById("item8");
var gitem9Anim= document.getElementById("item9");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
//===========About Section Animation====================
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            aboutinfoAnim.style.transformOrigin="left";
            aboutinfoAnim.style.transform="scaleX(1)";
            aboutinfoAnim.style.transition="0.5s";
            
        }else{
            aboutinfoAnim.style.transform="scaleX(0)";
            aboutinfoAnim.style.transition="0.5s";
        }

        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            aboutimgAnim.style.transformOrigin="right";
            aboutimgAnim.style.transform="scaleX(1)";
            aboutimgAnim.style.transition="0.5s";
            
        }else{
            aboutimgAnim.style.transform="scaleX(0)";
            aboutimgAnim.style.transition="0.5s";
        }

        // ============================ Menu Section Animation ======================
        if(document.body.clientWidth > 500){
            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem1Anim.style.transformOrigin="left";
                gitem1Anim.style.transform="scaleX(1)";
                gitem1Anim.style.transition="0.5s";
                
            }else{
                gitem1Anim.style.transform="scaleX(0)";
                gitem1Anim.style.transition="0.5s";
            }

            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem2Anim.style.transformOrigin="right";
                gitem2Anim.style.transform="scaleX(1)";
                gitem2Anim.style.transition="0.5s";
                
            }else{
                gitem2Anim.style.transform="scaleX(0)";
                gitem2Anim.style.transition="0.5s";
            }

            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem3Anim.style.transformOrigin="left";
                gitem3Anim.style.transform="scaleX(1)";
                gitem3Anim.style.transition="0.5s";
                
            }else{
                gitem3Anim.style.transform="scaleX(0)";
                gitem3Anim.style.transition="0.5s";
            }

            //===========================================================================  row 2
            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem4Anim.style.transformOrigin="right";
                gitem4Anim.style.transform="scaleX(1)";
                gitem4Anim.style.transition="0.5s";
                
            }else{
                gitem4Anim.style.transform="scaleX(0)";
                gitem4Anim.style.transition="0.5s";
            }

            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem5Anim.style.transformOrigin="left";
                gitem5Anim.style.transform="scaleX(1)";
                gitem5Anim.style.transition="0.5s";
                
            }else{
                gitem5Anim.style.transform="scaleX(0)";
                gitem5Anim.style.transition="0.5s";
            }

            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem6Anim.style.transformOrigin="right";
                gitem6Anim.style.transform="scaleX(1)";
                gitem6Anim.style.transition="0.5s";
                
            }else{
                gitem6Anim.style.transform="scaleX(0)";
                gitem6Anim.style.transition="0.5s";
            }
            //====================================================== Row 3
            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem7Anim.style.transformOrigin="left";
                gitem7Anim.style.transform="scaleX(1)";
                gitem7Anim.style.transition="0.5s";
                
            }else{
                gitem7Anim.style.transform="scaleX(0)";
                gitem7Anim.style.transition="0.5s";
            }

            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem8Anim.style.transformOrigin="right";
                gitem8Anim.style.transform="scaleX(1)";
                gitem8Anim.style.transition="0.5s";
                
            }else{
                gitem8Anim.style.transform="scaleX(0)";
                gitem8Anim.style.transition="0.5s";
            }

            if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
                gitem9Anim.style.transformOrigin="left";
                gitem9Anim.style.transform="scaleX(1)";
                gitem9Anim.style.transition="0.5s";
                
            }else{
                gitem9Anim.style.transform="scaleX(0)";
                gitem9Anim.style.transition="0.5s";
            }
    }
    
    else{


        
        if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300){
            gitem1Anim.style.transformOrigin="left";
            gitem1Anim.style.transform="scaleX(1)";
            gitem1Anim.style.transition="0.5s";
            
        }else{
            gitem1Anim.style.transform="scaleX(0)";
            gitem1Anim.style.transition="0.5s";
        }

        if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600){
            gitem2Anim.style.transformOrigin="right";
            gitem2Anim.style.transform="scaleX(1)";
            gitem2Anim.style.transition="0.5s";
            
        }else{
            gitem2Anim.style.transform="scaleX(0)";
            gitem2Anim.style.transition="0.5s";
        }

        if(document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900){
            gitem3Anim.style.transformOrigin="left";
            gitem3Anim.style.transform="scaleX(1)";
            gitem3Anim.style.transition="0.5s";
            
        }else{
            gitem3Anim.style.transform="scaleX(0)";
            gitem3Anim.style.transition="0.5s";
        }

        //===========================================================================  row 2
        if(document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100){
            gitem4Anim.style.transformOrigin="right";
            gitem4Anim.style.transform="scaleX(1)";
            gitem4Anim.style.transition="0.5s";
            
        }else{
            gitem4Anim.style.transform="scaleX(0)";
            gitem4Anim.style.transition="0.5s";
        }

        if(document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400){
            gitem5Anim.style.transformOrigin="left";
            gitem5Anim.style.transform="scaleX(1)";
            gitem5Anim.style.transition="0.5s";
            
        }else{
            gitem5Anim.style.transform="scaleX(0)";
            gitem5Anim.style.transition="0.5s";
        }

        if(document.body.scrollTop > 2650 || document.documentElement.scrollTop > 2650){
            gitem6Anim.style.transformOrigin="right";
            gitem6Anim.style.transform="scaleX(1)";
            gitem6Anim.style.transition="0.5s";
            
        }else{
            gitem6Anim.style.transform="scaleX(0)";
            gitem6Anim.style.transition="0.5s";
        }
        //====================================================== Row 3
        if(document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900){
            gitem7Anim.style.transformOrigin="left";
            gitem7Anim.style.transform="scaleX(1)";
            gitem7Anim.style.transition="0.5s";
            
        }else{
            gitem7Anim.style.transform="scaleX(0)";
            gitem7Anim.style.transition="0.5s";
        }

        if(document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200){
            gitem8Anim.style.transformOrigin="right";
            gitem8Anim.style.transform="scaleX(1)";
            gitem8Anim.style.transition="0.5s";
            
        }else{
            gitem8Anim.style.transform="scaleX(0)";
            gitem8Anim.style.transition="0.5s";
        }

        if(document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400){
            gitem9Anim.style.transformOrigin="left";
            gitem9Anim.style.transform="scaleX(1)";
            gitem9Anim.style.transition="0.5s";
            
        }else{
            gitem9Anim.style.transform="scaleX(0)";
            gitem9Anim.style.transition="0.5s";
        }
    }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}