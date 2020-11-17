<template>
<b-row class="h-100">
    <b-colxx  md="8" class="mx-auto my-auto">
        <b-card class="auth-card" no-body>
            <div class="form-side">
                <router-link tag="a" to="/">
                    <center><img src="https://danilozanini.com.br/wp-content/uploads/2020/10/logo-danilo-zanini.png" alt="logo-danilo-zanini"></center>
                </router-link>
                <b-form @submit.prevent="formSubmit" class="av-tooltip tooltip-label-bottom">
                    <b-form-group :label="$t('user.email')" class="has-float-label mb-4">
                        <b-form-input type="text" placeholder ="Digite o seu e-mail" v-model="$v.form.email.$model" :state="!$v.form.email.$error" />
                        <b-form-invalid-feedback v-if="!$v.form.email.required">Digite o seu e-mail</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group :label="$t('user.password')" class="has-float-label mb-4">
                        <b-form-input type="password" placeholder ="Digite a sua senha" v-model="$v.form.password.$model" :state="!$v.form.password.$error" />
                        <b-form-invalid-feedback v-if="!$v.form.password.required">Digite a sua senha</b-form-invalid-feedback>

                    </b-form-group>
                    <div class="d-flex justify-content-between align-items-center">
                        <router-link tag="a" to="/user/forgot-password" font-color="#fff">{{ $t('Esqueceu a sua senha?')}}</router-link>
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
                            <span class="label">{{ $t('ENTRAR') }}</span>
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
import { adminRoot } from '../../constants/config';

export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    mixins: [validationMixin],
    validations: {
        form: {
            password: {
                required,
                maxLength: maxLength(16),
                minLength: minLength(4)
            },
            email: {
                required,
                email,
                minLength: minLength(4)
            }
        }
    },
    computed: {
        ...mapGetters(["currentUser", "processing", "loginError"])
    },
    methods: {
        ...mapActions(["login"]),
        formSubmit() {
            this.$v.$touch();
            email: this.form.email;
            password: this.form.password;
            this.$v.form.$touch();
           // if (!this.$v.form.$anyError) {
                this.login({
                    email: this.form.email,
                    password: this.form.password
                });
            //}
        }
    },
    watch: {
        currentUser(val) {
            if (val && val.uid && val.uid.length > 0) {
                setTimeout(() => {
                    this.$router.push(adminRoot);
                }, 200);
            }
        },
        loginError(val) {
            if (val != null) {
                this.$notify("error", "Erro de Acesso", "Você precisa digitar um e-mail e senha válidos", {
                    duration: 6000,
                    permanent: false
                });

            }
        }
    }
};
</script>
