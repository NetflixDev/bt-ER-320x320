import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import CanvasIris from '@common/js/CanvasIris.js'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'
import baseInit from './baseInit.js'

export { sideBySideInit, cornerInit, oneLineInit }

function sideBySideInit(T) {
	baseInit(T, { logoWidth: 111, ctaWidth: 111, ctaHeight: 28 })
}

function cornerInit(T) {
	const extraCtaLogoInit = (cta, logo) => {
		cta.setAttribute('min-font-size', 6)
	}
	baseInit(T, { logoWidth: 95, ctaWidth: 94, ctaMaxWidth: 94, ctaHeight: 25, extraCtaLogoInit })
}

function oneLineInit(T) {
	baseInit(T, { logoWidth: 88, ctaWidth: 88, ctaMaxWidth: 90, ctaHeight: 24 })
}
