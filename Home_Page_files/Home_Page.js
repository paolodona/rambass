// Created by iWeb 2.0.4 local-build-20081021

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,348),url:'Home_Page_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Home_Page_files/stroke_1.png'},{rect:new IWRect(2,-2,245,2),url:'Home_Page_files/stroke_2.png'},{rect:new IWRect(247,-2,5,2),url:'Home_Page_files/stroke_3.png'},{rect:new IWRect(247,0,5,348),url:'Home_Page_files/stroke_4.png'},{rect:new IWRect(247,348,5,3),url:'Home_Page_files/stroke_5.png'},{rect:new IWRect(2,348,245,3),url:'Home_Page_files/stroke_6.png'},{rect:new IWRect(-2,348,4,3),url:'Home_Page_files/stroke_7.png'}],new IWSize(250,349))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_Page_files/Home_PageMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();IMpreload('Home_Page_files','shapeimage_4','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
