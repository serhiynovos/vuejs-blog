<template>
	<div id="app">
		<md-toolbar>
			<span style="flex: 1">Vue Blog</span>

			<md-button v-if="!user" @click.native="doLogin">Login</md-button>

			<md-menu v-if="user"  md-size="4" md-direction="top right" ref="menu">
				<md-button class="" md-menu-trigger>
					<md-avatar>
						<img :src="user.photoURL" alt="">
					</md-avatar>
					{{user.displayName}}
				</md-button>

				<md-menu-content>
					<md-menu-item @click.native="doLogOut">LogOut</md-menu-item >
				</md-menu-content>
			</md-menu>
		</md-toolbar>

		<md-layout md-gutter>

			<md-layout md-flex-large="25">

			</md-layout>

			<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="50">
				<router-view></router-view>
			</md-layout>

		</md-layout>
	</div>
</template>

<script>
	import {firebaseApp, auth} from './firebase.app'

  export default {
    name: 'app',
		methods: {
      doLogin: function () {
        auth().signInWithPopup(new auth.GoogleAuthProvider())
      },

			doLogOut: function () {
				auth().signOut()
      }
		},
		data: () => {
      return {
        user: null
			}
		},

		created: function () {
      auth().onAuthStateChanged(authed => {
        this.user = authed;
			});
    }
  }
</script>

<style>
	#app {
		width: 100%!important;
	}
</style>