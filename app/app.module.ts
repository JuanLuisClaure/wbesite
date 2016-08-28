import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { rutasDeVistas } from './app.routing';

//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR Y SERVIDOR PRINCIPALES]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//aca viene el contenedor dentro de body en index.html y su componente que actuar
//como servidor a las diferentes rutas
//=================================================================================

import { contenedorApp }  from './pages/contenedor/app.contenedor';
import { componenteApp }  from './pages/contenedor/servidor/app.componente';
//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR LOGIN Y COMPONENTEN]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//ordenadamente se importan contenedor con componenetes en el mismo sector
//=================================================================================

import { contenedorLogin }  from './pages/login/login.contenedor';
import { componenteFormularioDeLogin }  from './pages/login/formulario/formulario.componente';
//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR LOGIN Y COMPONENTEN]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//ordenadamente se importan contenedor con componenetes en el mismo sector
//=================================================================================

import { contenedorPresupuesto } from './pages/presupuesto/presupuesto.contenedor';

//=================================================================================

//[[[[[[[[[[[[[[[[[[[CONTENEDOR CALCULADORA Y COMPONENTEN]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//ordenadamente se importan contenedor con componenetes en el mismo sector
//=================================================================================

import { contenedorCalculadora } from './pages/calculadora/calculadora.contenedor';






@NgModule({
  imports:      [ BrowserModule, rutasDeVistas ],
  declarations: [
                  contenedorApp,
                  componenteApp,

                  contenedorLogin,
                  componenteFormularioDeLogin,

                  contenedorPresupuesto,
                  contenedorCalculadora


                ],
  bootstrap:    [ contenedorApp ]
})


export class AppModule { }
