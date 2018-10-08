<template>
    <form class="login">
        <h1 class="login__heading">Login page</h1>
        <label class="login__label">
            Email
            <input 
                v-model="user.email"
                type="email" 
                placeholder="Email" 
                class="login__input"
                :class="{ '-error': loginError }"/>
        </label>
        <label class="login__label">
            Password
            <input 
                v-model="user.password"
                type="password" 
                placeholder="Password" 
                class="login__input"
                :class="{ '-error': loginError }"/>
        </label>
        <button 
            class="button -login" 
            type="button"
            @click="signIn">
            Sign in
        </button>
        <router-link class="link" to="/register">
            <button 
                class="button -register" 
                type="button">
                Sign up
            </button>
        </router-link>
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'users',
            'isLoggedIn',
            'loginError'
        ])
    },
    methods: {
        ...mapActions([
            'signInUser'
        ]),
        signIn() {
            this.signInUser(this.user)
            if (!this.loginError) {
                this.$router.push({ path: '/' })
            } 
        }
    }
    
}
</script>

<style lang="scss" scoped>

.login {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 50px auto;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 20px;
    align-items: center;

    &__label {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 12px;
        align-items: center;

    }

    &__input {
        width: 200px;
        padding: 5px;
        border: 1px solid #d8d8d8;

        &.-error {
            border: 1px solid #e73b3b;
        }

    }

    .link {
        width: 100%;
    }

    .button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 8px;
        width: 100%;
        border-radius: 10px;
        outline: none;
        transition: all 160ms ease;

        &.-login {
            margin-bottom: 15px;
            background: #59df64;
            &:hover {
                background: darken(#59df64, 20%);
            }
            &:active {
                background: darken(#59df64, 30%);
            }
        }

        &.-register {
            background: #689dda;
            &:hover {
                background: darken(#689dda, 20%);
            }
            &:active {
                background: darken(#689dda, 30%);
            }
        }

    }
}

</style>