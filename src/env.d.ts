/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/client" />

interface EventData {
  [key: string]: number | string | EventData | number[] | string[] | EventData[]
}

type UmamiTracker = {
  track: {
    (event: string): Promise<string>
    (eventName: string, obj: EventData): Promise<string>
  }
}

declare global {
  interface Window {
    umami: UmamiTracker
  }
}
