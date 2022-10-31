<template>
  <div class="centers" v-if="state.username === '' || state.username === null">
    <form @submit.prevent="Login">
      <div class="main">
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Please Enter Username"
          v-model = "inputUsername"
          :style="input"
        />
        <br />
        <input
          type="submit"
          value="Login"
          class="button"
          id="login"
          :style="inputStyle"
          @click="inviaForm"
        />
        <br />
      </div>
    </form>
</div>

<div v-else>
  <v-app class="grey lighten-4">
    <MyNavbar />
  </v-app>
</div>
</template>

<script>
import { reactive , ref , onMounted } from 'vue'
import ShowModal from '../src/components/ShowModal.vue'
import MyNavbar from '@/components/MyNavbar.vue'

export default {
  name: 'app',
  components: { MyNavbar },
  data() {
            return {
                name: '',
            }
        },
        methods: {
            inviaForm() {
                localStorage.setItem('name',this.name)
            }
        },
  setup () {
    const inputUsername = ref("");

    const state = reactive({
      username: "",
      message: []
    });
    const Login = () => {
      if (inputUsername.value != "" || inputUsername.value != null) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    }
    return {
      inputUsername,
      Login,
      state
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.centers {
  display: block;
	width: 100%;
	padding: 15px;
  align-items: center;
}
.background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgb(250, 250, 250);
}
.navbar {
  background: #00ffff;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 70px;
  box-shadow: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}
.nav {
  width: 80%;
  min-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #00ffff;
}
#name_project {
  font-weight: 700;
}
.main {
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  text-align: center;
  padding: 5px;
  border-radius: 3rem;
  box-shadow: 0px 0px 8px -5px #000000;
  padding-top: 3%;
  padding-bottom: 5%;
  font-family: "Poppins", sans-serif;
}
h1 {
  cursor: default;
  user-select: none;
}
input {
  border-radius: 3rem;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 2px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}
input:hover {
  box-shadow: 0px 0px 8px -5px #000000;
}
input:active {
  box-shadow: 0px 0px 8px -5px #000000;
}
#login {
  background: cyan;
}
.button {
  cursor: pointer;
  user-select: none;
}
</style>
