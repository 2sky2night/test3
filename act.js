function moveaway()
{   
    let get=document.getElementById('deeemo');
    let getb=document.getElementById('bott');
    /*主页元素*/
    let brow=document.getElementById('brow');
    get.style.opacity='0';
    getb.style.opacity='0';
    brow.style.transform=' translateY(0)';
}

function backfun()
{
    let get=document.getElementById('brow');
    let getw=document.getElementById('deeemo');
    let getb=document.getElementById('bott');
    get.style.transform=' translateY(-3000px)';
    getw.style.opacity='1';
    getb.style.opacity='1';
}

/*设置全局变量每次点击层数增加1*/ 
let layer=100;
/*根据导航栏i传入参数*/
function forzindex(i)
{
    layer++;
    /*获取son类型的元素是一个数组，且是按照顺序存储的下标*/
    let x=document.getElementsByClassName("son");
    x[i].style.zIndex=layer;
}
