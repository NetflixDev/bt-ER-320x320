import verticalSideBySide from "./verticalSideBySide.js";
import verticalStacked from "./verticalStacked.js";
import verticalOneLine from "./verticalOneLine.js";
import { Align } from "ad-view";

export {
  sideBySidePostMarkup,
  cornerLeftPostMarkup,
  cornerRightPostMarkup,
  oneLinePostMarkup
};

function sideBySidePostMarkup() {
  verticalSideBySide({
    ctaLogoOffset: 13,
    tuneInFontSize: 16,
    tuneInLockupOffset: 15,
    brandingLockupAlign: {
      x: Align.CENTER,
      y: {
        type: Align.BOTTOM,
        offset: -16
      }
    }
  });
}

function cornerLeftPostMarkup() {
  verticalStacked({
    tuneInFontSize: 16,
    brandingLockupOffset: 11,
    brandingLockupElemXAlign: Align.CENTER,
    brandingLockupAlign: {
      x: {
        type: Align.LEFT,
        offset: 16
      },
      y: {
        type: Align.BOTTOM,
        offset: -16
      }
    }
  });
}

function cornerRightPostMarkup() {
  verticalStacked({
    tuneInFontSize: 16,
    brandingLockupOffset: 11,
    brandingLockupElemXAlign: Align.CENTER,
    brandingLockupAlign: {
      x: {
        type: Align.RIGHT,
        offset: -16
      },
      y: {
        type: Align.BOTTOM,
        offset: -16
      }
    }
  });
}

function oneLinePostMarkup() {
  verticalOneLine({
    brandingLockupOffset: 11,
    tuneInFontSize: 14,
    brandingLockupAlign: {
      x: Align.CENTER,
      y: {
        type: Align.TOP,
        against: 275
      }
    }
  });
}
