$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button-cancelar').click(function() {
        $('form').slideUp();
    })


    $('form').on('submit',function(e) {
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const NovaTarefa =$('<li></li>');

    $(`<li>${tarefa}</li>`).appendTo(NovaTarefa);

    $(NovaTarefa).appendTo('ol');
    $('#tarefa').val('');

    $('ol').on('click','li',function() {
        $(this).toggleClass('completed');
    })
    })
})