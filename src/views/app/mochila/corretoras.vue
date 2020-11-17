<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('Corretora de Valores')" />
            <div class="separator mb-4"></div>
            <b-colxx xxs="12" class="mb-5">
            </b-colxx>
        </b-colxx>
        <b-colxx v-for="(corretorasItem,corretorasIndex) in corretoras" xxs="12" lg="6" class="mb-4" :key="`corretorasItem_${corretorasIndex}`">
            <b-card class="flex-row listing-card-container" no-body>
                <div class="w-40 position-relative">
                        <img class="card-img-left" :src="corretorasItem.thumb" alt="Card cap" />
                        <b-badge v-if="corretorasItem.badge" variant="primary" pill class="position-absolute badge-top-left">{{corretorasItem.badge}}</b-badge>
                </div>
                <div class="w-60 d-flex align-items-center">
                    <b-card-body>
                        <h5 class="mb-3 listing-heading" v-line-clamp="2">{{ corretorasItem.titulo }}</h5>
                        <p class="listing-desc text-muted" v-line-clamp="3">{{ corretorasItem.descricao }}</p>
                    </b-card-body>
                </div>
            </b-card>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import SingleLightbox from "../../../containers/pages/SingleLightbox";
import {
    corretoras
} from "../../../data/corretoras";

export default {
    components: {
    "single-lightbox": SingleLightbox,
    },
    data() {
        return {
            corretoras,
            currentPage: 1
        };
    },
};
</script>
