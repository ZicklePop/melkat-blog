/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/client" />

type UmamiTracker = {
  track: {
    (event: string): Promise<string>
  }
}

declare global {
  interface Window {
    umami: UmamiTracker
  }
}

export {}
