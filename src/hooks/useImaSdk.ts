import Player from "video.js/dist/types/player";
import 'videojs-contrib-ads';
import 'videojs-ima';

export const buildImaSdk = () => {
    const script = document.createElement("script");

    script.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
    script.async = true;
    script.onload = () => {
    console.log("IMA SDK loaded");
    };

    const load = () => {
        document.body.appendChild(script);
    }

    const unload = () => {
        document.body.removeChild(script);
    }
    return { load, unload };
}
type Options = {
    adTagUrl: string;
    adsManagerLoaded?: (event: any) => void;
}
export const runIma = (player:Player, options:Options) => {
    console.log("Running IMA");
    (player as any).ima(options);
}