import logo from '../../assets/logo.png'

import tomato from '../../assets/frutas/Tomate.png';
import broccoli from '../../assets/frutas/Brócolis.png';
import potato from '../../assets/frutas/Batata.png';
import cucumber from '../../assets/frutas/Pepino.png';
import pumpkin from '../../assets/frutas/Abóbora.png';

const basket = {
    top: {
        title: 'Detalhe da cesta'
    },
    details: {
        name: 'Cesta de Verduras',
        farm: 'Jenny Jack Form',
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
        logoFarm: logo,
        budget: 'R$ 40,00',
        button: 'Comprar'
    },
    itens: {
        title: 'Carrinho',
        list: [
            {
                name: 'Tomate',
                image: tomato
            },
            {
                name: 'Brócolis',
                image: broccoli
            },
            {
                name: 'Batata',
                image: potato
            },
            {
                name: 'Pepino',
                image: cucumber
            },
            {
                name: 'Abóbora',
                image: pumpkin
            }
        ]
    }
}
export default basket;