<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('Planilhas Gerenciais')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row class="equal-height-container">
        <b-colxx md="12" xl="6" class="mb-4 col-item" v-for="(item,index) in planilhas" :key="`planilhas_${index}`">
            <b-card>
                <div class="text-center">
                    <i :class="`${item.icon} large-icon`"></i>
                    <h5 class="mb-0 font-weight-semibold color-theme-1 mb-4">{{item.title}}</h5>
                </div>
                <div class="pl-3 pr-3 pt-0 pb-0 d-flex flex-column flex-grow-1">
                   <center><p class="text-muted mb-4">{{item.detail}}</p></center>
                    <ul class="list-unstyled mb-0">
                    <center>
                        <li v-for="(subitem,subIndex) in item.subtitles" :key="`planilhasSub_${subIndex}`">
                            <a v-bind:href ="' '"  class="btn-link">{{subitem.title}}</a>
                        </li>
                    </center>
                    </ul>
                </div>
            </b-card>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import planilhas from "../../../data/planilhas"

export default {
    data() {
        return {
            planilhas
        }
    }
}
</script>
