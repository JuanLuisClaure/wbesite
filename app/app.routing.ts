import { Routes, RouterModule } from '@angular/router';



import { componenteApp } from './pages/contenedor/servidor/app.componente';




import { contenedorLogin }  from './pages/login/login.contenedor';
import { contenedorPresupuesto } from './pages/presupuesto/presupuesto.contenedor';
import { contenedorCalculadora } from './pages/calculadora/calculadora.contenedor';


const appRoutes: Routes = [


  {
    path: '',
    component: componenteApp
  },


  {
    path: 'home',
    component: componenteApp
  },
  {
    path: 'login',
    component: contenedorLogin
  },



  {
    path: 'calculadora',
    component: contenedorCalculadora
  },
  {
    path: 'presupuesto',
    component: contenedorPresupuesto
  },





];






export const rutasDeVistas = RouterModule.forRoot(appRoutes);
