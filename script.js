function pesquisar() {
    // declarando as variaveis
    var input, filter, ul, li, a, i, txtValor;

    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName('li');
   
  
    //Percorre todos os itens da lista e oculte aqueles que não correspondem à consulta de pesquisa
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValor = a.textContent || a.innerText;
      if (txtValor.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else{
        li[i].style.display = "none";
       
      }
    }
  }




function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }