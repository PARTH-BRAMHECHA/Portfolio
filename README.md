# Developer Portfolio

A modern, responsive portfolio template built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## Overview

This project is a developer portfolio website template designed for easy customization and deployment.
It includes a responsive UI, a contact form with notification support, blog integration, and Docker-ready configuration.

## Features

- Responsive layout for desktop and mobile
- App Router architecture with server components
- Contact form with email and Telegram integration
- Blog content fetched from dev.to
- Easy customization via data files
- Docker support for containerized deployment

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Sass
- Lottie animations
- Axios
- Nodemailer
- React Toastify
- Sharp

## Installation

### Prerequisites

- Node.js 18.17 or newer
- Git
- pnpm or npm

### Setup

```powershell
cd "C:\Users\ASUS Vivobook\Desktop\developer-portfolio"
npm install
```

If you use pnpm:

```powershell
pnpm install
```

### Environment Variables

Copy the example file and add your values:

```powershell
copy .env.example .env
```

Edit `.env` with the following variables:

```env
NEXT_PUBLIC_GTM=GTM-XXXXXXX
NEXT_PUBLIC_APP_URL=https://your-domain.com
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email@gmail.com
```

## Running Locally

```powershell
npm run dev
```

Or with pnpm:

```powershell
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Customization

Update the portfolio content inside `utils/data/`:

- `personal-data.js`
- `experience.js`
- `projects-data.js`
- `skills.js`
- `educations.js`
- `contactsData.js`
- `publication-data.js`

Place images in the `public/` folder and update file paths in the data files.

## Deployment

### Vercel

1. Create a new Vercel project.
2. Connect your GitHub repository.
3. Set environment variables in Vercel settings.
4. Deploy.

## Notes

- Keep `.gitignore` as-is to avoid committing build output and dependencies.
- Do not push `.env` or local secret files.

## License

This repository is available under the MIT License.
