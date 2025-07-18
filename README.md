<img src=".github/assets/SOCIAL_PREVIEW_v2.png" alt="Music app screen previews" />

# Music

![Android-API][Android-API]
[![Release][Release]][Release-url]
[![Pre-release][Pre-release]][Pre-release-url]
[![License][License]][License-url]
![GitHub-Downloads][GitHub-Downloads]

A Nothing inspired **local** music player.

[<img height="80" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />](https://play.google.com/store/apps/details?id=com.cyanchill.missingcore.music)
[<img height="80" alt="Get it on GitHub" src="./.github/assets/get-it-on-github.png" />](https://github.com/MissingCore/Music/releases)

**The default branch (`dev`) is the development version of the repository. For the stable version, see the `main` branch.**

## Features

- Supports Android 7+
- Works with Nothing Music Widget & Glyph Music Visualization
- Diverse music organization: Albums, Artists, Favorites, Folder Structure, Playlists
- Artwork customizability for: Albums, Artists, Playlists (long-press the artwork on their screen)
- Background playback w/ media control notification
- Queues
- Theoretical support of [these media formats](https://developer.android.com/media/platform/supported-formats#audio-formats)
- [Community translations](#translations)

# Design

The current version of Music is inspired by the designs presented in the [`Introducing Ear (open) and OS 3.0` video](https://youtu.be/eV3Ch2lEr9Q?si=nof-tZ135NuI04eX).

> [!NOTE]  
> This app is designed to work best on "phone" layouts and isn't tested for larger screens (ie: tablets). We may improve the layout for larger screens in the future.

> [!IMPORTANT]  
> Be careful when clearing the cache of the app as if you accidentally clear the storage, all the data in the app will be deleted (ie: playlists, favorited tracks, artwork).

## Version 1

Version 1 of Music is based on the design seen in this [comment on the Nothing Community forums](https://nothing.community/d/1825-nothing-music-player-app/2), created by [Alkid Shuli (alKid)](https://bento.me/alkid).

<details>
  <summary>Version 1 Promotional Image & Design</summary>
  <img src="./.github/assets/SOCIAL_PREVIEW_v1.png" alt="Promotional image used for version 1 of the app, showcasing some of the old design.">
</details>

## Built With

[![React Native][React Native]][React Native-url]
[![Expo][Expo]][Expo-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![Zustand][Zustand]][Zustand-url]
[![React Query][React Query]][React Query-url]
[![React Native Track Player][React Native Track Player]][React Native Track Player-url]
[![Tailwind CSS][Tailwind CSS]][Tailwind CSS-url]
[![Drizzle][Drizzle]][Drizzle-url]

## Permissions

This (hopefully) lists out all the permissions required by Music based on the permissions asked in the code and values listed out in the [App Manifest](./mobile/android/app/src/main/AndroidManifest.xml).

|          | Permissions                                                                                                                                                                                                                                                                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Popups   | - Music and Audio ([Android 13+](https://developer.android.com/reference/android/Manifest.permission#READ_MEDIA_AUDIO))<br/>- Files & Media (Android <13)                                                                                                                                                                                                                                   |
| Implicit | - Read External Storage; for reading Music & Audio Files ([unused in Android 13+](https://developer.android.com/reference/android/Manifest.permission#READ_EXTERNAL_STORAGE))<br/>- Write to External Storage ([unused in Android 11+](https://developer.android.com/reference/android/Manifest.permission#WRITE_EXTERNAL_STORAGE))<br/>- Internet (only used for checking for new updates) |

# Documentation

See all the [available documentation here](./docs). Some highlights include:

- [`Building this App`](./docs/building-this-app.md)
- [`Nothing Interactions`](./docs/nothing-interactions.md)
- [`Supported Gestures`](./docs/supported-gestures.md)

# Translations

Read the [Translations](./docs/translations.md) documentation for a rundown of how to contribute translations to this app.

The [full list of translators can be found here](./TRANSLATORS.md). A huge thanks to the early translators prior to our move to Crowdin:

| Translation |                      Translator                      |
| :---------: | :--------------------------------------------------: |
|   日本語    |   [@reindex-ot](https://www.github.com/reindex-ot)   |
|   Deutsch   |    [@The-Ladle](https://www.github.com/The-Ladle)    |
|  Indonesia  | [@naturbrilian](https://www.github.com/naturbrilian) |
|   Español   |        [@G4b-0](https://www.github.com/G4b-0)        |
|  Français   |        [@nin7o](https://www.github.com/nin7o)        |
|  简体中文   |     [@yang1206](https://www.github.com/yang1206)     |
|   Русский   |     [@klinoff0](https://www.github.com/klinoff0)     |
|   Türkçe    |   [@mikropsoft](https://www.github.com/mikropsoft)   |
|   Català    |      [@T-K-Y-M](https://www.github.com/T-K-Y-M)      |
|    हिंदी    |    [@OxSourabh](https://www.github.com/OxSourabh)    |

# Legal

This application and code is published under the GNU Affero General Public License v3.0 (https://github.com/MissingCore/Music/blob/main/LICENSE).

Nothing Technology Limited or any of its affiliates, subsidiaries, or related entities (collectively, "Nothing Technology") is a valid licensee and can use this app for any purpose, including commercial purposes, without compensation to the developers of this app. Nothing Technology is not required to comply with the terms of the GNU Affero General Public License v3.0.

This app is developed by cyanChill and is not affiliated with, funded, authorized, endorsed by, or in any way associated with Nothing Technology or any of its affiliates and subsidiaries. Any trademark, service mark, trade name, or other intellectual property rights used in this project are owned by the respective owners.

## Licenses of Used Dependencies

Refer to [THIRD_PARTY.md](./THIRD_PARTY.md).

## License

[AGPL-3.0](./LICENSE)

## Privacy Policy

[Privacy Policy Link](./PRIVACY_POLICY.md)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Drizzle]: https://img.shields.io/static/v1?style=for-the-badge&message=Drizzle&color=222222&logo=Drizzle&logoColor=C5F74F&label=
[Drizzle-url]: https://orm.drizzle.team/
[Expo]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=Expo&logoColor=FFFFFF
[Expo-url]: https://docs.expo.dev/
[React Native]: https://img.shields.io/badge/React_Native-222222?style=for-the-badge&logo=React&logoColor=61DAFB
[React Native-url]: https://reactnative.dev/
[React Native Track Player]: https://img.shields.io/badge/React_Native_Track_Player-7253ed?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAVCAYAAACt4nWrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgBjVXRccIwDDUc/2SDZgR3ArIBbECYADpB0gnCBqYTABMEJoBOQDpBsoErkWciHMPFdzrZlvQsPSuOUoFhrd2Q1BBDEnv2mKQQPrkaMsgxIbmRRADJALCBPYU9Ez68ToaAc1AWyJQBSug4EFP4WOMAPgdWcmM0GvH6QJKQ7LCW448kGgLe4ACZWUJqAfA0QMGHn9Ar8F8HDjoY1JAcAc56j7vRiNEh8EkgQ43sFqiCyz2RTElq6CtJyRoHNIg/9yhDhiW6wrXY3HUGfDJ5kTS/cAIMjks20PuHnzCuRWAG4f0ZKKixXroqBVghYjfY1wqTuVcJ9y8PI4BK0ZIXUa0NtCb7X8bg9CyNxFsDHitvn9cr1V74TLXt2QRas7rfHTg2nK04ObXdpx15FDiqIlFF4lW9e1CFA+58wrjH3IB7jfIzlwTpHPYU9HDcGjjPXyuyMbYbBQItMo9EZhpV5SLmhkNmDxo9rjiY+zsDnxp3kqiu552+QhrYc+L+KLEmqj/4Uz6R47c4cEeqpr0vmm9pPqX5StiZhtgHCoGzU+Xt8XPLJZewf3r2ClU+jdDb0nvd0Jon1ZZ/wNofzRDwq8wCF7gFMMvC9v9OGnHvh+hfY7t3pvC6pfB8bt5hbcUvDmDHJUr9CdEAH/dsBH3+AWtRo7d9AnSYAAAAAElFTkSuQmCC
[React Native Track Player-url]: https://rntp.dev/
[React Query]: https://img.shields.io/static/v1?style=for-the-badge&message=React+Query&color=FF4154&logo=React+Query&logoColor=FFFFFF&label=
[React Query-url]: https://tanstack.com/query/latest
[Tailwind CSS]: https://img.shields.io/badge/Tailwind_CSS-222222?style=for-the-badge&logo=Tailwind+CSS&logoColor=06B6D4
[Tailwind CSS-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFFFFF
[TypeScript-url]: https://www.typescriptlang.org/
[Zustand]: https://img.shields.io/badge/Zustand-101417?style=for-the-badge&logo=data:image/png;base64,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
[Zustand-url]: https://zustand.docs.pmnd.rs/

[Android-API]: https://img.shields.io/badge/API-24%2B-A4C639?style=for-the-badge&logo=Android&labelColor=555555
[Release]: https://img.shields.io/github/v/release/MissingCore/Music?style=for-the-badge
[Release-url]: https://github.com/MissingCore/Music/releases/latest
[Pre-release]: https://img.shields.io/github/v/release/MissingCore/Music?style=for-the-badge&include_prereleases&label=Pre-release
[Pre-release-url]: https://github.com/MissingCore/Music/releases
[License]: https://img.shields.io/github/license/MissingCore/Music?style=for-the-badge
[License-url]: https://github.com/MissingCore/Music/blob/dev/LICENSE
[GitHub-Downloads]: https://img.shields.io/github/downloads/MissingCore/Music/total?style=for-the-badge&logo=GitHub
