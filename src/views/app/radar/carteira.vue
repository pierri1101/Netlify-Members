<template>
<b-row>
    <b-colxx xxs="12">
        <h1>Carteira de Ações</h1>
        <piaf-breadcrumb />
        <b-tabs nav-class="separator-tabs ml-0 mb-5" content-class="tab-content" :no-fade="true">
            <b-tab :title="$t('')">
                <b-row>
                    <b-colxx xxs="12" lg="4" class="mb-4 col-left">
                        <b-card no-body class="mb-4">
                            <single-lightbox thumb="https://danilozanini.com.br/wp-content/uploads/2020/06/IMAGENS-LP-COMUNIDADE.png" large="/assets/img/profiles/1.jpg" class-name="card-img-top" />
                            <b-card-body>
                                <p class="mb-3">
                                    I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS,
                                    and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless
                                    information through a few hundred RSS feeds. I build websites that delight and inform. I do it
                                    well.
                                </p>
                                <p class="text-muted text-small mb-2">{{$t('Localização')}}</p>
                                <p class="mb-3">São Paulo, SP</p>
                                <p class="text-muted text-small mb-2">{{$t('Especialidades')}}</p>
                                <p class="mb-3">
                                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>RENDA VARIÁVEL</b-badge>
                                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>AÇÕES</b-badge>
                                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>DIVIDENDOS</b-badge>
                                </p>
                                <p class="text-muted text-small mb-2">{{$t('Contato')}}</p>
                                <div class="social-icons">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-facebook"></i></router-link>
                                        </li>
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-instagram"></i></router-link>
                                        </li>
                                    </ul>
                                </div>
                            </b-card-body>
                        </b-card>

                    </b-colxx>

                    <b-colxx xxs="12" lg="8" class="mb-5 col-right">
                        <b-row>
                            <b-colxx v-for="(product,productIndex) in produtcs" xxs="12" lg="6" xl="3" class="mb-4" :key="`product_${productIndex}`">
                                <b-card no-body>
                                    <div class="position-relative">
                                        <router-link to="#" class="w-200 w-sm-100">
                                            <b-card-img top :alt="product.title" :src="product.img" />
                                        </router-link>
                                    </div>
                                    <b-card-body>
                                        <router-link to="#" class="w-40 w-sm-100">
                                            <b-card-sub-title>{{product.title}}</b-card-sub-title>
                                        </router-link>
                                        <b-card-text class="text-muted text-small mb-0 font-weight-light">
                                            {{product.createDate}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-card>
                            </b-colxx>
                            <b-colxx v-for="(product,productIndex) in produtcs" xxs="12" lg="8" xl="3" class="mb-4" :key="`product_${productIndex}`">
                                <b-card no-body>
                                    <div class="position-relative">
                                        <router-link to="#" class="w-200 w-sm-100">
                                            <b-card-img top :alt="product.title" :src="product.img" />
                                        </router-link>
                                    </div>
                                    <b-card-body>
                                        <router-link to="#" class="w-40 w-sm-100">
                                            <b-card-sub-title>{{product.title}}</b-card-sub-title>
                                        </router-link>
                                        <b-card-text class="text-muted text-small mb-0 font-weight-light">
                                            {{product.createDate}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-card>
                            </b-colxx>
                        </b-row>
                    </b-colxx>
                </b-row>
            </b-tab>
        </b-tabs>

  <b-row>
                    <b-colxx xxs="8" lg="8" class="mb-4 col-center">
                        <b-card no-body class="mb-4">
                            <single-lightbox thumb="https://danilozanini.com.br/wp-content/uploads/2020/06/IMAGENS-LP-COMUNIDADE.png" large="/assets/img/profiles/1.jpg" class-name="card-img-top" />
                            <b-card-body>
                                <p class="mb-4">
                                    I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS,
                                    and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless
                                    information through a few hundred RSS feeds. I build websites that delight and inform. I do it
                                    well.
                                </p>
                                <p class="text-muted text-small mb-2">{{$t('Localização')}}</p>
                                <p class="mb-3">São Paulo, SP</p>
                                <p class="text-muted text-small mb-2">{{$t('Especialidades')}}</p>
                                <p class="mb-3">
                                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>RENDA VARIÁVEL</b-badge>
                                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>AÇÕES</b-badge>
                                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>DIVIDENDOS</b-badge>
                                </p>
                                <p class="text-muted text-small mb-2">{{$t('Contato')}}</p>
                                <div class="social-icons">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-facebook"></i></router-link>
                                        </li>
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-instagram"></i></router-link>
                                        </li>
                                    </ul>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-colxx>
                </b-row>


    </b-colxx>
</b-row>
</template>

<script>
import SingleLightbox from '../../../containers/pages/SingleLightbox';
import RecentPost from '../../../components/Common/RecentPost';
import UserCardBasic from "../../../components/Cards/UserCardBasic";

import produtcs from '../../../data/products'
import recentPosts from "../../../data/recentPosts";
import followers from "../../../data/follow";

export default {
    components: {
        'single-lightbox': SingleLightbox,
        'recent-post': RecentPost,
        'user-card-basic': UserCardBasic,
    },
    data() {
        return {
            produtcs: produtcs.slice(0, 5),
            recentPosts,
            followers
        }
    },
    methods: {},
    mounted() {

    }
}
</script>
