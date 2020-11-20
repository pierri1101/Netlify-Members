<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('Conteúdo Radar Técnico') }}</h5>
      <b-row class="icon-cards-row mb-3">
        <b-colxx xxs="6" sm="4" md="3" lg="3">
          <icon-card :title="$t('Primeiros Passos')" icon="iconsminds-user" />
        </b-colxx>
        <b-colxx xxs="6" sm="4" md="3" lg="3">
          <icon-card
            :title="$t('Nivelamento')"
            icon="iconsminds-optimization"
          />
        </b-colxx>
        <b-colxx xxs="6" sm="4" md="3" lg="3">
          <icon-card
            :title="$t('Análises Semanais')"
            icon="iconsminds-mail-read"
          />
        </b-colxx>
        <b-colxx xxs="6" sm="4" md="3" lg="3">
          <icon-card
            :title="$t('Aulas Módulo Bônus')"
            icon="iconsminds-power"
          />
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
</template>
<script>
import IconCard from '../../components/Cards/IconCard'

export default {
    components: {
        'icon-card': IconCard
    }
}
</script>
