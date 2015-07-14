/**
 * Created by Administrator on 2015/4/2.
 */

var arr = new Array('./images/first_prize.png','./images/second_prize.png','./images/thred_prize.png',
'./images/fourth_prize.png','./images/fiveth_prize.png','./images/sixth_prize.png');
var arrText =new Array("iphone6一部","大号卡通公仔一个","小黄人公仔一个","天使奶瓶抱枕一个","史迪奇公仔一个","100积分");
var index;
$(document).ready(
    function (){
        if(type == 3){
        if(txt == null)return;
            consol(txt);
        switch (txt){
            case '一等奖':
                index = 0;
                break;
            case '二等奖':
                index = 1;
                break;
            case '三等奖':
                index = 2;
                break;
            case '四等奖':
                index = 3;
                break;
            case '五等奖':
                index = 4;
                break;
            case '六等奖':
                index = 5;
                break;
        }

        $("#text-prize").hide();
            //$('#next').hover(function(){
            //    $(this).addClass('hover');
            //});

        $('.next').click(
          function(){
              window.location.href='location_write.html';

          }
        );
            var next;
            $(function(){
                if($('.next').onkeydown)
                document.getElementById('next').style.backgroundImage = 'url("./images/next_select.png)';
                consol(arr[index]);
                document.getElementById( "prize-back").style.backgroundImage = 'url("'+arr[index]+'")';
            });
        }else if(type == 2){
            //抽过一次奖不能再次参与抽奖
            $('.next').hide();
            $('.prize').hide();
            $(this).addClass('next_prize.css');
            $(this).removeClass('prize.css');
            $('#prize-res').text("艺友们！每位会员限抽奖一次...");
        }else if (type == 1){
            //抽奖时间没有开启
            $('.next').hide();
            $('.prize').hide();
            $(this).addClass('next_prize.css');
            $(this).removeClass('prize.css');
            $('#prize-res').text("亲，抽奖时间尚未开始...");
        }
    }
);

var txt = "六等奖";
var type = 3;
function setPrize(type,text){
    txt=text;
    type = type;
    consol(text);
}

function consol(mas){
    console.log(mas);
}

/**
 * 移动端传入
 * @param userId
 * @param number
 */
var user_id;
var mNumber;
function setParameter(userId,number){
    user_id = userId;
    mNumber = number;
}

