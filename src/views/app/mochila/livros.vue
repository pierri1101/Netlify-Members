<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('Livros Sugeridos')" />
            <div class="separator mb-4"></div>
            <b-colxx xxs="12" class="mb-5">
            </b-colxx>
        </b-colxx>
        <b-colxx v-for="(livrosItem,livrosIndex) in livros" xxs="12" lg="6" class="mb-4" :key="`livrosItem_${livrosIndex}`">
            <b-card class="flex-row listing-card-container" no-body>
                <div class="w-40 position-relative">
                        <img class="card-img-left" :src="livrosItem.thumb" alt="Card cap" />
                        <b-badge v-if="livrosItem.badge" variant="primary" pill class="position-absolute badge-top-left">{{livrosItem.badge}}</b-badge>
                </div>
                <div class="w-60 d-flex align-items-center">
                    <b-card-body>
                        <h5 class="mb-3 listing-heading" v-line-clamp="2">{{ livrosItem.titulo }}</h5>
                        <p class="listing-desc text-muted" v-line-clamp="3">{{ livrosItem.descricao }}</p>
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
    livros
} from "../../../data/livros";

export default {
    components: {
    "single-lightbox": SingleLightbox,
    },
    data() {
        return {
            livros,
            currentPage: 1
        };
    },
};
</script>
