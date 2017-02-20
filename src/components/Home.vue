<template>
	<div id="home">
		<md-button v-if="user" href="#/post/add" class="md-fab md-fab-bottom-right">
			<md-icon>add</md-icon>
		</md-button>
	</div>
</template>

<script>
	import { db, auth } from './../firebase.app';

  export default {
    name: 'home',
    data: () => {
      return {
        user: null
      }
    },
    methods: {

    },

		firebase: {

		},

    created: function () {
      auth().onAuthStateChanged(authed => {
        this.user = authed;
      });
    }
  }
</script>

<style>
	#home {
		width: 100%;
		min-height: 100%;
	}
</style>