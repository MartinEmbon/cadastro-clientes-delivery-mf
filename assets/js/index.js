

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
        "url" : `http://localhost:3000/dashboard/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Cliente atualizado com sucesso!");
        var url = "https://crud-delivery.herokuapp.com/dashboard";
        $(location).attr('href',url);
    })

})

if(window.location.pathname == "/dashboard"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `https://crud-delivery.herokuapp.com/dashboard/api/users/${id}`,
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