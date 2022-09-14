<script>
	import Prism from 'prismjs';
	const code = `// Init your Web SDK
const client = new Client();
client
    .setEndpoint('http://localhost/v1')
    .setProject('455x34dfkj')

// Register User
const account = new Account(client);
account.create('unique()', 'me@example.com', 'password', 'Jane Doe')
        .then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });`;

	const websdk_code = Prism.highlight(code, Prism.languages.javascript, 'javascript');
</script>

<main class="bg-white dark:bg-slate-900 py-8 lg:py-0">
	<div class="bg-white dark:bg-slate-900 pb-8 sm:pb-12 lg:pb-12">
		<div class="overflow-hidden lg:pt-8 sm:pt-12 lg:relative lg:py-12">
			<div
				class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
			>
				<div>
					<div class="lg:mt-20">
						<div class="dark:bg-pink-50 max-w-xs p-1 rounded-lg">
							<a
								href="https://dev.to/appwrite/announcing-appwrite-015-with-phone-authentication-more-5cjj"
								class="inline-flex space-x-4"
							>
								<span
									class="rounded bg-pink-50 dark:bg-primary dark:text-pink-50 px-2.5 py-1 text-sm font-semibold text-primary"
									>What's new</span
								>
								<span class="inline-flex items-center space-x-1 text-sm font-medium text-primary">
									<span>Just shipped version 0.15</span>

									<svg
										class="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</a>
						</div>
						<div class="mt-6 sm:max-w-xl">
							<h1
								class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
							>
								Secure Open-Source Backend Server for Web, Mobile & Flutter Developers
							</h1>
							<p class="mt-6 text-xl text-slate-500 dark:text-slate-200">
								Appwrite is a self-hosted backend-as-a-service platform that provides developers
								with all the core APIs required to build any application.
							</p>
							<div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
								<div class="rounded-md shadow">
									<a
										href="#"
										class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary_light md:py-4 md:px-10 md:text-lg"
										>Get started</a
									>
								</div>
								<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
									<a
										href="#"
										class="flex w-full items-center justify-center rounded-md border border-transparent bg-white dark:bg-transparent dark:border-white px-8 py-3 text-base font-medium text-primary dark:text-white dark:hover:text-primary hover:bg-pink-100 md:py-4 md:px-10 md:text-lg"
										>Live demo</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="sm:mx-auto sm:max-w-3xl sm:px-6">
				<div
					class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
				>
					<div class="hidden sm:block">
						<div
							class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-slate-50 dark:bg-slate-800/50 lg:left-80 lg:right-0 lg:w-full"
						/>

						<div
							class="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/20 dark:text-slate-600/50 [mask-image:linear-gradient(transparent,white)]"
						>
							<svg aria-hidden="true" class="absolute inset-0 h-full w-full"
								><defs
									><pattern
										id=":Rem:"
										width="128"
										height="128"
										patternUnits="userSpaceOnUse"
										x="50%"
										y="100%"><path d="M0 128V.5H128" fill="none" stroke="currentColor" /></pattern
									></defs
								><rect width="100%" height="100%" fill="url(#:Rem:)" /></svg
							>
						</div>
					</div>

					<div
						class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
					>
						<img
							class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none dark:hidden"
							src="/hero-light.png"
							alt=""
						/>
						<img
							class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none hidden dark:block"
							src="/hero-dark.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-white dark:bg-slate-900 relative">
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
			<div
				class="rounded-lg bg-slate-100 dark:bg-slate-800 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center my-16 z-20 relative"
			>
				<div class="xl:w-0 xl:flex-1">
					<h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
						Sign Up Now for Free Cloud Credits
					</h2>
					<p class="mt-3 max-w-3xl text-lg leading-6 text-slate-700 dark:text-slate-200">
						Deploying Appwrite has never been easier. Secure your free credits for Appwrite Cloud
						now by signing up.
					</p>
				</div>
				<div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
					<div class="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
						<div class="relative sm:static sm:flex-auto">
							<input
								type="email"
								id="email-address"
								required=""
								aria-label="Email address"
								placeholder="Email address"
								class="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-slate-500 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none sm:py-3 autofill-none"
							/>
							<div
								class="absolute inset-0 rounded-md border border-primary/50 peer-focus:border-primary peer-focus:bg-primary/10 peer-focus:ring-1 peer-focus:ring-pink-300 sm:rounded-xl"
							/>
						</div>
						<button
							class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-primary hover:text-primary_light focus-visible:text-pink-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-200 active:bg-pink-50 active:text-primary/80 disabled:opacity-40 disabled:hover:text-primary mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
							type="submit">Get free Credits</button
						>
					</div>
				</div>
			</div>
		</div>
		<div class="text-slate-900/10 dark:text-slate-600/50 z-0 relative w-full h-72 -mt-72">
			<svg aria-hidden="true" class="absolute inset-0 h-full w-full z-10"
				><defs
					><pattern
						id=":Rb6:"
						width="128"
						height="128"
						patternUnits="userSpaceOnUse"
						x="50%"
						patternTransform="translate(0 80)"
						><path d="M0 128V.5H128" fill="none" stroke="currentColor" /></pattern
					></defs
				><rect width="100%" height="100%" fill="url(#:Rb6:)" />
			</svg>
		</div>
	</div>

	<div class="bg-slate-900 dark:bg-slate-800 relative">
		<div
			class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24"
		>
			<h2 class="text-3xl font-bold tracking-tight text-white">Power, Security and Flexibility</h2>
			<p class="mt-4 max-w-3xl text-lg text-slate-200">
				Take advantage of the Appwrite services to speed up your development on any platform
			</p>
			<div
				class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
			>
				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
								/>
							</svg>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">Databases</h3>
						<p class="mt-2 text-base text-slate-200">
							Store, query and manage access control to your app documents
						</p>
					</div>
				</div>

				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">Auth & Users</h3>
						<p class="mt-2 text-base text-slate-200">
							Authenticate, confirm and manage users using multiple signin methods
						</p>
					</div>
				</div>

				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
								/>
							</svg>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">Storage</h3>
						<p class="mt-2 text-base text-slate-200">
							Upload, download and preview your app and users files
						</p>
					</div>
				</div>

				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
								/>
							</svg>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">Functions</h3>
						<p class="mt-2 text-base text-slate-200">
							Run your backend code in a secure and isolated environment to customize your app
						</p>
					</div>
				</div>

				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-6 h-6 text-white"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg
							>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">GEO & Localization</h3>
						<p class="mt-2 text-base text-slate-200">
							Detect your users location, locale and fetch GEO related data
						</p>
					</div>
				</div>

				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-6 h-6 text-white"
								><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg
							>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">Console</h3>
						<p class="mt-2 text-base text-slate-200">
							Track your backend API usage and manage your project resources from a modern UI
						</p>
					</div>
				</div>

				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
								/>
							</svg>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">Privacy</h3>
						<p class="mt-2 text-base text-slate-200">
							Own your data. Easily setup Appwrite self-hosted solution on your infrastructure
						</p>
					</div>
				</div>

				<div>
					<div>
						<span
							class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								/>
							</svg>
						</span>
					</div>
					<div class="mt-6">
						<h3 class="text-lg font-medium text-white">Security</h3>
						<p class="mt-2 text-base text-slate-200">
							End-to-end security for your backend APIs both in transit and at rest
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="overflow-hidden bg-slate-50 dark:bg-slate-900 py-16">
		<div class="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
				<div class="relative">
					<h3 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
						Quick to Get Started, Easy to Grow
					</h3>
					<p class="mt-3 text-xl text-slate-500 dark:text-slate-200">
						All Appwrite SDKs are carefully designed to make developers lives easier:
					</p>

					<ul class="mt-6 space-y-6 text-lg">
						<li class="flex space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-slate-500 dark:text-slate-300"> Simplicity first attitude</span>
						</li>
						<li class="flex space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-slate-500 dark:text-slate-300">Lightweight SDKs</span>
						</li>
						<li class="flex space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-slate-500 dark:text-slate-300"> Verbose documentation</span>
						</li>
						<li class="flex space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-slate-500 dark:text-slate-300">Consistency across platforms</span>
						</li>
						<li class="flex space-x-3">
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-slate-500 dark:text-slate-300">Plays well with others</span>
						</li>
					</ul>
				</div>

				<div
					class="relative -mx-4 mt-10 lg:mt-0 text-slate-700 dark:text-slate-200"
					aria-hidden="true"
				>
					<p>Grab the Appwrite Web SDK:</p>

					<div
						class="ide bg-[#212d63] text-slate-50 w-full block rounded-lg mt-2 mb-8"
						data-lang="bash"
						data-lang-label="Bash"
					>
						<div class="bg-[#1a2652] rounded-t-lg px-4 py-1 flex">
							<span class="text-sm leading-6 text-slate-200 flex items-center grow"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-4 h-4 mr-2 -mt-1"
								>
									<path
										fill-rule="evenodd"
										d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"
										clip-rule="evenodd"
									/>
								</svg>
								Command Line</span
							>
							<button class="text-sm py-1" title="Copy to Clipboard">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-4 h-4"
								>
									<path
										fill-rule="evenodd"
										d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
						<pre class="line-numbers language-bash pl-4 pb-4 pt-2"><code
								class="prism language-javascript">npm install appwrite</code
							></pre>
					</div>

					<p class="mt-6">Configure your SDK and start sending calls:</p>

					<div
						class="ide-no bg-[#212d63] text-slate-50 w-full block rounded-lg"
						data-lang="javascript"
						data-lang-label="Web SDK"
					>
						<div class="bg-[#1a2652] rounded-t-lg px-4 py-1 flex">
							<span class="text-sm leading-6 text-slate-200 flex items-center grow"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-4 h-4 mr-1 -mt-1"
								>
									<path
										fill-rule="evenodd"
										d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
										clip-rule="evenodd"
									/>
								</svg>

								Web SDK
							</span>
							<button class="text-sm py-1" title="Copy to Clipboard">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-4 h-4"
								>
									<path
										fill-rule="evenodd"
										d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
						<pre class="line-numbers language-javascript relative pl-4 overflow-x-scroll"><code
								class="prism language-javascript"
								>{@html websdk_code}
                        </code>
                        </pre>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-slate-50 pt-12 sm:pt-16 dark:bg-slate-900">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
					Join Our Growing Developer Community
				</h2>
				<div class="sm:grid sm:grid-cols-3 pt-2 space-x-4">
					<div>
						<a
							href="https://twitter.com/appwrite"
							class="text-slate-500 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-100 flex flex-col items-center py-8 sm:py-12 rounded-lg hover:bg-sky-100 dark:hover:bg-slate-800"
						>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								stroke="currentColor"
								stroke-width="1.5"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-12 h-12 pb-2 text-[#1DA1F2]"
								><path
									d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
								/></svg
							>
							<span
								>twitter.com<span class="text-[#1DA1F2] dark:text-slate-200">/appwrite</span></span
							>
						</a>
					</div>
					<div>
						<a
							href="https://github.com/appwrite"
							class="text-slate-500 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-100 flex flex-col items-center py-8 sm:py-12 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
						>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								stroke="currentColor"
								stroke-width="1.5"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-12 h-12 pb-2 text-black dark:text-white"
								><path
									d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
								/></svg
							>
							<span>github.com<span class="text-black dark:text-slate-200">/appwrite</span></span>
						</a>
					</div>
					<div>
						<a
							href="https://appwrite.io/discord"
							class="text-slate-500 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-100 flex flex-col items-center py-8 sm:py-12 rounded-lg hover:bg-[#dee4fa] dark:hover:bg-slate-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								class="w-12 h-12 pb-2 text-[#7289da]"
								viewBox="0 0 16 16"
							>
								<path
									d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
								/>
							</svg>
							<span
								>appwrite.io<span class="text-[#7289da] dark:text-slate-200">/discord</span></span
							>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-10 bg-white dark:bg-slate-900 pb-12 sm:pb-16">
			<div class="relative">
				<div class="absolute inset-0 h-1/2 bg-slate-50 dark:bg-slate-900" />
				<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="mx-auto max-w-5xl">
						<dl
							class="rounded-lg bg-white dark:bg-slate-800 shadow-md sm:grid sm:grid-cols-2 lg:grid-cols-4"
						>
							<div
								class="flex flex-col border-b border-slate-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-r"
							>
								<dt
									class="order-2 mt-2 text-lg font-medium leading-6 text-slate-500 dark:text-slate-300"
								>
									Stars
								</dt>
								<dd class="order-1 text-3xl font-bold tracking-tight text-primary dark:text-white">
									+24,302
								</dd>
							</div>
							<div
								class="flex flex-col border-t border-b border-slate-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-l sm:border-r"
							>
								<dt
									class="order-2 mt-2 text-lg font-medium leading-6 text-slate-500 dark:text-slate-300"
								>
									Forks
								</dt>
								<dd class="order-1 text-3xl font-bold tracking-tight text-primary dark:text-white">
									+3,537
								</dd>
							</div>
							<div
								class="flex flex-col border-t border-slate-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-l"
							>
								<dt
									class="order-2 mt-2 text-lg font-medium leading-6 text-slate-500 dark:text-slate-300"
								>
									Pull Requests
								</dt>
								<dd class="order-1 text-3xl font-bold tracking-tight text-primary dark:text-white">
									+5,345
								</dd>
							</div>
							<div
								class="flex flex-col border-t border-slate-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-l"
							>
								<dt
									class="order-2 mt-2 text-lg font-medium leading-6 text-slate-500 dark:text-slate-300"
								>
									Commits
								</dt>
								<dd class="order-1 text-3xl font-bold tracking-tight text-primary dark:text-white">
									+10,800
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="relative dark:bg-slate-900">
		<div class="mx-auto max-w-5xl text-center py-20 px-2">
			<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
				Integrate with Your Favorite Technologies
			</h2>
			<p class="mt-3 text-xl text-slate-500 sm:mt-4">
				Cross-platform and language agnostic. Designed to work well from your frontend or backend.
			</p>
			<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
				<div>
					<a
						href="https://appwrite.io/docs/sdks#client"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Web SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0"
							src="/web.svg"
							alt="Web SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#client"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Flutter SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:brightness-0 dark:invert dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0"
							src="/flutter.svg"
							alt="Flutter SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#client"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Apple SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0  dark:invert"
							src="/apple.svg"
							alt="Apple iOS SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#client"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Android SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 "
							src="/android.svg"
							alt="Android SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Node SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 "
							src="/nodejs.svg"
							alt="NodeJS SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Deno SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0  dark:invert"
							src="/deno.svg"
							alt="Deno SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">PHP SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 dark:invert dark:brightness-0 group-hover:invert-0 group-hover:brightness-100 "
							src="/php.svg"
							alt="PHP SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Python SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 "
							src="/python.svg"
							alt="Python SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Ruby SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 "
							src="/ruby.svg"
							alt="Ruby SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Dart SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 "
							src="/dart.svg"
							alt="Dart SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Kotlin</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 dark:invert group-hover:invert-0"
							src="/kotlin.svg"
							alt="Kotlin SDK"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://appwrite.io/docs/sdks#server"
						class="hover:bg-slate-100 dark:hover:bg-slate-800 block py-8 rounded-lg group"
					>
						<span class="sr-only">Swift SDK</span>
						<img
							class="w-16 h-16 m-auto dark:grayscale dark:contrast-200 group-hover:contrast-100 group-hover:grayscale-0 dark:invert group-hover:invert-0"
							src="/swift.svg"
							alt="Swift SDK"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
		<div
			class="rounded-lg bg-slate-100 dark:bg-slate-800 px-6 py-24 md:py-12 md:px-12 z-20 relative"
		>
			<div class="">
				<h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
					Stay up to Date with All the Latest News and Announcements
				</h2>
			</div>
			<div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
				<div class="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
					<div class="relative sm:static sm:flex-auto">
						<input
							type="email"
							id="email-address"
							required=""
							aria-label="Email address"
							placeholder="Email address"
							class="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-slate-500 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none sm:py-3 autofill-none"
						/>
						<div
							class="absolute inset-0 rounded-md border border-primary/50 peer-focus:border-primary peer-focus:bg-primary/10 peer-focus:ring-1 peer-focus:ring-pink-300 sm:rounded-xl"
						/>
					</div>
					<button
						class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-primary hover:text-primary_light focus-visible:text-pink-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-200 active:bg-pink-50 active:text-primary/80 disabled:opacity-40 disabled:hover:text-primary mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
						type="submit">Subscribe</button
					>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.autofill-none:-webkit-autofill {
		margin-left: 1px;
		-webkit-box-shadow: 0 0 0px 1000px #f1f5f9 inset;
		border-radius: 12px 0 0 12px;
	}
</style>
