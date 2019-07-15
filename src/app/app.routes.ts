import {Routes, RouterModule} from '@angular/router';
import { TemplateComponent } from './componentes/template/template.component';
import { ClienteComponent } from './componentes/ventas/cliente/cliente.component';

const APP_ROUTES: Routes = [
    {
    path: 'home',
    component: TemplateComponent,
    children: [
        {
            path: 'Clientes',
            component: ClienteComponent
        },
    ]
    },
    
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});

