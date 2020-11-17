<template>
<b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
        <b-card class="auth-card" no-body>
            <div class="form-side">
                <router-link tag="a" to="/">
                    <center><img src="https://danilozanini.com.br/wp-content/uploads/2020/10/logo-danilo-zanini.png" alt="logo-danilo-zanini"></center>
                </router-link>
                <h6 class="mb-4">{{ $t('Para recuperar a sua senha, digite o seu e-mail no campo abaixo.')}}</h6>
                <b-form @submit.prevent="formSubmit" class="av-tooltip tooltip-label-bottom">
                    <b-form-group :label="$t('user.email')" class="has-float-label mb-4">
                        <b-form-input type="text" v-model="$v.form.email.$model" :state="!$v.form.email.$error" />
                        <b-form-invalid-feedback v-if="!$v.form.email.required">Digite um e-mail</b-form-invalid-feedback>
                        <b-form-invalid-feedback v-else-if="!$v.form.email.email">Digite um e-mail válido</b-form-invalid-feedback>
                    </b-form-group>
                    <div class="d-flex justify-content-between align-items-center">
                        <router-link tag="a" to="/user/login">{{ $t('Página de Login')}}</router-link>
                        <b-button type="submit" variant="primary" size="lg" :disabled="processing" :class="{'btn-multiple-state btn-shadow': true,
                    'show-spinner': processing,
                    'show-success': !processing && loginError===false,
                    'show-fail': !processing && loginError }">
                            <span class="spinner d-inline-block">
                                <span class="bounce1"></span>
                                <span class="bounce2"></span>
                                <span class="bounce3"></span>
                            </span>
                            <span class="icon success">
                                <i class="simple-icon-check"></i>
                            </span>
                            <span class="icon fail">
                                <i class="simple-icon-exclamation"></i>
                            </span>
                            <span class="label">{{ $t('RECUPERAR SENHA') }}</span>
                        </b-button>
                    </div>
                </b-form>
            </div>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
import {
    validationMixin
} from "vuelidate";
const {
    required,
    maxLength,
    minLength,
    email
} = require("vuelidate/lib/validators");

export default {
    data() {
        return {
            form: {
                email: "Digite o seu e-mail"
            }
        };
    },
    mixins: [validationMixin],
    validations: {
        form: {
            email: {
                required,
                email,
                minLength: minLength(4)
            }
        }
    },
    computed: {
        ...mapGetters(["processing", "loginError", "forgotMailSuccess"])
    },
    methods: {
        ...mapActions(["forgotPassword"]),
        formSubmit() {
            this.$v.form.$touch();
            if (!this.$v.form.$anyError) {
                this.forgotPassword({
                    email: this.form.email
                });
            }
        }
    },
    watch: {
        loginError(val) {
            if (val != null) {
                this.$notify("error", "Ops. Ocorreu um erro!", "Esse e-mail não está em nossa base.", {
                    duration: 6000,
                    permanent: false
                });
            }
        },
        forgotMailSuccess(val) {
            if (val) {
                this.$notify(
                    "success",
                    "E-mail enviado com sucesso.",
                    "Verifique a sua caixa de entrada.", {
                        duration: 6000,
                        permanent: false
                    }
                );
            }
        }
    }
};
</script>
