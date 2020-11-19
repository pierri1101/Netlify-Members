<template>
  <div id="root">
    <div class="fixed-background">
      <main>
        <div class="container">
          <b-row class="h-100">
            <b-colxx xxs="12" md="10" class="mx-auto my-auto">
              <b-card class="auth-card" no-body>
                <div class="form-side"><center>
                  <router-link tag="a" to="/">
                  <img src="https://danilozanini.com.br/wp-content/uploads/2020/10/logo-danilo-zanini.png" alt="logo-danilo-zanini">
                  </router-link>
                  <h6 class="mb-4">{{ $t("Ops, ocorreu um erro!") }}</h6>
                  <p class="mb-0 text-muted text-small mb-0">{{ $t("Página não encontrada") }}</p>
                  <p class="display-1 font-weight-bold mb-5">404</p>
                  <b-button
                    type="submit"
                    variant="primary"
                    size="lg"
                    class="btn-shadow"
                    @click="goBack"
                  >{{ $t("VOLTAR PARA PAINEL") }}</b-button></center>
                </div>
              </b-card>
            </b-colxx>
          </b-row>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { adminRoot } from '../constants/config';
export default {
  methods: {
    goBack() {
      this.$router.push(adminRoot);
    },
  },
  mounted: function () {
    document.body.classList.add("background");
  },
  beforeDestroy() {
    document.body.classList.remove("background");
  },
};
</script>
