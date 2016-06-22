mw.kalturaPluginWrapper(function(){
    
	mw.PluginManager.add( 'test', mw.KBasePlugin.extend({

		defaultConfig: {
		},

		'setup': function(){
			var _this = this;
            

			$(this.embedPlayer).bind('monitorEvent',function(){
				// be carfule with this one - it is fired many times during playback
				//console.log("plugin:: "+this.evaluate("{video.player.currentTime}"));
            
                
			});
			$(this.embedPlayer).bind('playerReady',function(){
				// happens whenever a new media is being loaded - all media metadata is available at this point
				//alert(_this.getConfig("str1Holder"));
				//alert(this.evaluate("{mediaProxy.entry.duration}"));
				console.log("plugin:: playerReady");
                
				
				//Nathan - I placed some handy code here so you can see how I access the DOM that hosts the player 


				var doc = window['parent'].document; // ref to parent

				var myPlayerDivId = this.id;


				var divInstanc = $(doc).find("#"+myPlayerDivId);

				alert("I am DA player. My width is "+divInstanc.width() + " and my height is "+ divInstanc.height()+"\n\n" + "My name is Inigo Montoya... well, actually my name is "+ myPlayerDivId )

			});


			// just some skeleton listeners - use them or throw them
			$(this.embedPlayer).bind('seeked',function(){
				console.log("plugin:: seeked");
			});
			$(this.embedPlayer).bind('onOpenFullScreen',function(){
				console.log("plugin:: onOpenFullScreen");
				// this means that on open fullscreen - the player will play (even if it was paused)
				this.sendNotification("doPlay");
			});
			$(this.embedPlayer).bind('mediaLoaded',function(){
				console.log("plugin:: mediaLoaded");
			});
			$(this.embedPlayer).bind('mediaReady',function(){
				console.log("plugin:: mediaReady");
			});
			$(this.embedPlayer).bind('firstPlay',function(){
				console.log("plugin:: firstPlay");
			});
            
		}

	}))
});
