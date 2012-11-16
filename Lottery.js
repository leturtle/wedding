var brand = ['girl','gl','iloveu','thx'];
var suits = ['spades','hearts','clubs','diamonds'];
var num = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

$(function(){
    $('#start-shuffle').bind('click',function(){
        shuffle_suits();
        shuffle_brand();
        shuffle_num();
        $('#start-shuffle').unbind('click');
    });
});

function shuffle_brand() {
    var brand_shuffle = setInterval(function(){
        $('#brand a').removeClass('brand-girl brand-gl brand-iloveu brand-thx');
        $('#brand a').addClass('brand-'+get_random_val(brand));
    },1);
    $('#stop-brand').bind('click',function(){
        clearInterval(brand_shuffle);
        $('#stop-brand').unbind('click');
    });
}

function shuffle_suits() {
    var suit_shuffle = setInterval(function(){
        $('#suits a').removeClass('suits-spades suits-hearts suits-clubs suits-diamonds');
        $('#suits a').addClass('suits-'+get_random_val(suits));
    },1);
    $('#stop-suits').bind('click',function(){
        clearInterval(suit_shuffle);
        $('#stop-suits').unbind('click');
    });
}

function shuffle_num() {
    var num_shuffle = setInterval(function(){
        $('#num .shuffle').html('');
        $('#num .shuffle').html(get_random_val(num));
    },1);
    $('#stop-num').bind('click',function(){
        clearInterval(num_shuffle);
        $('#stop-num').unbind('click');
    });
}


function get_random_val(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}