// Created by iWeb 2.0.4 local-build-20081021

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.rambass.com/rambass/Foto/Foto_files/rss.xml",true,2,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.rambass.com/rambass/Foto',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget17'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.rambass.com/rambass/Foto',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(290,218),new IWSize(290,58),new IWSize(344,291),27,27,0,new IWSize(16,16)),new IWPhotoFrame([IWCreateImage('Foto_files/Formal_inset_01.png'),IWCreateImage('Foto_files/Formal_inset_02.png'),IWCreateImage('Foto_files/Formal_inset_03.png'),IWCreateImage('Foto_files/Formal_inset_06.png'),IWCreateImage('Foto_files/Formal_inset_09.png'),IWCreateImage('Foto_files/Formal_inset_08.png'),IWCreateImage('Foto_files/Formal_inset_07.png'),IWCreateImage('Foto_files/Formal_inset_04.png')],null,0,0.600000,1.000000,1.000000,1.000000,1.000000,14.000000,14.000000,14.000000,14.000000,191.000000,262.000000,191.000000,262.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget17',null,'widget18',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Foto_files/FotoMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
