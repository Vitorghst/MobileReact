import {createAppContainer, createSwitchNavigator} from 'react-navigation'
 import Login from './pages/login';
 import Index from  './pages/index';
 import Usuario from  './pages/usuario';
 import Register from  './pages/register';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Index,
        Usuario,
        Register
    })
);

export default Routes;