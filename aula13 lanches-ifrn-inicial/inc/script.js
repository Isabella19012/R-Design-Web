const {createApp, ref} = Vue

const lancheifrn = createApp({
    setup(){

            const lanches = ref( [
            // lista de objetos
            {
                descricao : 'Bolo',
                ativo:true,
                imagem :'bolo.jpg'
            },
            {
                descricao : "Bolacha",
                ativo : false,
                imagem : 'bolacha.jpg'
            },
            {
                descricao : "Tapioca",
                ativo : false,
                imagem : 'tapioca.jpg'
            }
        ])
        function mudarAtivo(item){
            lanches.value.forEach(lanche => {
                lanche.ativo = false
            }) // colocando false em todos o resto
            item.ativo = !item.ativo
        }
        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
        
        function novolanche(){
            //console.log('Entrou na função ' +novoLancheInput.value)
            lanches.value.push({
                descricao: novoLancheInput.value,
                ativo:false,
                imagem : 'bolo.jpg'                
            }

            )
            
        }
        
       const novoLancheInput = ref(''); 

        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches,
            mudarAtivo,
            novoLancheInput,
            novolanche
        }
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');
