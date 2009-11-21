AN.mod['Layout Designer'] = { ver: 'N/A', author: '向日', fn: {

'4bf6619f-2cd8-4aa2-a54a-e7d72wgs8603':
{
	desc: '修正改變搜尋列時可能造成的顯示錯誤',
	page: { 4: true },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.Topic_FunctionPanel { overflow: hidden; }');
	}
},

'5e173905-9c47-4f37-8d3f-4c31ea871115':
{
	desc: '隱藏頂部按扭',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.TopMenuBox { visibility: hidden; }');
	}
},

'7af1060d-d38c-40b9-b16b-df1bb799cb74':
{
	desc: '隱藏上方Logo列',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.TopBannerBox { display: none; }');
	}
},

'7ca54ba4-e2b7-489c-9adc-7ac7d62012f0':
{
	desc: '隱藏按扭列',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.TopMenuPanel + .PageWidthContainer { display: none; }');
	}
},

'd0164ba6-a5a2-4850-ab67-658b840fd3ef':
{
	desc: '隱藏繁簡轉換及分享這頁',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('\
		.PageMiddleFunctions { height: 5px; } \
		.PageMiddleFunctions > div { display: none; } \
		');
	}
},

'bbd5f176-c024-4684-ba98-b72da376a6eb':
{
	desc: '隱藏最底頁腳',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.FooterPanel { display: none; }');
	}
},

'5fd907ce-21dc-44b9-b280-3cb145c53c92':
{
	desc: '隱藏頁底空白',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.FooterPanel ~ br { display: none; }');
	}
},

'8c317615-b5e7-4b1a-a140-b7319c5b0a5b':
{
	desc: '隱藏Bookmark Bar',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#hkg_bottombar { display: none; }');
	}
},

'd1dc862f-a7b3-4b29-a50f-440fc9c5fef0':
{
	desc: '縮短Bookmark Bar',
	page: { 65534: true },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#hkg_bottombar { width: auto; }');
	}
},

'02837e6a-3dd7-4c73-a155-90d6f6edd8f9':
{
	desc: '拉闊頁面',
	page: { 65534: false },
	type: 3,
	options: { nPageWidth: { desc: '頁面闊度 [可設定為auto, 80%, 1000px等]', defaultValue: 'auto', type: 'text' } },
	once: function()
	{
		AN.util.addStyle($.sprintf('\
		.PageWidthContainer { width: %s; } \
		table[width="99%"], table[width="800"], td[width="801"], td[width="792"] { width: 100%; } \
		#ctl00_ContentPlaceHolder1_ProfileForm td[width="8"] { display: none; } \
		',
		AN.util.getOptions('nPageWidth')
		));
	}
},

'8d53fef9-818f-46d1-99b8-5e199453b360':
{
	desc: '隱藏討論區資訊',
	page: { 12: false, 32:false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle({
			topics: '.ContentPanel',
			search: '#ctl00_ContentPlaceHolder1_topics_form',
			view: '#ctl00_ContentPlaceHolder1_view_form'
		}[$().pageName()] + ' > script:first-child + table { display: none; }');
	}
},

'b44ee3a6-950e-4b2a-b99a-399b6384bcce':
{
	desc: '隱藏搜尋列上下空白',
	page: { 12: false },
	type: 3,
	once: function()
	{
		$().pageName() == 'topics' && AN.util.stackStyle('.Topic_FunctionPanel { margin-top: 3px; }');
		
		$().pageName() == 'search' && AN.util.stackStyle('\
		td[valign="bottom"] > br:first-child { display: none; } \
		td[valign="bottom"] > p { margin: 0; } \
		');
	}
},

'1ada74ac-9bae-47b2-914b-f1556dbab1a2':
{
	desc: '隱藏討論區選單',
	page: { 12: false },
	type: 3,
	once: function()
	{
		$().pageName() == 'topics' && AN.util.stackStyle('#forum_list, #forum_list + br { display: none; }');

		$().pageName() == 'search' && AN.util.stackStyle('#ctl00_ContentPlaceHolder1_topics_form > div + table table:first-child { display: none; }');
	}
},

