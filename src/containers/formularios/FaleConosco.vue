<template>
<b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
                <b-form-group :label="$t('E-mail')">
                    <b-form-input type="text" placeholder="Digite o seu e-mail" v-model.trim="$v.name.$model" :state="!$v.name.$error" />
                    <b-form-invalid-feedback>E-mail é obrigratório</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Assunto">
                    <b-form-select v-model.trim="$v.select.$model" :state="!$v.select.$error" :options="selectOptions" plain />
                    <b-form-invalid-feedback>Selecione um assunto</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Mensagem">
                    <b-textarea v-model.trim="$v.mensagem.$model" :state="!$v.mensagem.$error"></b-textarea>
                    <b-form-invalid-feedback>Por favor, detalhe o máximo possível 😀</b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-4" >{{ $t('ENVIAR') }}</b-button>
            </b-form>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import {
    validationMixin
} from "vuelidate";
const {
    required
} = require("vuelidate/lib/validators");
export default {
    data() {
        return {
            selectOptions: [
                "",
                "Sobre o Radar Técnico",
                "Sobre a Comunidade de Traders 2.0",
                "Outro Assunto",
                "Sugestão"
            ],
            name: "",
            select: "",
            mensagem: "",
        };
    },
    mixins: [validationMixin],
    validations: {
        name: {
            required
        },
        select: {
            required
        },
        mensagem: {
            required
        }
    },
    methods: {
        onValitadeFormSubmit() {
            this.$v.$touch();
            console.log(
                JSON.stringify({
                    name: this.name,
                    select: this.select,
                    mensagem: this.detail,
                })
            );
        }
    }
};
</script>
