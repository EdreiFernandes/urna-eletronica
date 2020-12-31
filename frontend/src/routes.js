import Home from '@/pages/Home.vue';
import Cadastro from '@/pages/Cadastro.vue';
import Votar from '@/pages/Votar.vue';
import Resultado from '@/pages/Resultado.vue';

export default [
    {
        path: '/',
        name: 'Home', 
        component: Home
    },
    {
        path: '/Cadastro',
        name: 'Cadastro', 
        component: Cadastro
    },
    {
        path: '/Votar',
        name: 'Votar', 
        component: Votar
    },
    {
        path: '/Resultado',
        name: 'Resultado', 
        component: Resultado
    },
]