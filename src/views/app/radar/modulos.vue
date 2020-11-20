<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('Módulos & Aulas')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <icon-cards></icon-cards>
    <image-cards></image-cards>
    <br><br>
    <modulos-aulas></modulos-aulas>
  </div>
</template>

<script>
import IconCards from "../../../containers/ui/IconCards";
import ImageCards from "../../../containers/ui/ImageCards";
import ModulosAulas from "../../../containers/ui/ModulosAulas";

export default {
  components: {
    "icon-cards": IconCards,
    "image-cards": ImageCards,
    "modulos-aulas": ModulosAulas,
  }
};
</script>
