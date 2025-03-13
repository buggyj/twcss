/*\
title: $/bj/macros/tocss.js
type: application/javascript
module-type: macro

Macro to return a formatted version of the current time

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "tocss";

exports.params = [
	{name: "classes"}
];
const spacing = (value) => `${value * 0.25}rem`; 

const tailwindToStyle = (classString) => {
  return classString.split(' ').map(cls => {
    if (/^h-(\d+)$/.test(cls)) return `height: ${spacing(cls.replace('h-', ''))};`;
    if (/^w-(\d+)$/.test(cls)) return `width: ${spacing(cls.replace('w-', ''))};`;
    if (/^p-(\d+)$/.test(cls)) return `padding: ${spacing(cls.replace('p-', ''))};`;
    if (/^m-(\d+)$/.test(cls)) return `margin: ${spacing(cls.replace('m-', ''))};`;
    if (/^text-(left|center|right|justify|start|end)$/.test(cls)) return `text-align: ${cls.replace('text-', '')};`;
    if (/^overflow-(auto|hidden|scroll|visible)$/.test(cls)) return `overflow: ${cls.replace('overflow-', '')};`;
    if (/^shadow-(sm|md|lg|xl|2xl|inner|none)$/.test(cls)) return `box-shadow: ${cls.replace('shadow-', '')};`;
    if (/^object-(contain|cover|fill|none|scale-down)$/.test(cls)) return `object-fit: ${cls.replace('object-', '')};`;
    if (/^object-(top|center|bottom|left|right)$/.test(cls)) return `object-position: ${cls.replace('object-', '')};`;
    if (/^(block|inline-block|inline|hidden|table|table-cell)$/.test(cls)) return `display: ${cls};`;
    if (/^float-(left|right|none)$/.test(cls)) return `float: ${cls.replace('float-', '')};`;
    if (/^clear-(left|right|both|none)$/.test(cls)) return `clear: ${cls.replace('clear-', '')};`;
    if (/^(relative|absolute|fixed|sticky)$/.test(cls)) return `position: ${cls};`;
    if (/^top-(\d+)$/.test(cls)) return `top: ${spacing(cls.replace('top-', ''))};`;
    if (/^right-(\d+)$/.test(cls)) return `right: ${spacing(cls.replace('right-', ''))};`;
    if (/^bottom-(\d+)$/.test(cls)) return `bottom: ${spacing(cls.replace('bottom-', ''))};`;
    if (/^left-(\d+)$/.test(cls)) return `left: ${spacing(cls.replace('left-', ''))};`;
    if (/^z-(\d+)$/.test(cls)) return `z-index: ${cls.replace('z-', '')};`;
    if (/^leading-(\d+)$/.test(cls)) return `line-height: ${spacing(cls.replace('leading-', ''))};`;
    if (/^tracking-(\w+)$/.test(cls)) return `letter-spacing: ${cls.replace('tracking-', '')};`;
    if (/^box-(border|content)$/.test(cls)) return `box-sizing: ${cls.replace('box-', '')};`;
    if (/^flex-grow$/.test(cls)) return `flex-grow: 1;`;
    if (/^flex-grow-0$/.test(cls)) return `flex-grow: 0;`;
    if (/^flex-shrink$/.test(cls)) return `flex-shrink: 1;`;
    if (/^flex-shrink-0$/.test(cls)) return `flex-shrink: 0;`;
    if (/^aspect-(\d+)$/.test(cls)) return `aspect-ratio: ${cls.replace('aspect-', '')};`;
    if (/^cursor-(\w+)$/.test(cls)) return `cursor: ${cls.replace('cursor-', '')};`;
    if (/^pointer-events-(none|auto)$/.test(cls)) return `pointer-events: ${cls.replace('pointer-events-', '')};`;
    if (/^whitespace-(\w+)$/.test(cls)) return `white-space: ${cls.replace('whitespace-', '')};`;
    if (/^break-(\w+)$/.test(cls)) return `word-break: ${cls.replace('break-', '')};`;
    if (/^transform$/.test(cls)) return `transform: transform;`;
    if (/^transform-none$/.test(cls)) return `transform: none;`;
    if (/^transition-(none|all|colors|opacity|shadow|transform)$/.test(cls)) return `transition-property: ${cls.replace('transition-', '')};`;
    if (/^duration-(\d+)$/.test(cls)) return `transition-duration: ${cls.replace('duration-', '')}ms;`;
    if (/^ease-(linear|in|out|in-out)$/.test(cls)) return `transition-timing-function: ${cls.replace('ease-', '')};`;
    if (/^delay-(\d+)$/.test(cls)) return `transition-delay: ${cls.replace('delay-', '')}ms;`;
    if (/^(blur|grayscale|sepia|invert)-(none|sm|md|lg|xl|2xl|3xl|0)$/.test(cls)) return `filter: ${cls.replace('-', ': ')};`;
    if (/^backdrop-(blur|opacity)-?(\w+)?$/.test(cls)) return `backdrop-filter: ${cls.replace('-', ': ')};`;
    if (/^text-(\d+)$/.test(cls)) return `font-size: ${spacing(cls.replace('text-', ''))};`;
    if (/^rounded-(none|sm|md|lg|xl|2xl|3xl|full)$/.test(cls)) return `border-radius: ${cls.replace('rounded-', '')};`;
    if (/^bg-(#[0-9A-Fa-f]{6})$/.test(cls)) return `background-color: ${cls.replace('bg-', '')};`;
    if (/^text-(#[0-9A-Fa-f]{6})$/.test(cls)) return `color: ${cls.replace('text-', '')};`;
    if (/^flex$/.test(cls)) return `display: flex;`;
    if (/^justify-(start|center|end|between|around|evenly)$/.test(cls)) return `justify-content: ${cls.replace('justify-', '')};`;
    if (/^items-(start|center|end|stretch|baseline)$/.test(cls)) return `align-items: ${cls.replace('items-', '')};`;
    if (/^flex-(wrap-reverse|wrap|nowrap)$/.test(cls)) return `flex-wrap: ${cls.replace('flex-', '')};`;
    if (/^flex-row$/.test(cls)) return `flex-direction: row;`;
    if (/^flex-col$/.test(cls)) return `flex-direction: column;`;
    if (/^flex-(1|auto|initial|none)$/.test(cls)) return `flex: ${cls.replace('flex-', '')};`;
    if (/^order-(first|last|none|\d+)$/.test(cls)) return `order: ${cls.replace('order-', '')};`;
    if (/^grid-cols-(\d+|none)$/.test(cls)) return `grid-template-columns: repeat(${cls.replace('grid-cols-', '')}, minmax(0, 1fr));`;
    if (/^grid-rows-(\d+|none)$/.test(cls)) return `grid-template-rows: repeat(${cls.replace('grid-rows-', '')}, minmax(0, 1fr));`;
    if (/^col-span-(\d+)$/.test(cls)) return `grid-column: span ${cls.replace('col-span-', '')} / span ${cls.replace('col-span-', '')};`;
    if (/^row-span-(\d+)$/.test(cls)) return `grid-row: span ${cls.replace('row-span-', '')} / span ${cls.replace('row-span-', '')};`;
    if (/^gap-(\d+)$/.test(cls)) return `gap: ${spacing(cls.replace('gap-', ''))};`;
    if (/^content-(center|start|end|between|around|evenly|stretch)$/.test(cls)) return `align-content: ${cls.replace('content-', '')};`;
    if (/^place-content-(center|start|end|between|around|evenly|stretch)$/.test(cls)) return `place-content: ${cls.replace('place-content-', '')};`;
    if (/^place-items-(start|center|end|stretch)$/.test(cls)) return `place-items: ${cls.replace('place-items-', '')};`;
    if (/^place-self-(auto|start|center|end|stretch)$/.test(cls)) return `place-self: ${cls.replace('place-self-', '')};`;
    if (/^justify-items-(start|center|end|stretch)$/.test(cls)) return `justify-items: ${cls.replace('justify-items-', '')};`;
    if (/^justify-self-(auto|start|center|end|stretch)$/.test(cls)) return `justify-self: ${cls.replace('justify-self-', '')};`;
    if (/^align-self-(auto|start|center|end|stretch)$/.test(cls)) return `align-self: ${cls.replace('align-self-', '')};`;
    if (/^font-(sans|serif|mono)$/.test(cls)) return `font-family: ${cls.replace('font-', '')};`;
    if (/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/.test(cls)) return `font-weight: ${cls.replace('font-', '')};`;
    if (/^(italic|not-italic)$/.test(cls)) return `font-style: ${cls};`;
    if (/^(underline|overline|line-through|no-underline)$/.test(cls)) return `text-decoration: ${cls};`;
    if (/^(uppercase|lowercase|capitalize|normal-case)$/.test(cls)) return `text-transform: ${cls};`;
    if (/^align-(baseline|top|middle|bottom|text-top|text-bottom)$/.test(cls)) return `vertical-align: ${cls.replace('align-', '')};`;
    if (/^bg-(auto|cover|contain)$/.test(cls)) return `background-size: ${cls.replace('bg-', '')};`;
    if (/^bg-(repeat|no-repeat|repeat-x|repeat-y|round|space)$/.test(cls)) return `background-repeat: ${cls.replace('bg-', '')};`;
    if (/^bg-(bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top)$/.test(cls)) return `background-position: ${cls.replace('bg-', '')};`;
    if (/^bg-(fixed|local|scroll)$/.test(cls)) return `background-attachment: ${cls.replace('bg-', '')};`;
    if (/^border(?:-(t|r|b|l))?-(\d+)$/.test(cls)) return `border-width: ${spacing(cls.replace(/border(?:-(t|r|b|l))?-/, ''))};`;
    if (/^border-(#[0-9A-Fa-f]{6})$/.test(cls)) return `border-color: ${cls.replace('border-', '')};`;
    if (/^border-(solid|dashed|dotted|double|none)$/.test(cls)) return `border-style: ${cls.replace('border-', '')};`;
    if (/^rounded-(t|r|b|l|tl|tr|br|bl)-(.+)$/.test(cls)) return `border-radius: ${cls};`; // Complex one, needs more handling if needed
    if (/^divide-(x|y)-(\d+)$/.test(cls)) return `divide-width: ${cls};`; // Complex one, needs more handling if needed
    if (/^divide-(solid|dashed|dotted|double|none)$/.test(cls)) return `divide-style: ${cls.replace('divide-', '')};`;
    if (/^divide-(#[0-9A-Fa-f]{6})$/.test(cls)) return `divide-color: ${cls.replace('divide-', '')};`;
    if (/^opacity-(\d+)$/.test(cls)) return `opacity: ${cls.replace('opacity-', '') / 100};`;
    if (/^mix-blend-(normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity)$/.test(cls)) return `mix-blend-mode: ${cls.replace('mix-blend-', '')};`;
    if (/^bg-blend-(normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity)$/.test(cls)) return `background-blend-mode: ${cls.replace('bg-blend-', '')};`;
    if (/^drop-shadow-(sm|md|lg|xl|2xl|none)$/.test(cls)) return `filter: drop-shadow(${cls.replace('drop-shadow-', '')});`;
    if (/^hue-rotate-(\d+)$/.test(cls)) return `filter: hue-rotate(${cls.replace('hue-rotate-', '')}deg);`;
    if (/^scale-(\d+)$/.test(cls)) return `transform: scale(${cls.replace('scale-', '') / 100});`;
    if (/^rotate-(\d+)$/.test(cls)) return `transform: rotate(${cls.replace('rotate-', '')}deg);`;
    if (/^translate-x-(\d+)$/.test(cls)) return `transform: translateX(${spacing(cls.replace('translate-x-', ''))};`;
    if (/^translate-y-(\d+)$/.test(cls)) return `transform: translateY(${spacing(cls.replace('translate-y-', ''))};`;
    if (/^-translate-x-(\d+)$/.test(cls)) return `transform: translateX(-${spacing(cls.replace('-translate-x-', ''))};`;
    if (/^-translate-y-(\d+)$/.test(cls)) return `transform: translateY(-${spacing(cls.replace('-translate-y-', ''))};`;
    if (/^skew-x-(\d+)$/.test(cls)) return `transform: skewX(${cls.replace('skew-x-', '')}deg);`;
    if (/^skew-y-(\d+)$/.test(cls)) return `transform: skewY(${cls.replace('skew-y-', '')}deg);`;
    if (/^origin-(center|top|bottom|left|right|top-left|top-right|bottom-left|bottom-right)$/.test(cls)) return `transform-origin: ${cls.replace('origin-', '')};`;
    if (/^select-(none|text|all|auto)$/.test(cls)) return `user-select: ${cls.replace('select-', '')};`;
    if (/^touch-(auto|none|pan-x|pan-y|pinch-zoom|manipulation)$/.test(cls)) return `touch-action: ${cls.replace('touch-', '')};`;
    if (/^fill-(current|#[0-9A-Fa-f]{6})$/.test(cls)) return `fill: ${cls.replace('fill-', '')};`;
    if (/^stroke-(current|#[0-9A-Fa-f]{6})$/.test(cls)) return `stroke: ${cls.replace('stroke-', '')};`;
    if (/^stroke-(\d+)$/.test(cls)) return `stroke-width: ${cls.replace('stroke-', '')};`;
    if (/^animate-(none|spin|ping|pulse|bounce)$/.test(cls)) return `animation: ${cls.replace('animate-', '')};`;
    if (/^accent-(auto|#[0-9A-Fa-f]{6})$/.test(cls)) return `accent-color: ${cls.replace('accent-', '')};`;
    if (/^scroll-(auto|smooth)$/.test(cls)) return `scroll-behavior: ${cls.replace('scroll-', '')};`;
    if (/^scroll-m-(\d+)$/.test(cls)) return `scroll-margin: ${spacing(cls.replace('scroll-m-', ''))};`;
    if (/^scroll-p-(\d+)$/.test(cls)) return `scroll-padding: ${spacing(cls.replace('scroll-p-', ''))};`;
    if (/^columns-(\d+|auto|3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/.test(cls)) return `columns: ${cls.replace('columns-', '')};`;
    if (/^resize-(none|both|vertical|horizontal)$/.test(cls)) return `resize: ${cls==="resize-both"?"both":cls==="resize-vertical"?"vertical":cls==="resize-horizontal"?"horizontal":"none"};`;
     if (/^invisible$/.test(cls)) return `visibility: hidden;`;
    if (/^visible$/.test(cls)) return `visibility: visible;`;
    return `/* Unknown class: ${cls} */`;
  }).join('; ');
}

exports.run = function(classes) {
	return tailwindToStyle(classes)
};

})();