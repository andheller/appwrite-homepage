<script>
	import '../app.postcss';
	let mobile_menu_open = false;
	let light_preference_open = false;
	let theme;
	function update_theme() {
		if (theme == 'light') {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
		if (theme == 'dark') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		}
		if (theme == 'system') {
			localStorage.removeItem('theme');
			if (
				localStorage.theme === 'dark' ||
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
</script>

<svelte:head>
	<title>Appwrite - Open-Source End-to-End Backend Server</title>
	<meta
		name="description"
		content="Appwrite provides web and mobile developers with a set of easy-to-use and integrate REST APIs to manage their core backend needs."
	/>
	<meta name="twitter:title" content="Appwrite - Open-Source End-to-End Backend Server" />
	<meta name="twitter:image:src" content="https://appwrite.io/images/logo.png?v=500" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@appwrite" />
	<meta property="og:site_name" content="Appwrite" />
	<meta property="og:title" content="Appwrite - Open-Source End-to-End Backend Server" />
	<meta
		property="og:description"
		content="Appwrite provides web and mobile developers with a set of easy-to-use and integrate REST APIs to manage their core backend needs."
	/>
	<meta property="og:site_name" content="Appwrite" />
	<meta name="theme-color" content="#f02e65" />

	<link rel="icon" type="image/png" href="https://appwrite.io/images/favicon.png?v=402" />
	<link rel="apple-touch-icon" href="https://appwrite.io/images/apple.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
			const colorScheme = e.matches ? 'dark' : 'light';
			if ('theme' in localStorage) return console.log('theme');

			if (colorScheme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	</script>
</svelte:head>

<header class="bg-white dark:bg-slate-900">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
		<div class="flex w-full items-center justify-between py-6">
			<div class="flex items-center">
				<a href="/">
					<span class="sr-only">Appwrite</span>
					<img
						class="h-8 w-auto dark:slatescale dark:invert dark:contrast-200 dark:saturate-0 dark: dark:brightness-0 dark:hover:brightness-100 hover:slatescale-0 hover:invert-0 hover:contrast-100 hover:saturate-100"
						src="/appwrite.svg"
						alt="Appwrite Logo"
					/>
				</a>
				<div class="ml-10 hidden space-x-8 lg:block">
					<a
						href="https://appwrite.io/cloud"
						class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">Cloud</a
					>
					<a
						href="https://appwrite.io/docs"
						class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">Docs</a
					>
					<a
						href="https://appwrite.io/community"
						class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">Community</a
					>
					<a
						href="https://github.com/appwrite/appwrite"
						class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">GitHub</a
					>
					<div class="inline relative">
						<button on:click={() => (light_preference_open = true)}
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5 dark:hidden text-slate-700 -mb-1"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5 hidden dark:block text-slate-50 -mb-1"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
								/>
							</svg>
						</button>
						<div
							class="{light_preference_open
								? ''
								: 'hidden'} absolute top-6 left-0 bg-white dark:bg-slate-900 border dark:border-slate-700 px-1 py-2 rounded shadow z-50"
						>
							<ul class="space-y-1">
								<li
									class="text-base text-slate-700 dark:text-slate-50 flex items-center cursor-pointer rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 pl-2 pr-6 py-1 "
									on:click={() => {
										localStorage.theme = 'light';
										document.documentElement.classList.remove('dark');
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5 mr-2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
										/>
									</svg>

									Light
								</li>
								<li
									class="text-base text-slate-700 dark:text-slate-50 flex items-center cursor-pointer rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 pl-2 pr-6 py-1 "
									on:click={() => {
										localStorage.theme = 'dark';
										document.documentElement.classList.add('dark');
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5 mr-2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
										/>
									</svg>

									Dark
								</li>
								<li
									class="text-base text-slate-700 dark:text-slate-50 flex items-center cursor-pointer rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 pl-2 pr-6 py-1 "
									on:click={() => {
										localStorage.removeItem('theme');
										if (
											localStorage.theme === 'dark' ||
											window.matchMedia('(prefers-color-scheme: dark)').matches
										) {
											document.documentElement.classList.add('dark');
										} else {
											document.documentElement.classList.remove('dark');
										}
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5 mr-2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
										/>
									</svg>

									System
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="ml-10 space-x-4">
				<a
					href="#"
					class="hidden lg:inline-block rounded-md border border-transparent bg-primary text-white py-2 px-4 text-base hover:bg-opacity-75 "
					>Get Started</a
				>
				<button
					class="text-slate-700 dark:text-slate-200 lg:hidden"
					on:click={() => (mobile_menu_open = true)}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 {mobile_menu_open ? 'hidden' : ''}"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 {mobile_menu_open ? '' : 'hidden'}"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
		<div class="{mobile_menu_open ? '' : 'hidden'} lg:hidden absolute w-96 z-50 top-4 right-4">
			<div
				class="flex flex-col justify-center py-4 px-4 bg-slate-50 dark:bg-slate-900/80 backdrop-blur-md border dark:border-slate-500 shadow w-full rounded-lg"
			>
				<a
					href="https://appwrite.io/cloud"
					class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">Cloud</a
				>
				<a
					href="https://appwrite.io/docs"
					class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">Docs</a
				>
				<a
					href="https://appwrite.io/community"
					class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">Community</a
				>
				<a
					href="https://github.com/appwrite/appwrite"
					class="text-base text-slate-700 dark:text-slate-50 hover:text-primary">GitHub</a
				>
				<hr class="my-4" />
				<div class="flex items-center">
					<label for="Theme" class="block text-base text-slate-700 dark:text-slate-50 grow"
						>Switch Theme</label
					>
					<select
						bind:value={theme}
						on:change={update_theme}
						name="theme"
						class="mt-1 block w-40 rounded-md border-slate-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
						<option value="system">System</option>
					</select>
				</div>
			</div>
		</div>
	</nav>
</header>
<div
	class="hidden lg:block bg-transparent h-screen w-screen fixed top-0 right-0 z-40 {light_preference_open
		? ''
		: 'lg:hidden'}"
	on:click={() => {
		light_preference_open = false;
	}}
/>

<div
	class="lg:hidden bg-transparent backdrop-blur-sm h-screen w-screen fixed top-0 right-0 z-40 {mobile_menu_open
		? ''
		: 'hidden'}"
	on:click={() => {
		mobile_menu_open = false;
	}}
/>

<slot />

<footer class="bg-white dark:bg-slate-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8 xl:col-span-1">
				<a href="/">
					<span class="sr-only">Appwrite</span>
					<img
						class="h-8 w-auto dark:slatescale dark:invert dark:contrast-200 dark:saturate-0 dark:brightness-0 dark:hover:brightness-100  hover:slatescale-0 hover:invert-0 hover:contrast-100 hover:saturate-100"
						src="/appwrite.svg"
						alt="Appwrite Logo"
					/>
				</a>
				<div class="flex space-x-6">
					<a
						href="#"
						class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-50 dark:text-slate-200"
					>
						<span class="sr-only">Github</span>
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
							><path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							/></svg
						>
					</a>

					<a
						href="#"
						class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-50 dark:text-slate-200"
					>
						<span class="sr-only">Discord</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							class="bi bi-discord"
							viewBox="0 0 16 16"
						>
							<path
								d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
							/>
						</svg>
					</a>

					<a
						href="#"
						class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-50 dark:text-slate-200"
					>
						<span class="sr-only">Twitter</span>
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
							><path
								d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
							/></svg
						>
					</a>

					<a
						href="#"
						class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-50 dark:text-slate-200"
					>
						<span class="sr-only">LinkedIn</span>
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
							><path
								d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
							/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
						>
					</a>

					<a
						href="#"
						class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-50 dark:text-slate-200"
					>
						<span class="sr-only">YouTube</span>
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
							><path
								d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
							/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg
						>
					</a>
				</div>
			</div>
			<div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-base font-medium text-slate-900">Solutions</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Database</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Authentication</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Storage</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Functions</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Realtime</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-12 md:mt-0">
						<h3 class="text-base font-medium text-slate-900">Support</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Documentation</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Installation</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Guides</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Contact</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white flex items-center"
								>
									Status
									<span class="flex ml-1 mt-px w-3 relative">
										<span
											class="animate-ping duration-1000 absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"
										/>
										<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-base font-medium text-slate-900">Company</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>About</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Blog</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Jobs</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Press</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Partners</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-12 md:mt-0">
						<h3 class="text-base font-medium text-slate-900">Legal</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Security</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Privacy</a
								>
							</li>

							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Terms</a
								>
							</li>
							<li>
								<a
									href="#"
									class="text-base text-slate-500 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
									>Cookies</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
			<p class="text-base text-slate-400 xl:text-center">
				&copy; 2022 Appwrite • Version 0.18.0.500
			</p>
		</div>
	</div>
</footer>
