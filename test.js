var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app2 = new Vue({
    el:"#app-2",
    data:{
        message:"页面加载于"+new Date().toLocaleString()
    }
});
var app3= new Vue({
    el:"#app-3",
    data:{
        seen:true
    }
});
var app4 = new Vue({
    el:"#app-4",
    data:{
        todoList:[{text:"123"},{text:"456"}]
    }
})
var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"123",
    },
    methods:{
        reverseMsg:function () {
            this.message = this.message.split("").reverse().join("");
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});
