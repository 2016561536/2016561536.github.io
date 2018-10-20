    function 客户端(name,event1,event2,event3,event4){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 客户端(name,event1,event2,event3){
        
		//开发文档参考：http://www.cnblogs.com/tinywan/p/5894403.html
		
        //组件内部属性，仅供组件内部使用：
        this.socket;
		
        //组件命令：
        this.打开连接 = function (地址){
            this.socket = new WebSocket(地址);
    		this.socket.onopen=function(){//连接成功
				if(event1!=null){
					event1();
				}
			}
			
			this.socket.onerror=function(err){//出现错误
				if(event2!=null){
					//console.log(err);
					event2(err.data);
				}
			}		
			
			this.socket.onmessage=function(msg){//收到数据
				if(event3!=null){
					event3(msg.data);
				}
			}
			
			this.socket.onclose=function(){//连接断开
				if(event4!=null){
					event4();
				}				
			}						
        } 

        //组件命令：
        this.发送数据 = function (数据){
           this.socket.send(数据);
        } 
        
        //组件命令：
        this.关闭连接 = function (){
           this.socket.close();
        }  
    }