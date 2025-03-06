// src/types/google-ima.d.ts
declare namespace google {
    namespace ima {
      class AdsLoader {
        constructor(container: AdDisplayContainer);
        requestAds(request: AdsRequest): void;
        addEventListener(
          eventType: string,
          listener: (event: AdsManagerLoadedEvent) => void
        ): void;
      }

      class AdsManager {
        init(width: number, height: number, viewMode: string): void;
        start(): void;
      }

      class AdDisplayContainer {
        constructor(element: HTMLElement, videoElement: HTMLMediaElement);
        initialize(): void;
      }

      class AdsRequest {
        adTagUrl: string;
      }

      namespace AdsManagerLoadedEvent {
        const Type: {
          ADS_MANAGER_LOADED: string;
        };
      }

      enum ViewMode {
        NORMAL,
      }
    }
  }
