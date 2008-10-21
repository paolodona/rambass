// Created by iWeb 2.0.4 local-build-20081021

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.rambass.com/rambass/Foto/Pages/Varie_files/rss.xml",true,true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.rambass.com/rambass/Foto/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.rambass.com/rambass/Foto/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(221,221),new IWSize(221,0),new IWSize(221,236),27,27,0,new IWSize(24,26)),new IWPhotoFrame([IWCreateImage('Varie_files/Modern_C_TL.png'),IWCreateImage('Varie_files/Modern_S_T.png'),IWCreateImage('Varie_files/Modern_C_TR.png'),IWCreateImage('Varie_files/Modern_S_R.png'),IWCreateImage('Varie_files/Modern_C_BR.png'),IWCreateImage('Varie_files/Modern_S_B.png'),IWCreateImage('Varie_files/Modern_C_BL.png'),IWCreateImage('Varie_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Varie_files/VarieMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id2');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
