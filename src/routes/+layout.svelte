<script lang="ts">
  // https://flowbite-svelte.com/docs/components/sidebar
  // https://github.com/shinokada/flowbite-sveltekit-responsive-sidebar-layout
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";
  import {
    ChartPieSolid,
    GridSolid,
    MailBoxSolid,
    UserSolid,
    ArrowRightToBracketOutline,
    EditOutline,
  } from "flowbite-svelte-icons";

  import "../app.css";
  let { children } = $props();
  let spanClass = $state("flex-1 ms-3 whitespace-nowrap");
  import { page } from "$app/stores";

  let activeUrl = $page.url.pathname;
</script>

<Navbar>
  <NavBrand href="/">
    <!-- <img
      src="/images/flowbite-svelte-icon-logo.svg"
      class="me-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    /> -->
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Example</span
    >
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
</Navbar>
<div class="h-screen flex">
  <Sidebar {activeUrl} class="h-full">
    <SidebarWrapper
      divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800"
    >
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          <svelte:fragment slot="icon">
            <ChartPieSolid
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass}>
          <svelte:fragment slot="icon">
            <GridSolid
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              Pro
            </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass}>
          <svelte:fragment slot="icon">
            <MailBoxSolid
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
            >
              3
            </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/" active={activeUrl === "/sidebar"}>
          <svelte:fragment slot="icon">
            <UserSolid
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign In">
          <svelte:fragment slot="icon">
            <ArrowRightToBracketOutline
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign Up">
          <svelte:fragment slot="icon">
            <EditOutline
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  <!-- Main Content -->
  <div class="flex px-4 mx-auto w-full">
    <main class="lg:ml-72 w-full mx-auto">
      {@render children()}
    </main>
  </div>
</div>
