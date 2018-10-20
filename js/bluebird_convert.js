    (function (){  
        //注册命名空间  
        window["转换操作"] = {}   
        
        function 到文本(value){
            return "" + value;
        }

        function 到数值(str) { 
            return Number(str);
        }

        function 到十六进制(value) { 
            return value.toString(16);
        }      

        function 到十进制(str) { 
            return parseInt(str,16);
        }

        function 代码转字符(){
            var result = "";
            for(var i=0;i<arguments.length;i++){
                result = result + String.fromCharCode(arguments[i]);
            }
            return result;
        }

        function 字符转代码(str){
            return str.charCodeAt(0);
        }

        function 文本转json(str){
            return eval("("+str+")");
        }

        function json转文本(json){
            return JSON.stringify(json);
        }

        function 取数据类型(value){
            var a = typeof(value);
            switch(a){
            case "number":
              return 1;
              break;
            case "string":
              return 2;
              break;
            case "boolean":
              return 3;
              break;
            case "object":
              return 4;
              break;              
            case "function":
              return 5;
              break;              
            case "undefined":
              return 6;
              break; 
            default:
                return 6;
            }
        }

        function 是否为非数字(value){
            return isNaN(value);
        }
        
        //注册function
        window["转换操作"]["到文本"]=到文本;  
        window["转换操作"]["到数值"]=到数值; 
        window["转换操作"]["到十六进制"]=到十六进制;
        window["转换操作"]["到十进制"]=到十进制;
        window["转换操作"]["代码转字符"]=代码转字符; 
        window["转换操作"]["字符转代码"]=字符转代码; 
        window["转换操作"]["文本转json"]=文本转json; 
        window["转换操作"]["json转文本"]=json转文本;
        window["转换操作"]["取数据类型"]=取数据类型;
        window["转换操作"]["是否为非数字"]=是否为非数字;
    })();
 