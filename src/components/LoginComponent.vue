<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="form.valid" :lazy-validation="lazy" ref="form">
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
                required
                v-model="form.login"
                :rules="form.loginRules"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                required
                v-model="form.password"
                :rules="form.passwordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="handleLogin">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginComponent',
  data: () => ({
    form: {
      valid: false,
      errors: [],
      login: null,
      loginRules: [(v) => !!v || 'Name is required'],
      password: null,
      passwordRules: [(v) => !!v || 'Password is required'],
    },
  }),
  methods: {
    handleLogin() {
      if (this.$refs.form.validate()) {
        // login
      }
    },
  },
};
</script>
