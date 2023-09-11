<script lang="ts">
	import socials from '$lib/data/socials.json';
</script>

<section un-max-w="60ch" un-m="y-auto">
	<h1 un-font="cal bold" un-text="7xl">Someone who's trying to improve</h1>

	Hello world! I am ~~Gustavo L. de Mello~~ Guz, a software developer and
	generalist currently working on contributing and creating open-source software, tools
	and libraries.
	<!---->
	Using my own anxiety to loose sleep because of a mind that doesn't stop having
	ideas is how I work. And you can check out how this workflow is going on my social
	medias or on platforms such as [GitHub](https://github.com/Guz013) where most of
	the projects are public to anyone who wants to see the progress of them.
	<!---->
	Outside ~~loosing sleep because~~ of programming, I also create designs and logos
	said projects. And when not working on them I also enjoy creating art on any type
	of media, like drawings, pixelart, 3D, photography, etc. My photos can be found
	on [Instagram](https://instagram.com/guz013_) or [Pixelfed](https://pixelfed.social/guz013),
	digital arts are on dedicated accounts.

	<hr un-w="10ch" un-m="y-5" un-border="gray1 solid 1" />

	Find or support me and my projects on

	<div un-grid="~ rows-2 cols-1 lg:(rows-1 cols-7)">
		<div
			un-col="lg:span-6"
			un-grid="~ lg:rows-1 sm:(cols-4 rows-1) rows-2 cols-2"
			un-text="lg:sm"
			class={`lg:grid-cols-${socials.length}`}
		>
			{#each socials as socialsGroup}
				<ul un-p="0" un-list="none" un-m="0 t-2">
					{#each socialsGroup as social}
						<li un-m="b-1">
							<a
								href={social.url}
								target="_blank"
								id={social.name.toLowerCase()}
								un-decoration="none"
								un-transition="all"
							>
								<span
									class={`i-custom:${social.name.toLowerCase()}`}
									un-inline="block"
									un-translate="y-.15em"
								/>
								<span
									un-decoration="underline 1 offset-3 gray5 hover:(dark:white)"
								>
									{social.name}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			{/each}
		</div>
		<figure
			un-w="5ch"
			un-text="dark:white"
			un-justify-self="lg:end center"
			un-place-self="lg:end center"
			un-m="0"
		>
			<figcaption un-hidden>Guz013 Logo</figcaption>
			<Logo013Svg />
		</figure>
	</div>
</section>
