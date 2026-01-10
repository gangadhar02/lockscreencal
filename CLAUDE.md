# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Life Calendar is a Next.js application that generates dynamic iPhone lock screen wallpapers displaying a visual countdown toward a goal. Users configure their goal, date range, and iPhone model, then set up an iOS Shortcut automation that fetches a fresh wallpaper image daily.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Architecture

The app uses Next.js 14 with the App Router and consists of two main parts:

**Frontend (`app/page.tsx`)**: A client-side React component that provides a configuration UI for:
- Goal name and motivational quote
- Start date and deadline
- iPhone model selection (determines wallpaper dimensions)
- Generates a URL for iOS Shortcuts to fetch

**Image Generation API (`app/goal/route.tsx`)**: An Edge Runtime route that uses `@vercel/og` (Satori) to generate PNG wallpaper images on-the-fly. Takes URL parameters:
- `goal`, `quote` - Text to display
- `start_date`, `goal_date` - Date range for countdown
- `width`, `height` - iPhone screen dimensions

The wallpaper displays a dot grid where each dot represents a day: completed days in light gray, current day in orange, remaining days in dark gray.

## Key Implementation Details

- The dot grid uses 15 columns with dynamically calculated rows based on total days
- Font is Bebas Neue, loaded from jsDelivr CDN at runtime
- Day calculations include the start day (total days uses +1 offset)
- Content is positioned with top padding to avoid iOS lock screen widgets
