// work.html pop-up windows
document.getElementById('itsy-bitsy').addEventListener('click', () => {
    const winWidth = 500;
    const winHeight = 750;
    const left = Math.round((screen.width - winWidth) / 2);
    const top = Math.round((screen.height - (winHeight + 100) ) / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                width=${winWidth},height=${winHeight},left=${left},top=${top}`;
    let newWin = window.open("/work/itsy-preview.html", "itsy-bitsy", params);
    newWin.document.close();
});


document.getElementById('weidao-house').addEventListener('click', () => {
    const winWidth = 1200;
    const winHeight = 700;
    const left = Math.round((screen.width - winWidth) / 2);
    const top = Math.round((screen.height - (winHeight + 100) ) / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                width=${winWidth},height=${winHeight},left=${left},top=${top}`;
    let newWin = window.open("http://weidao.house/", "itsy-bitsy", params);
    newWin.document.close();
});

document.getElementById('hao-qiu').addEventListener('click', () => {
    const winWidth = 1200;
    const winHeight = 700;
    const left = Math.round((screen.width - winWidth) / 2);
    const top = Math.round((screen.height - (winHeight + 100) ) / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                width=${winWidth},height=${winHeight},left=${left},top=${top}`;
    let newWin = window.open("/work/hao-qiu-preview.html", "itsy-bitsy", params);
    newWin.document.close();
});

