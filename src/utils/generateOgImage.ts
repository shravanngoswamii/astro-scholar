import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';

async function loadGoogleFont(font: string, text: string) {
    const API = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(API, {
        headers: { "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1" }
    })).text();
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
    if (!resource) throw new Error("Failed to download dynamic font");
    const res = await fetch(resource[1]);
    return res.arrayBuffer();
}

export async function generateOgImage(title: string, subtitle: string) {
    const textToLoad = title + subtitle + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const fontDataRegular = await loadGoogleFont("Inter", textToLoad);
    const fontDataBold = await loadGoogleFont("Inter:wght@700", textToLoad);

    const markup = html`
        <div style="background: #111111; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
            <div style="display: flex; position: absolute; top: -100px; right: -100px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(162,132,94,0.15) 0%, transparent 70%); flex: none;"></div>
            <div style="display: flex; position: absolute; bottom: -50px; left: -50px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%); flex: none;"></div>
            
            <div style="border: 2px solid rgba(162,132,94,0.3); position: absolute; top: 40px; bottom: 40px; left: 40px; right: 40px; border-radius: 12px; display: flex; flex: none;"></div>
            
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 100px; width: 100%;">
                <div style="display: flex; color: #a2845e; font-size: 24px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 24px;">
                    Academic Portfolio
                </div>
                <div style="display: flex; color: #ffffff; font-size: 64px; font-weight: 700; line-height: 1.2; max-height: 240px; overflow: hidden; margin-bottom: 32px;">
                    ${title}
                </div>
                <div style="display: flex; color: rgba(255,255,255,0.6); font-size: 32px; font-weight: 400;">
                    ${subtitle}
                </div>
            </div>
        </div>
    `;

    const svg = await satori(markup, {
        width: 1200,
        height: 630,
        fonts: [
            { name: "Inter", data: fontDataRegular, weight: 400, style: "normal" },
            { name: "Inter", data: fontDataBold, weight: 700, style: "normal" }
        ],
    });

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    return new Uint8Array(pngData.asPng());
}
