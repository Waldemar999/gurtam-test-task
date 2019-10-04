import ajaxReq from './ajaxReq.js';

document.querySelector('#get-date').addEventListener('click', async () => {
    await ajaxReq();
});