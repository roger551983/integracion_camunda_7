<template>

    <TituloFormularioRegistro titulo="Registrar Incidencia" />
    <FormularioRegistroCliente />

</template>


<script>

import TituloFormularioRegistro  from '../components/TituloFormularioRegistro.vue' 
import FormularioRegistroCliente from '../components/DatosCliente.vue'


export default {
  name: 'App',
  components: {
    
    TituloFormularioRegistro,
    FormularioRegistroCliente

  }
}
</script>

