$(document).ready(function() {
    $('header button').click(function(){
        $('#form-task').slideDown();
    })

    $('#button-cancel').click(function(){
        $('#form-task').slideUp();
    })

    $('#form-task').on('submit', function(e){
        e.preventDefault();

        const campoInput = $('#list-task').val();
        const tarefa = '<li><span>' + campoInput + 
        '</span><button class="remove-task">Excluir</button></li>';

        const nameTask = $('#name-task').val();
        if (nameTask.trim() !== '') {
            const newTask = $('<li></li>').text(nameTask);
            $('#list-task').append(newTask);
            $('#name-task').val('');
        }
    })
});

$('#list-task').on('click', 'li', function() {
    $(this).toggleClass('completed'); 

    $('#list-task').on('click', '.remove-task', function(e){
        e.stopPropagation();
        $(this).closest('li').remove();
    
    });
    $('#button-cancel').on('click', function(){
        $('#list-task').empty();
    });
});
