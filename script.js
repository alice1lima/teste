
(código HTML existente) 

<footer>
 <p>&copy; 2023 Minha Loja</p>
</footer>

        // Obtendo referência para os botões de "Adicionar ao Carrinho"
        const addToCartButtons = document.querySelectorAll('.product button');

        // Adicionando um ouvinte de evento de clique para cada botão
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Ação quando o botão é clicado (exemplo: apenas um log)
                console.log('Produto adicionado ao carrinho!');
                // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
            });
        });
 
