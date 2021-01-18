
function calcular() {
    var peso = 0, altura = 0, largura = 0, comprimento = 0;
    var unidades = $('input:radio:checked').val();
    
    switch (unidades){
        case "10":
            peso = 1.200;
            altura = 20;
            largura = 20;
            comprimento = 30;
            break;
        case "20":
            peso = 2.200
            altura = 18
            largura = 20
            comprimento = 60
            break;
        case "30":
            peso = 3.400
            altura = 35
            largura = 40
            comprimento = 40
            break;
        case "50":
            peso = 5.400
            altura = 35
            largura = 40
            comprimento = 50
            break;
    }
    var dados = '{ "from": { "postal_code": "48904087", "address": "Avenida Flaviano Guimarães", "number": "1" }, "to": {"postal_code": "' + $("#cep").val() + '",  "address": "Endereço do destinatário", "number": "2" }, "package": {"weight": '+peso+',"width": '+largura+',"height": '+altura+',"length": '+comprimento+'} }';
    console.log(dados);
    $.ajax({
        type: 'POST',
        url: 'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate',
        dataType: 'json',
        headers: {
            'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU2Yzk4NjdiZjZjODFlYjAzYzI4MmM2YWNiNGE2OWY2YmE2OGU3NjRiMWY3NDY0ZGRjZTA2YzE4YThlYzQ5YWQzM2ZhMTI1OTgxMmIzMWZhIn0.eyJhdWQiOiIxIiwianRpIjoiZTZjOTg2N2JmNmM4MWViMDNjMjgyYzZhY2I0YTY5ZjZiYTY4ZTc2NGIxZjc0NjRkZGNlMDZjMThhOGVjNDlhZDMzZmExMjU5ODEyYjMxZmEiLCJpYXQiOjE2MTA1ODYzNzksIm5iZiI6MTYxMDU4NjM3OSwiZXhwIjoxNjQyMTIyMzc5LCJzdWIiOiJhYzY4ODM2OS0yNmZhLTRiOTctODI5NS1mZTYyNzVjOGNmZjMiLCJzY29wZXMiOlsiY2FydC1yZWFkIiwiY2FydC13cml0ZSIsImNvbXBhbmllcy1yZWFkIiwiY29tcGFuaWVzLXdyaXRlIiwiY291cG9ucy1yZWFkIiwiY291cG9ucy13cml0ZSIsIm5vdGlmaWNhdGlvbnMtcmVhZCIsIm9yZGVycy1yZWFkIiwicHJvZHVjdHMtcmVhZCIsInByb2R1Y3RzLWRlc3Ryb3kiLCJwcm9kdWN0cy13cml0ZSIsInB1cmNoYXNlcy1yZWFkIiwic2hpcHBpbmctY2FsY3VsYXRlIiwic2hpcHBpbmctY2FuY2VsIiwic2hpcHBpbmctY2hlY2tvdXQiLCJzaGlwcGluZy1jb21wYW5pZXMiLCJzaGlwcGluZy1nZW5lcmF0ZSIsInNoaXBwaW5nLXByZXZpZXciLCJzaGlwcGluZy1wcmludCIsInNoaXBwaW5nLXNoYXJlIiwic2hpcHBpbmctdHJhY2tpbmciLCJlY29tbWVyY2Utc2hpcHBpbmciLCJ0cmFuc2FjdGlvbnMtcmVhZCIsInVzZXJzLXJlYWQiLCJ1c2Vycy13cml0ZSIsIndlYmhvb2tzLXJlYWQiLCJ3ZWJob29rcy13cml0ZSJdfQ.yrGjDTMf3W5vFJpSTFzCBekact1ShTpv8ACyltyW_pUbyU_fvzOilE5At4Fq0ZLocQI8V42zbBVdZlwV0umlkNJlWWYoeNJN0qajbb7Rwf9atYeexou0aD5H82uOY7e3yMAKDhRgYsKh-evTkBhtjNJ-cLB49J6CaIF-qLpXpBPTTvVXPRA5rsStZ7xp_DIuvj43_wDwpF-bLqOgXWRPq5mlkwdgNr_oRxkuMJenlCDY---CxM6ssrXzwidDbqTRxVX2_5edyjqLVpcaaXyjZKNhDdsyGeAmLKEN_yc3rrhtXR1yRp_8Oh-ZTgfMO4MWi34Z5LgE6NLJRPtHQE72i8I9ZeA1Y17RBcB-408wwAuWLUYxiLI7kjWPusMG2t5DqJIfegmIYa_d9_Ob5Gm-ePamceqju9SBuqWA9lDaUXNUZJMRYqcReSO6zN7utNRlUra7YMYqTo4LbB56KGV7Nns-aRsrV3bH1QybznTkCuPCLNc27C3ZW3ku2_KAKb79ArBymqE3P_OajGz2Ebu6SVkwaqdYPMx_rxBQj97mEUoc4-sCauTJDdymyqM0CxbZspZJr0Dxt9qLY0kt3h2IWgX5KRC6ZRf3_91CNgU-7Evxhd1jRbWlzi3_3ImRLJI2lxqUJ9LnQnjkkarIRSZT4AntMBr51jH8usXXj40QwDo',
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        ContentType: 'application/json',
        data: dados,
        success: function (data) {
            var div = '';
            var i = 0;
            $.each(data, function (i, obj) {
                if (obj.company['name'] == "Correios" && obj.error == null) {
                    $('#tableComplete').prop("hidden", false);
                    div += '<tr>' +
                        '<td>' + obj.company['name'] + '</td>' +
                        '<td>' + obj.name + '</td>' +
                        '<td>R$ ' + obj.price + '</td>' +
                        '<td> <a href="https://api.whatsapp.com/send?phone=5587988318209&text=*Meu%20Pedido*%0D*'+unidades+'Unidades*%0D*Frete:*%20R$%20'+obj.price+'%0D*Tipo:*%20'+obj.name+'%20" title="Finalizar Pedido"><i class="fas fa-check" style="color: green"></i></a> </td>' +
                        '</tr>';
                    i++;
                }
            });

            if (i == 0) {
            }

            $('#myTable').html(div).show();
        },
        error: function (data2) {
            console.log(data2.error)
            if($("#cep").val() == ""){
                Swal.fire({
                    title: 'Oops..',
                    icon: 'error',
                    text: 'Digite um cep para continuar!',
                    confirmButtonText: `OK`,
                })
            }else if($("#cep").val().length < 9){
                Swal.fire({
                    title: 'Oops..',
                    icon: 'error',
                    text: 'Digite um cep valido!',
                    confirmButtonText: `OK`,
                })
            }
        }
    });
}