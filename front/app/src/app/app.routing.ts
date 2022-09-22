import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { LoginComponent } from "componentes/login/login.component";


const app_rotas: Routes = [
    {path: 'Login', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(app_rotas);

declare module "@angular/core" {

    interface ModuleWithProviders<T = any>{
        ngModules: Type<T>,
        providers?: Provider[]
    }
}