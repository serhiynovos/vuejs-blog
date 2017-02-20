<template>
	<div>
		<h3>New Post</h3>

		<quill :content.sync="content" output="html"></quill>
	</div>
</template>

<script>
	export default {
	  name: 'newPost',
    data() {
      return {
        content: {
          ops: [],
        },
      }
    }
	}
</script>