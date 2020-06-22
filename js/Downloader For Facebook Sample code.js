/**
 * This is the JavaScript code which is taken from Logs 
 */


loadUrl=javascript: (function setVideoEvent() {var dialog=document.getElementById('modalDialog');var video = dialog.getElementsByTagName('video');for(var i = 0; i < video.length; i++){var videoSrc = video[i].getAttribute('src');var vsign = video[i].dataset.vsign;if (undefined == vsign){video[i].setAttribute('data-vsign','video');video[i].addEventListener('play',function(){window.FBDownloader.processVideo(this.getAttribute('src'));});}}})()

loadUrl=javascript: (function setListImgEvent() {
    var storyBodyList = document.querySelectorAll('div.story_body_container');
    for (var i = 0; i < storyBodyList.length; i++) {
        var storyBody = storyBodyList[i];
        var imgTag = storyBody.querySelectorAll('i');
        for (var j = 0; j < imgTag.length; j++) {
            var imgStyle = imgTag[j].getAttribute('style');
            if (imgStyle != undefined && imgStyle.indexOf('background-image: url') != -1) {
                var imgurl = imgStyle.replace(/\\3a /g, ':').replace(/\\3d /g, '=').replace(/\\26 /g, '&');
                var userNameclass = imgTag[0].className;
                if (userNameclass.indexOf('profpic') != -1) {
                    var userName = imgTag[0].getAttribute('aria-label');
                    if (imgTag[j].parentElement.parentElement.tagName == 'A' && imgTag[j].getAttribute('aria-label') != 'video') {
                        imgTag[j].parentElement.parentElement.setAttribute('onClick', 'window.FBDownloader.processImage("' + imgurl + '","' + userName + '")');
                    } else {
                        if (imgTag[j].parentElement.parentElement.tagName != 'SECTION' && imgTag[j].getAttribute('aria-label') != 'video') {
                            imgTag[j].parentElement.setAttribute('onClick', 'window.FBDownloader.processImage("' + imgurl + '","' + userName + '")');
                        }
                    }
                }
            }
        }
    }
})()

loadUrl=javascript: (function setDetailImgEvent() {var rootcontainer = document.getElementById('rootcontainer');var moreImg = document.querySelectorAll('div[data-testid="Snowflake/photoCard"]');var oneImg = document.querySelector('div[data-sigil="touchable"]');if(moreImg.length > 0){var moreImgheader = document.querySelector('div[data-testid="Snowflake/headerCard"]');var username = moreImgheader.querySelector('a').innerHTML;for (var i = 0; i < moreImg.length; i++) {var moreImglist = moreImg[i].querySelector('img');var imgurl = moreImglist.getAttribute('src').replace(/\\3a /g,':').replace(/\\3d /g,'=').replace(/\\26 /g,'&');moreImglist.parentElement.setAttribute('onClick','window.FBDownloader.processImage("'+imgurl+'","'+username+'")');}}else{var imgTag = rootcontainer.querySelectorAll('i');var userwrap = document.getElementById('MPhotoUpperContent');var userimg = userwrap.querySelector('i');  var oneImg = rootcontainer.querySelector('div[data-sigil="touchable"]');var imgurl,username;for (var i = 0; i < imgTag.length; i++) {var imgStyle = imgTag[i].getAttribute('style');var photoImg = imgTag[i].getAttribute('data-sigil');if (imgStyle != undefined && imgStyle.indexOf('background-image') != -1 && photoImg == 'photo-image') {imgurl = imgStyle.replace(/\\3a /g,':').replace(/\\3d /g,'=').replace(/\\26 /g,'&');}}username = userimg.getAttribute('aria-label');oneImg.setAttribute('onClick','window.FBDownloader.processImage("'+imgurl+'","'+username+'")');}})()

loadUrl=javascript: (function setImgVideoDetailEvent() {var storyBodyList = document.querySelectorAll('article');for (var i = 0; i < storyBodyList.length; i++) {var storyBody = storyBodyList[i];var imgTag = storyBody.querySelectorAll('i');for (var j = 0; j < imgTag.length; j++) {var imgStyle = imgTag[j].getAttribute('style');var videoandimg = imgTag[j].parentElement.parentElement;if (imgStyle != undefined && imgStyle.indexOf('background-image: url') != -1) {var imgurl = imgStyle.replace(/\\3a /g, ':').replace(/\\3d /g, '=').replace(/\\26 /g, '&');var userNameclass = imgTag[0].className;if (userNameclass.indexOf('profpic') != -1) {var userName = imgTag[0].getAttribute('aria-label');if (imgTag[j].parentElement.parentElement.tagName == 'A' && imgTag[j].getAttribute('aria-label') != 'video') {imgTag[j].parentElement.parentElement.setAttribute('onClick', 'window.FBDownloader.processImage("' + imgurl + '","' + userName + '")');} else {if (imgTag[j].parentElement.parentElement.tagName != 'SECTION' && imgTag[j].getAttribute('aria-label') != 'video') {imgTag[j].parentElement.setAttribute('onClick', 'window.FBDownloader.processImage("' + imgurl + '","' + userName + '")');}}}} else if (videoandimg.getAttribute('data-index') != undefined && videoandimg.getAttribute('data-index') != '' && videoandimg.getAttribute('data-testid') == "Snowflake/photoCard") {var firstImg = videoandimg.querySelectorAll('img')[0];var oneUsername = storyBody.querySelector('div[data-testid="Snowflake/headerCard"]').querySelector('a').innerHTML;if (firstImg != undefined && oneUsername != undefined) {firstImg.parentElement.setAttribute('onClick', 'window.FBDownloader.processImage("' + firstImg.src + '","' + oneUsername + '")');}}  else if(videoandimg.getAttribute('data-index') != undefined && videoandimg.getAttribute('data-index') != ''){var firstImg = videoandimg.querySelectorAll('img')[0];var oneUsername = storyBody.querySelectorAll('a')[0].innerHTML;if (firstImg != undefined && oneUsername != undefined) {firstImg.parentElement.setAttribute('onClick', 'window.FBDownloader.processImage("' + firstImg.src + '","' + oneUsername + '")');}}}}})()

loadUrl=javascript:(function prepareVideo() { var el = document.querySelectorAll('div[data-sigil]');for(var i=0;i<el.length; i++){var sigil = el[i].dataset.sigil;if(sigil.indexOf('inlineVideo') > -1){delete el[i].dataset.sigil;console.log(i);var jsonData = JSON.parse(el[i].dataset.store);el[i].setAttribute('onClick', 'FBDownloader.processVideo("'+jsonData['src']+'","'+jsonData['videoID']+'");');}}})()