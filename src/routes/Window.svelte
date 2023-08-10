<script lang="ts">
	import { onMount } from 'svelte';
	import grtn_ring from '../lib/images/ring-solid.svg';

	onMount(() => {
		const card = document.querySelector('.card') as HTMLDivElement;
		const motionMatchMedia = window.matchMedia('(prefers-reduced-motion)');
		const THRESHOLD = 15;

		function handleHover(e: MouseEvent) {
			const { clientX, clientY, currentTarget } = e;
			const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget as HTMLDivElement;

			const horizontal = (clientX - offsetLeft) / clientWidth;
			const vertical = (clientY - offsetTop) / clientHeight;

			const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
			const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

			card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
		}

		function resetStyles(e: MouseEvent) {
			card.style.transform = `perspective(${
				(e.currentTarget as HTMLDivElement)?.clientWidth
			}px) rotateX(0deg) rotateY(0deg)`;
		}

		if (!motionMatchMedia.matches) {
			card.addEventListener('mousemove', handleHover);
			card.addEventListener('mouseleave', resetStyles);
		}

		card.addEventListener('animationend', () => {
			card.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__jackInTheBox');
		});

		const destroyWindowBtn = document.querySelector('.window-button.b-red') as HTMLDivElement;
		destroyWindowBtn.addEventListener('click', () => {
			// Close window animation easter egg
			card.classList.add('animate__animated', 'animate__hinge');
			setTimeout(() => {
				card.hidden = true;
			}, 1900);
			setTimeout(() => {
				card.hidden = false;
				card.classList.remove('animate__hinge');
				card.classList.add('animate__jackInTheBox');
			}, 10000);
		});
	});
</script>

<!-- Main Window starts -->
<div class="card glass animate__animated animate__zoomInUp">
	<div class="window-bar [&>*:hover]:opacity-80 [&>*]:transition-all">
		<div class="window-button b-red" />
		<div class="window-button b-yellow" />
		<div class="window-button b-green" />
	</div>
	<div class="window-content">
		<h1 class="title">
			phurit<span style="color: #4fd1c5"
				>.de<span class="cursor animate__animated animate__flash animate__infinite animate__slower"
					>_</span
				></span
			>
		</h1>
		<p class="subtitle">Stay hungry, Stay Phulish.</p>
		<nav>
			<a href="https://story.phurit.de" target="_blank" class="dot">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="garden-icon"
				>
					<title>Digital Garden</title>
					<path
						d="M16.729 21c-.75-1.757-2.474-2.677-4.255-2.889-.956-2.039-1.14-5.457.514-8.819.466.218.97.34 1.504.34 3.022 0 6.79-3.408 7.508-9.632-10.503 0-11.86 5.092-10.626 7.711.517-.696 1.048-1.305 1.642-1.852-.018-2.494 3.966-3.489 6.532-3.744-1.156 3.973-3.927 5.941-5.548 5.43.766-1.159 1.683-2.128 2.312-2.795-3.219 1.531-5.376 5.06-6.06 8.725-.369-.226-.841-.478-1.369-.711.792-1.868-2.354-3.83-5.841-2.079 1.082 2.91 4.256 4.115 5.537 2.583.602.437 1.134.909 1.514 1.31-.152 1.478-.038 2.752.18 3.636-1.152.256-2.15.825-2.689 1.683-2.73-1.126-5.584 1.041-5.584 4.103h18c0-2.125-1.708-3.104-3.271-3zm-12.262-9.806c2.256-.649 3.804.51 3.478 1.222-.539-.244-1.117-.416-1.883-.51.656.266 1.359.594 1.666.804-.808.69-2.666-.304-3.261-1.516z"
					/>
				</svg>
			</a>
			<a href="https://github.com/richeyphu" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<title>GitHub</title>
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/>
				</svg>
			</a>
			<a href="https://blog.phurit.de" target="_blank">
				<svg
					width="24"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
				>
					<title>Medium</title>
					<path
						d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z"
					/>
				</svg>
			</a>
			<a href="https://www.linkedin.com/in/phuritd/" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<title>Linkedin</title>
					<path
						d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
					/>
				</svg>
			</a>
			<a href="mailto:hi☆phurit.de%20[☆→@]">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<title>Email</title>
					<path
						d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
					/>
				</svg>
			</a>
			<a href="https://creatorsgarten.org/ring" title="Creatorsgarten" target="_blank" class="dot">
				<img src={grtn_ring} alt="Creatorsgarten" class="ring-icon" />
			</a>
			<a href="https://webring.wonderful.software#phurit.de" title="วงแหวนเว็บ" target="_blank" class="dot">
				<img
					alt="วงแหวนเว็บ"
					width="24"
					height="24"
					src="https://webring.wonderful.software/webring.black.svg"
					class="p-1"
				/>
			</a>
		</nav>
	</div>
</div>

<!-- Main Window ends -->

<style>
	nav {
		display: flex;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}
	nav > :not([hidden]) ~ :not([hidden]) {
		margin-left: 0.5rem;
	}
	nav svg {
		fill: #edf2f7;
		transition: fill 0.2s ease-in-out;
	}
	nav svg:hover {
		fill: #718096;
		transition: fill 0.2s ease-in-out;
	}

	.title {
		text-align: center;
		font-size: 6.4vmax;
		font-weight: 300;
		margin: 0;
	}
	.subtitle {
		text-align: center;
		font-size: 1vmax;
		font-weight: 100;
		letter-spacing: 0.2rem;
		margin-top: 1rem;
	}

	.card {
		/* max-width: 500px; */
		margin: auto;
		height: auto;
		/* padding: 5rem; */
		position: relative;
		transition: transform 0.2s ease-out;
		transform-style: preserve-3d;
		will-change: transform;
		font-family: Roboto, 'Noto Sans Thai Variable', sans-serif;
	}

	.glass {
		/* From https://css.glass */
		background: rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 1px solid rgba(0, 0, 0, 0.3);
	}
	.window-bar {
		display: flex;
		background-color: rgba(33, 35, 45, 0.4);
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem 0.5rem 0 0;
	}
	.window-bar > :not([hidden]) ~ :not([hidden]) {
		margin-left: 0.5rem;
	}
	.window-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: rgba(40, 42, 54, 1); */
		padding: 2rem 4.9rem;
		border-radius: 0 0 0.5rem 0.5rem;
	}
	.window-button {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 888px;
	}
	.b-red {
		background-color: rgba(239, 68, 68, 0.9);
	}
	.b-yellow {
		background-color: rgba(245, 158, 11, 0.9);
	}
	.b-green {
		background-color: rgba(16, 185, 129, 0.9);
	}
	.cursor {
		font-size: 5.6vmax;
		font-weight: 400;
	}

	.dot {
		height: 24px;
		width: 24px;
		background-color: #edf2f7;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.2s ease-in-out;
	}
	.dot:hover {
		background-color: #718096;
		transition: background-color 0.2s ease-in-out;
	}
	.ring-icon {
		width: 14px;
		filter: invert(0.25);
	}
	.garden-icon {
		width: 14px;
		filter: invert(0.15);
		fill: unset !important;
		/* pointer-events: none; */
	}
	.garden-icon:hover {
		fill: unset !important;
	}

	@media (prefers-reduced-motion) {
		.card {
			transform: none !important;
		}
	}
</style>
