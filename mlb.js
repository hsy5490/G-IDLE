const video = $('#MLB_video');
const btn = $('#MLB_btn');
btn.click(function(){
    /* 초기값 = video(paused) | button(play) */
    // video가 paused 상태면
    if(video.get(0).paused){
        // play() = Video Play
        $('#MLB_video').get(0).play();
        // button paused 폰트어썸으로 바꿔라
        $('#MLB_btn').html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        // pause() = Video Pause
        $('#MLB_video').get(0).pause();
        // button play 폰트어썸으로 바꿔라
        $('#MLB_btn').html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});