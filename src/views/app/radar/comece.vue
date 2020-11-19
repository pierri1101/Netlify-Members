<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('Comece por Aqui')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>

    <b-row>
        <b-colxx xxs="12" md="12" xl="8" class="col-left">
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <div class="mb-5">
                        <h5 class="card-title">O que é o Radar Técnico?</h5>
                        <p>
                          O Radar Técnico é uma assinatura online que você vai receber alertas com recomendações de compra e venda de ações com potenciais retornos no curto prazo.</p>
                    </div>
                    <div class="mb-5">
                        <h5 class="card-title">A sua assinatura é dividida em 2 etapas.</h5>
                        <h6 class="card-title">1º Telegram</h6>
                        <p>
                          Aqui você terá acesso à alertas de compra e venda de ações com todos os detalhes para iniciar a operação.
                          <br>
                          Além de receber as recomendações, você receberáinformações pontuais importantes sobre Bolsa de Valores.
                        </p><br>
                        <h6 class="card-title">2º Telegram</h6>
                        <p>
                          Neste espaço você terá acesso a conteúdos exclusivos como aulas gravadas, estudos específicos, tudo que
                          <br>
                          você precisa para compreender as movimentações da bolsa e aprender sobre as estratégias de curto prazo.
                        </p>
                    </div>

                    <div>
    <b-row>
        <b-colxx xxs="12">
            <div class="separator mb-5"></div>
        </b-colxx>
        <b-colxx xxs="12" class="mb-4">
            <b-card no-body class="d-flex mb-3" v-for="(item,index) in faqData" :key="`faq_${index}`">
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

        <b-colxx xxs="12" md="12" xl="4" class="col-left">
            <b-card class="mb-4" no-body>
                <b-card-body class="p-0">
                        <video-player class-name="video-js side-bar-video card-img-top"
                        :autoplay="false" :controls="true"
                        :controlBar="{pictureInPictureToggle: false}"
                        poster="/assets/img/video/poster.jpg"
                        :sources="[{ src: 'https://vimeo.com/362754811', type: 'video/mp4'}]" />
                </b-card-body>
            </b-card>
                        <b-card class="mb-4" no-body>
                <b-card-body>
                    <b-card-title>{{$t('Ferramentas Essenciais')}} </b-card-title>
                    <div v-for="(categoryItem,cIndex) in blogCategories" :key="`category_${cIndex}`" class="d-flex flex-row align-items-center mb-3">
                        <router-link :to="categoryItem.link">
                            <i :class="`large-icon initial-height ${categoryItem.icon}`"></i>
                        </router-link>
                        <div class="pl-3 pt-2 pr-2 pb-2">
                            <router-link :to="categoryItem.link">
                                <p class="list-item-heading mb-1">{{categoryItem.title}}</p>
                            </router-link>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <b-card-title>{{$t('Primeiros Passos')}} </b-card-title>
                    <div class="remove-last-border remove-last-margin remove-last-padding">
                        <recent-post v-for="(post,postIndex) in recentPosts" :data="post" :key="`recent_post_${postIndex}`" />
                    </div>
                </b-card-body>
            </b-card>
            <b-card class="mb-4" no-body>
            </b-card>
        </b-colxx>
    </b-row>
</div>

</template>

<script>

import faqData from "../../../data/faq"
import SingleLightbox from "../../../containers/pages/SingleLightbox";
import VideoPlayer from "../../../components/Common/VideoPlayer";
import RecentPost from "../../../components/Common/RecentPost";
import recentPosts from '../../../data/recentPosts';
import {
    blogData,
    blogCategories
} from "../../../data/blog"


export default {
    components: {
        "single-lightbox": SingleLightbox,
        "video-player":VideoPlayer,
        "recent-post": recentPosts,
    },
    data() {
        return {
            recentPosts: blogData.slice(5),
            blogCategories,
            faqData
        };
    },
    methods: {},
    mounted() {}
};
</script>
