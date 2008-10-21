// Created by iWeb 2.0.4 local-build-20081021

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,260),url:'Storia_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Storia_files/stroke_1.png'},{rect:new IWRect(2,-2,192,2),url:'Storia_files/stroke_2.png'},{rect:new IWRect(194,-2,5,2),url:'Storia_files/stroke_3.png'},{rect:new IWRect(194,0,5,260),url:'Storia_files/stroke_4.png'},{rect:new IWRect(194,260,5,3),url:'Storia_files/stroke_5.png'},{rect:new IWRect(2,260,192,3),url:'Storia_files/stroke_6.png'},{rect:new IWRect(-2,260,4,3),url:'Storia_files/stroke_7.png'}],new IWSize(197,261))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Storia_files/StoriaMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
