		
		//var sn_gg_dt_unit = 'snack_dex2'; var sn_gg_mob_unit = 'snack_mex2'; THESE VARS MUST BE SET BEFORE THE CODE CAN RUN!

		var sn_gg_tag;

		if(sn_gg_dt_unit || sn_gg_mob_unit ){
			if(pbSnackMobile){
				sn_gg_tag = sn_gg_mob_unit;
			} else {
				sn_gg_tag = sn_gg_dt_unit;
			}
		}
		


		//check for tag on page
		var sn_gg_ad = document.getElementById(sn_gg_tag);	

		//create sticky wrapper
		const create_wrapper = () => {

			
			var d = document.createElement('div');

			d.setAttribute('id','sn_gg_ad_wrapper')

			if(pbSnackMobile){
				d.style.cssText = 'position:fixed;bottom:0px;left:0px;width:100%;height:50px;padding:0px 0;text-align:center;z-index:99999999;';
			} else {
				d.style.cssText = 'position:fixed;bottom:0px;left:0px;width:100%;height:90px;padding:0px 0;text-align:center;z-index:99999999;';
				document.getElementById(sn_gg_tag).style.cssText = 'margin:0 auto;';
			}
			//create close button
			var cb = document.createElement('div');

			cb.style.cssText = 'color:#000;width:20px;height:20px;position:absolute;top:-30px;right:10px;border-radius:10px;line-height:20px;font-size:20px;text-align:center;cursor:pointer;';

			cb.innerHTML = '&times;';

			cb.setAttribute('id','sn_gg_close');

			cb.setAttribute('onclick','sn_gg_close_ad()');

			document.getElementsByTagName('body')[0].appendChild(d);

			d.appendChild(cb);

			//add wrapper around tag
			d.appendChild(sn_gg_ad);


			
		}

		if(sn_gg_ad){
			create_wrapper();
		}
		

		//add close button functionality
		const sn_gg_close_ad = () => {
				//alert('test');
				document.getElementById('sn_gg_ad_wrapper').remove();
		}