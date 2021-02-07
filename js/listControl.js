(function(root){
    function listControl(data,wrap){
        var list=document.createElement('div'),
            dl=document.createElement('dl'),
            dt=document.createElement('dt'),
            close=document.createElement('div'),
            musicList=[];//存储所有的歌曲对应的dom
        list.className='list';
        dt.innerHTML='播放列表';
        close.className='close';
        close.innerHTML='关闭';
        dl.appendChild(dt);
        data.forEach(function(item,index){
            var dd = document.createElement('dd');
            dd.innerHTML=item.name;
            dl.appendChild(dd);
            musicList.push(dd);
            //点击每一首歌时切换选中状态
            dd.addEventListener('touchend',function(){
                changeSelect(index);
            })
        });
        list.appendChild(dl);
        list.appendChild(close);
        wrap.appendChild(list);

        var disY=list.offsetHeight;
        list.style.transform=`translateY(${disY}px)`;

        close.addEventListener('touchend',function(){
            slideDown();
        });
        //默认让第一首歌为选中状态
        changeSelect(0);
        // 列表滑动显示
        function slideUp(){
            list.style.transition='.2s';
            list.style.transform='translateY(0)';
        }
        // 列表滑动隐藏
        function slideDown(){
            list.style.transition='.2s';
            list.style.transform=`translateY(${disY}px)`;
        }

        // 切换选中元素
        function changeSelect(index){
            for(var i = 0;i <musicList.length;i++){
                musicList[i].className="";
            }
            musicList[index].className='active';
        }
        return{//把需要用到的东西暴露出去
            dom:list,
            musicList:musicList,
            slideUp:slideUp,
            slideDown:slideDown,
            changeSelect:changeSelect
        }
    }
    root.listControl=listControl;
})(window.player || (window.player={}))