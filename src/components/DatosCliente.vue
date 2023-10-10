<template>

   <div class="container mt-5">  
   <form>  

      <fieldset>
        <legend> Datos del Cliente</legend>
      <div class="row mb-3">
        <label for="ClienteBusqueda" class="col-sm-2 col-form-label" >Nombre Cliente</label>
       <div class="col-sm-10">
        <input type="text" class="form-control" id="ClienteBusqueda" placeholder="Ingresar nombre cliente">

      </div> 

    </div>

    <br>     

      <div class="row mb-3">
        <label for="NombreCliente" class="col-sm-2 col-form-label" >Nombres Cliente</label>
       <div class="col-sm-10">
        <input type="text" class="form-control" id="NombreCliente" disabled>

      </div>

    </div>

    <div class="row mb-3">
        <label for="ApellidoCliente" class="col-sm-2 col-form-label" >Apellidos Cliente</label>
       <div class="col-sm-10">
        <input type="text" class="form-control" id="ApellidoCliente" disabled>

      </div>

    </div>
    
    <div class="row mb-3">
        <label for="EmailCliente" class="col-sm-2 col-form-label" >Email Cliente</label>
       <div class="col-sm-10">
        <input type="text" class="form-control" id="EmailCliente" disabled>

      </div>

    </div>
    

    <div class="row mb-3">
        <label for="TelefonoCliente" class="col-sm-2 col-form-label" >Telefono Cliente</label>
       <div class="col-sm-10">
        <input type="text" class="form-control" id="TelefonoCliente" disabled>

      </div>

    </div>

     </fieldset>


    <fieldset>
      
      <legend> Informacion del ticket</legend>

        
       <div class="row mb-3">
        <label for="FechaCaso" class="col-sm-2 col-form-label" >Fecha Caso</label>
       <div class="col-sm-10">
        <input type="text" class="form-control" id="FechaCaso" disabled  placeholder="10/10/2023">

      </div>

    </div>

    <div class="row mb-3">
        <label for="EstadoTicket" class="col-sm-2 col-form-label" >Estado ticket</label>
       <div class="col-sm-10">
        <input type="text" class="form-control" id="EstadoTicket" placeholder="Ingresar estado ticket">

      </div>

    </div>

    <div class="row mb-3">
        <label for="SLA" class="col-sm-2 col-form-label" >SLA</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="SLA" placeholder="Ingresar SLA">

      </div>
    </div>  


    <div class="row mb-3">
        <label for="Tema" class="col-sm-2 col-form-label" >Tema</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="Tema" placeholder="Ingresar tema">

      </div>
    </div>  
    

     <div class="row mb-3">
        <label for="Descripcion" class="col-sm-2 col-form-label" >Descripcion</label>
          <div class="col-sm-10">
            <textarea class="form-control" rows="5" id="Descripcion" name="Descripcion"></textarea>
         </div> 
    </div>

    <div class="row mb-3">

      <label for="Categoria" class="col-sm-2 col-form-label" >Categoria</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="Categoria">  
    </div>

    </div>  


    <div class="row mb-3">

      <label for="Prioridad" class="col-sm-2 col-form-label" >Prioridad</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="Prioridad" >  
    </div>

    </div> 

    
    <div class="row mb-3">
          <label for="Archivo" class="col-sm-2 col-form-label" >Adjuntar archivo</label>
            <div class="col-sm-10"> 
              <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
   </div>   

   

    </fieldset>  
    <br>  
    <button type="button" class="btn btn-info">Guardar</button>



    

   </form> 
   </div>
  </template>    


  <script>  
   export default {
   name: 'FormularioRegistroCliente',
   
   
   } 





 </script> 	