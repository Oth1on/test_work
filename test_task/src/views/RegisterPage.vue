<template>
    <form class="register">
        <h1 class="register__heading">Register page</h1>
        <label class="register__label">
            Email
            <input 
                v-model="user.email"
                type="email" 
                placeholder="Email" 
                class="register__input"
                :class="{ '-error': isUserExist }"/>
        </label>
        <label class="register__label">
            Password
            <input 
                v-model="user.password"
                type="password" 
                placeholder="Password" 
                class="register__input"
                :class="{ '-error': error }"/>
        </label>
        <label class="register__label">
            Confirm
            <input 
                v-model="confirmPassword"
                type="password" 
                placeholder="Password" 
                class="register__input"
                :class="{ '-error': error }"/>
        </label>
        <button 
            type="button" 
            class="button -register"
            @click="signUp">
            Sign up
        </button>
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
            },
            confirmPassword: '',
            error: ''
        }
    },
    computed: {
        ...mapGetters([
            'users',
            'isUserExist'
        ])
    },
    methods: {
        ...mapActions([
            'signUpUser'
        ]),
        signUp() {
            if (this.user.password && this.user.password === this.confirmPassword) {
                this.signUpUser(this.user)
                if (!this.isUserExist) {
                    this.$router.push({ path: '/login' })
                }
            } else {
                this.error = true
                setTimeout(() => {
                    this.error = false
                }, 2000)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.register {
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
        text-align: left;

    }

    &__input {
        width: 200px;
        padding: 5px;
        border: 1px solid #d8d8d8;
        transition: all 160ms ease;

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
