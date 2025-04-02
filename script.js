1let isSpanish = true;
2
3function toggleLanguage() {
4    const title = document.querySelector('h1');
5    const subtitle = document.querySelector('h2');
6    const mainText = document.querySelectorAll('h3, h4');
7    const button = document.getElementById('languageButton');
8
9    if (isSpanish) {
10        title.textContent = "PULSES";
11        subtitle.textContent = "International Meeting of Performing Arts";
12        mainText[0].textContent = "COMING SOON";
13        mainText[1].textContent = "JUNE 2025";
14        mainText[2].textContent = "LA PAZ - BOLIVIA";
15        button.textContent = "Switch to Spanish";
16    } else {
17        title.textContent = "PULSOS";
18        subtitle.textContent = "Encuentro Internacional de Artes Escénicas";
19        mainText[0].textContent = "PRÓXIMAMENTE";
20        mainText[1].textContent = "JUNIO 2025";
21        mainText[2].textContent = "LA PAZ - BOLIVIA";
22        button.textContent = "Cambiar a Inglés";
23    }
24
25    isSpanish = !isSpanish;
26}
