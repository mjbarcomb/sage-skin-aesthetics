<header>
	<h1>Sage Skin Aesthetics</h1>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="/about">About</a>
		<a href="/faqs">FAQs</a>
		<a href="/services">Services</a>
		<a href="/gallery">Gallery</a>
		<a href="/contact">Contact</a>
	</nav>
</header>

<style>
	header {
		position: sticky;
		margin-bottom: calc(-1 * var(--header-height));
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: clamp(3.75rem, 3.0851rem + 2.1277vw, 5rem);
		background-color: #41684a9c;
		backdrop-filter: blur(20px);
		padding: 0 var(--gap);
		line-height: 1;
		z-index: 1;
	}

	nav {
		display: flex;
		column-gap: var(--gap);
		font-size: 20px;
	}

	a {
		color: var(--color-white);
		text-decoration: none;
	}

	h1 {
		font-size: clamp(1.5rem, 1.1591rem + 1.2121vw, 2.25rem);
		margin: 0;
	}

	@media screen and (max-width: 900px) {
		header nav {
			display: none;
		}
	}
</style>
