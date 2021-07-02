

<p align="center">
    <a href="https://docs.airnativeextensions.com/" rel="noopener" target="_blank">
        <img width="150" 
            src="https://raw.githubusercontent.com/airnativeextensions/nativeextensions-documentation/master/static/img/ane-icon-black.png" 
            alt="ANE logo">
    </a>
</p>

<h1 align="center">docs.airnativeextensions.com</h1>

<div align="center">
    Source for the docs.airnativeextensions.com site. Site for developer news, information, tutorials, guides and reference for using distriqt's native extensions.
</div>

---

    [![deploy](https://github.com/airnativeextensions/nativeextensions-documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/airnativeextensions/nativeextensions-documentation/actions/workflows/deploy.yml)


---



## Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.


## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
