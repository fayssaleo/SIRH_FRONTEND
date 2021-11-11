<template>
  <div class="bg-container">
    <b-row align-v="center" class="container-row">
      <b-col cols="4" align-v="center" style="z-index: 99">
        <img
          class="logo-devcorp"
          src="../../assets/devcorp-logo.png"
          alt="devcorp-logo"
        />
        <p class="bienvenu">Bienvenu à l'intranet</p>
        <p class="byDevcorp">By Devcorp</p>
        <img class="asset" src="../../assets/asset.png" alt="devcorp-logo" />
      </b-col>
      <b-col cols="4"
        ><img
          class="center_image"
          src="../../assets/center_image.png"
          alt="devcorp-logo"
        />
      </b-col>
      <b-col cols="4" class="login-input">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-username" label-for="input-username">
            <b-form-input
              class="input"
              id="input-username"
              v-model="form.username"
              type="text"
              placeholder="Saisir votre nom d'utilisateur"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-password" label-for="input-password">
            <b-form-input
              style="margin-top: 32px"
              class="input"
              id="input-password"
              v-model="form.password"
              type="password"
              placeholder="Mot de passe"
              required
            >
            </b-form-input>
          </b-form-group>
          <div class="password_forgeted-div">
            <router-link id="motDePasseOublie" :to="'#'"
              >Mot de passe oublié?</router-link
            >
          </div>
          <b-button type="submit" variant="primary" class="submit-button"
            >Se connecter</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["loginAction"]),
    onSubmit(event) {
      event.preventDefault();
      this.loginAction(this.form)
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.container-row {
  width: 100%;
}
.bg-container {
  width: 100%;
  margin: 0;
  padding: 100px 9px 67px 278px;
  /* padding-top: 5%; */
  top: 0px;
  left: -85.41009521484375px;
  height: 100vh;
  background: url(../../assets/login-background.png) 9% 0% no-repeat padding-box;
  opacity: 1;
}
.logo-devcorp {
  height: 94px;
  width: 251px;
}
.bienvenu {
  width: 393px;
  height: 174px;
  font: var(--unnamed-font-style-normal) normal bold 60px/90px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-010101);
  text-align: left;
  font-family: "Poppins";
  font: normal normal bold 60px/90px Poppins;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
  margin-top: 50px;
}
.byDevcorp {
  width: 140px;
  height: 33px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-24) /
    var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #c0cfdf;
  opacity: 1;
}
.asset {
  width: 81px;
  height: 145px;
  opacity: 1;
  margin-top: 81px;
}
.input {
  width: 384px;
  height: 68px;
  background: #e9eff6 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 1;
  padding-left: 25px;
  color: #707070;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  border: 0;
}
.password_forgeted-div {
  width: 384px;
  height: 26px;
  position: relative;
  margin-top: -9px;
  a {
    position: absolute;
    right: 2px;
    color: rgb(192, 207, 223);
  }
}
.submit-button {
  width: 384px;
  height: 68px;
  background: #4762f1 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  opacity: 1;
  margin-top: 16px;
  border-radius: 14px;
  opacity: 1;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: bold;
}
.center_image {
  width: 779px;
  height: 660px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  z-index: 0;
  margin-left: -236px;
  margin-top: 66px;
}
@media screen and (max-width: 1900px) {
  .bg-container {
    padding: 150px 61px 67px 111px;
  }
  .center_image {
    width: 525px;
    height: 409px;

    margin-left: -121px;
  }
}
@media screen and (max-width: 1300px) {
  .bg-container {
    padding: 150px 17px 67px 61px;
  }
  .center_image {
    width: 525px;
    height: 409px;

    margin-left: -121px;
  }
  .login-input {
    * {
      width: 323px;
      font: normal normal normal 17px/14px Poppins;
    }
    .password_forgeted-div {
      a {
        width: 180px;
      }
    }
  }
  .bienvenu {
    font: normal normal bold 61px/90px Poppins;
  }
}
</style>
