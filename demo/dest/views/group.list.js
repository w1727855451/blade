define(["View",getViewTemplatePath("group.list"),"UIGroupList"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{},onPreShow:function(){if(!this.grouplist){var a,b,d,e=[];a=[{gname:"iphone4",name:"Apple iphone4"},{gname:"iphone5",name:"Apple iphone5"},{gname:"iphone5s",name:"Apple iphone5s"}],b=[{gname:"ipad3",name:"Apple ipad3"},{gname:"ipad4",name:"Apple ipad4"},{gname:"ipad5",name:"Apple ipad5"},{gname:"ipad-air",name:"Apple ipad Air"}],d=[{gname:"mac-pro",name:"Apple Mac-pro"},{gname:"mac-air",name:"Apple  Mac-air"}],e=[{name:"手机",data:a},{name:"平板电脑",data:b},{name:"笔记本",data:d}],this.grouplist=new c({datamodel:{data:e},wrapper:this.$(".wrapper1")})}if(this.grouplist.show(),!this.grouplist2){var a,b,d,f=[];a=[{gname:"iphone4",name:"Apple iphone4"},{gname:"iphone5",name:"Apple iphone5"},{gname:"iphone5s",name:"Apple iphone5s"}],b=[{gname:"ipad3",name:"Apple ipad3"},{gname:"ipad4",name:"Apple ipad4"}],d=[{gname:"mac-pro",name:"Apple Mac-pro"},{gname:"mac-air",name:"Apple  Mac-air"}],f=[{name:"手机",data:a},{name:"平板电脑",data:b},{name:"笔记本",data:d}],this.grouplist2=new c({datamodel:{data:f},onItemClick:function(){0},onGroupClick:function(a){this.closeGroup(),this.openGroup(a)},wrapper:this.$(".wrapper2")})}this.grouplist2.closeGroup(),this.grouplist2.openGroup(0),this.grouplist2.show(),this.turning()},onShow:function(){},onHide:function(){}})});