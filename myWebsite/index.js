// alert('error')

function handleClick(){
    // refers to which one was click on$(this)
    var text = $(this).text()
    alert(text)
}
$(document).ready(function (){ // this is an anonymous function
    $('.panel').click(handleClick)
    $('#id').click(handleClick)
}
)