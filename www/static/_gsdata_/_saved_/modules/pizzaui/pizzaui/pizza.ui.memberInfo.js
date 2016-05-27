/**
 * 显示会员信息
 * @param  {[type]} function($ [description]
 * @return {[type]}            [description]
 */
;
(function($) {
	$.fn.memberInfo = function(options) {
		if (!$('.member-143000181')[0]) {
			$('body').append('<div style="position:absolute;"><div class="member-143000181"></div></div>');
		}
		var tpl = [function(locals, filters, escape, rethrow
/**/) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<ul>\r\n  <li class=\"style-1\">\r\n    <span><%= data.nickName %></span>\r\n    <% if(data.duty != undefined) { %>\r\n      <em class=\"mcicon-circle\"></em>\r\n      <%= data.duty %>\r\n    <% } %>\r\n      <br>\r\n      <% if(data.company != undefined) { %>\r\n        <%= data.company %>\r\n      <% } %>\r\n      <br>河南-郑州\r\n      <% if(data.company != undefined) { %>\r\n        <em class=\"mcicon-circle\"></em>\r\n        <%= tools.siteData.data.know[data.know] %>\r\n      <% } %>\r\n      <% if(data.company != undefined) { %>\r\n        <em class=\"mcicon-circle\"></em>\r\n        <%= data.phone %>\r\n      <% } %>\r\n  </li>\r\n  <li class=\"style-2\"><i class=\"icon-tags\"></i>\r\n    <% data.tag.replace(/,/g, '，') %>\r\n  </li>\r\n</ul>\r\n<div class=\"pingjia\">\r\n  <p>\r\n    <span>个人资料</span><i class=\"star-huang icon-star\"></i><i class=\"star-huang icon-star\"></i><i class=\"star-huang icon-star\"></i></p>\r\n  <p>\r\n    <span>人脉质量</span><i class=\"star-hong icon-star\"></i><i class=\"star-hong icon-star-half\"></i></p>\r\n  <p>\r\n    <span>综合能力</span><i class=\"star-gray icon-star\"></i></p>\r\n</div>\r\n", filename: "_gsdata_/_saved_/modules/pizzaui/pizzaui/memberInfo.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<ul>\n  <li class="style-1">\n    <span>', escape((__stack.lineno=3,  data.nickName )), '</span>\n    ');__stack.lineno=4; if(data.duty != undefined) { ; buf.push('\n      <em class="mcicon-circle"></em>\n      ', escape((__stack.lineno=6,  data.duty )), '\n    ');__stack.lineno=7; } ; buf.push('\n      <br>\n      ');__stack.lineno=9; if(data.company != undefined) { ; buf.push('\n        ', escape((__stack.lineno=10,  data.company )), '\n      ');__stack.lineno=11; } ; buf.push('\n      <br>河南-郑州\n      ');__stack.lineno=13; if(data.company != undefined) { ; buf.push('\n        <em class="mcicon-circle"></em>\n        ', escape((__stack.lineno=15,  tools.siteData.data.know[data.know] )), '\n      ');__stack.lineno=16; } ; buf.push('\n      ');__stack.lineno=17; if(data.company != undefined) { ; buf.push('\n        <em class="mcicon-circle"></em>\n        ', escape((__stack.lineno=19,  data.phone )), '\n      ');__stack.lineno=20; } ; buf.push('\n  </li>\n  <li class="style-2"><i class="icon-tags"></i>\n    ');__stack.lineno=23; data.tag.replace(/,/g, '，') ; buf.push('\n  </li>\n</ul>\n<div class="pingjia">\n  <p>\n    <span>个人资料</span><i class="star-huang icon-star"></i><i class="star-huang icon-star"></i><i class="star-huang icon-star"></i></p>\n  <p>\n    <span>人脉质量</span><i class="star-hong icon-star"></i><i class="star-hong icon-star-half"></i></p>\n  <p>\n    <span>综合能力</span><i class="star-gray icon-star"></i></p>\n</div>\n'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}][0];
		var
		oAvatar = $(this), //触发事件的DOM对象
		obj = $('.member-143000181'), //信息卡片所在的DOM
		arrow, //卡片箭头的方向
		left, right, top, //定位用到的 left 与 top
		cache, //缓存获取到的会员信息
		str; //内部使用的字符串

		var defaults = {
			url: '/user/user/getdoc', //数据请求地址
			on: '' //继承绑定
		};

		options = $.extend(defaults, options);

		/**
		 * 显示会员信息窗口
		 * @return {Boolean} [description]
		 */
		function disMemberInfo(thisObj) {
			var _parent = $('.member-143000181').parent();
			//用于判断信息卡片是在上方还是在下方显示
			var scrollTop = $(document).scrollTop();
			var flag = Math.floor(thisObj.offset().top);
			left = Math.floor(thisObj.offset().left);
			cache = thisObj.data('dbMember');

			right = $(window).width() - left;

			if(right <= 300) {
				if (flag - scrollTop > 150) {
					top = flag - 120 + 'px';
					arrow = '<i class="arrow-5678"></i>';
				} else {
					top = flag + parseInt(thisObj.css('height')) + 15 + 'px';
					arrow = '<i class="arrow-8765"></i>';
				}
				left -= 220;
			} else {
				if (flag - scrollTop > 150) {
					top = flag - 120 + 'px';
					arrow = '<i class="arrow-1234"></i>';
				} else {
					top = flag + parseInt(thisObj.css('height')) + 15 + 'px';
					arrow = '<i class="arrow-4321"></i>';
				}
			}
			right += 'px'; left += 'px';

			// ajax 数据
			var data = 'id=' + thisObj.attr('id') + '&nid=' + thisObj.attr('nid');

			if (cache) {
				var inf = thisObj.data('dbMember');
				var str = arrow + tpl({data:inf});
				obj.empty().append(str).css({
					'display': 'block'
				});
				_parent.css({
					'left': left,
					'top': top
				});
			} else if(thisObj.attr('dbMemberError') == 'true'){//如果有错误，则停止请求
				return;
			} else {
				$.ajax({
					url: options.url,
					data: data + tools.getCsrf(),
					success: function(msg) {
						thisObj.data('dbMember', msg.data);
						var str = arrow + tpl(msg);
						obj.empty().append(str).css({
							'display': 'block'
						});
						_parent.css({
							'left': left,
							'top': top
						});
						thisObj.attr('dbMemberError','false');
					},
					error: function(msg) {
						thisObj.attr('dbMemberError','true');
					}
				});
			}
		}

		/**
		 * 隐藏会员信息窗口
		 * @return {[type]} [description]
		 */
		function hideMemberInfo() {
			obj.css({
				'display': 'none'
			});
		}

		var timeout = 0;
		oAvatar.on('mouseenter', options.on, function() {
			var _this = $(this);
			function mid(obj) {
				return function() {
					disMemberInfo(obj);
				}
			}
			timeout = setTimeout(mid(_this), 300);
		}).on('mouseleave', options.on, function() {
			clearInterval(timeout);
			hideMemberInfo();
		});
	}
})(jQuery);