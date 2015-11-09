// ==UserScript==
// @name                WME Speed Limit Highlights
// @namespace           https://github.com/jackohug/WME-Scripts
// @version             0.1
// @author              jackohug
// @description         Adds colours to road segments to show their speed limit
// @include             https://www.waze.com/editor/*
// @include             https://www.waze.com/*/editor/*
// @include             https://editor-beta.waze.com/*
// @grant               none
// ==/UserScript==

function speedlimithighlight_bootstrap()
{
	var bGreasemonkeyServiceDefined     = false;

	try
	{
		if ("object" === typeof Components.interfaces.gmIGreasemonkeyService)
		{
			bGreasemonkeyServiceDefined = true;
		}
	}
	catch (err)
	{
		//Ignore.
	}
	if ( "undefined" === typeof unsafeWindow  ||  ! bGreasemonkeyServiceDefined)
	{
		unsafeWindow    = ( function ()
		{
			var dummyElem   = document.createElement('p');
			dummyElem.setAttribute ('onclick', 'return window;');
			return dummyElem.onclick ();
		} ) ();
	}
	/* begin running the code! */
	speedlimithighlight_init();
}

function speedlimithighlight_init()
{
	//run your code here
}

speedlimithighlight_bootstrap();
