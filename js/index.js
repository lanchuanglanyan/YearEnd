
$body=$('body');

//加载完成后展示
$(document).ready(function () {
    $('#bgt').hide();
});

var groupArr=[58,176,157,47,67,71];//拼团件数
var groupArr2=[
    {goodsId:10308,actId:11},
    {goodsId:10305,actId:13},
    {goodsId:10313,actId:14},
    {goodsId:10312,actId:15},
    {goodsId:10311,actId:9},
    {goodsId:10309,actId:17}
];//拼团链接
$('#group>.list>a').each(function (ind,val) {
    $(val).find('.number').text(groupArr[ind]);
    $(val).attr('href','https://mol.tmcsio.cn/sites/m/index.php?m=goods&c=index&a=show&goods_id='+groupArr2[ind].goodsId+'&act_id='+groupArr2[ind].actId);
});


//layui
layui.use('element', function(){
    var element = layui.element;

    var arr1=[58 ,176,157,47 ,67 ,71 ,86 ,274];//秒杀件数
    var arr2=[100,100,100,100,100,100,100,100];//秒杀进度条 %
    var arr3=[10067,10066,10315,10316,10314,10307,10310,10317];//秒杀链接
    $('#seckill>.list>a').each(function (ind,val) {
        $(val).attr('href','https://mol.tmcsio.cn/sites/m/index.php?m=goods&c=index&a=show&goods_id='+arr3[ind]);
        $(val).find('.number').text(arr1[ind]);
        var filter='list'+ind;
        var number=arr2[ind]+'%';
        element.progress(filter,number);
        // console.log(filter,number);
    });

});


function urlSearch(url) {
    var str=url; //取得整个地址栏
    var num=str.split('?');
    var arr;
    var data={};
    var name;
    $.each(num,function (ind,val) {
        if(ind>0){
            if(val.split('&').length>1){
                for(var i=0;i<val.split('&').length;i++){
                    arr=val.split('&')[i].split('=');
                    name=arr[0];
                    data[name]=arr[1];
                }
            }else {
                arr=val.split('=');
                var name=arr[0];
                data[name]=arr[1];
            }
        }
    });
    return data;
}
