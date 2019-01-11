// ==UserScript==
// @name         AutoClicker
// @namespace    http://gv7.me
// @version      0.2
// @description  自动重复点击单页面或多页面的相关元素（按钮，链接等等）
// @author       c0ny1,JackyTsuuuy
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// 多少毫秒点击一次
var cyce = 1000;
// 方式一：通过自定义函数定位目标元素
var isCustiom = false;
// 方式二：通过id获取目标元素
var id = "";
// 方式三：通过标题名tag,属性名attr,属性值value定位目标元素
var tag = "";
var attr = "";
var value = "";
// 方式四：通过xpath获取目标元素 e.g: var str_xpath = '//*[@id="su"]';
var str_xpath = '//*[@id="J_LinkBuy"]';
// 方式五：通过selector定位目标元素,e.g: var str_qs = "div .search span a";
var str_qs = "";
/*
	获取点击对象库函数
*/
function getTargetByCustom(){
    /*请在该函数内编写自定义获取需要点击元素的代码*/
	return undefined;
}

function getTargetById(t_id){
	var target = document.getElementById(t_id);
    return target;
}


function getTargetByTAV(t_tag,t_attr,t_value){
	var target = document.getElementsByTagName(t_tag);
	for(var i=0;i <target.length;i++){
		if(target[i].getAttribute(t_attr) == t_value){
			return target[i];
		}
	}
}

function getTargetByXpath(str_xpath) {
    var xresult = document.evaluate(str_xpath, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }
    return xnodes;
}


function getTargetByQS(str_qs){
    var target = document.querySelector(str_qs);
    return target;
}


function trim(str){
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    return str;
}

/*
	运行流程
*/

var btn;

if(isCustiom === true){
	btn = getTargetByCustom();
}

if(trim(id) !== "" && btn === undefined){
	btn = getTargetById(id);
}

if(trim(tag) !== "" && trim(attr) !== "" && value !== "" && btn === undefined){
	btn = getTargetByTAV(tag,attr,value);
}

if(trim(str_xpath) !== "" && btn === undefined){
	btn = getTargetByXpath(str_xpath)[0];
}

if(trim(str_qs) !== "" && btn === undefined){
    btn = getTargetByQS(str_qs);
}

setInterval(function() {
		if (btn !== undefined) {
            console.log("[+] AutoClicker click obj tagname: " + btn.tagName);
			btn.click();
		}else{
			console.log('[-] AutoClicker click obj is undefined!');
		}
	},cyce);
})();