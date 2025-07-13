<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// A function to handle scroll event to move an image from left to right and right to left, in a fixed position
		// This function can be used to create a parallax effect or similar visual effects on scroll

		const onScroll = () => {
			const image = document.querySelector<HTMLImageElement>('.lil-character')!;

			// It's like the scroll position but it's 100% of the viewport width
			const width = window.innerWidth;

			// Actual scroll position
			const scrollY = window.scrollY;

			// Convert scroll Y into X
			const scrollX = (scrollY / document.body.scrollHeight) * width;

			if (image) {
				image.style.transform = `translateX(-${scrollX * 0.2}px)`;
			}

			// Reverse horizontally when it's reaching left

			if (scrollX > width / 2) {
				image.style.transform = `rotateY(180deg) translateX(${(scrollX - width / 2) * 0.2}px)`;
			}
		};

		// Add the scroll event listener
		window.addEventListener('scroll', onScroll);

		// This will ensure the scroll event listener is set up when the component mounts
		const image = document.querySelector<HTMLImageElement>('.logo');
		if (image) {
			image.style.transition = 'transform 0.2s ease-in-out';
		}
		// Cleanup the event listener when the component is destroyed
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	const projects = [
		{
			title: 'Blatant',
			description:
				'Un jeu de plateau stratégique avec des cartes. Un concept unique et une gameplay captivant.',
			image: '/assets/blatant.png',
			links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/showcase/blatant-velvaestudios' }]
		},
		{
			title: 'Raoronia',
			description:
				'Bienvenue dans Raoronia, un monde où la puissance ne naît pas du bien ou du mal, mais de la Volonté Spirituelle propre à chaque âme. Ici, chacun — qu’il porte la lumière ou qu’il soit plongé dans l’ombre — peut façonner son destin et celui du monde en affirmant une identité forte. L’éveil, la transformation ou la chute ne dépendent que de cette force intérieure.',
			image: '/assets/raoronia-map.png',
			links: [{ label: "Plus d'infos", url: 'https://linktr.ee/nekoniyah' }]
		},
		{
			title: 'A suivre',
			description:
				'On travaille sur de nouveaux projets passionnants ! Jeux vidéos, mangas, etc...',
			image: '/assets/icon-flames.png',
			links: [{ label: "Plus d'infos", url: 'https://linktr.ee/nekoniyah' }]
		}
	];
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<a
	href="https://www.youtube.com/watch?v=3T3ofoKfEoY&list=RD3T3ofoKfEoY"
	target="_blank"
	rel="noopener noreferrer"
>
	<img src="/assets/ryuu_wave.png" class="lil-character" alt="" />
</a>

<div class="glass"></div>
<div class="container">
	<img
		src="/assets/brand.png"
		class="logo"
		alt="Velvae Studios Logo"
		style="width: 100%; max-width: 400px;"
	/>
	<h1 class="title">Velvae Studios</h1>
	<p class="subtitle">Un Monde à Nous.</p>
	<br />

	<div class="buttons">
		<a href="#about" class="button">A Propos</a>
		<a href="#projects" class="button">Projets</a>
	</div>
</div>

<div class="container" id="about">
	<p class="subtitle">Un Monde à Nous.</p>
	<br />
	<div class="bio">
		<p>
			Velvæ Studios est une maison créative née d'une passion pour l'imaginaire et une esthétique
			fusionnant douceur, diversité et élégance. Inspirée par la culture japonaise —
			particulièrement les animés — et les univers fantastiques enchanteurs, Velvæ Studios cherche à
			captiver les cœurs et éveiller la curiosité.
		</p>

		<p>
			Notre mission est d'offrir des expériences immersives et collaboratives à travers divers
			projets : jeux de société, jeux vidéo, animés... Chaque création s'inscrit dans l'univers de
			Raoronia, un monde riche et vibrant incarnant nos valeurs : inclusivité, créativité et
			authenticité.
		</p>

		<p>
			Chez Velvæ Studios , nous croyons en la puissance du collectif et de la diversité. Notre
			esthétique associe des influences « fluffy » et « mignonnes » à des designs élégants et
			captivants, touchant ainsi un large public tout en honorant nos racines dans la communauté
			LGBT+ et le Furry Fandom. Cet équilibre unique permet à Velvæ Studios de rester accessible à
			tous tout en demeurant fidèle à son essence.
		</p>

		<p>
			Nous sommes avant tout un lieu où l'imagination n'a pas de limites, où chaque voix peut
			s'exprimer et où l'art raconte des histoires uniques. Rejoignez-nous dans cette aventure pour
			créer, ensemble, des mondes où rêves et créativité s'entrelacent.
		</p>
	</div>
