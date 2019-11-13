$(document).ready(function() {
    $('.burger-item').on('click', function(){
        let burgerId = $(this).attr('id')
        console.log(burgerId)
        $.ajax({
            method: 'PUT',
            url: '/burgers/' + burgerId
        })
        .then(function(data){
            location.reload();
        })
    })
})
