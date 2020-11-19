<template>
  <div>
    <h3> BASIC CRUD </h3>

  <div class= "product-test">
    <div class="form-group">
      <input type="text" placeholder="Digite o nome do Produto" v-model="name" class="form-control">
  </div>

  <div class="form-group">
    <input type="text" placeholder="Digite o nome o Preço" v-model="price" class="form-control">
  </div>

  <div class="form-group">
    <button @click="saveData" class="btn btn-primary"> Salvar Dados</button>
  </div>

</div>
</div>
</template>