</div>

<div class="container" id="projects">
	<p class="subtitle">Nos Projets.</p>
	<br />

	<div class="cards">
		{#each projects as project}
			<div class="card">
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<img src={project.image} alt={project.title} />
				<div class="links">
					{#each project.links as link}
						<a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="footer">
	<p>&copy; 2025 Velvae Studios. Tous droits réservés.</p>
</div>

<style lang="scss">
	@use '$lib/app.scss';

	.lil-character {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 150px;
		height: auto;
		z-index: 10;
		transition: transform 0.2s ease-in-out;
	}

	.footer {
		text-align: center;
		height: 50px;
		background-color: app.$white;
		color: app.$black;
		font-family: 'VelvetSakura', Arial, sans-serif;
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 3;
		box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.1);
	}

	.glass {
		width: 100vw;
		height: 100vh;
		background-color: app.$white;
		opacity: 0.6;
		// Glassy effect
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		position: fixed;
	}

	.container {
		position: relative;
		z-index: 1;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
		font-family: 'VelvetSakura', Arial, sans-serif;
		color: app.$black;
		padding: 2rem;
		border-radius: 16px;

		.title {
			font-family: 'VelvetSakura-Black', 'VelvetSakura', Arial, sans-serif;
			font-size: 3rem;
			color: app.$pourpre;
			margin: 0;
			text-shadow: 0 2px 12px rgba(164, 22, 35, 0.2);
			transition: color 0.3s ease-in-out;

			&:hover {
				color: darken(app.$pourpre, 10%);
				text-shadow: 0 4px 16px rgba(164, 22, 35, 0.3);
			}
		}

		.subtitle {
			font-family: 'VelvetSakura', Arial, sans-serif;
			font-size: 1.5rem;
			color: app.$black;
			margin-top: 0.5rem;
			text-shadow: 0 1px 4px rgba(15, 15, 15, 0.2);
		}

		.logo {
			margin-bottom: 1rem;
			max-width: 100%;
			height: auto;
		}

		.buttons {
			display: flex;
			gap: 1rem;
			margin-top: 1.5rem;

			.button {
				background-color: app.$pourpre;
				color: app.$white;
				padding: 0.75rem 1.5rem;
				border-radius: 8px;
				text-decoration: none;
				font-family: 'VelvetSakura-Bold', 'VelvetSakura', Arial, sans-serif;
				font-size: 1rem;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: darken(app.$pourpre, 10%);
				}
			}
		}

		.bio {
			max-width: 800px;
			margin: 2rem auto;
			font-size: 1.1rem;
			line-height: 1.6;
			color: app.$black;

			p {
				margin-bottom: 1rem;
				text-align: justify;
			}
		}
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 0.4fr));
		gap: 1.2rem;

		.card {
			background: app.$white;
			border-radius: 12px;
			box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
			padding: 1.2rem;
			font-family: 'VelvetSakura', Arial, sans-serif;

			h2 {
				margin-top: 0;
				color: app.$pourpre;
				font-size: 1.25rem;
				font-family: 'VelvetSakura-Bold', 'VelvetSakura', Arial, sans-serif;
			}

			p {
				color: app.$black;
				font-size: 1rem;
			}

			img {
				max-width: 90%;
				height: auto;
				border-radius: 8px;
				margin-top: 1rem;
			}

			.links {
				margin-top: 1rem;

				a {
					color: app.$pourpre;
					text-decoration: none;
					margin-right: 1rem;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	:global(html, body) {
		scroll-behavior: smooth;
	}
</style>
