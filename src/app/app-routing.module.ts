import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './pages/buscador/buscador.component';

const routes: Routes = [{path:'', component: BuscadorComponent},
                        {
                          path:'tabela',
                          loadChildren: ()=>import('./pages/tabela/tabela.module').then((m) => m.TabelaModule)  
                        }                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
