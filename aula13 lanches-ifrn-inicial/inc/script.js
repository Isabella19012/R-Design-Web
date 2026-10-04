const {createApp, ref, watch} = Vue
// watch -> // o métado watch foi acionado para ser usado com localstorage
const lancheifrn = createApp({
    setup(){
        const frutasifrnLS=localStorage.getItem('frutas');
        const lacnheifrnLS=localStorage.getItem('lanches');
        //criou uma variável que representa a TABELA do banco de dados do navegador da nossa aplicação

            const frutas = ref(

                frutasifrnLS ? JSON.parse(frutasifrnLS):
                [       
                    {
                        descricao : 'Abacaxi',
                        ativo:true,
                        imagem :'bolo.jpg'
                    },
                    {
                        descricao : "Melância",
                        ativo : false,
                        imagem : 'bolacha.jpg'
                    },
                    {
                        descricao : "Manga",
                        ativo : false,
                        imagem : 'tapioca.jpg'
                    }
                ])

            const lanches = ref( 
            lacnheifrnLS ? JSON.parse(lacnheifrnLS):
            //condição ? se SIM : se NAO    
            [
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

        watch(lanches, () => {
            localStorage.setItem('lanches', JSON.stringify(lanches.value))
        }, {deep: true, immediate: true})

        watch(frutas, () => {
            localStorage.setItem('frutas', JSON.stringify(frutas.value))
        }, {deep: true, immediate: true})
        //função de watch - observa a lista: qualquer alteração é feita também lá no localstorage
        // stringify essse método é usado porque o localstorage recebem string, ele converte objeto para string
        //deep ; true - profundo... significa que observa até os valores das propriedades do objeto
        // se houver alteração no valor, por exemplo do 'ativo', este é atualizado lo ls(localstorage)
        //immediate: true - coloca os valores, objetos, na tabela do ls imediatamente ao abrir a aplicação

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
            })
        }
        function novaFruta(){
            frutas.value.push({
                descricao: novafrutaInput.value,
                ativo:false,
                imagem : 'bolo.jpg'                
            })}

        function excluirlanche(index){
                lanches.value.splice(index, 1)}

        function excluirFruta(index){
                frutas.value.splice(index, 1)}
        
       const novoLancheInput = ref(''); 
       const novafrutaInput = ref(''); 

        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches,
            mudarAtivo,
            novoLancheInput,
            novolanche,
            excluirlanche,
            novafrutaInput,
            excluirFruta,
            frutas,
            novaFruta
        } 
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');

/*
PARA DEFINIR O LOCALSTORAGE:
LOCAL STORAGE é um banco de dados que fica dentro do navegador

passo 1 - colocar o watch na criação do Vue
passo 2 - definir a variável de tabela do banco de dados - o nome da tabela criada "lanche"
passo 3 - condicional para a criação da tabela
passo 4 - observar (watch - assistir)
    atualiza a lista na tabela do local storage assim que a mesma é alterada
    isto é, mudou a propriedade 'ativo', estão observa e altera tabmbém lá na tabela,
     ela adicionou um novo objeto, e altera na tabela do local storage.
*/


/*
ATIVIDADE:

- criar uma lista para frutas
- adicionar frutas no adm
- excluir lanches - usar a função pop()
- excluir frutas
- editar lanche
    - vou: colocar descrição lã no formulário
    - reaproveitar a função novolanche

*/