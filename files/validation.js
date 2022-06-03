var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var check_file = function() {
	str = document.getElementById('fileUpload').value.toUpperCase();
	suffix = ".SVG";

	if (str.indexOf(suffix, str.length - suffix.length) === -1) {
		alert('File type must be *.svg');
		document.getElementById('fileUpload').value = '';
	}
};

var check_file_type = function(suffixes) {
	var str = document.getElementById('fileUpload').value.toUpperCase();
	var correct_format = false;

	for (var i in suffixes) {
		var suffix = suffixes[i];
		if(str.indexOf(suffix, str.length - suffix.length) !== -1) {
			correct_format = true;
			break;
		}
	}

	if (!correct_format) {
		alert('File type must be png or jpg');
		document.getElementById('fileUpload').value = '';
	}
};

var file_chosen = function () {
	filename = document.getElementById('fileUpload').value;
	if (filename === null || filename === "") {
		alert("You must choose a file first");
		return false;
	}
};


}
/*
     FILE ARCHIVED ON 02:37:51 Mar 22, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:46:17 Jan 30, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 453.775
  exclusion.robots: 0.119
  exclusion.robots.policy: 0.109
  RedisCDXSource: 0.673
  esindex: 0.018
  LoadShardBlock: 427.109 (3)
  PetaboxLoader3.resolve: 361.892 (4)
  PetaboxLoader3.datanode: 625.276 (4)
  CDXLines.iter: 22.752 (3)
  load_resource: 615.029
*/