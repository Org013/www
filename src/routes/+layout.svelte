<script lang="ts">
	import '@fontsource-variable/fira-code';
	import '@fontsource-variable/inter';
	import 'cal-sans';
	import 'virtual:uno.css';
	import '../app.scss';
</script>

<main
	un-bg="#020202"
	un-text="gray12"
	un-font="inter"
	un-w="screen"
	un-min-h="screen"
	un-top="0"
	un-left="0"
	un-fixed
	un-flex
	un-justify="center"
	un-items="center"
>
	<slot />
</main>
