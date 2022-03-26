//Valida Formulario

(function() { /* função autoinvocada */

    'use strict' /* ver se tem um js valido */
    
    var forms = document.querySelectorAll('.needs-validation'); /* Seleciona todos os inputs com essas classes */ 
    
    Array.prototype.slice.call(forms) 
        .forEach(function (form) {
    
            form.addEventListener('submit', function (event) { /*Adiciona um evento com o botão submit */
                if(!form.checkValidity()) {
                    event.preventDefault(); /* Não deixa o formulário ser enviado para o servidor */
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })()
   
    // Botão carrinho

    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    return new bootstrap.Offcanvas(offcanvasEl)
})