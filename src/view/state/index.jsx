
class Test {
    constructor(props){
        super(props)
        this.state={
            a:false,
            b:false
        }
        this.mytest.bind(this);

    }
    
   mytest(){
        // 不在事件函数中，所以setState立刻执行
        this.setState({a: true}); // 重新渲染 {a: true, b: false }
        console.log(this.state.a,this.state.b);
        this.setState({b: true}); // 重新渲染 {a: true, b: true }
        console.log(this.state.a,this.state.b)
   } 
}
 new Test().mytest();