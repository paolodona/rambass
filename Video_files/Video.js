// Created by iWeb 2.0.4 local-build-20081031

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,450),url:'Video_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Video_files/stroke_1.png'},{rect:new IWRect(1,-1,495,2),url:'Video_files/stroke_2.png'},{rect:new IWRect(496,-1,2,2),url:'Video_files/stroke_3.png'},{rect:new IWRect(496,1,2,450),url:'Video_files/stroke_4.png'},{rect:new IWRect(496,451,2,2),url:'Video_files/stroke_5.png'},{rect:new IWRect(1,451,495,2),url:'Video_files/stroke_6.png'},{rect:new IWRect(-1,451,2,2),url:'Video_files/stroke_7.png'}],new IWSize(497,452)),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,0.0000),color:'#3a060f',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Video_files/VideoMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
