let img_arr = ['Bucket01','Bucket02','Bucket03','Bucket04','Bucket05','Bucket06'];
$('.flex_input img').click(function(){
    var text = $('.flex_input input').val();
    const random_img = img_arr[Math.floor(Math.random() * img_arr.length)];
    let appendData = `
    <div class="Bucket">
        <img class="bg" src="./assets/images/${random_img}.png" alt="버킷리스트BG">
        <img class="close" src="./assets/images/Delete.png" alt="삭제">
        <p>${text}</p>
        <img class="done" src="./assets/images/Done.png" alt="버킷리스트완료">
    </div>
    `;
    if(text){
        $('.Bucket_list').append(appendData);
    }else{
        alert("텍스트를 입력하세요.");
    }
})
$(document).on('click', '.Bucket' ,function(){
    $(this).addClass('fine');
})
$(document).on('click', '.fine' ,function(){
    $(this).removeClass('fine');
})
$(document).on('click', '.close' ,function(){
    $(this).parent().remove();
})