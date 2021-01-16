<!doctype html>
<html lang="pt-BR">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="fonts/icomoon/style.css">

    <link rel="stylesheet" href="css/owl.carousel.min.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    
    <!-- Style -->
    <link rel="stylesheet" href="css/style.css">

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

    <title>Clube Do Boné</title>
  </head>
  <body>
  

  
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
            </div>  
              <div class="form-group first">
                <label for="username">CEP</label>
                <input type="text" class="form-control" id="cep">

              </div>
              <div class="last mb-4">
                <input type="radio" name="unidade" value="10" id="10" >
                <label for="10" style="font-size: 14px; margin-bottom: 0; color: #b3b3b3;">10 Peças</label>
                
                <input type="radio" name="unidade" value="20" id="20" style="margin-left: 4em;">
                <label for="20" style="font-size: 14px; margin-bottom: 0; color: #b3b3b3;">20 Peças</label><br>
                
                <input type="radio" name="unidade" value="30" id="30">
                <label for="30" style="font-size: 14px; margin-bottom: 0; color: #b3b3b3;">30 Peças</label>
                
                <input type="radio" name="unidade" value="50" id="50" style="margin-left: 4em; margin-top: 2em;">
                <label for="50" style="font-size: 14px; margin-bottom: 0; color: #b3b3b3;">50 Peças</label>
                
              </div>
              
              <div class="d-flex mb-5 align-items-center">
              </div>

              <input type="submit" onclick="calcular()" value="Calcular" class="btn text-white btn-block btn-primary">

            </div>
          </div>
          
        </div>

        <div class="col-md-6 order-md-2">
          <table id="tableComplete" class="table table-bordered table-striped" hidden>
            <thead>
              <tr>
                <th>Transportadora</th>
                <th>Tipo de envio</th>
                <th>Preço</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="myTable">
             
            </tbody>
          </table>
        </div>       
      </div>
    </div>
  </div>

    <footer style="text-align: center;">
      <p> Calculadora de fretes da Clube do Boné <br>
      Desenvolvido e mantido por <a href="https://api.whatsapp.com/send?phone=5587988754442&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site/sistema">Matheus Souza</a></p>
    </footer>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/select.js"></script>


    <script>
      $(document).ready(function() {
          $('#cep').mask('00000-000');
      });
  </script>

  </body>
</html>