'4bf6619f-2cd8-4aa2-a54a-e7d7255e8603':
{
	desc: '隱藏熱門關鍵字',
	page: { 14: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_lb_HitSearchs { display: none; }');
	}
},

'f41e288e-cd1d-4649-a396-83d92d99ded8':
{
	desc: '隱藏紅人榜',
	page: { 4: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_HotPeoples, #ctl00_ContentPlaceHolder1_HotPeoples + br { display: none; }');
	}
},

'964d6cf5-9e46-43f6-ba1a-b11adf1292b1':
{
	desc: '隱藏高級會員頭像',
	page: { 32: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('img[alt="Logo"] { display: none; }');
	}
},

'9aebeb97-8507-4553-995d-0903dc764ec3':
{
	desc: '隱藏會員級別圖片',
	page: { 32: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('img[src^="labels/"] { display: none; }');
	}
},

'a0203b01-7565-46e1-a52e-260dd4d485a1':
{
	desc: '隱藏引用',
	page: { 32: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.repliers_right blockquote { display: none; }');
	}
},

'26eaf7f8-d260-4b42-b6d9-08b235f56d43':
{
	desc: '隱藏引用原文連結',
	page: { 32: false },
	type: 3,
	options: { bCDROMMode: { desc: '同時隱藏快速引用連結及登入提示 [CD-ROM專用]', defaultValue: false, type: 'checkbox' } },
	once: function()
	{
		var sSelector = 'a[href^="post.aspx?mt=Y&rid="]';

		if(AN.util.getOptions('bCDROMMode'))
		{
			sSelector += ',a[href*="QuoteReply("],#ct100_ContentPlaceHolder1_QuickReplyLoginTable';
		}

		AN.util.stackStyle(sSelector + '{ display: none; }');
	}
},

'2c026f6b-f252-4a58-b2ac-706fcd052fb6':
{
	desc: '隱藏快速回覆組件',
	page: { 32: false },
	type: 3,
	options:
	{
		bRemNameRow: { desc: '隱藏名字列', defaultValue: false, type: 'checkbox' },
		bRemTopicRow: { desc: '隱藏主旨列', defaultValue: false, type: 'checkbox' },
		bRemClassicRow: { desc: '隱藏經典表情圖示列', defaultValue: false, type: 'checkbox' },
		bRemTempRow: { desc: '隱藏附加表情圖示列(如有)', defaultValue: false, type: 'checkbox' },
		bRemPreviewRow: { desc: '隱藏預覽列', defaultValue: false, type: 'checkbox' }
	},
	once: function()
	{
		if(!AN.util.isLoggedIn()) return;

		var jTbody = $('#ctl00_ContentPlaceHolder1_QuickReplyTable tbody:eq(2)');
		if(AN.util.getOptions('bRemNameRow')) jTbody.children('tr:eq(0)').hide();
		if(AN.util.getOptions('bRemTopicRow')) jTbody.children('tr:eq(1)').hide();
		if(AN.util.getOptions('bRemClassicRow')) jTbody.children('tr:eq(3)').hide();
		if(AN.util.getOptions('bRemTempRow') && jTbody.children().length > 5) jTbody.children('tr:eq(4)').next().andSelf().hide();
		if(AN.util.getOptions('bRemPreviewRow')) jTbody.children('tr:last').hide();
	}
},

'1e2a7c96-a096-4a45-9909-c196ddabc286':
{
	desc: '隱藏紅人榜記錄',
	page: { 64: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_UpdatePanelPM + br, #ctl00_ContentPlaceHolder1_HotPeoples { display: none; }');
	}
},

'c18ff3e6-b9fc-4786-95d6-1c1bc800172a':
{
	desc: '隱藏書籤',
	page: { 64: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_HotPeoples + br, #ctl00_ContentPlaceHolder1_BookmarkTable { display: none; }');
	}
},

'222f0c01-1ebd-49d6-b7f4-b1b7fc60ca40':
{
	desc: '隱藏起底列表',
	page: { 64: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_siteUpdateProgress + table { display: none; }');
	}
},

'e424fe8d-852b-4239-b797-6aa682e68c39':
{
	desc: '修正表格闊度',
	page: { 1024: true },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('table[width="800"] { width: 100%; }');
	}
}

}};