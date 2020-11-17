<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('Fale Conosco')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xs="12" md="12" class="mb-4">
        <bootstrap-basic></bootstrap-basic>
      </b-colxx>
    </b-row>

  </div>
</template>

<script>
import FaleConosco from "../../../containers/formularios/FaleConosco";
export default {
  components: {
    "bootstrap-basic": FaleConosco,
  }
};
</script>
