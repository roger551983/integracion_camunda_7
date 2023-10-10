import { createRouter, createWebHashHistory } from 'vue-router'

import FormularioRegistro from "./views/FormularioRegistro.vue";


const routes = [
  
  {
    path: '/',
    name: 'Registro',
    component:FormularioRegistro
  
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router


