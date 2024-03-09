let img_arr = ['Bucket01','Bucket02','Bucket03','Bucket04','Bucket05','Bucket06'];
let index = 0;

$(document).ready(function(){
    for(let i=0; i<localStorage.length; i++){
        const key = window.localStorage.key(i);
        loadData = JSON.parse(localStorage.getItem(key));
        let appendData = `
        <div id="${key}" class="Bucket">
            <img class="bg" src="./assets/images/${loadData.bg}.png" alt="버킷리스트BG">
            <img class="close" src="./assets/images/Delete.png" alt="삭제">
            <p>${loadData.saveText}</p>
            <img class="done" src="./assets/images/Done.png" alt="버킷리스트완료">
        </div>
        `;
        $('.Bucket_list').append(appendData);
    }
})

$('.flex_input img').click(function(){
    var text = $('.flex_input input').val();
    const random_img = img_arr[Math.floor(Math.random() * img_arr.length)];
    let appendData = `
    <div id="list_${index}" class="Bucket">
        <img class="bg" src="./assets/images/${random_img}.png" alt="버킷리스트BG">
        <img class="close" src="./assets/images/Delete.png" alt="삭제">
        <p>${text}</p>
        <img class="done" src="./assets/images/Done.png" alt="버킷리스트완료">
    </div>
    `;
    
    if(text){
        $('.Bucket_list').append(appendData);
        const list = {
            saveText: text,
            bg: random_img,
            doen: false,
        };
        localStorage.setItem('list_'+index, JSON.stringify(list));
        index++;
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
    let name = $(this).parent().attr('id');
    $(this).parent().remove();
    localStorage.removeItem(name);
})

