<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('Primeiros Passos')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <PrimeirosPassosCard></PrimeirosPassosCard>
  </div>
</template>

<script>
import PrimeirosPassosCard from "../../../containers/ui/PrimeirosPassosCard";

export default {
  components: {
    "PrimeirosPassosCard": PrimeirosPassosCard,

  }
};
</script>
