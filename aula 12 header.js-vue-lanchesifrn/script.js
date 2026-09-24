const {createApp, ref} = Vue;
         //Criação do objeto vue e chamada dos métodos

        const lanches = ['Pão com queijo', "Tapioca", "Cuscuz com ovo", "Bolo", "Bolacha"];
        //variavel de lista
        const app = createApp({
            //crio uma nova aplicação de vue
            setup(){
                //onde se declara dados e funções
                return{
                    mensagem : ref("Olá, Mundoooo!!"),
                    lanches
                    //variavel reativa do Vue(No lugar de usar getElementyById... )
                }
            }
        })
        app.component('app-header', AppHeader);
        app.component('app-footer', AppFooter);
        app.mount('#app');
        //aqui a aplicação é incluoda na marcação que tem id "app"