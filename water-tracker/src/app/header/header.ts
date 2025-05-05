const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40mm" height="30mm" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 4000 3000"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2163097661776">
   <polygon fill="#ffffff" points="145.5,2155.43 1887.05,221.28 2261.4,645.49 1370.11,1634.9 2137.33,1634.9 2640.94,1075.58 3020.7,1505.91 2435.85,2155.43 "/>
   <polygon fill="#ffffff" points="3138.57,1939.54 2435.85,2719.98 3841.3,2719.98 "/>
   <polygon fill="#ffffff" fill-rule="nonzero" points="503.85,2792.85 417.74,2792.85 417.74,2719.41 152.68,2719.41 152.68,2399.68 247.06,2399.68 247.06,2659.16 373.9,2659.16 373.9,2399.68 468.27,2399.68 468.27,2659.16 503.85,2659.16 "/>
   <polygon id="_1" fill="#ffffff" fill-rule="nonzero" points="869.62,2719.41 775.25,2719.41 775.25,2577.8 647.37,2577.8 647.37,2719.41 553,2719.41 553,2399.68 647.37,2399.68 647.37,2516.67 775.25,2516.67 775.25,2399.68 869.62,2399.68 "/>
   <polygon id="_2" fill="#ffffff" fill-rule="nonzero" points="1270.88,2719.41 1178.06,2719.41 1178.06,2508.75 1034.28,2719.41 947.04,2719.41 947.04,2399.68 1039.87,2399.68 1039.87,2590.11 1172.82,2399.68 1270.88,2399.68 "/>
   <polygon id="_3" fill="#ffffff" fill-rule="nonzero" points="1670.68,2719.41 1577.87,2719.41 1577.87,2508.75 1434.08,2719.41 1346.85,2719.41 1346.85,2399.68 1439.67,2399.68 1439.67,2590.11 1572.62,2399.68 1670.68,2399.68 "/>
   <polygon id="_4" fill="#ffffff" fill-rule="nonzero" points="1818.84,2719.41 1818.84,2460.81 1707.98,2460.81 1707.98,2399.68 2024.08,2399.68 2024.08,2460.81 1913.21,2460.81 1913.21,2719.41 "/>
   <path fill="#ffffff" fill-rule="nonzero" d="M2421.32 2399.68l-125.13 255.59c-7.4,14.88 -15.73,26.61 -24.84,35.19 -9.12,8.57 -18.74,15.1 -28.79,19.57 -10.14,4.4 -20.2,7.4 -30.25,8.87 -10.06,1.54 -20.64,2.27 -31.72,2.27 -11.6,0 -25.09,-0.22 -40.39,-0.66 -15.38,-0.44 -25.61,-0.81 -30.85,-1.25l0 -67.58 5.76 0c1.55,0.3 3.86,0.59 7.05,1.03 3.17,0.44 7.21,0.8 12.11,1.24 4.04,0.3 8.42,0.59 13.06,0.81 4.72,0.29 9.03,0.44 12.9,0.44 11.17,0 21.83,-1.17 31.79,-3.59 9.97,-2.35 16.68,-6.45 20.03,-12.24l-138.8 -239.69 101.76 0 80.44 150.12 68.06 -150.12 97.81 0z"/>
  </g>
 </g>
</svg>`;

function createHeader(): HTMLElement {
  const container = document.createElement('header');
  container.className = 'header-container';

  const logo = document.createElement('img');
  logo.src = '/logo.svg';

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  const textHeader = document.createElement('h1');
  textHeader.textContent = 'Трекер воды';

  const text = document.createElement('b');
  text.textContent = 'отдел 308';

  container.innerHTML = logoSvg;
  textContainer.append(textHeader, text);
  container.append(textContainer);


  return container;
}

export { createHeader };
