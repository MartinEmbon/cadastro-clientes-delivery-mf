

$("#add_user").submit(function(event){
    alert("Cliente adicionado com sucesso!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Cliente atualizado com sucesso!");
        var url = "http://localhost:3000";
        $(location).attr('href',url);
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Tem certeza de deletar cadastro?")){
            $.ajax(request).done(function(response){
                alert("Cadastro deletado com sucesso!");
                location.reload();
            })
        }

    })
}