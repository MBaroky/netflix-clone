import { PrismaClient } from "@prisma/client";

declare global {
    namespace globalThis {
        var prismadb:PrismaClient
    }
}

// global.d.ts
declare module 'shaka-player' {
  export = shaka;
}

declare namespace shaka {
  // Define necessary types and interfaces here, e.g.:
  class Player {
    constructor(videoElement: HTMLMediaElement);
    load(manifestUri: string): Promise<void>;
    destroy(): Promise<void>;
    // Add other methods and properties as needed
  }

  namespace ui {
    class Overlay {
      constructor(player: Player, videoContainer: HTMLElement, video: HTMLMediaElement);
      // Add other methods and properties as needed
    }
  }

  namespace util {
    // Add utility functions if needed
  }

  namespace media {
    // Add media-related types if needed
  }

  // Add other namespaces and classes as required for your usage
}