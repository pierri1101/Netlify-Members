<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('Plantão de Dúvidas')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>

    <b-row>
        <b-colxx xxs="12" md="12" xl="12" class="col-center">
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <div>
    <b-row>
        <b-colxx xxs="12">
        </b-colxx>
        <b-colxx xxs="12" class="mb-8">
            <b-card no-body class="d-flex mb-3" v-for="(item,index) in faqRadar" :key="`faq_${index}`">
                <div class="d-flex flex-grow-1 min-width-zero" role="tab">
                    <b-button href="#" class="card-body  btn-empty btn-link list-item-heading text-left text-one" v-b-toggle="`faq_${index}`" variant="link">{{item.question}}</b-button>
                </div>
                <b-collapse :id="`faq_${index}`" :visible="index===0" accordion="faq-accordion" role="tabpanel">
                    <div class="card-body accordion-content pt-0" v-html="item.answer" />
                </b-collapse>
            </b-card>
        </b-colxx>
    </b-row>
</div>
                </b-card-body>
            </b-card>
        </b-colxx>
    </b-row>
</div>

</template>

<script>

import faqRadar from "../../../data/duvidas-radar"


export default {
    data() {
        return {
            faqRadar
        };
    },
    methods: {},
    mounted() {}
};
</script>
