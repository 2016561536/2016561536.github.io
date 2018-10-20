
    function 滑块条(name,event){  
        this.名称 = name;
        
        this.置位置 = function (value){
            document.getElementById(this.名称).value=""+value;
        } 

        this.取位置 = function (){
           return Number(document.getElementById(this.名称).value);
        }  

        this.置最小位置 = function (min){
            document.getElementById(this.名称).min=""+min;
        } 

        this.置最大位置 = function (max){
            document.getElementById(this.名称).max=""+max;
        } 

        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称).parentNode;
                div.style.display="";	                
            }else{
                var div = document.getElementById(this.名称).parentNode;
                div.style.display="none"; //不占位               
            }
        } 

        this.置可视2 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称).parentNode;
                div.style.visibility="visible";	                
            }else{
                var div = document.getElementById(this.名称).parentNode;
                div.style.visibility="hidden"; //占位               
            }
        } 
        
        if(event!=null){
 			document.getElementById(this.名称).addEventListener("input", function () {
                event(this.value);//滑块被移动事件
            });       	
        }
    }  


 