# bb2man

## Introduction

A Progressive Web App (PWA) dedicated to celebrating the special dates and milestones in my relationship with my girlfriend. It’s a digital keepsake to revisit the sweetness and happiness of our story.

## Folder structure

```bash
├── app                 # react app
│   ├── public          # public files
│   │   └── icons       # pwa icons
│   └── src
│       ├── assests
│       ├── components  # ui components
│       ├── contexts    # react contexts
│       └── styles      # css files
└── cms                 # strapi cms
    ├── config          # api configurations
    ├── database
    │   └── migrations
    ├── public          # public files
    │   └── uploads
    ├── src
    │   ├── admin       # admin customization
    │   ├── api         # api business logic
    │   │   └── ...
    │   └── extensions
    └── types
        └── generated
```

## Tech stack

- [React](https://react.dev/) with [Vite](https://vite.dev/) for the frontend app
- [Tailwind CSS](https://tailwindcss.com/) for UI styling
- [Strapi](https://strapi.io/) for content management
- [SQLite](https://www.sqlite.org/) for database

## Requirements

- [Node.js](https://nodejs.org/)
    - `v18` or `v20` as of Feb 2025
    - Strapi supports only Active LTS or Maintenance LTS versions
- [Yarn](https://yarnpkg.com/), just my preferred package manager
- [Python](https://www.python.org/) for SQLite database under the hood
- [Docker](https://www.docker.com/) for easy deployment

## Development

Terminal multiplexer like [tmux](https://github.com/tmux/tmux/wiki) is recommended for convenient development.

### React app

1. Switch to `app` directory
```bash
cd app
```

2. Install packages an run development server
```bash
yarn install
yarn dev
```

### Strapi CMS

1. Switch to `cms` directory
```bash
cd cms
```

2. Install packages and run development server
```bash
yarn install
yarn develop
```

## Deployment

### Prerequisites

- Docker [registry](https://hub.docker.com/_/registry) set up on VPS
- SSL certificate configured for registry's domain
- Replace `<registry-domain>` in `docker-compose.yml` and the following steps with the domain of the private registry

### On local machine

1. Build docker images
```bash
docker build -t <registry-domain>/bb2man-react:latest app/
docker build -t <registry-domain>/bb2man-strapi:latest cms/
```

2. Push images to VPS registry
```bash
docker push <registry-domain>/bb2man-react:latest
docker push <registry-domain>/bb2man-strapi:latest
```

### On VPS

1. Create a directory for the project and switch to it
```bash
mkdir bb2man
cd bb2man
```

2. Create `docker-compose.yml` and paste the content (copied from `docker-compose.yml` in this repo)
```bash
nano docker-compose.yml
```

3. Pull images and start services
```bash
docker compose pull
docker compose up -d
```
