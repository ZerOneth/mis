



var app3 = new Vue({
	el: '#uploadVideo',
	data:{
		uploadList:[
			{
				author: '夏小熙',
				sort: '校园北京大学',
				time: '2019-5-10',
			},
			{
				author: '宣爱',
				sort: '校园北京大学',
				time: '2019-5-12',
			}
		],
	}
});



// 导航分类信息
var app = new Vue({
	el: '#info-nav',
	data: {
		//infoList_1:['首页 | ','新闻 | ','财经 | ','娱乐 | ','视频 | ','女性 | ','房产 | ',' 旅游 | ','军事 | ','企业 | ',' 短信 | ','商城 | ','爱问 | ','体育 | ','科技 | ','音乐 | ','育儿 | ',' TV'],
		//infoList_2:['家具 | ','星座 | ','团购 | ','城市 | ','彩铃 | ','邮箱 | ','博客 | ',' 手机 | ','乐库 | ','理财 | ',' 美食 | ','汽车 | ','时尚 | ','教育 | ','文学 | ','F1 | ','黄页 | ',],
		//infoList_3:['彩信 | ','论坛 | ','数码 | ','读书 | ','家电 | ','交友 | ','健康 | ',' 搜索 | ','公益 | ','分类 | ',' 聊天 | ','电台 | ','大学生招聘 | ','第二职业 | ','高尔夫 | ','音乐会 | '],
		//导航信息
		infoList:[ //对象
		{ 		
			name:'首页 | ',
			url:'http://www.aiuiot.com',
		},
		{
			name: '新闻 | ',
			url:'#',
		},
		{
			name: '财经 | ',
			url:'#'
		},
		{
			name: '娱乐 | ',
			url:'#'
		},
		{
			name: '视频 | ',
			url:'#'
		},
		{
			name: '女性 | ',
			url:'#'
		},
		{
			name: '房产 | ',
			url:'#'
		},
		{
			name: '旅游 | ',
			url:'#'
		},
		{
			name: '游戏 | ',
			url:'#'
		},
		{
			name: '军事 | ',
			url:'#'
		},
		{
			name: '企业 | ',
			url:'#'
		},
		{
			name: '短信 | ',
			url:'#'
		},
		{
			name: '商城 | ',
			url:'#'
		},
		{
			name: '爱问 | ',
			url:'#'
		},
		{
			name: '体育 | ',
			url:'#'
		},
		{
			name: '科技 | ',
			url:'#'
		},
		{
			name: '音乐 | ',
			url:'#'
		},
		{
			name: '育儿 | ',
			url:'#'
		},
		{
			name: 'TV | ',
			url:'#'
		},
		{
			name: '新时代 | ',
			url:'#'
		},
		{
			name: '家具 | ',
			url:'#'
		},
		{
			name: '星座 | ',
			url:'#'
		},
		{
			name: '团购 | ',
			url:'#'
		},
		{
			name: '圈子 | ',
			url:'#'
		},
		{
			name: '城市 | ',
			url:'#'
		},
		{
			name: '彩铃 | ',
			url:'#'
		},
		{
			name: '图铃 | ',
			url:'#'
		},
		{
			name: '邮箱 | ',
			url:'#'
		},
		{
			name: '博客 | ',
			url:'#'
		},
		{
			name: '手机 | ',
			url:'#'
		},
		{
			name: '乐库 | ',
			url:'#'
		},
		{
			name: '理财 | ',
			url:'#'
		},
		{
			name: '美食 | ',
			url:'#'
		},
		{
			name: '汽车 | ',
			url:'#'
		},
		{
			name: '时尚 | ',
			url:'#'
		},
		{
			name: '教育 | ',
			url:'#'
		},
		{
			name: '文学 | ',
			url:'#'
		},
		{
			name: 'F1 | ',
			url:'#'
		},
		{
			name: '黄页 | ',
			url:'#'
		},
		{
			name: '彩信 | ',
			url:'#'
		},
		{
			name: '论坛 | ',
			url:'#'
		},
		{
			name: '5G | ',
			url:'#'
		},
		{
			name: '数码 | ',
			url:'#'
		},
		{
			name: '读书 | ',
			url:'#'
		},
		{
			name: '家电 | ',
			url:'#'
		},
		{
			name: '交友 | ',
			url:'#'
		},
		{
			name: '大健康 | ',
			url:'#'
		},
		{
			name: '大数据 | ',
			url:'#'
		},
		{
			name: '区块链 | ',
			url:'#'
		},
		{
			name: '分类 | ',
			url:'#'
		},
		{
			name: '公益 | ',
			url:'#'
		},
		{
			name: '聊天 | ',
			url:'#'
		},
		{
			name: '电台 | ',
			url:'#'
		},
		{
			name: '大学生招聘 | ',
			url:'#'
		},
		{
			name: '第二职业 | ',
			url:'#'
		},
		{
			name: '高尔夫 | ',
			url:'#'
		},
		{
			name: '音乐会 | ',
			url:'#'
		},
		
	],
		
	},
	

});




// 设置时间显示

var myData = {date:new Date()};

//在月份、日期、小时等小于10前面补0
var padDate = function (value) {
	return value <10 ? '0' + value:value;
};

// 实时显示当前时间
var app2 = new Vue({
	el:'#time',
    data:myData,
    filters: {
      formatDate:function (value) {
        var date = new Date(value);
        var year = date.getFullYear();
        var month = padDate(date.getMonth()+1);
        var day = padDate(date.getDate());
        var hours = padDate(date.getHours());
        var minutes = padDate(date.getMinutes());
        var seconds = padDate(date.getSeconds());
        return year + '-' + month + '-' + day + '-' + ' ' + hours + ':' + minutes + ':' + seconds;
      }
    },
    //实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，$el 还不可用。需要初始化处理一些数据时会比较有用
    created:function () {
     },
    //el挂载到实例上后调用，一般我们的第一个业务逻辑会在这里开始
    mounted:function () {
      var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(function(){
        _this.date = new Date(); //修改数据date
      },1000)
    },
    //实例销毁之前调用。主要解绑一些使用addEventListener监听的事件等
    beforeDestroy:function(){
      if(this.timer){
        clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
      }
    }
});


