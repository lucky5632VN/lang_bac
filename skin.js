// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: Skin-di-tich-lang-Kim-Lien.ggsk
// Generated 2023-11-10T15:30:27

function pano2vrSkin(player,base) {
	player.addVariable('start_intro', 2, false, { ignoreInState: 0  });
	player.addVariable('mute', 2, true, { ignoreInState: 0  });
	player.addVariable('voice', 2, false, { ignoreInState: 0  });
	player.addVariable('information', 2, false, { ignoreInState: 0  });
	player.addVariable('show_menu_thumb', 2, false, { ignoreInState: 0  });
	player.addVariable('map_hide', 2, true, { ignoreInState: 0  });
	player.addVariable('map_scale_normal', 2, false, { ignoreInState: 0  });
	player.addVariable('map_scale_full', 2, false, { ignoreInState: 0  });
	player.addVariable('show_remote', 2, false, { ignoreInState: 0  });
	player.addVariable('var_hs', 1, 0, { ignoreInState: 0  });
	player.addVariable('open_tag', 0, "", { ignoreInState: 0  });
	player.addVariable('close_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('category_follow_1', 2, false, { ignoreInState: 0  });
	player.addVariable('hs_info', 2, false, { ignoreInState: 0  });
	player.addVariable('mode_snapshot', 2, false, { ignoreInState: 0  });
	player.addVariable('tint_thumb_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('VR_setting', 2, false, { ignoreInState: 0  });
	player.addVariable('hs_light', 1, 0, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._powered_by=document.createElement('div');
		els=me._powered_by__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._powered_by__img.setAttribute('src',basePath + 'images/powered_by.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="powered_by";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 10px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : hidden; display : none;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._powered_by.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._powered_by.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._powered_by.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._powered_by.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._powered_by.style.transition='left 0s, bottom 0s, width 0s, height 0s, opacity 200ms ease 0ms';
				if (me._powered_by.ggCurrentLogicStatePosition == 0) {
					me._powered_by.style.left='0px';
					me._powered_by.style.bottom='55px';
				}
				else {
					me._powered_by.style.left='10px';
					me._powered_by.style.bottom='5px';
				}
			}
		}
		me._powered_by.logicBlock_position();
		me._powered_by.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._powered_by.ggCurrentLogicStateSize != newLogicStateSize) {
				me._powered_by.ggCurrentLogicStateSize = newLogicStateSize;
				me._powered_by.style.transition='left 0s, bottom 0s, width 0s, height 0s, opacity 200ms ease 0ms';
				if (me._powered_by.ggCurrentLogicStateSize == 0) {
					me._powered_by.style.width='80px';
					me._powered_by.style.height='16px';
					skin.updateSize(me._powered_by);
				}
				else {
					me._powered_by.style.width='160px';
					me._powered_by.style.height='32px';
					skin.updateSize(me._powered_by);
				}
			}
		}
		me._powered_by.logicBlock_size();
		me._powered_by.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['powered_by'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._powered_by.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._powered_by.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._powered_by.style.transition='left 0s, bottom 0s, width 0s, height 0s, opacity 200ms ease 0ms';
				if (me._powered_by.ggCurrentLogicStateAlpha == 0) {
					me._powered_by.style.visibility=me._powered_by.ggVisible?'inherit':'hidden';
					me._powered_by.style.opacity=1;
				}
				else {
					me._powered_by.style.visibility=me._powered_by.ggVisible?'inherit':'hidden';
					me._powered_by.style.opacity=0.5;
				}
			}
		}
		me._powered_by.logicBlock_alpha();
		me._powered_by.onclick=function (e) {
			player.openUrl("https:\/\/vr360.com.vn","_blank");
		}
		me._powered_by.onmouseover=function (e) {
			me.elementMouseOver['powered_by']=true;
			me._powered_by.logicBlock_alpha();
		}
		me._powered_by.onmouseout=function (e) {
			me.elementMouseOver['powered_by']=false;
			me._powered_by.logicBlock_alpha();
		}
		me._powered_by.ggCurrentLogicStatePosition = -1;
		me._powered_by.ggCurrentLogicStateSize = -1;
		me._powered_by.ggCurrentLogicStateAlpha = -1;
		me._powered_by.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['powered_by']) {
				me.elementMouseOver['powered_by']=true;
			}
		}
		me._powered_by.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._powered_by);
		el=me._edge=document.createElement('div');
		el.ggId="edge";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100%-20px);';
		hs+='left : calc(50% - ((calc(100%-20px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100%-20px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100%-20px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._edge.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mode_snapshot') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._edge.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._edge.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._edge.style.transition='';
				if (me._edge.ggCurrentLogicStateVisible == 0) {
					me._edge.style.visibility=(Number(me._edge.style.opacity)>0||!me._edge.style.opacity)?'inherit':'hidden';
					me._edge.ggVisible=true;
				}
				else {
					me._edge.style.visibility="hidden";
					me._edge.ggVisible=false;
				}
			}
		}
		me._edge.logicBlock_visible();
		me._edge.ggUpdatePosition=function (useTransition) {
		}
		el=me._edge_1=document.createElement('div');
		el.ggId="edge_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._edge_12=document.createElement('div');
		el.ggId="edge_12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_12.ggUpdatePosition=function (useTransition) {
		}
		me._edge_1.appendChild(me._edge_12);
		me._edge.appendChild(me._edge_1);
		el=me._edge_2=document.createElement('div');
		el.ggId="edge_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._edge_22=document.createElement('div');
		el.ggId="edge_22";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_22.ggUpdatePosition=function (useTransition) {
		}
		me._edge_2.appendChild(me._edge_22);
		me._edge.appendChild(me._edge_2);
		el=me._edge_3=document.createElement('div');
		el.ggId="edge_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._edge_32=document.createElement('div');
		el.ggId="edge_32";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_32.ggUpdatePosition=function (useTransition) {
		}
		me._edge_3.appendChild(me._edge_32);
		me._edge.appendChild(me._edge_3);
		el=me._edge_4=document.createElement('div');
		el.ggId="edge_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._edge_42=document.createElement('div');
		el.ggId="edge_42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._edge_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._edge_42.ggUpdatePosition=function (useTransition) {
		}
		me._edge_4.appendChild(me._edge_42);
		me._edge.appendChild(me._edge_4);
		el=me._shot_edge=document.createElement('div');
		el.ggId="shot_edge";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._shot_edge.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shot_edge.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._shot_edge.ggCurrentLogicStateSize != newLogicStateSize) {
				me._shot_edge.ggCurrentLogicStateSize = newLogicStateSize;
				me._shot_edge.style.transition='width 0s, height 0s';
				if (me._shot_edge.ggCurrentLogicStateSize == 0) {
					me._shot_edge.style.width='80px';
					me._shot_edge.style.height='80px';
					me._shot_edge.style.left = 'calc(50% - (80px / 2))';
					me._shot_edge.style.top = 'calc(50% - (80px / 2))';
					skin.updateSize(me._shot_edge);
				}
				else {
					me._shot_edge.style.width='120px';
					me._shot_edge.style.height='120px';
					me._shot_edge.style.left = 'calc(50% - (120px / 2))';
					me._shot_edge.style.top = 'calc(50% - (120px / 2))';
					skin.updateSize(me._shot_edge);
				}
			}
		}
		me._shot_edge.logicBlock_size();
		me._shot_edge.ggUpdatePosition=function (useTransition) {
		}
		me._edge.appendChild(me._shot_edge);
		me.divSkin.appendChild(me._edge);
		el=me._voice_con=document.createElement('div');
		el.ggId="voice_con";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._voice_con.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._voice_con.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._voice_con.ggCurrentLogicStateSize != newLogicStateSize) {
				me._voice_con.ggCurrentLogicStateSize = newLogicStateSize;
				me._voice_con.style.transition='width 0s, height 0s';
				if (me._voice_con.ggCurrentLogicStateSize == 0) {
					me._voice_con.style.width='80px';
					me._voice_con.style.height='80px';
					skin.updateSize(me._voice_con);
				}
				else {
					me._voice_con.style.width='120px';
					me._voice_con.style.height='120px';
					skin.updateSize(me._voice_con);
				}
			}
		}
		me._voice_con.logicBlock_size();
		me._voice_con.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("voice") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._voice_con.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._voice_con.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._voice_con.style.transition='width 0s, height 0s';
				if (me._voice_con.ggCurrentLogicStateVisible == 0) {
					me._voice_con.style.visibility="hidden";
					me._voice_con.ggVisible=false;
				}
				else if (me._voice_con.ggCurrentLogicStateVisible == 1) {
					me._voice_con.style.visibility="hidden";
					me._voice_con.ggVisible=false;
				}
				else {
					me._voice_con.style.visibility=(Number(me._voice_con.style.opacity)>0||!me._voice_con.style.opacity)?'inherit':'hidden';
					me._voice_con.ggVisible=true;
				}
			}
		}
		me._voice_con.logicBlock_visible();
		me._voice_con.ggUpdatePosition=function (useTransition) {
		}
		el=me._voice_contro=document.createElement('div');
		el.ggId="Voice_contro";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='border-radius: 999px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._voice_contro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._voice_contro.onclick=function (e) {
			player.setVariableValue('mute', !player.getVariableValue('mute'));
			if (
				(
					((player.getHasSounds() == true))
				)
			) {
					player.playSound("_background","1");
			}
			if (
				(
					((player.getHasSounds() == true))
				)
			) {
					player.playSound("Element01","1");
			}
		}
		me._voice_contro.ggUpdatePosition=function (useTransition) {
		}
		el=me._mc_video=document.createElement('div');
		me._mc_video.seekbars = [];
		me._mc_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._mc_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._mc_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._mc_video.hasChildNodes()) {
				me._mc_video.removeChild(me._mc_video.lastChild);
			}
			if (me._mc_video__vid) {
				me._mc_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._mc_video.ggVideoNotLoaded == false && me._mc_video.ggDeactivate && player.isPlaying('mc_video')) { me._mc_video.ggDeactivate(); }
				me._mc_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('mc_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._mc_video.ggVideoNotLoaded = false;
			me._mc_video__vid=document.createElement('video');
			me._mc_video__vid.className='ggskin ggskin_video';
			me._mc_video__vid.setAttribute('width', '100%');
			me._mc_video__vid.setAttribute('height', '100%');
			me._mc_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._mc_video__vid.setAttribute('controlsList', 'nodownload');
			me._mc_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._mc_video__vid.setAttribute('autoplay', '');
			me._mc_video__vid.setAttribute('loop', '');
			me._mc_video__source=document.createElement('source');
			me._mc_video__source.setAttribute('src', media);
			me._mc_video__vid.setAttribute('playsinline', 'playsinline');
			me._mc_video__vid.setAttribute('style', ';');
			me._mc_video__vid.style.outline = 'none';
			me._mc_video__vid.appendChild(me._mc_video__source);
			me._mc_video.appendChild(me._mc_video__vid);
			var videoEl = player.registerVideoElement('mc_video', me._mc_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('mc_video', 0.0);
			notifySeekbars();
			me._mc_video.ggVideoSource = media;
		}
		el.ggId="mc_video";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mc_video.ggIsActive=function() {
			if (me._mc_video__vid != null) {
				return (me._mc_video__vid.paused == false && me._mc_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mc_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mute') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mc_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mc_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mc_video.style.transition='';
				if (me._mc_video.ggCurrentLogicStateVisible == 0) {
					me._mc_video.style.visibility="hidden";
					me._mc_video.ggInitMedia('');
					me._mc_video.ggVisible=false;
				}
				else {
					me._mc_video.style.visibility="hidden";
					me._mc_video.ggInitMedia('');
					me._mc_video.ggVisible=false;
				}
			}
		}
		me._mc_video.logicBlock_visible();
		me._mc_video.ggUpdatePosition=function (useTransition) {
		}
		me._voice_contro.appendChild(me._mc_video);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "assets/mc_women.webp";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mute') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._external_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._external_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._external_1.style.transition='';
				if (me._external_1.ggCurrentLogicStateVisible == 0) {
					me._external_1.style.visibility=(Number(me._external_1.style.opacity)>0||!me._external_1.style.opacity)?'inherit':'hidden';
					me._external_1.ggSubElement.src=me._external_1.ggText;
					me._external_1.ggVisible=true;
				}
				else {
					me._external_1.style.visibility="hidden";
					me._external_1.ggSubElement.src='';
					me._external_1.ggVisible=false;
				}
			}
		}
		me._external_1.logicBlock_visible();
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._external_1.scrollLeft=currentWidth / 2 - me._external_1.clientWidth / 2;
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._external_1.scrollTop=currentHeight / 2 - me._external_1.clientHeight / 2;
			}
		}
		me._voice_contro.appendChild(me._external_1);
		el=me._mc_img=document.createElement('div');
		els=me._mc_img__img=document.createElement('img');
		els.className='ggskin ggskin_mc_img';
		hs=basePath + 'images/mc_img.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mc_img";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mc_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mc_img.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mute') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mc_img.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mc_img.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mc_img.style.transition='';
				if (me._mc_img.ggCurrentLogicStateVisible == 0) {
					me._mc_img.style.visibility=(Number(me._mc_img.style.opacity)>0||!me._mc_img.style.opacity)?'inherit':'hidden';
					me._mc_img.ggVisible=true;
				}
				else {
					me._mc_img.style.visibility="hidden";
					me._mc_img.ggVisible=false;
				}
			}
		}
		me._mc_img.logicBlock_visible();
		me._mc_img.ggUpdatePosition=function (useTransition) {
		}
		me._voice_contro.appendChild(me._mc_img);
		me._voice_con.appendChild(me._voice_contro);
		el=me._seekbar_element=document.createElement('div');
		me._seekbar_element__playhead=document.createElement('div');
		me._seekbar_element.mediaEl = null;
		me._seekbar_element.fromBufferSource = false;
		me._seekbar_element.ggMediaId = 'Element01';
		el.ggId="Seekbar_element";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 8px;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._seekbar_element.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._seekbar_element.mediaEl != null) {
					if (e.target == me._seekbar_element) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._seekbar_element.fromBufferSource) {
							let seekpos = (mouseX / me._seekbar_element.clientWidth) * me._seekbar_element.mediaEl.bufferSoundDuration();
							me._seekbar_element.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._seekbar_element.clientWidth) * me._seekbar_element.mediaEl.duration;
							if(!isNaN(seekpos)) me._seekbar_element.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._seekbar_element || e.target == me._seekbar_element__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._seekbar_element.getBoundingClientRect().x;
							if (me._seekbar_element.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_element.clientWidth) * me._seekbar_element.mediaEl.bufferSoundDuration();
								me._seekbar_element.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_element.clientWidth) * me._seekbar_element.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_element.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._seekbar_element.getBoundingClientRect().x;
							if (me._seekbar_element.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_element.clientWidth) * me._seekbar_element.mediaEl.bufferSoundDuration();
								me._seekbar_element.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_element.clientWidth) * me._seekbar_element.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_element.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._seekbar_element.onmousedown = me._seekbar_element.ontouchstart = me._seekbar_element.mouseTouchHandling;
		me._seekbar_element.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_element__playhead.style.visibility = 'hidden';
				me._seekbar_element.style.background = 'rgba(0,0,0,0)';
				me._seekbar_element.ggConnected = false;
			}
			if (me._seekbar_element.mediaEl != null) {
				if (me._seekbar_element.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_element.updatePlayback);
					if (me._seekbar_element.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_element.bufferSoundActivate);
					}
					if (me._seekbar_element.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_element.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_element.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_element.bufferSoundDeactivate);
					}
					if (me._seekbar_element.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_element.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_element.mediaEl.removeEventListener('progress', me._seekbar_element.updatePlayback);
					me._seekbar_element.mediaEl.removeEventListener('canplay', me._seekbar_element.updatePlayback);
					me._seekbar_element.mediaEl.removeEventListener('timeupdate', me._seekbar_element.updatePlayback);
					if (me._seekbar_element.ggActivate) {
						me._seekbar_element.mediaEl.removeEventListener('play', me._seekbar_element.ggActivate);
					}
					if (me._seekbar_element.ggDeactivate) {
						me._seekbar_element.mediaEl.removeEventListener('ended', me._seekbar_element.ggDeactivate);
						me._seekbar_element.mediaEl.removeEventListener('pause', me._seekbar_element.ggDeactivate);
					}
					if (me._seekbar_element.ggMediaEnded) {
						me._seekbar_element.mediaEl.removeEventListener('ended', me._seekbar_element.ggMediaEnded);
					}
				}
			}
			me._seekbar_element.mediaEl = player.getMediaObject(me._seekbar_element.ggMediaId);
			if (me._seekbar_element.mediaEl) {
				me._seekbar_element.fromBufferSource = false;
			} else {
				me._seekbar_element.mediaEl = player.getMediaBufferSourceObject('Element01');
				me._seekbar_element.fromBufferSource = true;
			}
			if (me._seekbar_element.mediaEl != null) {
				me._seekbar_element__playhead.style.visibility = 'inherit';
				me._seekbar_element__playhead.style.left = '-1px';
				if (me._seekbar_element.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_element.updatePlayback);
					if (me._seekbar_element.ggActivate) {
						me._seekbar_element.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_element.mediaEl.id) me._seekbar_element.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_element.bufferSoundActivate);
					}
					if (me._seekbar_element.ggDeactivate) {
						me._seekbar_element.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_element.mediaEl.id) me._seekbar_element.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_element.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_element.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_element.bufferSoundDeactivate);
					}
					if (me._seekbar_element.ggMediaEnded) {
						me._seekbar_element.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_element.mediaEl.id) me._seekbar_element.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_element.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_element.mediaEl.addEventListener('progress', me._seekbar_element.updatePlayback);
					me._seekbar_element.mediaEl.addEventListener('canplay', me._seekbar_element.updatePlayback);
					me._seekbar_element.mediaEl.addEventListener('timeupdate', me._seekbar_element.updatePlayback);
					if (me._seekbar_element.ggActivate) {
						me._seekbar_element.mediaEl.addEventListener('play', me._seekbar_element.ggActivate);
					}
					if (me._seekbar_element.ggDeactivate) {
						me._seekbar_element.mediaEl.addEventListener('ended', me._seekbar_element.ggDeactivate);
						me._seekbar_element.mediaEl.addEventListener('pause', me._seekbar_element.ggDeactivate);
					}
					if (me._seekbar_element.ggMediaEnded) {
						me._seekbar_element.mediaEl.addEventListener('ended', me._seekbar_element.ggMediaEnded);
					}
				}
				me._seekbar_element.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._seekbar_element.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_element.updatePlayback = function(args) {
			if (!me._seekbar_element.ggConnected) return;
			if (me._seekbar_element.mediaEl != null) {
				if (me._seekbar_element.mediaEl.readyState || (me._seekbar_element.fromBufferSource && args && args['id'] == me._seekbar_element.mediaEl.id)) {
					if (me._seekbar_element.fromBufferSource) {
						var percent = me._seekbar_element.mediaEl.bufferSoundCurrentTime() / me._seekbar_element.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_element.mediaEl.currentTime / me._seekbar_element.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_element.clientWidth - 2 * 3 + 1) * percent);
					playheadpos += -1;
					me._seekbar_element__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._seekbar_element.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(0,102,179,1) 0%, rgba(0,102,179,1) ' + currPos + '%';
					if (me._seekbar_element.fromBufferSource) {
						gradientString += ', rgba(223,223,223,0.588235) ' + currPos +'%, rgba(223,223,223,0.588235) 100%';
					} else {
						for (var i = 0; i < me._seekbar_element.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_element.mediaEl.buffered.start(i) / me._seekbar_element.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_element.mediaEl.buffered.end(i) / me._seekbar_element.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(223,223,223,0.588235) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(223,223,223,0.588235) ' + rangeStart + '%';
								}
									gradientString += ', rgba(223,223,223,0.588235) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_element.style.background = gradientString;
				}
			}
		}
		me._seekbar_element.appendChild(me._seekbar_element__playhead);
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 8px;';
		hs_playhead += 'width: 8px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 4px;';
		hs_playhead += cssPrefix + 'border-radius: 4px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._seekbar_element.setAttribute('style', hs);
		me._seekbar_element__playhead.setAttribute('style', hs_playhead);
		me._seekbar_element.ggIsActive=function() {
			if (me._seekbar_element.mediaEl != null) {
				return (me._seekbar_element.mediaEl.paused == false && me._seekbar_element.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_element.ggUpdatePosition=function (useTransition) {
			me._seekbar_element.updatePlayback();
		}
		me._voice_con.appendChild(me._seekbar_element);
		el=me._info_pad=document.createElement('div');
		el.ggId="info_pad";
		el.ggDx=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #374785;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 4px) / 2) - 42%);';
		hs+='position : absolute;';
		hs+='top : -2%;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_pad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_pad.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info_pad.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info_pad.ggCurrentLogicStateSize = newLogicStateSize;
				me._info_pad.style.transition='width 0s, height 0s';
				if (me._info_pad.ggCurrentLogicStateSize == 0) {
					me._info_pad.style.width='20px';
					me._info_pad.style.height='20px';
					me._info_pad.style.left = 'calc(50% - (20px / 2) + (4px / 2) + -42%)';
					skin.updateSize(me._info_pad);
				}
				else {
					me._info_pad.style.width='24px';
					me._info_pad.style.height='24px';
					me._info_pad.style.left = 'calc(50% - (24px / 2) + (4px / 2) + -42%)';
					skin.updateSize(me._info_pad);
				}
			}
		}
		me._info_pad.logicBlock_size();
		me._info_pad.onclick=function (e) {
			player.setVariableValue('information', !player.getVariableValue('information'));
		}
		me._info_pad.ggUpdatePosition=function (useTransition) {
		}
		el=me._infoico=document.createElement('div');
		els=me._infoico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgZmlsbD0iI2ZmZmZmZiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLW9wYWNpdHk9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiA8Zz4KICA8cmVjdCB3aWR0aD0iMjQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiLz4KICA8cGF0aCBkPSJNMTksM0g1QzMuOSwzLDMsMy45LDMsNXYxNGMwLDEuMSwwLjksMiwyLDJoMTRjMS4xLDAsMi0wLjksMi0yVjVDMjEsMy45LDIwLjEsMywxOSwzeiBNMTMsMTdIOGMtMC41NSwwLTEtMC40NS0xLTEgYzAtMC41NSwwLj'+
			'Q1LTEsMS0xaDVjMC41NSwwLDEsMC40NSwxLDFDMTQsMTYuNTUsMTMuNTUsMTcsMTMsMTd6IE0xNiwxM0g4Yy0wLjU1LDAtMS0wLjQ1LTEtMWMwLTAuNTUsMC40NS0xLDEtMWg4IGMwLjU1LDAsMSwwLjQ1LDEsMUMxNywxMi41NSwxNi41NSwxMywxNiwxM3ogTTE2LDlIOEM3LjQ1LDksNyw4LjU1LDcsOGMwLTAuNTUsMC40NS0xLDEtMWg4YzAuNTUsMCwxLDAuNDUsMSwxIEMxNyw4LjU1LDE2LjU1LDksMTYsOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._infoico__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info-ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infoico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infoico.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._infoico.ggCurrentLogicStateSize != newLogicStateSize) {
				me._infoico.ggCurrentLogicStateSize = newLogicStateSize;
				me._infoico.style.transition='width 0s, height 0s';
				if (me._infoico.ggCurrentLogicStateSize == 0) {
					me._infoico.style.width='14px';
					me._infoico.style.height='14px';
					me._infoico.style.left = 'calc(50% - (14px / 2))';
					me._infoico.style.top = 'calc(50% - (14px / 2))';
					skin.updateSize(me._infoico);
				}
				else {
					me._infoico.style.width='20px';
					me._infoico.style.height='20px';
					me._infoico.style.left = 'calc(50% - (20px / 2))';
					me._infoico.style.top = 'calc(50% - (20px / 2))';
					skin.updateSize(me._infoico);
				}
			}
		}
		me._infoico.logicBlock_size();
		me._infoico.ggUpdatePosition=function (useTransition) {
		}
		me._info_pad.appendChild(me._infoico);
		me._voice_con.appendChild(me._info_pad);
		me.divSkin.appendChild(me._voice_con);
		el=me._remote_container=document.createElement('div');
		el.ggId="remote_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._remote_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._remote_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._remote_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._remote_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._remote_container.style.transition='';
				if (me._remote_container.ggCurrentLogicStateVisible == 0) {
					me._remote_container.style.visibility="hidden";
					me._remote_container.ggVisible=false;
				}
				else {
					me._remote_container.style.visibility="hidden";
					me._remote_container.ggVisible=false;
				}
			}
		}
		me._remote_container.logicBlock_visible();
		me._remote_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._setting_pad=document.createElement('div');
		el.ggId="setting_pad";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #374785;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._setting_pad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._setting_pad.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['setting_pad'] == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._setting_pad.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._setting_pad.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._setting_pad.style.transition='background-color 200ms ease 0ms';
				if (me._setting_pad.ggCurrentLogicStateBackgroundColor == 0) {
					me._setting_pad.style.backgroundColor="rgba(36,48,94,1)";
				}
				else {
					me._setting_pad.style.backgroundColor="rgba(55,71,133,1)";
				}
			}
		}
		me._setting_pad.logicBlock_backgroundcolor();
		me._setting_pad.onclick=function (e) {
			player.setVariableValue('show_remote', !player.getVariableValue('show_remote'));
		}
		me._setting_pad.onmouseover=function (e) {
			me.elementMouseOver['setting_pad']=true;
			me._setting_pad.logicBlock_backgroundcolor();
		}
		me._setting_pad.onmouseout=function (e) {
			me.elementMouseOver['setting_pad']=false;
			me._setting_pad.logicBlock_backgroundcolor();
		}
		me._setting_pad.ggCurrentLogicStateBackgroundColor = -1;
		me._setting_pad.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['setting_pad']) {
				me.elementMouseOver['setting_pad']=true;
			}
		}
		me._setting_pad.ggUpdatePosition=function (useTransition) {
		}
		el=me._setting_ico=document.createElement('div');
		els=me._setting_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._setting_ico__img.setAttribute('src',basePath + 'images/setting_ico.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="setting_ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._setting_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._setting_ico.ggUpdatePosition=function (useTransition) {
		}
		me._setting_pad.appendChild(me._setting_ico);
		me._remote_container.appendChild(me._setting_pad);
		el=me._language_pad=document.createElement('div');
		el.ggId="Language_pad";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #374785;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='bottom : 35px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._language_pad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_pad.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('show_remote') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._language_pad.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._language_pad.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._language_pad.style.transition='background-color 200ms ease 0ms';
				if (me._language_pad.ggCurrentLogicStateVisible == 0) {
					me._language_pad.style.visibility=(Number(me._language_pad.style.opacity)>0||!me._language_pad.style.opacity)?'inherit':'hidden';
					me._language_pad.ggVisible=true;
				}
				else {
					me._language_pad.style.visibility="hidden";
					me._language_pad.ggVisible=false;
				}
			}
		}
		me._language_pad.logicBlock_visible();
		me._language_pad.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['language_pad'] == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._language_pad.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._language_pad.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._language_pad.style.transition='background-color 200ms ease 0ms';
				if (me._language_pad.ggCurrentLogicStateBackgroundColor == 0) {
					me._language_pad.style.backgroundColor="rgba(36,48,94,1)";
				}
				else {
					me._language_pad.style.backgroundColor="rgba(55,71,133,1)";
				}
			}
		}
		me._language_pad.logicBlock_backgroundcolor();
		me._language_pad.onmouseover=function (e) {
			me.elementMouseOver['language_pad']=true;
			me._language_pad.logicBlock_backgroundcolor();
		}
		me._language_pad.onmouseout=function (e) {
			me.elementMouseOver['language_pad']=false;
			me._language_pad.logicBlock_backgroundcolor();
		}
		me._language_pad.ggCurrentLogicStateVisible = -1;
		me._language_pad.ggCurrentLogicStateBackgroundColor = -1;
		me._language_pad.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['language_pad']) {
				me.elementMouseOver['language_pad']=true;
			}
		}
		me._language_pad.ggUpdatePosition=function (useTransition) {
		}
		el=me._vi_lang=document.createElement('div');
		els=me._vi_lang__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._vi_lang__img.setAttribute('src',basePath + 'images/vi_lang.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vi_lang";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vi_lang.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vi_lang.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "vi"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vi_lang.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vi_lang.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vi_lang.style.transition='';
				if (me._vi_lang.ggCurrentLogicStateVisible == 0) {
					me._vi_lang.style.visibility=(Number(me._vi_lang.style.opacity)>0||!me._vi_lang.style.opacity)?'inherit':'hidden';
					me._vi_lang.ggVisible=true;
				}
				else {
					me._vi_lang.style.visibility="hidden";
					me._vi_lang.ggVisible=false;
				}
			}
		}
		me._vi_lang.logicBlock_visible();
		me._vi_lang.onclick=function (e) {
			player.setLanguage("en-US");
		}
		me._vi_lang.ggUpdatePosition=function (useTransition) {
		}
		me._language_pad.appendChild(me._vi_lang);
		el=me._en_lang=document.createElement('div');
		els=me._en_lang__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._en_lang__img.setAttribute('src',basePath + 'images/en_lang.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="en_lang";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._en_lang.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._en_lang.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "en-US"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._en_lang.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._en_lang.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._en_lang.style.transition='';
				if (me._en_lang.ggCurrentLogicStateVisible == 0) {
					me._en_lang.style.visibility=(Number(me._en_lang.style.opacity)>0||!me._en_lang.style.opacity)?'inherit':'hidden';
					me._en_lang.ggVisible=true;
				}
				else {
					me._en_lang.style.visibility="hidden";
					me._en_lang.ggVisible=false;
				}
			}
		}
		me._en_lang.logicBlock_visible();
		me._en_lang.onclick=function (e) {
			player.setLanguage("vi");
		}
		me._en_lang.ggUpdatePosition=function (useTransition) {
		}
		me._language_pad.appendChild(me._en_lang);
		me._remote_container.appendChild(me._language_pad);
		el=me._zoom_pad=document.createElement('div');
		el.ggId="zoom_pad";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #374785;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='bottom : 70px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_pad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_pad.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('show_remote') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoom_pad.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoom_pad.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoom_pad.style.transition='background-color 200ms ease 0ms';
				if (me._zoom_pad.ggCurrentLogicStateVisible == 0) {
					me._zoom_pad.style.visibility=(Number(me._zoom_pad.style.opacity)>0||!me._zoom_pad.style.opacity)?'inherit':'hidden';
					me._zoom_pad.ggVisible=true;
				}
				else {
					me._zoom_pad.style.visibility="hidden";
					me._zoom_pad.ggVisible=false;
				}
			}
		}
		me._zoom_pad.logicBlock_visible();
		me._zoom_pad.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['zoom_pad'] == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._zoom_pad.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._zoom_pad.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._zoom_pad.style.transition='background-color 200ms ease 0ms';
				if (me._zoom_pad.ggCurrentLogicStateBackgroundColor == 0) {
					me._zoom_pad.style.backgroundColor="rgba(36,48,94,1)";
				}
				else {
					me._zoom_pad.style.backgroundColor="rgba(55,71,133,1)";
				}
			}
		}
		me._zoom_pad.logicBlock_backgroundcolor();
		me._zoom_pad.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._zoom_pad.onmouseover=function (e) {
			me.elementMouseOver['zoom_pad']=true;
			me._zoom_pad.logicBlock_backgroundcolor();
		}
		me._zoom_pad.onmouseout=function (e) {
			me.elementMouseOver['zoom_pad']=false;
			me._zoom_pad.logicBlock_backgroundcolor();
		}
		me._zoom_pad.ggCurrentLogicStateVisible = -1;
		me._zoom_pad.ggCurrentLogicStateBackgroundColor = -1;
		me._zoom_pad.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['zoom_pad']) {
				me.elementMouseOver['zoom_pad']=true;
			}
		}
		me._zoom_pad.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoom_in_ico=document.createElement('div');
		els=me._zoom_in_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._zoom_in_ico__img.setAttribute('src',basePath + 'images/zoom_in_ico.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in_ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_in_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in_ico.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoom_in_ico.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoom_in_ico.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoom_in_ico.style.transition='';
				if (me._zoom_in_ico.ggCurrentLogicStateVisible == 0) {
					me._zoom_in_ico.style.visibility="hidden";
					me._zoom_in_ico.ggVisible=false;
				}
				else {
					me._zoom_in_ico.style.visibility=(Number(me._zoom_in_ico.style.opacity)>0||!me._zoom_in_ico.style.opacity)?'inherit':'hidden';
					me._zoom_in_ico.ggVisible=true;
				}
			}
		}
		me._zoom_in_ico.logicBlock_visible();
		me._zoom_in_ico.ggUpdatePosition=function (useTransition) {
		}
		me._zoom_pad.appendChild(me._zoom_in_ico);
		el=me._zoom_out_ico=document.createElement('div');
		els=me._zoom_out_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._zoom_out_ico__img.setAttribute('src',basePath + 'images/zoom_out_ico.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out_ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_out_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out_ico.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoom_out_ico.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoom_out_ico.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoom_out_ico.style.transition='';
				if (me._zoom_out_ico.ggCurrentLogicStateVisible == 0) {
					me._zoom_out_ico.style.visibility=(Number(me._zoom_out_ico.style.opacity)>0||!me._zoom_out_ico.style.opacity)?'inherit':'hidden';
					me._zoom_out_ico.ggVisible=true;
				}
				else {
					me._zoom_out_ico.style.visibility="hidden";
					me._zoom_out_ico.ggVisible=false;
				}
			}
		}
		me._zoom_out_ico.logicBlock_visible();
		me._zoom_out_ico.ggUpdatePosition=function (useTransition) {
		}
		me._zoom_pad.appendChild(me._zoom_out_ico);
		me._remote_container.appendChild(me._zoom_pad);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 105px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_auto_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('show_remote') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_auto_rotate.style.transition='';
				if (me._button_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._button_auto_rotate.style.visibility=(Number(me._button_auto_rotate.style.opacity)>0||!me._button_auto_rotate.style.opacity)?'inherit':'hidden';
					me._button_auto_rotate.ggVisible=true;
				}
				else {
					me._button_auto_rotate.style.visibility="hidden";
					me._button_auto_rotate.ggVisible=false;
				}
			}
		}
		me._button_auto_rotate.logicBlock_visible();
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.onmouseover=function (e) {
			me.elementMouseOver['button_auto_rotate']=true;
			me._rotate_pad.logicBlock_backgroundcolor();
		}
		me._button_auto_rotate.onmouseout=function (e) {
			me.elementMouseOver['button_auto_rotate']=false;
			me._rotate_pad.logicBlock_backgroundcolor();
		}
		me._button_auto_rotate.ggCurrentLogicStateVisible = -1;
		me._button_auto_rotate.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['button_auto_rotate']) {
				me.elementMouseOver['button_auto_rotate']=true;
				me._rotate_pad.logicBlock_backgroundcolor();
			}
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._rotate_pad=document.createElement('div');
		el.ggId="rotate_pad";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #374785;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate_pad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_pad.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['button_auto_rotate'] == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rotate_pad.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rotate_pad.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rotate_pad.style.transition='background-color 200ms ease 0ms';
				if (me._rotate_pad.ggCurrentLogicStateBackgroundColor == 0) {
					me._rotate_pad.style.backgroundColor="rgba(36,48,94,1)";
				}
				else {
					me._rotate_pad.style.backgroundColor="rgba(55,71,133,1)";
				}
			}
		}
		me._rotate_pad.logicBlock_backgroundcolor();
		me._rotate_pad.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._rotate_pad);
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQtNC40Qy0xOTYuOSwzNzIt'+
			'MTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMiw0MzIuMyYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNjNS44LDAsMTEuMS0yLDE1'+
			'LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'tjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE0Mi44LDM2MS43YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2Qy0xNDMuNiwzNjEuOC0xNDMuMiwzNjEuNy0xNDIu'+
			'OCwzNjEuNyIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnPgogICA8cGF0aCBkPSJNLTE5Mi4zLDM3Ny4xYzAuNiwwLjYsMS40LDAuNiwyLDAuMmM0LjItMy4zLDkuNS01LjMsMTUuMy01LjNjNS4zLDAsMTAuMSwxLjYsMTQuMiw0LjRsNi40LTYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUuNy00LjQtMTIuOS03LTIwLjYtN2MtOCwwLTE1LjMsMi44LTIxLjEsNy40Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM0MtMTk1LjQsMzczLjctMTkyLjgsMzc2LjYtMTkyLjMsMzc3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC'+
			'43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTguNi0xMzEuNCwzOTguMi0xMzEuNywzOTcuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA5LDM5N2MwLjEsNy43LDIu'+
			'NywxNC44LDcuMSwyMC41bDYuNC02LjRjLTIuOC00LTQuNS04LjgtNC41LTE0LjFoMC42aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43SC0yMDl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTU3LjcsNDE2LjZjLTAuNi0wLjYtMS40LTAuNi'+
			'0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zYy01LjIsMC0xMC0xLjYtMTQtNC4zbC02LjQsNi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M1LjcsNC4zLDEyLjgsNi45LDIwLjUsNi45YzgsMCwxNS4zLTIuOCwyMS4xLTcuNGMwLjctMC41LDAuOC0xLjYsMC4xLTIuM0MtMTU0LjYsNDIwLjEtMTU3LjIsNDE3LjEtMTU3LjcsNDE2LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style.transition='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.logicBlock_visible();
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwx'+
			'LDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LDM5N3ogTS0xNDQuNSw0MT'+
			'YuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBjMTguNywwLDM0LDE1LjIs'+
			'MzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTUzLjcsNDIxLjNjLTAuOC0wLjktMy41LTMuOS00LTQuNGMtMC42LTAuNi0xLjQtMC42LTItMC4yYy00LjIsMy4zLTkuNSw1LjMtMTUuMyw1LjNoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xMy44LDAtMjUtMTEuMi0yNS0yNWgwLjdoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuN2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC'+
			'4zLTAuNC0wLjYtMC42LTEtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuM2MwLjMsMC41LDAuNiwwLjcsMS4xLDAuN2g3LjdoMC41YzAsMTguNywxNS4yLDM0LDM0LDM0aDAmI3hkOyYjeGE7JiN4OTsmI3g5O2M4LDAsMTUuMy0yLjgsMjEuMS03LjRDLTE1My4yLDQyMy4xLTE1My4xLDQyMi0xNTMuNyw0MjEuM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2gtNy43aC0wLjVjMC0xOC43LTE1LjItMzQtMzQtMzRoMGMtOCww'+
			'LTE1LjMsMi44LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNywwLjUtMC44LDEuNi0wLjEsMi4zYzAuOCwwLjksMy41LDMuOSw0LDQuNGMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zaDBjMTMuOCwwLDI1LDExLjIsMjUsMjVoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7aC03LjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuN2MtMC4zLDAuNS0wLjIsMSwwLjEsMS4zbDEyLjgsMTcuOGMwLjMsMC40LDAuNiwwLjYsMSwwLjZjMC41LDAsMC44LTAuMiwxLjEtMC42bDEyLjctMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTguNy0xMzEuNCwzOT'+
			'guMi0xMzEuNywzOTcuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8Y2lyY2xlIGZpbGw9IiNGRkZGRkYiIGN4PSItMTc1IiBjeT0iMzk3IiByPSI0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._start_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style.transition='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.logicBlock_visible();
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me._remote_container.appendChild(me._button_auto_rotate);
		el=me._screenshotpad=document.createElement('div');
		el.ggId="screen-shot-pad";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #374785;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='bottom : 140px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screenshotpad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screenshotpad.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('show_remote') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screenshotpad.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screenshotpad.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screenshotpad.style.transition='';
				if (me._screenshotpad.ggCurrentLogicStateVisible == 0) {
					me._screenshotpad.style.visibility=(Number(me._screenshotpad.style.opacity)>0||!me._screenshotpad.style.opacity)?'inherit':'hidden';
					me._screenshotpad.ggVisible=true;
				}
				else {
					me._screenshotpad.style.visibility="hidden";
					me._screenshotpad.ggVisible=false;
				}
			}
		}
		me._screenshotpad.logicBlock_visible();
		me._screenshotpad.onclick=function (e) {
			player.setVariableValue('mode_snapshot', !player.getVariableValue('mode_snapshot'));
			player.setVariableValue('start_intro', true);
		}
		me._screenshotpad.ggUpdatePosition=function (useTransition) {
		}
		el=me._screenshotico=document.createElement('div');
		els=me._screenshotico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZWxsaXBzZSBmaWxsPSIjZmZmZmZmIiByeT0iMTAuODUiIHJ4PSIxMS4xIiBzdHJva2U9IiNmZmYiIGN4PSIzNS44IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN5PSIzNC42NCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBmaWxsLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik01Mi41NSwxNS4yOEg1MS4yN2EyLjgzLDIuODMsMCwwLDAsMC0uMjloMGE1LDUsMCwwLDAtNS01SDI0LjExYTUsNSwwLDAsMC01LDVoMGEyLjgzLDIuODMsMC'+
			'wwLDAsMCwuMjlIMTEuNDVhNi4wNyw2LjA3LDAsMCwwLTYsNi4wNnYyNi42YTYuMDcsNi4wNywwLDAsMCw2LDYuMDZoNDEuMWE2LjA3LDYuMDcsMCwwLDAsNi02LjA2VjIxLjM0QTYuMDcsNi4wNywwLDAsMCw1Mi41NSwxNS4yOFptLTM5LDEyYTQsNCwwLDEsMSw0LjA5LTRBNCw0LDAsMCwxLDEzLjU5LDI3LjMxWk0zNS44LDQ5QTE0LjcxLDE0LjcxLDAsMCwxLDIwLjksMzQuNDksMTQuNzEsMTQuNzEsMCwwLDEsMzUuOCwyMCwxNC43MSwxNC43MSwwLDAsMSw1MC43LDM0LjQ5LDE0LjcxLDE0LjcxLDAsMCwxLDM1LjgsNDlaIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1taXRl'+
			'cmxpbWl0PSIxMCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMjUiLz4KIDxlbGxpcHNlIGZpbGw9IiNmZmZmZmYiIHJ5PSIyLjY0IiByeD0iMi42MyIgc3Ryb2tlPSIjZmZmIiBjeD0iMTMuNTkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3k9IjIzLjQ5IiBzdHJva2Utd2lkdGg9IjAuMjUiIGZpbGwtb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._screenshotico__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="screenshot-ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screenshotico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screenshotico.ggUpdatePosition=function (useTransition) {
		}
		me._screenshotpad.appendChild(me._screenshotico);
		me._remote_container.appendChild(me._screenshotpad);
		el=me._vr_pad=document.createElement('div');
		el.ggId="vr_pad";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #374785;';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='border-radius : 999px;';
		hs+='bottom : 210px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr_pad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vr_pad.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('show_remote') == true)) && 
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vr_pad.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vr_pad.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vr_pad.style.transition='background-color 200ms ease 0ms';
				if (me._vr_pad.ggCurrentLogicStateVisible == 0) {
					me._vr_pad.style.visibility=(Number(me._vr_pad.style.opacity)>0||!me._vr_pad.style.opacity)?'inherit':'hidden';
					me._vr_pad.ggVisible=true;
				}
				else {
					me._vr_pad.style.visibility="hidden";
					me._vr_pad.ggVisible=false;
				}
			}
		}
		me._vr_pad.logicBlock_visible();
		me._vr_pad.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['vr_pad'] == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vr_pad.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vr_pad.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vr_pad.style.transition='background-color 200ms ease 0ms';
				if (me._vr_pad.ggCurrentLogicStateBackgroundColor == 0) {
					me._vr_pad.style.backgroundColor="rgba(36,48,94,1)";
				}
				else {
					me._vr_pad.style.backgroundColor="rgba(55,71,133,1)";
				}
			}
		}
		me._vr_pad.logicBlock_backgroundcolor();
		me._vr_pad.onclick=function (e) {
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.enterVR();
			}
		}
		me._vr_pad.onmouseover=function (e) {
			me.elementMouseOver['vr_pad']=true;
			me._vr_pad.logicBlock_backgroundcolor();
		}
		me._vr_pad.onmouseout=function (e) {
			me.elementMouseOver['vr_pad']=false;
			me._vr_pad.logicBlock_backgroundcolor();
		}
		me._vr_pad.ggCurrentLogicStateVisible = -1;
		me._vr_pad.ggCurrentLogicStateBackgroundColor = -1;
		me._vr_pad.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['vr_pad']) {
				me.elementMouseOver['vr_pad']=true;
			}
		}
		me._vr_pad.ggUpdatePosition=function (useTransition) {
		}
		el=me._vr_ico=document.createElement('div');
		els=me._vr_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._vr_ico__img.setAttribute('src',basePath + 'images/vr_ico.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vr_ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vr_ico.ggUpdatePosition=function (useTransition) {
		}
		me._vr_pad.appendChild(me._vr_ico);
		me._remote_container.appendChild(me._vr_pad);
		me.divSkin.appendChild(me._remote_container);
		el=me._next_con=document.createElement('div');
		el.ggId="next_con";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 75px;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((208px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 208px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._next_con.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._next_con.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._next_con.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._next_con.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._next_con.style.transition='left 0s, bottom 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._next_con.ggCurrentLogicStatePosition == 0) {
					me._next_con.style.left = 'calc(50% - (208px / 2))';
					me._next_con.style.bottom='70px';
				}
				else {
					me._next_con.style.left='calc(50% - ((208px + 0px) / 2) + 0px)';
					me._next_con.style.bottom='75px';
				}
			}
		}
		me._next_con.logicBlock_position();
		me._next_con.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._next_con.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._next_con.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._next_con.style.transition='left 0s, bottom 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._next_con.ggCurrentLogicStateScaling == 0) {
					me._next_con.ggParameter.sx = 0.75;
					me._next_con.ggParameter.sy = 0.75;
					me._next_con.style.transform=parameterToTransform(me._next_con.ggParameter);
					skin.updateSize(me._next_con);
				}
				else {
					me._next_con.ggParameter.sx = 1;
					me._next_con.ggParameter.sy = 1;
					me._next_con.style.transform=parameterToTransform(me._next_con.ggParameter);
					skin.updateSize(me._next_con);
				}
			}
		}
		me._next_con.logicBlock_scaling();
		me._next_con.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false)) || 
				((player.getVariableValue('mode_snapshot') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._next_con.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._next_con.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._next_con.style.transition='left 0s, bottom 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._next_con.ggCurrentLogicStateVisible == 0) {
					me._next_con.style.visibility="hidden";
					me._next_con.ggVisible=false;
				}
				else {
					me._next_con.style.visibility=(Number(me._next_con.style.opacity)>0||!me._next_con.style.opacity)?'inherit':'hidden';
					me._next_con.ggVisible=true;
				}
			}
		}
		me._next_con.logicBlock_visible();
		me._next_con.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player._(me.ggUserdata.source) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._next_con.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._next_con.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._next_con.style.transition='left 0s, bottom 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._next_con.ggCurrentLogicStateAlpha == 0) {
					me._next_con.style.visibility=me._next_con.ggVisible?'inherit':'hidden';
					me._next_con.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._next_con.style.opacity == 0.0) { me._next_con.style.visibility="hidden"; } }, 505);
					me._next_con.style.opacity=0;
				}
			}
		}
		me._next_con.logicBlock_alpha();
		me._next_con.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_next=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 208;
		el.ggHeight = 70;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_next.ggUpdating == true) return;
			me._cloner_next.ggUpdating = true;
			var el=me._cloner_next;
			var curNumCols = 0;
			curNumCols = me._cloner_next.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_next.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_next.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_next.getFilteredNodes(tourNodes, filter);
			me._cloner_next.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_next.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_next.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_next.ggWidth) + 'px';
				parameter.width=me._cloner_next.ggWidth + 'px';
				parameter.height=me._cloner_next.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_next_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_next.ggNodeCount = me._cloner_next.ggNumFilterPassed;
			me._cloner_next.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_next.parentNode && me._cloner_next.parentNode.classList.contains('ggskin_subelement') && me._cloner_next.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_next.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Cloner_next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_next.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_next.childNodes.length; i++) {
				var child=me._cloner_next.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_next.ggUpdatePosition=function (useTransition) {
			me._cloner_next.ggUpdate();
		}
		me._next_con.appendChild(me._cloner_next);
		me.divSkin.appendChild(me._next_con);
		el=me._prev=document.createElement('div');
		els=me._prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdGFiaW5kZXg9Ii0xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJhcnJvd19iYWNrX3N2ZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTggMzQiPgogPHRpdGxlPmJhY2s8L3RpdGxlPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAgICAgICAuYXJyb3dfYmFja19zdmcgcG9seWdvbiB7CiAgICAgICAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICAgICAgfQogICAgICAgICAgICAuYXJyb3dfYmFja19zdmcgcG9seWdvbi5hcnJvd19iYWNrX3N2Z19zaGFkb3cgewogICAgIC'+
			'AgICAgICAgIGZpbGw6ICMwMDA7CiAgICAgICAgICAgICAgb3BhY2l0eTogLjM7CiAgICAgICAgICAgIH0KICAgICAgICA8L3N0eWxlPgogPC9kZWZzPgogPGc+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDUuMDAwMDAwKSI+CiAgIDxwb2x5Z29uIGNsYXNzPSJhcnJvd19iYWNrX3N2Z19zaGFkb3ciIHBvaW50cz0iNDguMDgxNjg2NSAwLjY5NjE2MTExMSA0Mi41ODEwOTE5IDEzLjE0ODQzODkgNTcuNDc5MjU0MSAxMy4xNDg0Mzg5IDI3Ljg5MTQxNjIgMjkuMDAwMTYxMSAwLjE5MjQ5NzI5NyAxMy4xNDg0Mzg5IDEzLjExMDgyMTYgMTMuMTQ4NDM4OSA3LjcxNjgyMTYyIDAu'+
			'Njk2MTYxMTExIi8+CiAgPC9nPgogIDxwb2x5Z29uIHBvaW50cz0iNDguNDg1NDI4OSAwIDQyLjkxNjM0OTcgMTIuMzE4NTMzNyA1OCAxMi4zMTg1MzM3IDI4LjA0Mzc4MTYgMjggMCAxMi4zMTg1MzM3IDEzLjA3OTE2MjcgMTIuMzE4NTMzNyA3LjYxODAwNTIgMCIvPgogPC9nPgo8L3N2Zz4K';
		me._prev__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="prev";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._prev.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._prev.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._prev.ggCurrentLogicStateSize != newLogicStateSize) {
				me._prev.ggCurrentLogicStateSize = newLogicStateSize;
				me._prev.style.transition='width 0s, height 0s';
				if (me._prev.ggCurrentLogicStateSize == 0) {
					me._prev.style.width='24px';
					me._prev.style.height='13px';
					me._prev.style.left = 'calc(50% - (24px / 2))';
					skin.updateSize(me._prev);
				}
				else {
					me._prev.style.width='32px';
					me._prev.style.height='18px';
					me._prev.style.left = 'calc(50% - (32px / 2))';
					skin.updateSize(me._prev);
				}
			}
		}
		me._prev.logicBlock_size();
		me._prev.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false)) || 
				((player.getVariableValue('mode_snapshot') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._prev.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._prev.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._prev.style.transition='width 0s, height 0s';
				if (me._prev.ggCurrentLogicStateVisible == 0) {
					me._prev.style.visibility="hidden";
					me._prev.ggVisible=false;
				}
				else {
					me._prev.style.visibility=(Number(me._prev.style.opacity)>0||!me._prev.style.opacity)?'inherit':'hidden';
					me._prev.ggVisible=true;
				}
			}
		}
		me._prev.logicBlock_visible();
		me._prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._prev.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._prev);
		el=me._next=document.createElement('div');
		els=me._next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdGFiaW5kZXg9Ii0xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJhcnJvd19mb3J3YXJkX3N2ZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTUgNjkiPgogPHRpdGxlPm5leHQ8L3RpdGxlPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAgICAgICAuYXJyb3dfZm9yd2FyZF9zdmcgcG9seWdvbiB7CiAgICAgICAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICAgICAgfQogICAgICAgICAgICAuYXJyb3dfZm9yd2FyZF9zdmcgcG9seWdvbi5hcnJvd19mb3J3YXJkX3N2Z19zaG'+
			'Fkb3cgewogICAgICAgICAgICAgIGZpbGw6ICMwMDA7CiAgICAgICAgICAgICAgb3BhY2l0eTogLjM7CiAgICAgICAgICAgIH0KICAgICAgICA8L3N0eWxlPgogPC9kZWZzPgogPGc+CiAgPHBvbHlnb24gY2xhc3M9ImFycm93X2ZvcndhcmRfc3ZnX3NoYWRvdyIgcG9pbnRzPSIwIDY5IDU1IDY5IDM4LjMxNjMxNjMgMjQuNzU4NzMwNSA1NC4zOTI5NDk4IDI0Ljc1ODczMDUgMjcuMDE2MDg1MyA3IDAuOTEyOTI4MTU4IDI0Ljc1ODczMDUgMTUuNzE3NDIyOSAyNC43NTg3MzA1Ii8+CiAgPHBvbHlnb24gcG9pbnRzPSIwIDYyIDU1IDYyIDM4LjMxNjMxNjMgMTcuNzU4NzMwNSA1NC4zOTI5NDk4IDE3'+
			'Ljc1ODczMDUgMjcuMDE2MDg1MyAwIDAuOTEyOTI4MTU4IDE3Ljc1ODczMDUgMTUuNzE3NDIyOSAxNy43NTg3MzA1Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._next__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="next";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 75px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._next.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._next.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._next.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._next.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._next.style.transition='left 0s, bottom 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._next.ggCurrentLogicStatePosition == 0) {
					me._next.style.left = 'calc(50% - (32px / 2))';
					me._next.style.bottom='70px';
				}
				else {
					me._next.style.left='calc(50% - ((32px + 0px) / 2) + 0px)';
					me._next.style.bottom='75px';
				}
			}
		}
		me._next.logicBlock_position();
		me._next.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._next.ggCurrentLogicStateSize != newLogicStateSize) {
				me._next.ggCurrentLogicStateSize = newLogicStateSize;
				me._next.style.transition='left 0s, bottom 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._next.ggCurrentLogicStateSize == 0) {
					me._next.style.width='24px';
					me._next.style.height='30px';
					me._next.style.left = 'calc(50% - (24px / 2))';
					skin.updateSize(me._next);
				}
				else {
					me._next.style.width='32px';
					me._next.style.height='40px';
					me._next.style.left = 'calc(50% - (32px / 2))';
					skin.updateSize(me._next);
				}
			}
		}
		me._next.logicBlock_size();
		me._next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false)) || 
				((player.getVariableValue('mode_snapshot') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._next.style.transition='left 0s, bottom 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._next.ggCurrentLogicStateVisible == 0) {
					me._next.style.visibility="hidden";
					me._next.ggVisible=false;
				}
				else {
					me._next.style.visibility=(Number(me._next.style.opacity)>0||!me._next.style.opacity)?'inherit':'hidden';
					me._next.ggVisible=true;
				}
			}
		}
		me._next.logicBlock_visible();
		me._next.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player._(me.ggUserdata.source) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._next.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._next.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._next.style.transition='left 0s, bottom 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._next.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._next.style.opacity == 0.0) { me._next.style.visibility="hidden"; } }, 505);
					me._next.style.opacity=0;
				}
				else {
					me._next.style.visibility=me._next.ggVisible?'inherit':'hidden';
					me._next.style.opacity=1;
				}
			}
		}
		me._next.logicBlock_alpha();
		me._next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._next.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._next);
		el=me._bg_btn=document.createElement('div');
		el.ggId="BG_btn";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #374785;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 99px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._bg_btn.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._bg_btn.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg_btn.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg_btn.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg_btn.style.transition='transform 0s, background-color 200ms ease 0ms';
				if (me._bg_btn.ggCurrentLogicStateScaling == 0) {
					me._bg_btn.ggParameter.sx = 0.8;
					me._bg_btn.ggParameter.sy = 0.8;
					me._bg_btn.style.transform=parameterToTransform(me._bg_btn.ggParameter);
					skin.updateSize(me._bg_btn);
				}
				else {
					me._bg_btn.ggParameter.sx = 1;
					me._bg_btn.ggParameter.sy = 1;
					me._bg_btn.style.transform=parameterToTransform(me._bg_btn.ggParameter);
					skin.updateSize(me._bg_btn);
				}
			}
		}
		me._bg_btn.logicBlock_scaling();
		me._bg_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bg_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bg_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bg_btn.style.transition='transform 0s, background-color 200ms ease 0ms';
				if (me._bg_btn.ggCurrentLogicStateVisible == 0) {
					me._bg_btn.style.visibility=(Number(me._bg_btn.style.opacity)>0||!me._bg_btn.style.opacity)?'inherit':'hidden';
					me._bg_btn.ggVisible=true;
				}
				else {
					me._bg_btn.style.visibility="hidden";
					me._bg_btn.ggVisible=false;
				}
			}
		}
		me._bg_btn.logicBlock_visible();
		me._bg_btn.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bg_btn'] == true)) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_btn.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_btn.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_btn.style.transition='transform 0s, background-color 200ms ease 0ms';
				if (me._bg_btn.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_btn.style.backgroundColor="rgba(36,48,94,1)";
				}
				else {
					me._bg_btn.style.backgroundColor="rgba(55,71,133,1)";
				}
			}
		}
		me._bg_btn.logicBlock_backgroundcolor();
		me._bg_btn.onclick=function (e) {
			player.openNext(player._(me.ggUserdata.comment),"");
		}
		me._bg_btn.onmouseover=function (e) {
			me.elementMouseOver['bg_btn']=true;
			me._bg_btn.logicBlock_backgroundcolor();
		}
		me._bg_btn.onmouseout=function (e) {
			me.elementMouseOver['bg_btn']=false;
			me._bg_btn.logicBlock_backgroundcolor();
		}
		me._bg_btn.ggCurrentLogicStateScaling = -1;
		me._bg_btn.ggCurrentLogicStateVisible = -1;
		me._bg_btn.ggCurrentLogicStateBackgroundColor = -1;
		me._bg_btn.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['bg_btn']) {
				me.elementMouseOver['bg_btn']=true;
			}
		}
		me._bg_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me._drone_ico=document.createElement('div');
		els=me._drone_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KIDxnPgogIDxwYXRoIGQ9Ik01MDMuMTcyLDE0MS4yNDFIMzA4Ljk2NmMtNC44NzUsMC04LjgyOC0zLj'+
			'k1My04LjgyOC04LjgyOGwwLDBjMC00Ljg3NSwzLjk1My04LjgyOCw4LjgyOC04LjgyOCAgIGgxOTQuMjA3YzQuODc1LDAsOC44MjgsMy45NTMsOC44MjgsOC44MjhsMCwwQzUxMiwxMzcuMjg5LDUwOC4wNDcsMTQxLjI0MSw1MDMuMTcyLDE0MS4yNDF6IiBzdHlsZT0iZmlsbDojQzdDRkUyOyIvPgogIDxwYXRoIGQ9Ik0yMDMuMDM0LDE0MS4yNDFIOC44MjhjLTQuODc1LDAtOC44MjgtMy45NTMtOC44MjgtOC44MjhsMCwwYzAtNC44NzUsMy45NTMtOC44MjgsOC44MjgtOC44MjggICBoMTk0LjIwN2M0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4bDAsMEMyMTEuODYyLDEzNy4yODksMjA3'+
			'LjkxLDE0MS4yNDEsMjAzLjAzNCwxNDEuMjQxeiIgc3R5bGU9ImZpbGw6I0M3Q0ZFMjsiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMDUuOTMxLDEwNS45MzFMMTA1LjkzMSwxMDUuOTMxYy00Ljg3NSwwLTguODI4LDMuOTUzLTguODI4LDguODI4djQ0LjEzOGgxNy42NTV2LTQ0LjEzOCAgIEMxMTQuNzU5LDEwOS44ODQsMTEwLjgwNiwxMDUuOTMxLDEwNS45MzEsMTA1LjkzMXoiIHN0eWxlPSJmaWxsOiM5NTlDQjM7Ii8+CiAgPHBhdGggZD0iTTQwNi4wNjksMTA1LjkzMUw0MDYuMDY5LDEwNS45MzFjLTQuODc1LDAtOC44MjgsMy45NTMtOC44MjgsOC44Mjh2NDQuMTM4aDE3LjY1NXYtNDQuMT'+
			'M4ICAgQzQxNC44OTcsMTA5Ljg4NCw0MTAuOTQ0LDEwNS45MzEsNDA2LjA2OSwxMDUuOTMxeiIgc3R5bGU9ImZpbGw6Izk1OUNCMzsiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0yMjUuMTAzLDI4Mi40ODNMMjI1LjEwMywyODIuNDgzYy03LjMxMywwLTEzLjI0MS01LjkyOS0xMy4yNDEtMTMuMjQxdi0yNi40ODMgICBjMC03LjMxMyw1LjkyOS0xMy4yNDEsMTMuMjQxLTEzLjI0MWwwLDBjNy4zMTMsMCwxMy4yNDEsNS45MjksMTMuMjQxLDEzLjI0MXYyNi40ODMgICBDMjM4LjM0NSwyNzYuNTU0LDIzMi40MTYsMjgyLjQ4MywyMjUuMTAzLDI4Mi40ODN6IiBzdHlsZT0iZmlsbDojNDY0NjU1OyIv'+
			'PgogIDxwYXRoIGQ9Ik0yODYuODk3LDI4Mi40ODNMMjg2Ljg5NywyODIuNDgzYy03LjMxMywwLTEzLjI0MS01LjkyOS0xMy4yNDEtMTMuMjQxdi0yNi40ODMgICBjMC03LjMxMyw1LjkyOS0xMy4yNDEsMTMuMjQxLTEzLjI0MWwwLDBjNy4zMTMsMCwxMy4yNDEsNS45MjksMTMuMjQxLDEzLjI0MXYyNi40ODMgICBDMzAwLjEzOCwyNzYuNTU0LDI5NC4yMDksMjgyLjQ4MywyODYuODk3LDI4Mi40ODN6IiBzdHlsZT0iZmlsbDojNDY0NjU1OyIvPgogPC9nPgogPHJlY3QgeT0iMjQ3LjE3MiIgd2lkdGg9IjM1LjMxIiB4PSIyMzguMzQ1IiBzdHlsZT0iZmlsbDojNUI1RDZFOyIgaGVpZ2h0PSI4OC4yNz'+
			'YiLz4KIDxnPgogIDxwYXRoIGQ9Ik0xNTAuMDY5LDQwNi4wNjljLTQuODc1LDAtOC44MjgtMy45NTMtOC44MjgtOC44MjhjMC03OC42MzQsMTQuNDE4LTExNS4zMDIsMjMuMDA5LTEzMC4xNTUgICBjMi4yNzItMy45MjcsMy40NzQtOC40NTIsMy40NzQtMTMuMDg2di0yNC40ODNjMC00Ljg3NSwzLjk1My04LjgyOCw4LjgyOC04LjgyOHM4LjgyOCwzLjk1Myw4LjgyOCw4LjgyOHYyNC40ODMgICBjMCw3LjczNy0yLjAyMiwxNS4zMTktNS44NDksMjEuOTI3Yy02LjIwMiwxMC43MjMtMjAuNjMzLDQ0LjAyMS0yMC42MzMsMTIxLjMxNEMxNTguODk3LDQwMi4xMTYsMTU0Ljk0NCw0MDYuMDY5LDE1MC4w'+
			'NjksNDA2LjA2OXogICAiIHN0eWxlPSJmaWxsOiNDN0NGRTI7Ii8+CiAgPHBhdGggZD0iTTM2MS45MzEsNDA2LjA2OWMtNC44NzUsMC04LjgyOC0zLjk1My04LjgyOC04LjgyOGMwLTc3LjI5My0xNC40MzEtMTEwLjU5MS0yMC42MzgtMTIxLjMxOSAgIGMtMy44MjMtNi42MDMtNS44NDUtMTQuMTg1LTUuODQ1LTIxLjkyMnYtMjQuNDgzYzAtNC44NzUsMy45NTMtOC44MjgsOC44MjgtOC44MjhzOC44MjgsMy45NTMsOC44MjgsOC44Mjh2MjQuNDgzICAgYzAsNC42MzMsMS4yMDMsOS4xNiwzLjQ3LDEzLjA4MWM4LjU5NSwxNC44NTgsMjMuMDEyLDUxLjUyNiwyMy4wMTIsMTMwLjE1OUMzNzAuNzU5LD'+
			'QwMi4xMTYsMzY2LjgwNiw0MDYuMDY5LDM2MS45MzEsNDA2LjA2OXoiIHN0eWxlPSJmaWxsOiNDN0NGRTI7Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNMTc2LjU1MiwyMjAuNjloLTguODI4djguODI4YzAsNC44NzUsMy45NTMsOC44MjgsOC44MjgsOC44MjhoMjYuNDgzVjIyMC42OUgxNzYuNTUyeiIgc3R5bGU9ImZpbGw6I0FGQjlEMjsiLz4KICA8cGF0aCBkPSJNMzM1LjQ0OCwyMjAuNjloLTI2LjQ4M3YxNy42NTVoMjYuNDgzYzQuODc1LDAsOC44MjgtMy45NTMsOC44MjgtOC44Mjh2LTguODI4SDMzNS40NDh6IiBzdHlsZT0iZmlsbDojQUZCOUQyOyIvPgogPC9nPgogPHBhdGggZD0iTTEz'+
			'Mi40MTQsMTY3LjcyNEg3OS40NDhsNi4zODgtMTIuNzc2YzEuNDk1LTIuOTksNC41NTItNC44NzksNy44OTUtNC44NzloMjQuMzk4ICBjMy4zNDMsMCw2LjQsMS44ODksNy44OTUsNC44NzlMMTMyLjQxNCwxNjcuNzI0eiIgc3R5bGU9ImZpbGw6IzgyODg5RDsiLz4KIDxyZWN0IHk9IjE2Ny43MjQiIHdpZHRoPSI1Mi45NjYiIHg9Ijc5LjQ0OCIgc3R5bGU9ImZpbGw6IzVCNUQ2RTsiIGhlaWdodD0iMTcuNjU1Ii8+CiA8cGF0aCBkPSJNNDMyLjU1MiwxNjcuNzI0aC01Mi45NjZsNi4zODgtMTIuNzc2YzEuNDk1LTIuOTksNC41NTItNC44NzksNy44OTUtNC44NzloMjQuMzk4ICBjMy4zNDMsMCw2Lj'+
			'QsMS44ODksNy44OTUsNC44NzlMNDMyLjU1MiwxNjcuNzI0eiIgc3R5bGU9ImZpbGw6IzgyODg5RDsiLz4KIDxyZWN0IHk9IjE2Ny43MjQiIHdpZHRoPSI1Mi45NjYiIHg9IjM3OS41ODYiIHN0eWxlPSJmaWxsOiM1QjVENkU7IiBoZWlnaHQ9IjE3LjY1NSIvPgogPHBhdGggZD0iTTQ0MS4zNzksMjAzLjAzNEg3MC42MjFjLTQuODc1LDAtOC44MjgtMy45NTMtOC44MjgtOC44MjhsMCwwYzAtNC44NzUsMy45NTMtOC44MjgsOC44MjgtOC44MjggIGgzNzAuNzU5YzQuODc1LDAsOC44MjgsMy45NTMsOC44MjgsOC44MjhsMCwwQzQ1MC4yMDcsMTk5LjA4Miw0NDYuMjU0LDIwMy4wMzQsNDQxLjM3OSwy'+
			'MDMuMDM0eiIgc3R5bGU9ImZpbGw6I0U0RUFGNjsiLz4KIDxnPgogIDxwYXRoIGQ9Ik0zMzQuODY5LDE2Ni43ODRsLTM0Ljk1MS0zLjQ5NWMtMjkuMjA2LTIuOTIxLTU4LjYzMi0yLjkyMS04Ny44MzgsMGwtMzQuOTUxLDMuNDk1ICAgYy02LjA4MywwLjYwOC0xMS43NjgsMy4zMDMtMTYuMDksNy42MjVsLTEwLjk3LDEwLjk3SDI1NmgxMDUuOTMxbC0xMC45Ny0xMC45N0MzNDYuNjM3LDE3MC4wODYsMzQwLjk1MiwxNjcuMzkyLDMzNC44NjksMTY2Ljc4NHoiIHN0eWxlPSJmaWxsOiNEN0RFRUQ7Ii8+CiAgPHBhdGggZD0iTTEyMy41ODYsMjAzLjAzNGw5Ljg5OSw5Ljg5OWM0Ljk2Nyw0Ljk2NywxMS'+
			'43MDIsNy43NTYsMTguNzI3LDcuNzU2aDE5LjkyNiAgIGM4LjMzNSwwLDE2LjE4NCwzLjkyNSwyMS4xODYsMTAuNTkzbDcuOTQ1LDEwLjU5M2M2LjY2OCw4Ljg5MiwxNy4xMzQsMTQuMTI0LDI4LjI0OCwxNC4xMjRoNTIuOTY2ICAgYzExLjExNCwwLDIxLjU4LTUuMjMzLDI4LjI0OC0xNC4xMjRsNy45NDUtMTAuNTkzYzUuMDAyLTYuNjY4LDEyLjg1MS0xMC41OTMsMjEuMTg2LTEwLjU5M2gxOS45MjcgICBjNy4wMjMsMCwxMy43Ni0yLjc5MSwxOC43MjctNy43NTZsOS44OTgtOS44OTlIMTIzLjU4NnoiIHN0eWxlPSJmaWxsOiNEN0RFRUQ7Ii8+CiA8L2c+CiA8cmVjdCB5PSIzNDguNjkiIHdpZHRo'+
			'PSIyOS43OTMiIHg9IjE5Ni40MTQiIHN0eWxlPSJmaWxsOiM1QjVENkU7IiBoZWlnaHQ9IjI2LjQ4MyIvPgogPHBhdGggZD0iTTMxNy43OTMsMzk3LjI0MWgtODguMjc2Yy00Ljg3NSwwLTguODI4LTMuOTUzLTguODI4LTguODI4di01Mi45NjZjMC00Ljg3NSwzLjk1My04LjgyOCw4LjgyOC04LjgyOCAgaDg4LjI3NmM0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djUyLjk2NkMzMjYuNjIxLDM5My4yODksMzIyLjY2OCwzOTcuMjQxLDMxNy43OTMsMzk3LjI0MXoiIHN0eWxlPSJmaWxsOiM5NTlDQjM7Ii8+CiA8cGF0aCBkPSJNMTk0LjIwNywzNzkuNTg2aC04LjgyOGMtNC44NzUsMC04Lj'+
			'gyOC0zLjk1My04LjgyOC04LjgyOHYtMTcuNjU1YzAtNC44NzUsMy45NTMtOC44MjgsOC44MjgtOC44MjggIGg4LjgyOGM0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djE3LjY1NUMyMDMuMDM0LDM3NS42MzQsMTk5LjA4MiwzNzkuNTg2LDE5NC4yMDcsMzc5LjU4NnoiIHN0eWxlPSJmaWxsOiNDNUQwRTQ7Ii8+CiA8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0NjQ2NTU7IiBjeD0iMjkxLjMxIiBjeT0iMzYxLjkzMSIgcj0iMjYuNDgzIi8+CiA8Zz4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiNFNEVBRjY7IiBjeD0iMjkxLjMxIiBjeT0iMzYxLjkzMSIgcj0iOC44MjgiLz4KICA8Y2lyY2xlIHN0'+
			'eWxlPSJmaWxsOiNFNEVBRjY7IiBjeD0iMjQyLjc1OSIgY3k9IjM3NS4xNzIiIHI9IjguODI4Ii8+CiA8L2c+CiA8cGF0aCBkPSJNMjQ3LjE3MiwzNTcuNTE3aC04LjgyOGMtMi40MzgsMC00LjQxNC0xLjk3Ni00LjQxNC00LjQxNHYtOC44MjhjMC0yLjQzOCwxLjk3Ni00LjQxNCw0LjQxNC00LjQxNCAgaDguODI4YzIuNDM4LDAsNC40MTQsMS45NzYsNC40MTQsNC40MTR2OC44MjhDMjUxLjU4NiwzNTUuNTQxLDI0OS42MSwzNTcuNTE3LDI0Ny4xNzIsMzU3LjUxN3oiIHN0eWxlPSJmaWxsOiM3ODkxNzg7Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMTUwLjA2OSwyMDMuMDM0aC04LjgyOGMtNC44NzUsMC'+
			'04LjgyOC0zLjk1My04LjgyOC04LjgyOHYtOC44MjhoMjYuNDgzdjguODI4ICAgQzE1OC44OTcsMTk5LjA4MiwxNTQuOTQ0LDIwMy4wMzQsMTUwLjA2OSwyMDMuMDM0eiIgc3R5bGU9ImZpbGw6I0ZGNjQ2NDsiLz4KICA8cGF0aCBkPSJNMzc5LjU4NiwyMDMuMDM0aC04LjgyOGMtNC44NzUsMC04LjgyOC0zLjk1My04LjgyOC04LjgyOHYtOC44MjhoMjYuNDgzdjguODI4ICAgQzM4OC40MTQsMTk5LjA4MiwzODQuNDYxLDIwMy4wMzQsMzc5LjU4NiwyMDMuMDM0eiIgc3R5bGU9ImZpbGw6I0ZGNjQ2NDsiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0yMjkuNzEsMTY2Ljc4M2wxMS42NS0zLjQ5NWMy'+
			'LjQtMC43MjEsMTYuNjM5LTEuMjYyLDM2LjgzNC0xLjYyNiAgIGMtMjIuMDM3LTEuMTA5LTQ0LjEzNy0wLjU3Mi02Ni4xMTMsMS42MjZsLTM0Ljk1MSwzLjQ5NWMtNi4wODMsMC42MDgtMTEuNzY4LDMuMzAzLTE2LjA5Miw3LjYyNWwtMTAuOTcsMTAuOTcyaDcwLjYyMWwzLjY1Ny0xMC45NyAgIEMyMjUuNzg4LDE3MC4wODYsMjI3LjY4MiwxNjcuMzkyLDIyOS43MSwxNjYuNzgzeiIgc3R5bGU9ImZpbGw6I0M3Q0ZFMjsiLz4KICA8cGF0aCBkPSJNMjM3Ljc1NywyNDEuODc2bC0yLjY0OC0xMC41OTNjLTEuNjY3LTYuNjY4LTQuMjg0LTEwLjU5My03LjA2Mi0xMC41OTNoLTYuNjQzICAgYy0yLjM0Mi'+
			'wwLTQuNTg2LTIuNzkxLTYuMjQyLTcuNzU3bC0zLjI5OS05Ljg5OGgtODguMjc2bDkuODk5LDkuODk4YzQuOTY3LDQuOTY3LDExLjcwMiw3Ljc1NywxOC43MjYsNy43NTdoMTkuOTI3ICAgYzguMzM1LDAsMTYuMTg0LDMuOTI1LDIxLjE4NiwxMC41OTNsNy45NDUsMTAuNTkzYzYuNjY4LDguODkyLDE3LjEzNCwxNC4xMjQsMjguMjQ4LDE0LjEyNGgxNy42NTUgICBDMjQzLjQ2OCwyNTYsMjM5Ljk3OSwyNTAuNzY3LDIzNy43NTcsMjQxLjg3NnoiIHN0eWxlPSJmaWxsOiNDN0NGRTI7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._drone_ico__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="drone_ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._drone_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._drone_ico.ggUpdatePosition=function (useTransition) {
		}
		me._bg_btn.appendChild(me._drone_ico);
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMin meet'
			}
		});
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		me._bg_btn.appendChild(me._lottie_2);
		me.divSkin.appendChild(me._bg_btn);
		el=me._tt_area_button=document.createElement('div');
		els=me._tt_area_button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_area_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(37,46,64,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(253,255,252,1);';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000; overflow: hidden; background: linear-gradient(0deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0) 100%); box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12) ;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="display: flex; align-items: center; padding: 5px 25px 5px 10px; max-width: 240px; max-height: 45px;";
		els.setAttribute('style',hs);
		me._tt_area_button.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_area_button.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_area_button.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_area_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_area_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_area_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_area_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_area_button.style.transition='opacity 0s';
				if (me._tt_area_button.ggCurrentLogicStateVisible == 0) {
					me._tt_area_button.style.visibility=(Number(me._tt_area_button.style.opacity)>0||!me._tt_area_button.style.opacity)?'inherit':'hidden';
					me._tt_area_button.ggVisible=true;
				}
				else {
					me._tt_area_button.style.visibility="hidden";
					me._tt_area_button.ggVisible=false;
				}
			}
		}
		me._tt_area_button.logicBlock_visible();
		me._tt_area_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_area_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_area_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_area_button.style.transition='opacity 0s';
				if (me._tt_area_button.ggCurrentLogicStateAlpha == 0) {
					me._tt_area_button.style.visibility="hidden";
					me._tt_area_button.style.opacity=0;
				}
				else {
					me._tt_area_button.style.visibility=me._tt_area_button.ggVisible?'inherit':'hidden';
					me._tt_area_button.style.opacity=1;
				}
			}
		}
		me._tt_area_button.logicBlock_alpha();
		me._tt_area_button.onclick=function (e) {
			player.setVariableValue('show_menu_thumb', true);
		}
		me._tt_area_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._show_up_ico=document.createElement('div');
		els=me._show_up_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8cGF0aCBkPSJNNS43LDQyLjEsMzAsMTUuMWEyLjQsMi40LDAsMCwxLDMuNywwTDU4LjMsNDIuNGEzLjksMy45LDAsMCwxLC41LDMuNFY0NmwtLjMuOGMtLjQsMS4zLTEuMiwzLjUtMS45LDIuN0wzMy45LDI1LjFhMi4zLDIuMywwLDAsMC0zLjgsMEw4LDQ5LjdjLS43LjYtMS42LTEuMy0yLTIuMkw1LjQsNDZhMy45LDMuOSwwLDAsMSwwLTMuNVoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==';
		me._show_up_ico__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show_up_ico";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._show_up_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._show_up_ico.ggUpdatePosition=function (useTransition) {
		}
		me._tt_area_button.appendChild(me._show_up_ico);
		me.divSkin.appendChild(me._tt_area_button);
		el=me._map_ico=document.createElement('div');
		els=me._map_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0ibWFwIj4KICA8cmVjdCB3aWR0aD0iNjQiIGZpbGw9IiMwMTAxMDEiIGhlaWdodD0iNjQiIGZpbGwtb3BhY2l0eT0iMC41ODgyMzUiLz4KICA8cG9seWdvbiBmaWxsPSIjMjhhMmM2IiBwb2ludHM9IjQuNiAzMC45IDIzLjIgNTguMiAzMC43IDQ5LjIgMTEuOSAyNS45IDQuNiAzMC45Ii8+CiAgPHBhdGggZD0iTTEzLjUsMjUuOGwxOCwyMi41LDE1LTUuOS05LjgtOS0yLjgsM2EyLjQsMi40LDAsMCwxLTEuNi43SDMyYT'+
			'MuMywzLjMsMCwwLDEtMi4zLTFMMjAuNCwyNS42IiBmaWxsPSIjMjhhMmM2Ii8+CiAgPHBvbHlsaW5lIGZpbGw9IiMyOGEyYzYiIHBvaW50cz0iMzcuNCAzMi42IDQ3LjggNDEuNyA1OC44IDMzLjEgNDMuNSAyNS4yIi8+CiAgPHBhdGggZD0iTTQ0LDI0LjJsLS41LDEsNy42LDMuOSw3LjcsNGMwLC4xLTUuNiw0LjUtMTAuNCw4LjFsLS42LjUtNS4yLTQuNS01LjItNC42LS4zLjNjLS4yLjItLjQuNC0uNC41czIuMywyLjEsNSw0LjUsNC45LDQuNCw0LjgsNC41LTE1LDYtMTUsNS45LTQuMS01LjEtOS4xLTExLjJMMTMuNSwyNS44aDYuOWwtLjctMS0uNi0xLjFIMTEuMkw2LjcsMjYuOEMyLDMwLDEu'+
			'OCwzMC4xLDIsMzAuOFMyMi4zLDYwLjksMjIuNyw2MS4xcy45LjEsMS41LS41bDQuNC01LjQsMy45LTQuOSw4LTMuMiw4LTMuMSw2LjItNC44TDYxLjQsMzRjLjYtLjYuOC0xLC42LTEuNXMtLjYtLjYtMTEuMy02bC02LjEtMy4yWk0yMC45LDM3YzQuOCw2LjEsOSwxMS4zLDkuMywxMS42bC41LjZMMjcsNTMuN2MtMiwyLjQtMy43LDQuNS0zLjgsNC41TDQuOCwzMS4ybC0uMi0uMywzLjYtMi41LDMuNy0yLjVaIiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTI5LjksMi45YTEyLjcsMTIuNywwLDAsMC03LjIsMy44QTEyLjUsMTIuNSwwLDAsMCwxOSwxNS44YzAsMy44LDEuMyw3LDQuOCwxMS4xLD'+
			'EuMywxLjUsNS42LDYuNCw3LjIsOC4xbDEsMSwxLjktMi4yYzMuMi0zLjcsNi42LTcuOCw3LjUtOWExOC44LDE4LjgsMCwwLDAsMy40LTcsNy41LDcuNSwwLDAsMCwuMi0yLjIsMTIuMywxMi4zLDAsMCwwLTMuOS05LjEsMTIuNiwxMi42LDAsMCwwLTYuOC0zLjZBMTYuMiwxNi4yLDAsMCwwLDI5LjksMi45Wm0zLjQsNi45YTYuNiw2LjYsMCwwLDEsNSw0LjgsNi40LDYuNCwwLDAsMS05LDcuMiw2LjMsNi4zLDAsMCwxLTEuOC0xMC4zQTYuMSw2LjEsMCwwLDEsMzMuMyw5LjhaIiBmaWxsPSIjZWQyMDI0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_ico__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_ico__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0ibWFwIj4KICA8cmVjdCB3aWR0aD0iNjQiIGZpbGw9IiMwMTAxMDEiIGhlaWdodD0iNjQiLz4KICA8cG9seWdvbiBmaWxsPSIjMjhhMmM2IiBwb2ludHM9IjQuNiAzMC45IDIzLjIgNTguMiAzMC43IDQ5LjIgMTEuOSAyNS45IDQuNiAzMC45Ii8+CiAgPHBhdGggZD0iTTEzLjUsMjUuOGwxOCwyMi41LDE1LTUuOS05LjgtOS0yLjgsM2EyLjQsMi40LDAsMCwxLTEuNi43SDMyYTMuMywzLjMsMCwwLDEtMi4zLTFMMjAuNC'+
			'wyNS42IiBmaWxsPSIjMjhhMmM2Ii8+CiAgPHBvbHlsaW5lIGZpbGw9IiMyOGEyYzYiIHBvaW50cz0iMzcuNCAzMi42IDQ3LjggNDEuNyA1OC44IDMzLjEgNDMuNSAyNS4yIi8+CiAgPHBhdGggZD0iTTQ0LDI0LjJsLS41LDEsNy42LDMuOSw3LjcsNGMwLC4xLTUuNiw0LjUtMTAuNCw4LjFsLS42LjUtNS4yLTQuNS01LjItNC42LS4zLjNjLS4yLjItLjQuNC0uNC41czIuMywyLjEsNSw0LjUsNC45LDQuNCw0LjgsNC41LTE1LDYtMTUsNS45LTQuMS01LjEtOS4xLTExLjJMMTMuNSwyNS44aDYuOWwtLjctMS0uNi0xLjFIMTEuMkw2LjcsMjYuOEMyLDMwLDEuOCwzMC4xLDIsMzAuOFMyMi4zLDYwLjks'+
			'MjIuNyw2MS4xcy45LjEsMS41LS41bDQuNC01LjQsMy45LTQuOSw4LTMuMiw4LTMuMSw2LjItNC44TDYxLjQsMzRjLjYtLjYuOC0xLC42LTEuNXMtLjYtLjYtMTEuMy02bC02LjEtMy4yWk0yMC45LDM3YzQuOCw2LjEsOSwxMS4zLDkuMywxMS42bC41LjZMMjcsNTMuN2MtMiwyLjQtMy43LDQuNS0zLjgsNC41TDQuOCwzMS4ybC0uMi0uMywzLjYtMi41LDMuNy0yLjVaIiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTI5LjksMi45YTEyLjcsMTIuNywwLDAsMC03LjIsMy44QTEyLjUsMTIuNSwwLDAsMCwxOSwxNS44YzAsMy44LDEuMyw3LDQuOCwxMS4xLDEuMywxLjUsNS42LDYuNCw3LjIsOC4xbD'+
			'EsMSwxLjktMi4yYzMuMi0zLjcsNi42LTcuOCw3LjUtOWExOC44LDE4LjgsMCwwLDAsMy40LTcsNy41LDcuNSwwLDAsMCwuMi0yLjIsMTIuMywxMi4zLDAsMCwwLTMuOS05LjEsMTIuNiwxMi42LDAsMCwwLTYuOC0zLjZBMTYuMiwxNi4yLDAsMCwwLDI5LjksMi45Wm0zLjQsNi45YTYuNiw2LjYsMCwwLDEsNSw0LjgsNi40LDYuNCwwLDAsMS05LDcuMiw2LjMsNi4zLDAsMCwxLTEuOC0xMC4zQTYuMSw2LjEsMCwwLDEsMzMuMyw5LjhaIiBmaWxsPSIjZWQyMDI0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_ico__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Map_ico";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 90px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_ico.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_ico.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_ico.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_ico.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_ico.style.transition='opacity 200ms ease 0ms';
				if (me._map_ico.ggCurrentLogicStateVisible == 0) {
					me._map_ico.style.visibility="hidden";
					me._map_ico.ggVisible=false;
				}
				else {
					me._map_ico.style.visibility=(Number(me._map_ico.style.opacity)>0||!me._map_ico.style.opacity)?'inherit':'hidden';
					me._map_ico.ggVisible=true;
				}
			}
		}
		me._map_ico.logicBlock_visible();
		me._map_ico.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('map_hide') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_ico.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_ico.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_ico.style.transition='opacity 200ms ease 0ms';
				if (me._map_ico.ggCurrentLogicStateAlpha == 0) {
					me._map_ico.style.visibility=me._map_ico.ggVisible?'inherit':'hidden';
					me._map_ico.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_ico.style.opacity == 0.0) { me._map_ico.style.visibility="hidden"; } }, 205);
					me._map_ico.style.opacity=0;
				}
			}
		}
		me._map_ico.logicBlock_alpha();
		me._map_ico.onclick=function (e) {
			player.setVariableValue('map_hide', false);
			if (
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().width <= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height < 1))
				)
			||
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().height <= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height > 1))
				)
			) {
				player.setVariableValue('map_scale_full', true);
			}
		}
		me._map_ico.onmouseover=function (e) {
			me._map_ico__img.style.visibility='hidden';
			me._map_ico__imgo.style.visibility='inherit';
			me.elementMouseOver['map_ico']=true;
		}
		me._map_ico.onmouseout=function (e) {
			me._map_ico__img.style.visibility='inherit';
			me._map_ico__imgo.style.visibility='hidden';
			me.elementMouseOver['map_ico']=false;
		}
		me._map_ico.ggCurrentLogicStateVisible = -1;
		me._map_ico.ggCurrentLogicStateAlpha = -1;
		me._map_ico.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_ico']) {
				me._map_ico__img.style.visibility='hidden';
				me._map_ico__imgo.style.visibility='inherit';
				me.elementMouseOver['map_ico']=true;
			}
		}
		me._map_ico.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map_ico);
		el=me._rec_off_thumb_menu=document.createElement('div');
		el.ggId="Rec_off_thumb_menu";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(8,19,30,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(90deg, rgba(8,19,30,0.8) 0%, rgba(8,19,30,0.2) 30%, rgba(8,19,30,0.2) 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rec_off_thumb_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rec_off_thumb_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1)) && 
				((player.getViewerSize().width < 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rec_off_thumb_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rec_off_thumb_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rec_off_thumb_menu.style.transition='opacity 1000ms ease 0ms';
				if (me._rec_off_thumb_menu.ggCurrentLogicStateVisible == 0) {
					me._rec_off_thumb_menu.style.visibility="hidden";
					me._rec_off_thumb_menu.ggVisible=false;
				}
				else {
					me._rec_off_thumb_menu.style.visibility=(Number(me._rec_off_thumb_menu.style.opacity)>0||!me._rec_off_thumb_menu.style.opacity)?'inherit':'hidden';
					me._rec_off_thumb_menu.ggVisible=true;
				}
			}
		}
		me._rec_off_thumb_menu.logicBlock_visible();
		me._rec_off_thumb_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('show_menu_thumb') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('show_menu_thumb') == false)) && 
				((player.getVariableValue('tint_thumb_menu') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rec_off_thumb_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rec_off_thumb_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rec_off_thumb_menu.style.transition='opacity 1000ms ease 0ms';
				if (me._rec_off_thumb_menu.ggCurrentLogicStateAlpha == 0) {
					me._rec_off_thumb_menu.style.visibility=me._rec_off_thumb_menu.ggVisible?'inherit':'hidden';
					me._rec_off_thumb_menu.style.opacity=1;
				}
				else if (me._rec_off_thumb_menu.ggCurrentLogicStateAlpha == 1) {
					me._rec_off_thumb_menu.style.visibility=me._rec_off_thumb_menu.ggVisible?'inherit':'hidden';
					me._rec_off_thumb_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rec_off_thumb_menu.style.opacity == 0.0) { me._rec_off_thumb_menu.style.visibility="hidden"; } }, 1005);
					me._rec_off_thumb_menu.style.opacity=0;
				}
			}
		}
		me._rec_off_thumb_menu.logicBlock_alpha();
		me._rec_off_thumb_menu.onclick=function (e) {
			player.setVariableValue('show_menu_thumb', false);
		}
		me._rec_off_thumb_menu.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rec_off_thumb_menu);
		el=me._control_top_m=document.createElement('div');
		el.ggId="Control_top_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(36,48,94,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); -moz-backdrop-filter: blur(4px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._control_top_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._control_top_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._control_top_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._control_top_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._control_top_m.style.transition='transform 0s';
				if (me._control_top_m.ggCurrentLogicStateScaling == 0) {
					me._control_top_m.ggParameter.sx = 0.7;
					me._control_top_m.ggParameter.sy = 0.7;
					me._control_top_m.style.transform=parameterToTransform(me._control_top_m.ggParameter);
					skin.updateSize(me._control_top_m);
				}
				else {
					me._control_top_m.ggParameter.sx = 1;
					me._control_top_m.ggParameter.sy = 1;
					me._control_top_m.style.transform=parameterToTransform(me._control_top_m.ggParameter);
					skin.updateSize(me._control_top_m);
				}
			}
		}
		me._control_top_m.logicBlock_scaling();
		me._control_top_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._control_top_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._control_top_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._control_top_m.style.transition='transform 0s';
				if (me._control_top_m.ggCurrentLogicStateVisible == 0) {
					me._control_top_m.style.visibility="hidden";
					me._control_top_m.ggVisible=false;
				}
				else {
					me._control_top_m.style.visibility=(Number(me._control_top_m.style.opacity)>0||!me._control_top_m.style.opacity)?'inherit':'hidden';
					me._control_top_m.ggVisible=true;
				}
			}
		}
		me._control_top_m.logicBlock_visible();
		me._control_top_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._vrrotate_m=document.createElement('div');
		el.ggId="VRRotate_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 20px 20px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden; display : none !important;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vrrotate_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vrrotate_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['vrrotate_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vrrotate_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vrrotate_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vrrotate_m.style.transition='background-color 0s';
				if (me._vrrotate_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._vrrotate_m.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._vrrotate_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._vrrotate_m.logicBlock_backgroundcolor();
		me._vrrotate_m.onclick=function (e) {
			player.setVariableValue('VR_setting', true);
		}
		me._vrrotate_m.onmouseover=function (e) {
			me.elementMouseOver['vrrotate_m']=true;
			me._vrrotate_m.logicBlock_backgroundcolor();
		}
		me._vrrotate_m.onmouseout=function (e) {
			me.elementMouseOver['vrrotate_m']=false;
			me._vrrotate_m.logicBlock_backgroundcolor();
		}
		me._vrrotate_m.ggCurrentLogicStateBackgroundColor = -1;
		me._vrrotate_m.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['vrrotate_m']) {
				me.elementMouseOver['vrrotate_m']=true;
			}
		}
		me._vrrotate_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3_m=document.createElement('div');
		els=me._svg_3_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGZpbGw9Im5vbmUiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDNfNSkiPgogIDxwYXRoIGQ9Ik03Ljk5OTk5IDEuMjQ4QzkuODU2OTkgMS4yNDggMTEuNTI2IDEuODg5IDEyLjY1IDMuMDQyQzEzLjU3NDkgMy4xNjIyOCAxNC40NDczIDMuNTM5OTYgMTUuMTY4IDQuMTMyQzEzLjkwNyAxLjQ4MiAxMS4yOTUgMCA3Ljk5OTk5IDBDNC43NDk5OSAwIDIuMTE5OTkgMS40OCAwLjg0Mzk5NCA0LjEyMkMxLjUwNDczIDMuNTgyNzEgMi4yOTI5MSAzLj'+
			'IyMjE5IDMuMTMyOTkgMy4wNzVDNC4yMzU5OSAxLjg3MiA1Ljk3Mzk5IDEuMjQ4IDcuOTk5OTkgMS4yNDhaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGQ9Ik0xMiAxMkMxMC45NTk1IDEyLjAwMTIgOS45NTk2OCAxMS41OTU3IDkuMjEzOTkgMTAuODdMOS4yMTE5OSAxMC44NjhDOS4xMjU4MSAxMC44MDMyIDkuMDMzMzQgMTAuNzQ3MyA4LjkzNTk5IDEwLjcwMUM4LjY0MjkxIDEwLjU2NSA4LjMyMzA4IDEwLjQ5NjMgNy45OTk5OSAxMC41QzcuNTg1OTkgMTAuNSA3LjI3MDk5IDEwLjYwMyA3LjA2NDk5IDEwLjcwMUM2Ljk2NzI5IDEwLjc0NzIgNi44NzQ0OSAxMC44MDMyIDYuNzg3OTkgMTAuODY4'+
			'TDYuNzg1OTkgMTAuODdDNi4zMTU4MSAxMS4zMjY1IDUuNzQwNjggMTEuNjYwNCA1LjExMTE3IDExLjg0MjVDNC40ODE2NyAxMi4wMjQ2IDMuODE3MDcgMTIuMDQ5MiAzLjE3NTgyIDExLjkxNDJDMi41MzQ1NiAxMS43NzkyIDEuOTM2MjkgMTEuNDg4OCAxLjQzMzYxIDExLjA2ODRDMC45MzA5MjYgMTAuNjQ4IDAuNTM5MjMxIDEwLjExMDUgMC4yOTI5NjIgOS41MDMyMkMwLjA0NjY5MzkgOC44OTU5NSAtMC4wNDY2MDQxIDguMjM3NDcgMC4wMjEyNzE3IDcuNTg1NjlDMC4wODkxNDc1IDYuOTMzOSAwLjMxNjExOCA2LjMwODc4IDAuNjgyMjI2IDUuNzY1MjhDMS4wNDgzMyA1LjIyMTc3IDEuNTQyMz'+
			'cgNC43NzY1NCAyLjEyMDg4IDQuNDY4NzNDMi42OTk0IDQuMTYwOTIgMy4zNDQ2OCAzLjk5OTk2IDMuOTk5OTkgNEgxMkMxMy4wNjA5IDQgMTQuMDc4MyA0LjQyMTQzIDE0LjgyODQgNS4xNzE1N0MxNS41Nzg2IDUuOTIxNzIgMTYgNi45MzkxMyAxNiA4QzE2IDkuMDYwODcgMTUuNTc4NiAxMC4wNzgzIDE0LjgyODQgMTAuODI4NEMxNC4wNzgzIDExLjU3ODYgMTMuMDYwOSAxMiAxMiAxMloiIGZpbGw9IndoaXRlIi8+CiA8L2c+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwM181Ij4KICAgPHJlY3Qgd2lkdGg9IjE2IiBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxNiIvPgogIDwvY2xpcFBh'+
			'dGg+CiA8L2RlZnM+Cjwvc3ZnPgo=';
		me._svg_3_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3_m.ggUpdatePosition=function (useTransition) {
		}
		me._vrrotate_m.appendChild(me._svg_3_m);
		me._control_top_m.appendChild(me._vrrotate_m);
		el=me._rotate_m=document.createElement('div');
		el.ggId="Rotate_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 20px 20px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['rotate_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rotate_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rotate_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rotate_m.style.transition='background-color 0s';
				if (me._rotate_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._rotate_m.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._rotate_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._rotate_m.logicBlock_backgroundcolor();
		me._rotate_m.onmouseover=function (e) {
			me.elementMouseOver['rotate_m']=true;
			me._image_2_m.logicBlock_angle();
			me._image_3_m.logicBlock_angle();
			me._rotate_m.logicBlock_backgroundcolor();
		}
		me._rotate_m.onmouseout=function (e) {
			me.elementMouseOver['rotate_m']=false;
			me._image_2_m.logicBlock_angle();
			me._image_3_m.logicBlock_angle();
			me._rotate_m.logicBlock_backgroundcolor();
		}
		me._rotate_m.ggCurrentLogicStateBackgroundColor = -1;
		me._rotate_m.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['rotate_m']) {
				me.elementMouseOver['rotate_m']=true;
				me._image_2_m.logicBlock_angle();
				me._image_3_m.logicBlock_angle();
			}
		}
		me._rotate_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2_m=document.createElement('div');
		els=me._image_2_m__img=document.createElement('img');
		els.className='ggskin ggskin_image_2_m';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABe0lEQVRIidWVP0sDQRDF3yUaCCYWgoVgJdrETgTL2FgbDH6GoEHxz0ewUTsrCxsbsRQbew2IhRZGEETs/AQiqFj8LDIHq8nd3kVSZOC43Zs3783O7s5J/W5BnBPISarYMyNp3Fyvku4knUs6C4LgO7UysAS84LdnoGIxN8C1jzgD7DsE98A6UAKGgAIwDWwCDw5uLxz4BELyT6AGZGKwWaAOfLlL8pUlJC/HZtLCjwDbwIVXAMg5Na/5yC1mq8OefLiYAWdckTQhqSnpKImApGNJeUlF59tlVDanlsFaQvJ0BjyZQKlXAm8mUPSjY3kaQCOcRx7Bf1r7SepVidwV3Np7oVsyYMruRXtlgGVbQTPu9noEDoxjtpNzkFbjAljpUmDMukE2ClBxWsV8Cu'+
			'KS9bB8EvCuI7Iamc3vmB2L8favsF2HItBqyRu0WnTBwU0Ch8AoMAyUgdgf2F+hRWdPXGuYv27zamLSDiI5oAqcAI/AO3Dl+OZSZd2X9gOJPgfXABrLHwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2_m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['rotate_m'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_2_m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_2_m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_2_m.style.transition='transform 300ms ease 0ms';
				if (me._image_2_m.ggCurrentLogicStateAngle == 0) {
					me._image_2_m.ggParameter.a = 60;
					me._image_2_m.style.transform=parameterToTransform(me._image_2_m.ggParameter);
				}
				else {
					me._image_2_m.ggParameter.a = 0;
					me._image_2_m.style.transform=parameterToTransform(me._image_2_m.ggParameter);
				}
			}
		}
		me._image_2_m.logicBlock_angle();
		me._image_2_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_2_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_2_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_2_m.style.transition='transform 300ms ease 0ms';
				if (me._image_2_m.ggCurrentLogicStateVisible == 0) {
					me._image_2_m.style.visibility=(Number(me._image_2_m.style.opacity)>0||!me._image_2_m.style.opacity)?'inherit':'hidden';
					me._image_2_m.ggVisible=true;
				}
				else {
					me._image_2_m.style.visibility="hidden";
					me._image_2_m.ggVisible=false;
				}
			}
		}
		me._image_2_m.logicBlock_visible();
		me._image_2_m.onclick=function (e) {
			player.stopAutorotate();
		}
		me._image_2_m.ggUpdatePosition=function (useTransition) {
		}
		me._rotate_m.appendChild(me._image_2_m);
		el=me._image_3_m=document.createElement('div');
		els=me._image_3_m__img=document.createElement('img');
		els.className='ggskin ggskin_image_3_m';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABfElEQVRIibWWv0oDQRCHf5doIJhYCBa2ok1sBctU9kHBV0gRFP88gpV2VhY2Nuob2GtAbNUmIr6EBNTqs7g5mVz2cifxBgb29nZ/387M7XARoDKtUqq6B0RRNOaSapJ2JF1LGkgamg8kXdm72Yy9sQEKpQnYAt7JtzegY3segYcR3TQAqACnTuAJ2ANawBzQANaAA+DFrTtJBnmARPwL6AKZdQKqQA/49iFlAiwtiXg7r4DAAnAE3OYCgJrLeTdP3EQOAzX59IAZt74jaVnSs6SLIgBJl5Lqkppu7i59isRv7AS7BcUnWihFrwZolQX4MEAzf/tE4b65gNJaxch37/3fU5SOIJK0OYXoqt2Lip/0p09HpOTiFAScmc56qMghyF/0BSwRd4NqFsBDfm'+
			'EFhFvEPayezkwIMBZJAcCx7Wm7ueIRAPvELbrhBFaAc2ARmAfaQJQHCNbAjQH6JtCz5+2MqMYAafHQ/BC4N4EasOFPHQJERXI8jZX+V/EDcOMFsvE25WcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3_m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['rotate_m'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_3_m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_3_m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_3_m.style.transition='transform 300ms ease 0ms';
				if (me._image_3_m.ggCurrentLogicStateAngle == 0) {
					me._image_3_m.ggParameter.a = 60;
					me._image_3_m.style.transform=parameterToTransform(me._image_3_m.ggParameter);
				}
				else {
					me._image_3_m.ggParameter.a = 0;
					me._image_3_m.style.transform=parameterToTransform(me._image_3_m.ggParameter);
				}
			}
		}
		me._image_3_m.logicBlock_angle();
		me._image_3_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_3_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_3_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_3_m.style.transition='transform 300ms ease 0ms';
				if (me._image_3_m.ggCurrentLogicStateVisible == 0) {
					me._image_3_m.style.visibility="hidden";
					me._image_3_m.ggVisible=false;
				}
				else {
					me._image_3_m.style.visibility=(Number(me._image_3_m.style.opacity)>0||!me._image_3_m.style.opacity)?'inherit':'hidden';
					me._image_3_m.ggVisible=true;
				}
			}
		}
		me._image_3_m.logicBlock_visible();
		me._image_3_m.onclick=function (e) {
			player.startAutorotate(0.05,15);
		}
		me._image_3_m.ggUpdatePosition=function (useTransition) {
		}
		me._rotate_m.appendChild(me._image_3_m);
		me._control_top_m.appendChild(me._rotate_m);
		el=me._language_m=document.createElement('div');
		el.ggId="Language_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._language_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['language_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._language_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._language_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._language_m.style.transition='background-color 0s';
				if (me._language_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._language_m.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._language_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._language_m.logicBlock_backgroundcolor();
		me._language_m.onmouseover=function (e) {
			me.elementMouseOver['language_m']=true;
			me._language_m.logicBlock_backgroundcolor();
		}
		me._language_m.onmouseout=function (e) {
			me.elementMouseOver['language_m']=false;
			me._language_m.logicBlock_backgroundcolor();
		}
		me._language_m.ggCurrentLogicStateBackgroundColor = -1;
		me._language_m.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['language_m']) {
				me.elementMouseOver['language_m']=true;
			}
		}
		me._language_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._vi_lang_1_m=document.createElement('div');
		els=me._vi_lang_1_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._vi_lang_1_m__img.setAttribute('src',basePath + 'images/vi_lang_1_m.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vi_lang_1_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vi_lang_1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vi_lang_1_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "vi"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vi_lang_1_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vi_lang_1_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vi_lang_1_m.style.transition='';
				if (me._vi_lang_1_m.ggCurrentLogicStateVisible == 0) {
					me._vi_lang_1_m.style.visibility=(Number(me._vi_lang_1_m.style.opacity)>0||!me._vi_lang_1_m.style.opacity)?'inherit':'hidden';
					me._vi_lang_1_m.ggVisible=true;
				}
				else {
					me._vi_lang_1_m.style.visibility="hidden";
					me._vi_lang_1_m.ggVisible=false;
				}
			}
		}
		me._vi_lang_1_m.logicBlock_visible();
		me._vi_lang_1_m.onclick=function (e) {
			player.setLanguage("en");
		}
		me._vi_lang_1_m.ggUpdatePosition=function (useTransition) {
		}
		me._language_m.appendChild(me._vi_lang_1_m);
		el=me._en_lang_1_m=document.createElement('div');
		els=me._en_lang_1_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._en_lang_1_m__img.setAttribute('src',basePath + 'images/en_lang_1_m.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="en_lang_1_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._en_lang_1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._en_lang_1_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "en"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._en_lang_1_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._en_lang_1_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._en_lang_1_m.style.transition='';
				if (me._en_lang_1_m.ggCurrentLogicStateVisible == 0) {
					me._en_lang_1_m.style.visibility=(Number(me._en_lang_1_m.style.opacity)>0||!me._en_lang_1_m.style.opacity)?'inherit':'hidden';
					me._en_lang_1_m.ggVisible=true;
				}
				else {
					me._en_lang_1_m.style.visibility="hidden";
					me._en_lang_1_m.ggVisible=false;
				}
			}
		}
		me._en_lang_1_m.logicBlock_visible();
		me._en_lang_1_m.onclick=function (e) {
			player.setLanguage("vi");
		}
		me._en_lang_1_m.ggUpdatePosition=function (useTransition) {
		}
		me._language_m.appendChild(me._en_lang_1_m);
		me._control_top_m.appendChild(me._language_m);
		el=me._fullscreen_m=document.createElement('div');
		el.ggId="FullScreen_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='bottom : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['fullscreen_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._fullscreen_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._fullscreen_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._fullscreen_m.style.transition='background-color 0s';
				if (me._fullscreen_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._fullscreen_m.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._fullscreen_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._fullscreen_m.logicBlock_backgroundcolor();
		me._fullscreen_m.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_m.onmouseover=function (e) {
			me.elementMouseOver['fullscreen_m']=true;
			me._fullscreen_m.logicBlock_backgroundcolor();
		}
		me._fullscreen_m.onmouseout=function (e) {
			me.elementMouseOver['fullscreen_m']=false;
			me._fullscreen_m.logicBlock_backgroundcolor();
		}
		me._fullscreen_m.ggCurrentLogicStateBackgroundColor = -1;
		me._fullscreen_m.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['fullscreen_m']) {
				me.elementMouseOver['fullscreen_m']=true;
			}
		}
		me._fullscreen_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_m=document.createElement('div');
		els=me._image_1_m__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_m';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAXUlEQVRYhe2WQQrAIAwETfH/X95eelISoaXuwZmjsjIuKGkNTifGBUlahiKm3NvstQr8Tc82sltWVJmsHXsDCCBgFwCACT3sOtf+DyCAgF0gnQmrp/hlKh6xNwBwA4J2JBZCuUe3AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1_m.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_m.appendChild(me._image_1_m);
		me._control_top_m.appendChild(me._fullscreen_m);
		el=me._contact_m=document.createElement('div');
		el.ggId="Contact_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden; display : none !important;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contact_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['contact_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._contact_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._contact_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._contact_m.style.transition='background-color 0s';
				if (me._contact_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._contact_m.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._contact_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._contact_m.logicBlock_backgroundcolor();
		me._contact_m.onclick=function (e) {
			player.openUrl("http:\/\/www.khuditichkimlien.gov.vn\/vi\/lien-he-sc8.html","");
		}
		me._contact_m.onmouseover=function (e) {
			me.elementMouseOver['contact_m']=true;
			me._contact_m.logicBlock_backgroundcolor();
		}
		me._contact_m.onmouseout=function (e) {
			me.elementMouseOver['contact_m']=false;
			me._contact_m.logicBlock_backgroundcolor();
		}
		me._contact_m.ggCurrentLogicStateBackgroundColor = -1;
		me._contact_m.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['contact_m']) {
				me.elementMouseOver['contact_m']=true;
			}
		}
		me._contact_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_contact_m=document.createElement('div');
		els=me._svg_contact_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS4xMiA0NiI+CiA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICA8cGF0aCBkPSJNNDQuMyw5SDM0Ljl2MS43aDguNVY0My4xbC03LTcuMWEuNzMuNzMsMCwwLDAtLjYtLjJIMTQuNVYyOC41SDEyLjh2OC4xYS45LjksMCwwLDAsLjkuOUgzNS40bDguMyw4LjNhLjczLjczLDAsMCwwLC42LjIuMzcuMzcsMCwwLDAsLjMtLjEuNzkuNzksMCwwLDAsLjUtLjhWOS44QzQ1LjIsOS4zLDQ0LjgsOSw0NC4zLDlaIi'+
			'BmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZD0iTTE4LjYsMzEuMkgzOS40YS45LjksMCwwLDAsMC0xLjhIMTguNmEuOS45LDAsMSwwLDAsMS44WiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0zNS45LDI2LjNoMy41YS45LjksMCwwLDAsMC0xLjhIMzUuOWEuOS45LDAsMCwwLS45LjlBMSwxLDAsMCwwLDM1LjksMjYuM1oiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8cGF0aCBkPSJNMzUuOSwyMS41aDMuNWEuOS45LDAsMSwwLDAtMS44SDM1LjlhLjkuOSwwLDAsMC0uOS45QTEuMDYsMS4wNiwwLDAs'+
			'MCwzNS45LDIxLjVaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZD0iTTM1LjksMTYuNmgzLjVhLjkuOSwwLDAsMCwwLTEuOEgzNS45YS45LjksMCwwLDAtLjkuOUExLjA2LDEuMDYsMCwwLDAsMzUuOSwxNi42WiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0zMiwwSC45QS45LjksMCwwLDAsMCwuOVYzMy40YS44OS44OSwwLDAsMCwuNS44Yy4xLDAsLjIuMS4zLjFhMS40MiwxLjQyLDAsMCwwLC42LS4yTDksMjYuNUgzMS45YS45LjksMCwwLDAsLjktLjlWLjlBLjgyLjgyLDAsMCwwLDMyLDBaTTE2LjMsMjAuMmExLjUyLD'+
			'EuNTIsMCwwLDEtMS42LTEuNiwxLjQ1LDEuNDUsMCwwLDEsMS42LTEuNSwxLjQ1LDEuNDUsMCwwLDEsMS41LDEuNkExLjM3LDEuMzcsMCwwLDEsMTYuMywyMC4yWm0yLjUtNy40Yy0xLjEuOC0xLjIsMS0xLjIsMS45di44SDE0Ljl2LS44YzAtMS43LjMtMi4xLDEuOS0zLjQuOS0uNiwxLjEtMS4xLDEuMS0xLjdhMS4zNywxLjM3LDAsMCwwLTEuNC0xLjRjLS45LDAtMS40LjYtMS40LDEuNkgxMi42YTMuNjgsMy42OCwwLDAsMSw0LTQsMy44MiwzLjgyLDAsMCwxLDQuMSwzLjhBMy44NSwzLjg1LDAsMCwxLDE4LjgsMTIuOFoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogIDwvZz4K'+
			'IDwvZz4KPC9zdmc+Cg==';
		me._svg_contact_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_contact_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_contact_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_contact_m.ggUpdatePosition=function (useTransition) {
		}
		me._contact_m.appendChild(me._svg_contact_m);
		me._control_top_m.appendChild(me._contact_m);
		el=me._map_m=document.createElement('div');
		el.ggId="Map_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['map_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_m.style.transition='background-color 0s';
				if (me._map_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_m.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._map_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._map_m.logicBlock_backgroundcolor();
		me._map_m.onclick=function (e) {
			player.openNext("{node66}","");
		}
		me._map_m.onmouseover=function (e) {
			me.elementMouseOver['map_m']=true;
			me._map_m.logicBlock_backgroundcolor();
		}
		me._map_m.onmouseout=function (e) {
			me.elementMouseOver['map_m']=false;
			me._map_m.logicBlock_backgroundcolor();
		}
		me._map_m.ggCurrentLogicStateBackgroundColor = -1;
		me._map_m.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_m']) {
				me.elementMouseOver['map_m']=true;
			}
		}
		me._map_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4_m=document.createElement('div');
		els=me._svg_4_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGZpbGw9Im5vbmUiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQwIDQwIj4KIDxwYXRoIGQ9Ik0xNiA0MFYyNS44ODI0SDI0VjQwSDM0VjIxLjE3NjVINDBMMjAgMEwwIDIxLjE3NjVINlY0MEgxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';
		me._svg_4_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4_m";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_m.appendChild(me._svg_4_m);
		me._control_top_m.appendChild(me._map_m);
		me.divSkin.appendChild(me._control_top_m);
		el=me._control_top=document.createElement('div');
		el.ggId="Control_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(36,48,94,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); -moz-backdrop-filter: blur(4px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._control_top.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._control_top.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._control_top.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._control_top.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._control_top.style.transition='';
				if (me._control_top.ggCurrentLogicStateVisible == 0) {
					me._control_top.style.visibility="hidden";
					me._control_top.ggVisible=false;
				}
				else {
					me._control_top.style.visibility=(Number(me._control_top.style.opacity)>0||!me._control_top.style.opacity)?'inherit':'hidden';
					me._control_top.ggVisible=true;
				}
			}
		}
		me._control_top.logicBlock_visible();
		me._control_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._vrrotate=document.createElement('div');
		el.ggId="VRRotate";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 0px 0px 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden; display : none !important;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vrrotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vrrotate.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['vrrotate'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vrrotate.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vrrotate.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vrrotate.style.transition='background-color 0s';
				if (me._vrrotate.ggCurrentLogicStateBackgroundColor == 0) {
					me._vrrotate.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._vrrotate.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._vrrotate.logicBlock_backgroundcolor();
		me._vrrotate.onclick=function (e) {
			player.setVariableValue('VR_setting', true);
		}
		me._vrrotate.onmouseover=function (e) {
			me.elementMouseOver['vrrotate']=true;
			me._vrrotate.logicBlock_backgroundcolor();
		}
		me._vrrotate.onmouseout=function (e) {
			me.elementMouseOver['vrrotate']=false;
			me._vrrotate.logicBlock_backgroundcolor();
		}
		me._vrrotate.ggCurrentLogicStateBackgroundColor = -1;
		me._vrrotate.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['vrrotate']) {
				me.elementMouseOver['vrrotate']=true;
			}
		}
		me._vrrotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGZpbGw9Im5vbmUiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDNfNSkiPgogIDxwYXRoIGQ9Ik03Ljk5OTk5IDEuMjQ4QzkuODU2OTkgMS4yNDggMTEuNTI2IDEuODg5IDEyLjY1IDMuMDQyQzEzLjU3NDkgMy4xNjIyOCAxNC40NDczIDMuNTM5OTYgMTUuMTY4IDQuMTMyQzEzLjkwNyAxLjQ4MiAxMS4yOTUgMCA3Ljk5OTk5IDBDNC43NDk5OSAwIDIuMTE5OTkgMS40OCAwLjg0Mzk5NCA0LjEyMkMxLjUwNDczIDMuNTgyNzEgMi4yOTI5MSAzLj'+
			'IyMjE5IDMuMTMyOTkgMy4wNzVDNC4yMzU5OSAxLjg3MiA1Ljk3Mzk5IDEuMjQ4IDcuOTk5OTkgMS4yNDhaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGQ9Ik0xMiAxMkMxMC45NTk1IDEyLjAwMTIgOS45NTk2OCAxMS41OTU3IDkuMjEzOTkgMTAuODdMOS4yMTE5OSAxMC44NjhDOS4xMjU4MSAxMC44MDMyIDkuMDMzMzQgMTAuNzQ3MyA4LjkzNTk5IDEwLjcwMUM4LjY0MjkxIDEwLjU2NSA4LjMyMzA4IDEwLjQ5NjMgNy45OTk5OSAxMC41QzcuNTg1OTkgMTAuNSA3LjI3MDk5IDEwLjYwMyA3LjA2NDk5IDEwLjcwMUM2Ljk2NzI5IDEwLjc0NzIgNi44NzQ0OSAxMC44MDMyIDYuNzg3OTkgMTAuODY4'+
			'TDYuNzg1OTkgMTAuODdDNi4zMTU4MSAxMS4zMjY1IDUuNzQwNjggMTEuNjYwNCA1LjExMTE3IDExLjg0MjVDNC40ODE2NyAxMi4wMjQ2IDMuODE3MDcgMTIuMDQ5MiAzLjE3NTgyIDExLjkxNDJDMi41MzQ1NiAxMS43NzkyIDEuOTM2MjkgMTEuNDg4OCAxLjQzMzYxIDExLjA2ODRDMC45MzA5MjYgMTAuNjQ4IDAuNTM5MjMxIDEwLjExMDUgMC4yOTI5NjIgOS41MDMyMkMwLjA0NjY5MzkgOC44OTU5NSAtMC4wNDY2MDQxIDguMjM3NDcgMC4wMjEyNzE3IDcuNTg1NjlDMC4wODkxNDc1IDYuOTMzOSAwLjMxNjExOCA2LjMwODc4IDAuNjgyMjI2IDUuNzY1MjhDMS4wNDgzMyA1LjIyMTc3IDEuNTQyMz'+
			'cgNC43NzY1NCAyLjEyMDg4IDQuNDY4NzNDMi42OTk0IDQuMTYwOTIgMy4zNDQ2OCAzLjk5OTk2IDMuOTk5OTkgNEgxMkMxMy4wNjA5IDQgMTQuMDc4MyA0LjQyMTQzIDE0LjgyODQgNS4xNzE1N0MxNS41Nzg2IDUuOTIxNzIgMTYgNi45MzkxMyAxNiA4QzE2IDkuMDYwODcgMTUuNTc4NiAxMC4wNzgzIDE0LjgyODQgMTAuODI4NEMxNC4wNzgzIDExLjU3ODYgMTMuMDYwOSAxMiAxMiAxMloiIGZpbGw9IndoaXRlIi8+CiA8L2c+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwM181Ij4KICAgPHJlY3Qgd2lkdGg9IjE2IiBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxNiIvPgogIDwvY2xpcFBh'+
			'dGg+CiA8L2RlZnM+Cjwvc3ZnPgo=';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._vrrotate.appendChild(me._svg_3);
		me._control_top.appendChild(me._vrrotate);
		el=me._rotate=document.createElement('div');
		el.ggId="Rotate";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 0px 0px 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['rotate'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rotate.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rotate.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rotate.style.transition='background-color 0s';
				if (me._rotate.ggCurrentLogicStateBackgroundColor == 0) {
					me._rotate.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._rotate.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._rotate.logicBlock_backgroundcolor();
		me._rotate.onmouseover=function (e) {
			me.elementMouseOver['rotate']=true;
			me._image_2.logicBlock_angle();
			me._image_3.logicBlock_angle();
			me._rotate.logicBlock_backgroundcolor();
		}
		me._rotate.onmouseout=function (e) {
			me.elementMouseOver['rotate']=false;
			me._image_2.logicBlock_angle();
			me._image_3.logicBlock_angle();
			me._rotate.logicBlock_backgroundcolor();
		}
		me._rotate.ggCurrentLogicStateBackgroundColor = -1;
		me._rotate.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['rotate']) {
				me.elementMouseOver['rotate']=true;
				me._image_2.logicBlock_angle();
				me._image_3.logicBlock_angle();
			}
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABe0lEQVRIidWVP0sDQRDF3yUaCCYWgoVgJdrETgTL2FgbDH6GoEHxz0ewUTsrCxsbsRQbew2IhRZGEETs/AQiqFj8LDIHq8nd3kVSZOC43Zs3783O7s5J/W5BnBPISarYMyNp3Fyvku4knUs6C4LgO7UysAS84LdnoGIxN8C1jzgD7DsE98A6UAKGgAIwDWwCDw5uLxz4BELyT6AGZGKwWaAOfLlL8pUlJC/HZtLCjwDbwIVXAMg5Na/5yC1mq8OefLiYAWdckTQhqSnpKImApGNJeUlF59tlVDanlsFaQvJ0BjyZQKlXAm8mUPSjY3kaQCOcRx7Bf1r7SepVidwV3Np7oVsyYMruRXtlgGVbQTPu9noEDoxjtpNzkFbjAljpUmDMukE2ClBxWsV8Cu'+
			'KS9bB8EvCuI7Iamc3vmB2L8favsF2HItBqyRu0WnTBwU0Ch8AoMAyUgdgf2F+hRWdPXGuYv27zamLSDiI5oAqcAI/AO3Dl+OZSZd2X9gOJPgfXABrLHwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['rotate'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_2.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_2.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_2.style.transition='transform 300ms ease 0ms';
				if (me._image_2.ggCurrentLogicStateAngle == 0) {
					me._image_2.ggParameter.a = 60;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
				}
				else {
					me._image_2.ggParameter.a = 0;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
				}
			}
		}
		me._image_2.logicBlock_angle();
		me._image_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_2.style.transition='transform 300ms ease 0ms';
				if (me._image_2.ggCurrentLogicStateVisible == 0) {
					me._image_2.style.visibility=(Number(me._image_2.style.opacity)>0||!me._image_2.style.opacity)?'inherit':'hidden';
					me._image_2.ggVisible=true;
				}
				else {
					me._image_2.style.visibility="hidden";
					me._image_2.ggVisible=false;
				}
			}
		}
		me._image_2.logicBlock_visible();
		me._image_2.onclick=function (e) {
			player.stopAutorotate();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._rotate.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABfElEQVRIibWWv0oDQRCHf5doIJhYCBa2ok1sBctU9kHBV0gRFP88gpV2VhY2Nuob2GtAbNUmIr6EBNTqs7g5mVz2cifxBgb29nZ/387M7XARoDKtUqq6B0RRNOaSapJ2JF1LGkgamg8kXdm72Yy9sQEKpQnYAt7JtzegY3segYcR3TQAqACnTuAJ2ANawBzQANaAA+DFrTtJBnmARPwL6AKZdQKqQA/49iFlAiwtiXg7r4DAAnAE3OYCgJrLeTdP3EQOAzX59IAZt74jaVnSs6SLIgBJl5Lqkppu7i59isRv7AS7BcUnWihFrwZolQX4MEAzf/tE4b65gNJaxch37/3fU5SOIJK0OYXoqt2Lip/0p09HpOTiFAScmc56qMghyF/0BSwRd4NqFsBDfm'+
			'EFhFvEPayezkwIMBZJAcCx7Wm7ueIRAPvELbrhBFaAc2ARmAfaQJQHCNbAjQH6JtCz5+2MqMYAafHQ/BC4N4EasOFPHQJERXI8jZX+V/EDcOMFsvE25WcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['rotate'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_3.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_3.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_3.style.transition='transform 300ms ease 0ms';
				if (me._image_3.ggCurrentLogicStateAngle == 0) {
					me._image_3.ggParameter.a = 60;
					me._image_3.style.transform=parameterToTransform(me._image_3.ggParameter);
				}
				else {
					me._image_3.ggParameter.a = 0;
					me._image_3.style.transform=parameterToTransform(me._image_3.ggParameter);
				}
			}
		}
		me._image_3.logicBlock_angle();
		me._image_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_3.style.transition='transform 300ms ease 0ms';
				if (me._image_3.ggCurrentLogicStateVisible == 0) {
					me._image_3.style.visibility="hidden";
					me._image_3.ggVisible=false;
				}
				else {
					me._image_3.style.visibility=(Number(me._image_3.style.opacity)>0||!me._image_3.style.opacity)?'inherit':'hidden';
					me._image_3.ggVisible=true;
				}
			}
		}
		me._image_3.logicBlock_visible();
		me._image_3.onclick=function (e) {
			player.startAutorotate(0.05,15);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._rotate.appendChild(me._image_3);
		me._control_top.appendChild(me._rotate);
		el=me._language=document.createElement('div');
		el.ggId="Language";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._language.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['language'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._language.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._language.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._language.style.transition='background-color 0s';
				if (me._language.ggCurrentLogicStateBackgroundColor == 0) {
					me._language.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._language.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._language.logicBlock_backgroundcolor();
		me._language.onmouseover=function (e) {
			me.elementMouseOver['language']=true;
			me._language.logicBlock_backgroundcolor();
		}
		me._language.onmouseout=function (e) {
			me.elementMouseOver['language']=false;
			me._language.logicBlock_backgroundcolor();
		}
		me._language.ggCurrentLogicStateBackgroundColor = -1;
		me._language.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['language']) {
				me.elementMouseOver['language']=true;
			}
		}
		me._language.ggUpdatePosition=function (useTransition) {
		}
		el=me._vi_lang_1=document.createElement('div');
		els=me._vi_lang_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._vi_lang_1__img.setAttribute('src',basePath + 'images/vi_lang_1.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vi_lang_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vi_lang_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vi_lang_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "vi"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vi_lang_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vi_lang_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vi_lang_1.style.transition='';
				if (me._vi_lang_1.ggCurrentLogicStateVisible == 0) {
					me._vi_lang_1.style.visibility=(Number(me._vi_lang_1.style.opacity)>0||!me._vi_lang_1.style.opacity)?'inherit':'hidden';
					me._vi_lang_1.ggVisible=true;
				}
				else {
					me._vi_lang_1.style.visibility="hidden";
					me._vi_lang_1.ggVisible=false;
				}
			}
		}
		me._vi_lang_1.logicBlock_visible();
		me._vi_lang_1.onclick=function (e) {
			player.setLanguage("en");
		}
		me._vi_lang_1.ggUpdatePosition=function (useTransition) {
		}
		me._language.appendChild(me._vi_lang_1);
		el=me._en_lang_1=document.createElement('div');
		els=me._en_lang_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._en_lang_1__img.setAttribute('src',basePath + 'images/en_lang_1.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="en_lang_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._en_lang_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._en_lang_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getLanguage() == "en"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._en_lang_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._en_lang_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._en_lang_1.style.transition='';
				if (me._en_lang_1.ggCurrentLogicStateVisible == 0) {
					me._en_lang_1.style.visibility=(Number(me._en_lang_1.style.opacity)>0||!me._en_lang_1.style.opacity)?'inherit':'hidden';
					me._en_lang_1.ggVisible=true;
				}
				else {
					me._en_lang_1.style.visibility="hidden";
					me._en_lang_1.ggVisible=false;
				}
			}
		}
		me._en_lang_1.logicBlock_visible();
		me._en_lang_1.onclick=function (e) {
			player.setLanguage("vi");
		}
		me._en_lang_1.ggUpdatePosition=function (useTransition) {
		}
		me._language.appendChild(me._en_lang_1);
		me._control_top.appendChild(me._language);
		el=me._fullscreen=document.createElement('div');
		el.ggId="FullScreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['fullscreen'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._fullscreen.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._fullscreen.style.transition='background-color 0s';
				if (me._fullscreen.ggCurrentLogicStateBackgroundColor == 0) {
					me._fullscreen.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._fullscreen.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._fullscreen.logicBlock_backgroundcolor();
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseover=function (e) {
			me.elementMouseOver['fullscreen']=true;
			me._fullscreen.logicBlock_backgroundcolor();
		}
		me._fullscreen.onmouseout=function (e) {
			me.elementMouseOver['fullscreen']=false;
			me._fullscreen.logicBlock_backgroundcolor();
		}
		me._fullscreen.ggCurrentLogicStateBackgroundColor = -1;
		me._fullscreen.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['fullscreen']) {
				me.elementMouseOver['fullscreen']=true;
			}
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAXUlEQVRYhe2WQQrAIAwETfH/X95eelISoaXuwZmjsjIuKGkNTifGBUlahiKm3NvstQr8Tc82sltWVJmsHXsDCCBgFwCACT3sOtf+DyCAgF0gnQmrp/hlKh6xNwBwA4J2JBZCuUe3AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen.appendChild(me._image_1);
		me._control_top.appendChild(me._fullscreen);
		el=me._contact=document.createElement('div');
		el.ggId="Contact";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden; display : none !important;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contact.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['contact'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._contact.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._contact.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._contact.style.transition='background-color 0s';
				if (me._contact.ggCurrentLogicStateBackgroundColor == 0) {
					me._contact.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._contact.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._contact.logicBlock_backgroundcolor();
		me._contact.onclick=function (e) {
			player.openUrl("https:\/\/khuditichkimlien.gov.vn\/vi\/lien-he-sc8.html","");
		}
		me._contact.onmouseover=function (e) {
			me.elementMouseOver['contact']=true;
			me._contact.logicBlock_backgroundcolor();
		}
		me._contact.onmouseout=function (e) {
			me.elementMouseOver['contact']=false;
			me._contact.logicBlock_backgroundcolor();
		}
		me._contact.ggCurrentLogicStateBackgroundColor = -1;
		me._contact.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['contact']) {
				me.elementMouseOver['contact']=true;
			}
		}
		me._contact.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_contact=document.createElement('div');
		els=me._svg_contact__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS4xMiA0NiI+CiA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICA8cGF0aCBkPSJNNDQuMyw5SDM0Ljl2MS43aDguNVY0My4xbC03LTcuMWEuNzMuNzMsMCwwLDAtLjYtLjJIMTQuNVYyOC41SDEyLjh2OC4xYS45LjksMCwwLDAsLjkuOUgzNS40bDguMyw4LjNhLjczLjczLDAsMCwwLC42LjIuMzcuMzcsMCwwLDAsLjMtLjEuNzkuNzksMCwwLDAsLjUtLjhWOS44QzQ1LjIsOS4zLDQ0LjgsOSw0NC4zLDlaIi'+
			'BmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZD0iTTE4LjYsMzEuMkgzOS40YS45LjksMCwwLDAsMC0xLjhIMTguNmEuOS45LDAsMSwwLDAsMS44WiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0zNS45LDI2LjNoMy41YS45LjksMCwwLDAsMC0xLjhIMzUuOWEuOS45LDAsMCwwLS45LjlBMSwxLDAsMCwwLDM1LjksMjYuM1oiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8cGF0aCBkPSJNMzUuOSwyMS41aDMuNWEuOS45LDAsMSwwLDAtMS44SDM1LjlhLjkuOSwwLDAsMC0uOS45QTEuMDYsMS4wNiwwLDAs'+
			'MCwzNS45LDIxLjVaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZD0iTTM1LjksMTYuNmgzLjVhLjkuOSwwLDAsMCwwLTEuOEgzNS45YS45LjksMCwwLDAtLjkuOUExLjA2LDEuMDYsMCwwLDAsMzUuOSwxNi42WiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0zMiwwSC45QS45LjksMCwwLDAsMCwuOVYzMy40YS44OS44OSwwLDAsMCwuNS44Yy4xLDAsLjIuMS4zLjFhMS40MiwxLjQyLDAsMCwwLC42LS4yTDksMjYuNUgzMS45YS45LjksMCwwLDAsLjktLjlWLjlBLjgyLjgyLDAsMCwwLDMyLDBaTTE2LjMsMjAuMmExLjUyLD'+
			'EuNTIsMCwwLDEtMS42LTEuNiwxLjQ1LDEuNDUsMCwwLDEsMS42LTEuNSwxLjQ1LDEuNDUsMCwwLDEsMS41LDEuNkExLjM3LDEuMzcsMCwwLDEsMTYuMywyMC4yWm0yLjUtNy40Yy0xLjEuOC0xLjIsMS0xLjIsMS45di44SDE0Ljl2LS44YzAtMS43LjMtMi4xLDEuOS0zLjQuOS0uNiwxLjEtMS4xLDEuMS0xLjdhMS4zNywxLjM3LDAsMCwwLTEuNC0xLjRjLS45LDAtMS40LjYtMS40LDEuNkgxMi42YTMuNjgsMy42OCwwLDAsMSw0LTQsMy44MiwzLjgyLDAsMCwxLDQuMSwzLjhBMy44NSwzLjg1LDAsMCwxLDE4LjgsMTIuOFoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgogIDwvZz4K'+
			'IDwvZz4KPC9zdmc+Cg==';
		me._svg_contact__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_contact";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_contact.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_contact.ggUpdatePosition=function (useTransition) {
		}
		me._contact.appendChild(me._svg_contact);
		me._control_top.appendChild(me._contact);
		el=me._map=document.createElement('div');
		el.ggId="Map";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 20px 20px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='border-style: solid;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['map'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map.style.transition='background-color 0s';
				if (me._map.ggCurrentLogicStateBackgroundColor == 0) {
					me._map.style.backgroundColor="rgba(0,102,179,1)";
				}
				else {
					me._map.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._map.logicBlock_backgroundcolor();
		me._map.onclick=function (e) {
			player.openNext("{node66}","");
		}
		me._map.onmouseover=function (e) {
			me.elementMouseOver['map']=true;
			me._map.logicBlock_backgroundcolor();
		}
		me._map.onmouseout=function (e) {
			me.elementMouseOver['map']=false;
			me._map.logicBlock_backgroundcolor();
		}
		me._map.ggCurrentLogicStateBackgroundColor = -1;
		me._map.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map']) {
				me.elementMouseOver['map']=true;
			}
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGZpbGw9Im5vbmUiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQwIDQwIj4KIDxwYXRoIGQ9Ik0xNiA0MFYyNS44ODI0SDI0VjQwSDM0VjIxLjE3NjVINDBMMjAgMEwwIDIxLjE3NjVINlY0MEgxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._svg_4);
		me._control_top.appendChild(me._map);
		me.divSkin.appendChild(me._control_top);
		el=me._container_list_menu=document.createElement('div');
		el.ggId="Container_list_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -100%;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_list_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_list_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == false)) && 
				((player.getVariableValue('show_menu_thumb') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == false)) && 
				((player.getVariableValue('show_menu_thumb') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getVariableValue('show_menu_thumb') == false))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getVariableValue('show_menu_thumb') == true))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_list_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_list_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_list_menu.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._container_list_menu.ggCurrentLogicStatePosition == 0) {
					me._container_list_menu.style.left='-100%';
					me._container_list_menu.style.top='0px';
				}
				else if (me._container_list_menu.ggCurrentLogicStatePosition == 1) {
					me._container_list_menu.style.left='0%';
					me._container_list_menu.style.top='0%';
				}
				else if (me._container_list_menu.ggCurrentLogicStatePosition == 2) {
					me._container_list_menu.style.left='0%';
					me._container_list_menu.style.top='100%';
				}
				else if (me._container_list_menu.ggCurrentLogicStatePosition == 3) {
					me._container_list_menu.style.left='0%';
					me._container_list_menu.style.top='0%';
				}
				else {
					me._container_list_menu.style.left='-100%';
					me._container_list_menu.style.top='0px';
				}
			}
		}
		me._container_list_menu.logicBlock_position();
		me._container_list_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1)) && 
				((player.getViewerSize().width < 480))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._container_list_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._container_list_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._container_list_menu.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._container_list_menu.ggCurrentLogicStateSize == 0) {
					me._container_list_menu.style.width='100%';
					me._container_list_menu.style.height='100%';
					skin.updateSize(me._container_list_menu);
				}
				else {
					me._container_list_menu.style.width='340px';
					me._container_list_menu.style.height='100%';
					skin.updateSize(me._container_list_menu);
				}
			}
		}
		me._container_list_menu.logicBlock_size();
		me._container_list_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('show_menu_thumb') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._container_list_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._container_list_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._container_list_menu.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._container_list_menu.ggCurrentLogicStateAlpha == 0) {
					me._container_list_menu.style.visibility=me._container_list_menu.ggVisible?'inherit':'hidden';
					me._container_list_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._container_list_menu.style.opacity == 0.0) { me._container_list_menu.style.visibility="hidden"; } }, 1005);
					me._container_list_menu.style.opacity=0;
				}
			}
		}
		me._container_list_menu.logicBlock_alpha();
		me._container_list_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._rec_list_menu_m=document.createElement('div');
		el.ggId="Rec_list_menu_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(8,19,30,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 10px);';
		hs+='pointer-events:auto;';
		hs+='box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rec_list_menu_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rec_list_menu_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1)) && 
				((player.getViewerSize().width < 480))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rec_list_menu_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rec_list_menu_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._rec_list_menu_m.style.transition='width 0s, height 0s';
				if (me._rec_list_menu_m.ggCurrentLogicStateSize == 0) {
					me._rec_list_menu_m.style.width='100%';
					me._rec_list_menu_m.style.height='100%';
					skin.updateSize(me._rec_list_menu_m);
				}
				else {
					me._rec_list_menu_m.style.width='calc(100% - 10px)';
					me._rec_list_menu_m.style.height='100%';
					skin.updateSize(me._rec_list_menu_m);
				}
			}
		}
		me._rec_list_menu_m.logicBlock_size();
		me._rec_list_menu_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1)) && 
				((player.getViewerSize().width < 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rec_list_menu_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rec_list_menu_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rec_list_menu_m.style.transition='width 0s, height 0s';
				if (me._rec_list_menu_m.ggCurrentLogicStateVisible == 0) {
					me._rec_list_menu_m.style.visibility=(Number(me._rec_list_menu_m.style.opacity)>0||!me._rec_list_menu_m.style.opacity)?'inherit':'hidden';
					me._rec_list_menu_m.ggVisible=true;
				}
				else {
					me._rec_list_menu_m.style.visibility="hidden";
					me._rec_list_menu_m.ggVisible=false;
				}
			}
		}
		me._rec_list_menu_m.logicBlock_visible();
		me._rec_list_menu_m.ggUpdatePosition=function (useTransition) {
		}
		me._container_list_menu.appendChild(me._rec_list_menu_m);
		el=me._scroll_master=document.createElement('div');
		els=me._scroll_master__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 167px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 329px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scroll_master.ggScrollByX = function(diffX) {
			if(!me._scroll_master.ggHorScrollVisible || diffX == 0 || me._scroll_master.ggHPercentVisible >= 1.0) return;
			me._scroll_master.ggScrollPosX = (me._scroll_master__horScrollFg.offsetLeft + diffX);
			me._scroll_master.ggScrollPosX = Math.max(me._scroll_master.ggScrollPosX, 0);
			me._scroll_master.ggScrollPosX = Math.min(me._scroll_master.ggScrollPosX, me._scroll_master__horScrollBg.offsetWidth - me._scroll_master__horScrollFg.offsetWidth);
			me._scroll_master__horScrollFg.style.left = me._scroll_master.ggScrollPosX + 'px';
			let percentScrolled = me._scroll_master.ggScrollPosX / (me._scroll_master__horScrollBg.offsetWidth - me._scroll_master__horScrollFg.offsetWidth);
			me._scroll_master__content.style.left = -(Math.round((me._scroll_master.ggContentWidth * (1.0 - me._scroll_master.ggHPercentVisible)) * percentScrolled)) + me._scroll_master.ggContentLeftOffset + 'px';
			me._scroll_master.ggScrollPosXPercent = (me._scroll_master__horScrollFg.offsetLeft / me._scroll_master__horScrollBg.offsetWidth);
		}
		me._scroll_master.ggScrollByXSmooth = function(diffX) {
			if(!me._scroll_master.ggHorScrollVisible || diffX == 0 || me._scroll_master.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scroll_master.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scroll_master.ggScrollPosX >= me._scroll_master__horScrollBg.offsetWidth - me._scroll_master__horScrollFg.offsetWidth)) {
					me._scroll_master.ggScrollPosX = Math.min(me._scroll_master.ggScrollPosX, me._scroll_master__horScrollBg.offsetWidth - me._scroll_master__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scroll_master.ggScrollPosX <= 0)) {
					me._scroll_master.ggScrollPosX = Math.max(me._scroll_master.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scroll_master__horScrollFg.style.left = me._scroll_master.ggScrollPosX + 'px';
			let percentScrolled = me._scroll_master.ggScrollPosX / (me._scroll_master__horScrollBg.offsetWidth - me._scroll_master__horScrollFg.offsetWidth);
			me._scroll_master__content.style.left = -(Math.round((me._scroll_master.ggContentWidth * (1.0 - me._scroll_master.ggHPercentVisible)) * percentScrolled)) + me._scroll_master.ggContentLeftOffset + 'px';
			me._scroll_master.ggScrollPosXPercent = (me._scroll_master__horScrollFg.offsetLeft / me._scroll_master__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scroll_master.ggScrollByY = function(diffY) {
			if(!me._scroll_master.ggVertScrollVisible || diffY == 0 || me._scroll_master.ggVPercentVisible >= 1.0) return;
			me._scroll_master.ggScrollPosY = (me._scroll_master__vertScrollFg.offsetTop + diffY);
			me._scroll_master.ggScrollPosY = Math.max(me._scroll_master.ggScrollPosY, 0);
			me._scroll_master.ggScrollPosY = Math.min(me._scroll_master.ggScrollPosY, me._scroll_master__vertScrollBg.offsetHeight - me._scroll_master__vertScrollFg.offsetHeight);
			me._scroll_master__vertScrollFg.style.top = me._scroll_master.ggScrollPosY + 'px';
			let percentScrolled = me._scroll_master.ggScrollPosY / (me._scroll_master__vertScrollBg.offsetHeight - me._scroll_master__vertScrollFg.offsetHeight);
			me._scroll_master__content.style.top = -(Math.round((me._scroll_master.ggContentHeight * (1.0 - me._scroll_master.ggVPercentVisible)) * percentScrolled)) + me._scroll_master.ggContentTopOffset + 'px';
			me._scroll_master.ggScrollPosYPercent = (me._scroll_master__vertScrollFg.offsetTop / me._scroll_master__vertScrollBg.offsetHeight);
		}
		me._scroll_master.ggScrollByYSmooth = function(diffY) {
			if(!me._scroll_master.ggVertScrollVisible || diffY == 0 || me._scroll_master.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scroll_master.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scroll_master.ggScrollPosY >= me._scroll_master__vertScrollBg.offsetHeight - me._scroll_master__vertScrollFg.offsetHeight)) {
					me._scroll_master.ggScrollPosY = Math.min(me._scroll_master.ggScrollPosY, me._scroll_master__vertScrollBg.offsetHeight - me._scroll_master__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scroll_master.ggScrollPosY <= 0)) {
					me._scroll_master.ggScrollPosY = Math.max(me._scroll_master.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scroll_master__vertScrollFg.style.top = me._scroll_master.ggScrollPosY + 'px';
			let percentScrolled = me._scroll_master.ggScrollPosY / (me._scroll_master__vertScrollBg.offsetHeight - me._scroll_master__vertScrollFg.offsetHeight);
			me._scroll_master__content.style.top = -(Math.round((me._scroll_master.ggContentHeight * (1.0 - me._scroll_master.ggVPercentVisible)) * percentScrolled)) + me._scroll_master.ggContentTopOffset + 'px';
			me._scroll_master.ggScrollPosYPercent = (me._scroll_master__vertScrollFg.offsetTop / me._scroll_master__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scroll_master.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scroll_master.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scroll_master.ggHPercentVisible);
					me._scroll_master.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scroll_master.clientWidth - (me._scroll_master.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scroll_master.clientWidth - (me._scroll_master.ggVertScrollVisible ? 6 : 0))) * me._scroll_master.ggHPercentVisible);
					me._scroll_master.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scroll_master.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scroll_master.ggVPercentVisible);
					me._scroll_master.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scroll_master.clientHeight - (me._scroll_master.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scroll_master.clientHeight - (me._scroll_master.ggHorScrollVisible ? 6 : 0))) * me._scroll_master.ggVPercentVisible);
					me._scroll_master.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scroll_master__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scroll_master.ggDragInertiaX *= 0.65;
				me._scroll_master.ggDragInertiaY *= 0.65;
				me._scroll_master.ggScrollByX(me._scroll_master.ggDragInertiaX);
				me._scroll_master.ggScrollByY(me._scroll_master.ggDragInertiaY);
				if (Math.abs(me._scroll_master.ggDragInertiaX) < 1.0 && Math.abs(me._scroll_master.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scroll_master__content.onmouseup = null;
			me._scroll_master__content.onmousemove = null;
			me._scroll_master__content.ontouchend = null;
			me._scroll_master__content.ontouchmove = null;
			me._scroll_master__content.onpointerup = null;
			me._scroll_master__content.onpointermove = null;
			setTimeout(function() { me._scroll_master.ggIsDragging = false; }, 100);
		}
		me._scroll_master__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scroll_master.ggDragStartX) > 10 || Math.abs(eventY - me._scroll_master.ggDragStartY) > 10) me._scroll_master.ggIsDragging = true;
			var diffX = (eventX - me._scroll_master.ggDragLastX) * me._scroll_master.ggHPercentVisible;
			var diffY = (eventY - me._scroll_master.ggDragLastY) * me._scroll_master.ggVPercentVisible;
			me._scroll_master.ggDragInertiaX = -diffX;
			me._scroll_master.ggDragInertiaY = -diffY;
			me._scroll_master.ggDragLastX = eventX;
			me._scroll_master.ggDragLastY = eventY;
			me._scroll_master.ggScrollByX(-diffX);
			me._scroll_master.ggScrollByY(-diffY);
		}
		me._scroll_master__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scroll_master.ggDragLastX = me._scroll_master.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scroll_master.ggDragLastY = me._scroll_master.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scroll_master__content.onmouseup = me._scroll_master__content.mousetouchend;
			me._scroll_master__content.ontouchend = me._scroll_master__content.mousetouchend;
			me._scroll_master__content.onmousemove = me._scroll_master__content.mousetouchmove;
			me._scroll_master__content.ontouchmove = me._scroll_master__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scroll_master__content.onpointerup = me._scroll_master__content.ontouchend;
				me._scroll_master__content.onpointermove = me._scroll_master__content.ontouchmove;
			}
		}
		els.onmousedown = me._scroll_master__content.mousetouchstart;
		els.ontouchstart = me._scroll_master__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scroll_master__content.mousetouchstart;
		}
		elVertScrollBg = me._scroll_master__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 600px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scroll_master__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 600px; background-color: rgba(255,159,28,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scroll_master.ggScrollPosY = 0;
		me._scroll_master.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scroll_master.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scroll_master.ggDragInertiaY *= 0.65;
					me._scroll_master.ggScrollByY(me._scroll_master.ggDragInertiaY);
					if (Math.abs(me._scroll_master.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scroll_master.ggDragLastY;
				me._scroll_master.ggDragInertiaY = diffY;
				me._scroll_master.ggDragLastY = e.clientY;
				me._scroll_master.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scroll_master.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scroll_master.ggDragInertiaY *= 0.65;
					me._scroll_master.ggScrollByY(me._scroll_master.ggDragInertiaY);
					if (Math.abs(me._scroll_master.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scroll_master.ggDragLastY;
				me._scroll_master.ggDragInertiaY = diffY;
				me._scroll_master.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scroll_master.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scroll_master.ggScrollHeight;
			if (e.offsetY < me._scroll_master.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scroll_master.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scroll_master__vertScrollBg.getBoundingClientRect();
			var diffY = me._scroll_master.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scroll_master.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scroll_master.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scroll_master.ggScrollByYSmooth(30 * me._scroll_master.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scroll_master__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scroll_master";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 280px);';
		hs+='left : calc(50% - ((340px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 230px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scroll_master.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scroll_master.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('show_menu_thumb') == true)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scroll_master.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scroll_master.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scroll_master.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._scroll_master.ggCurrentLogicStatePosition == 0) {
					me._scroll_master.style.left = 'calc(50% - (340px / 2))';
					me._scroll_master.style.top='35px';
				}
				else {
					me._scroll_master.style.left='calc(50% - ((340px + 0px) / 2) + 0px)';
					me._scroll_master.style.top='230px';
				}
			}
		}
		me._scroll_master.logicBlock_position();
		me._scroll_master.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('show_menu_thumb') == true)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._scroll_master.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scroll_master.ggCurrentLogicStateSize = newLogicStateSize;
				me._scroll_master.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._scroll_master.ggCurrentLogicStateSize == 0) {
					me._scroll_master.style.width='340px';
					me._scroll_master.style.height='calc(100% - 255px)';
					me._scroll_master.style.left = 'calc(50% - (340px / 2))';
					skin.updateSize(me._scroll_master);
				}
				else {
					me._scroll_master.style.width='340px';
					me._scroll_master.style.height='calc(100% - 280px)';
					me._scroll_master.style.left = 'calc(50% - (340px / 2))';
					skin.updateSize(me._scroll_master);
				}
			}
		}
		me._scroll_master.logicBlock_size();
		me._scroll_master.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scroll_master.ggScrollPosY / me._scroll_master.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scroll_master.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._scroll_master.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scroll_master__vertScrollBg.style.visibility = 'inherit';
					me._scroll_master__vertScrollFg.style.visibility = 'inherit';
					me._scroll_master.ggVertScrollVisible = true;
				} else {
					me._scroll_master__vertScrollBg.style.visibility = 'hidden';
					me._scroll_master__vertScrollFg.style.visibility = 'hidden';
					me._scroll_master.ggVertScrollVisible = false;
				}
				if(me._scroll_master.ggVertScrollVisible) {
					me._scroll_master.ggAvailableWidth = me._scroll_master.clientWidth - 6;
					if (me._scroll_master.ggHorScrollVisible) {
						me._scroll_master.ggAvailableHeight = me._scroll_master.clientHeight - 6;
						me._scroll_master.ggAvailableHeightWithScale = me._scroll_master.getBoundingClientRect().height - me._scroll_master__vertScrollBg.getBoundingClientRect().width;
						me._scroll_master__cornerBg.style.visibility = 'inherit';
					} else {
						me._scroll_master.ggAvailableHeight = me._scroll_master.clientHeight;
						me._scroll_master.ggAvailableHeightWithScale = me._scroll_master.getBoundingClientRect().height;
						me._scroll_master__cornerBg.style.visibility = 'hidden';
					}
					me._scroll_master__vertScrollBg.style.height = me._scroll_master.ggAvailableHeight + 'px';
					me._scroll_master.ggVPercentVisible = contentHeight != 0 ? me._scroll_master.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scroll_master.ggVPercentVisible > 1.0) me._scroll_master.ggVPercentVisible = 1.0;
					me._scroll_master.ggScrollHeight =  Math.round(me._scroll_master__vertScrollBg.offsetHeight * me._scroll_master.ggVPercentVisible);
					me._scroll_master__vertScrollFg.style.height = me._scroll_master.ggScrollHeight + 'px';
					me._scroll_master.ggScrollPosY = me._scroll_master.ggScrollPosYPercent * me._scroll_master.ggAvailableHeight;
					me._scroll_master.ggScrollPosY = Math.min(me._scroll_master.ggScrollPosY, me._scroll_master__vertScrollBg.offsetHeight - me._scroll_master__vertScrollFg.offsetHeight);
					me._scroll_master__vertScrollFg.style.top = me._scroll_master.ggScrollPosY + 'px';
					if (me._scroll_master.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scroll_master.ggScrollPosY / (me._scroll_master__vertScrollBg.offsetHeight - me._scroll_master__vertScrollFg.offsetHeight);
						me._scroll_master__content.style.top = -(Math.round((me._scroll_master.ggContentHeight * (1.0 - me._scroll_master.ggVPercentVisible)) * percentScrolled)) + me._scroll_master.ggContentTopOffset + 'px';
					}
				} else {
					me._scroll_master.ggAvailableWidth = me._scroll_master.clientWidth;
					me._scroll_master.ggScrollPosY = 0;
					me._scroll_master.ggScrollPosYPercent = 0.0;
					me._scroll_master__content.style.top = this.ggContentTopOffset + 'px';
					me._scroll_master__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scroll_master.ggHorScrollVisible || vertScrollWasVisible != me._scroll_master.ggVertScrollVisible) {
					skin.updateSize(me._scroll_master);
					me._scroll_master.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 320;
		el.ggHeight = 38;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._category_cloner.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._category_cloner.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._category_cloner.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me._category_cloner.childNodes[currElement].clientHeight < me._category_cloner.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 0.5 + 's, height ' + 0.5 + 's';
							} else {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 0.5 + 's';
							}
						}
						me._category_cloner.childNodes[currElement].style.overflow = 'hidden';
						me._category_cloner.childNodes[currElement].style['top'] = currYPos + 'px';
						me._category_cloner.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._category_cloner.childNodes[currElement].scrollHeight);
						me._category_cloner.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me._category_cloner.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 500);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._category_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._category_cloner.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._category_cloner.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._category_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._category_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._category_cloner.ggWidth) + 'px';
				parameter.width=me._category_cloner.ggWidth + 'px';
				parameter.height=me._category_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.ggNodeCount = me._category_cloner.ggNumFilterPassed;
			me._category_cloner.ggAutoPosition(true);
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode && me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"tqkimlien",title:"T\u1ed5ng quan khu di t\xedch Kim Li\xean",description:""},
			{tag:"tqlangsen-tuongniem",title:"T\u1ed5ng quan c\u1ee5m di t\xedch L\xe0ng Sen v\xe0 Khu t\u01b0\u1edfng ni\u1ec7m Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh",description:""},
			{tag:"tqlangsen",title:"T\u1ed5ng quan c\u1ee5m di t\xedch L\xe0ng Sen",description:""},
			{tag:"vuonghoangmy",title:"Nh\xe0 \xf4ng V\u01b0\u01a1ng Ho\xe0ng M\u1ef9",description:""},
			{tag:"nguyendanhkhai",title:"Nh\xe0 \xf4ng Nguy\u1ec5n Danh Khai",description:""},
			{tag:"giengcoc",title:"Di t\xedch Gi\u1ebfng C\u1ed1c",description:""},
			{tag:"nguyensinhsac",title:"Nh\xe0 \xf4ng Ph\xf3 b\u1ea3ng Nguy\u1ec5n Sinh S\u1eafc",description:""},
			{tag:"hoangxuantieng",title:"Nh\xe0 \xf4ng Ho\xe0ng Xu\xe2n Ti\u1ec7ng",description:""},
			{tag:"loren",title:"Di t\xedch l\xf2 r\xe8n C\u1ed1 \u0110i\u1ec1n",description:""},
			{tag:"nguyensinhnham",title:"Nh\xe0 c\u1ee5 Nguy\u1ec5n Sinh Nh\u1eadm",description:""},
			{tag:"nhathotocnguyensinh",title:"Nh\xe0 th\u1edd h\u1ecd \u0111\u1ea1i t\xf4n Nguy\u1ec5n Sinh",description:""},
			{tag:"vuongthucquy",title:"Nh\xe0 C\u1eed nh\xe2n V\u01b0\u01a1ng Th\xfac Qu\xfd",description:""},
			{tag:"caydasanvandong",title:"C\xe2y \u0111a, s\xe2n v\u1eadn \u0111\u1ed9ng, \u0111\u1ec1n l\xe0ng Sen",description:""},
			{tag:"tqkhutuongniem",title:"T\u1ed5ng quan khu t\u01b0\u1edfng ni\u1ec7m<br>Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh",description:""},
			{tag:"baidauxe",title:"B\xe3i \u0111\u1eadu xe",description:""},
			{tag:"phongbanve",title:"Ph\xf2ng \u0111\u0103ng k\xfd - H\u01b0\u1edbng d\u1eabn tham quan",description:""},
			{tag:"congchinh",title:"C\u1ed5ng ch\xednh khu t\u01b0\u1edfng ni\u1ec7m",description:""},
			{tag:"trungbaytranhanh",title:"Tr\u01b0ng b\xe0y tri\u1ec3n l\xe3m chuy\xean \u0111\u1ec1",description:""},
			{tag:"sanchinh",title:"S\xe2n ch\xednh khu t\u01b0\u1edfng ni\u1ec7m",description:""},
			{tag:"nhatrungbay",title:"Nh\xe0 tr\u01b0ng b\xe0y khu t\u01b0\u1edfng ni\u1ec7m",description:""},
			{tag:"nhabaiduong",title:"Nh\xe0 b\xe1i \u0111\u01b0\u1eddng",description:""},
			{tag:"nhatuongniem",title:"Nh\xe0 t\u01b0\u1edfng ni\u1ec7m Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh",description:""},
			{tag:"aocabacho",title:"Ao c\xe1 B\xe1c H\u1ed3",description:""},
			{tag:"nhaluuniem",title:"Nh\xe0 l\u01b0u ni\u1ec7m Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh",description:""},
			{tag:"quayluuniem",title:"Qu\u1ea7y l\u01b0u ni\u1ec7m",description:""},
			{tag:"tqlanghoangtru",title:"T\u1ed5ng quan c\u1ee5m di t\xedch Ho\xe0ng Tr\xf9",description:""},
			{tag:"hoangxuanthuc",title:"Nh\xe0 \xf4ng Ho\xe0ng Xu\xe2n Th\u1ee5c",description:""},
			{tag:"hoangphanmy",title:"Nh\xe0 \xf4ng Ho\xe0ng Phan M\u1ef9",description:""},
			{tag:"hoangxuanduong",title:"Nh\xe0 \xf4ng Ho\xe0ng Xu\xe2n \u0110\u01b0\u1eddng",description:""},
			{tag:"nhasinhrabacho",title:"Nh\xe0 n\u01a1i Ch\u1ee7 t\u1ecbch H\u1ed3 Nh\xe0 Minh ch\xe0o \u0111\u1eddi",description:""},
			{tag:"hoangphanquynh",title:"Nh\xe0 \xf4ng Ho\xe0ng Phan Qu\u1ef3nh",description:""},
			{tag:"tqhoangthiloan",title:"T\u1ed5ng quan khu m\u1ed9 b\xe0 Ho\xe0ng Th\u1ecb Loan",description:""},
			{tag:"phongdangky",title:"Ph\xf2ng \u0111\u0103ng k\xfd - H\u01b0\u1edbng d\u1eabn tham quan",description:""},
			{tag:"congchinhkhumo",title:"C\u1ed5ng ch\xednh khu m\u1ed9",description:""},
			{tag:"hathihy",title:"M\u1ed9 c\u1ee5 H\xe0 Th\u1ecb Hy",description:""},
			{tag:"nguyensinhxin",title:"M\u1ed9 c\u1eadu Nguy\u1ec5n Sinh Xin",description:""},
			{tag:"mobahoangthiloan",title:"M\u1ed9 b\xe0 Ho\xe0ng Th\u1ecb Loan",description:""},
			{tag:"congvien",title:"C\xf4ng vi\xean \u0110\u1ea1i Hu\u1ec7",description:""},
			{tag:"phongtrungbay",title:"Ph\xf2ng tr\u01b0ng b\xe0y khu m\u1ed9",description:""},
			{tag:"quayluuniemkhumo",title:"Qu\u1ea7y l\u01b0u ni\u1ec7m khu m\u1ed9",description:""},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
			me._category_cloner.ggUpdate();
		}
		me._scroll_master__content.appendChild(me._category_cloner);
		me._container_list_menu.appendChild(me._scroll_master);
		el=me._scrollarea_m=document.createElement('div');
		els=me._scrollarea_m__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 144px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 124px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_m.ggScrollByX = function(diffX) {
			if(!me._scrollarea_m.ggHorScrollVisible || diffX == 0 || me._scrollarea_m.ggHPercentVisible >= 1.0) return;
			me._scrollarea_m.ggScrollPosX = (me._scrollarea_m__horScrollFg.offsetLeft + diffX);
			me._scrollarea_m.ggScrollPosX = Math.max(me._scrollarea_m.ggScrollPosX, 0);
			me._scrollarea_m.ggScrollPosX = Math.min(me._scrollarea_m.ggScrollPosX, me._scrollarea_m__horScrollBg.offsetWidth - me._scrollarea_m__horScrollFg.offsetWidth);
			me._scrollarea_m__horScrollFg.style.left = me._scrollarea_m.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_m.ggScrollPosX / (me._scrollarea_m__horScrollBg.offsetWidth - me._scrollarea_m__horScrollFg.offsetWidth);
			me._scrollarea_m__content.style.left = -(Math.round((me._scrollarea_m.ggContentWidth * (1.0 - me._scrollarea_m.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_m.ggContentLeftOffset + 'px';
			me._scrollarea_m.ggScrollPosXPercent = (me._scrollarea_m__horScrollFg.offsetLeft / me._scrollarea_m__horScrollBg.offsetWidth);
		}
		me._scrollarea_m.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_m.ggHorScrollVisible || diffX == 0 || me._scrollarea_m.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_m.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_m.ggScrollPosX >= me._scrollarea_m__horScrollBg.offsetWidth - me._scrollarea_m__horScrollFg.offsetWidth)) {
					me._scrollarea_m.ggScrollPosX = Math.min(me._scrollarea_m.ggScrollPosX, me._scrollarea_m__horScrollBg.offsetWidth - me._scrollarea_m__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_m.ggScrollPosX <= 0)) {
					me._scrollarea_m.ggScrollPosX = Math.max(me._scrollarea_m.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_m__horScrollFg.style.left = me._scrollarea_m.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_m.ggScrollPosX / (me._scrollarea_m__horScrollBg.offsetWidth - me._scrollarea_m__horScrollFg.offsetWidth);
			me._scrollarea_m__content.style.left = -(Math.round((me._scrollarea_m.ggContentWidth * (1.0 - me._scrollarea_m.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_m.ggContentLeftOffset + 'px';
			me._scrollarea_m.ggScrollPosXPercent = (me._scrollarea_m__horScrollFg.offsetLeft / me._scrollarea_m__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_m.ggScrollByY = function(diffY) {
			if(!me._scrollarea_m.ggVertScrollVisible || diffY == 0 || me._scrollarea_m.ggVPercentVisible >= 1.0) return;
			me._scrollarea_m.ggScrollPosY = (me._scrollarea_m__vertScrollFg.offsetTop + diffY);
			me._scrollarea_m.ggScrollPosY = Math.max(me._scrollarea_m.ggScrollPosY, 0);
			me._scrollarea_m.ggScrollPosY = Math.min(me._scrollarea_m.ggScrollPosY, me._scrollarea_m__vertScrollBg.offsetHeight - me._scrollarea_m__vertScrollFg.offsetHeight);
			me._scrollarea_m__vertScrollFg.style.top = me._scrollarea_m.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_m.ggScrollPosY / (me._scrollarea_m__vertScrollBg.offsetHeight - me._scrollarea_m__vertScrollFg.offsetHeight);
			me._scrollarea_m__content.style.top = -(Math.round((me._scrollarea_m.ggContentHeight * (1.0 - me._scrollarea_m.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_m.ggContentTopOffset + 'px';
			me._scrollarea_m.ggScrollPosYPercent = (me._scrollarea_m__vertScrollFg.offsetTop / me._scrollarea_m__vertScrollBg.offsetHeight);
		}
		me._scrollarea_m.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_m.ggVertScrollVisible || diffY == 0 || me._scrollarea_m.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_m.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_m.ggScrollPosY >= me._scrollarea_m__vertScrollBg.offsetHeight - me._scrollarea_m__vertScrollFg.offsetHeight)) {
					me._scrollarea_m.ggScrollPosY = Math.min(me._scrollarea_m.ggScrollPosY, me._scrollarea_m__vertScrollBg.offsetHeight - me._scrollarea_m__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_m.ggScrollPosY <= 0)) {
					me._scrollarea_m.ggScrollPosY = Math.max(me._scrollarea_m.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_m__vertScrollFg.style.top = me._scrollarea_m.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_m.ggScrollPosY / (me._scrollarea_m__vertScrollBg.offsetHeight - me._scrollarea_m__vertScrollFg.offsetHeight);
			me._scrollarea_m__content.style.top = -(Math.round((me._scrollarea_m.ggContentHeight * (1.0 - me._scrollarea_m.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_m.ggContentTopOffset + 'px';
			me._scrollarea_m.ggScrollPosYPercent = (me._scrollarea_m__vertScrollFg.offsetTop / me._scrollarea_m__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_m.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_m.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_m.ggHPercentVisible);
					me._scrollarea_m.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_m.clientWidth - (me._scrollarea_m.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_m.clientWidth - (me._scrollarea_m.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_m.ggHPercentVisible);
					me._scrollarea_m.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_m.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_m.ggVPercentVisible);
					me._scrollarea_m.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_m.clientHeight - (me._scrollarea_m.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_m.clientHeight - (me._scrollarea_m.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_m.ggVPercentVisible);
					me._scrollarea_m.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_m__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_m.ggDragInertiaX *= 0.65;
				me._scrollarea_m.ggDragInertiaY *= 0.65;
				me._scrollarea_m.ggScrollByX(me._scrollarea_m.ggDragInertiaX);
				me._scrollarea_m.ggScrollByY(me._scrollarea_m.ggDragInertiaY);
				if (Math.abs(me._scrollarea_m.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_m.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_m__content.onmouseup = null;
			me._scrollarea_m__content.onmousemove = null;
			me._scrollarea_m__content.ontouchend = null;
			me._scrollarea_m__content.ontouchmove = null;
			me._scrollarea_m__content.onpointerup = null;
			me._scrollarea_m__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_m.ggIsDragging = false; }, 100);
		}
		me._scrollarea_m__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_m.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_m.ggDragStartY) > 10) me._scrollarea_m.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_m.ggDragLastX) * me._scrollarea_m.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_m.ggDragLastY) * me._scrollarea_m.ggVPercentVisible;
			me._scrollarea_m.ggDragInertiaX = -diffX;
			me._scrollarea_m.ggDragInertiaY = -diffY;
			me._scrollarea_m.ggDragLastX = eventX;
			me._scrollarea_m.ggDragLastY = eventY;
			me._scrollarea_m.ggScrollByX(-diffX);
			me._scrollarea_m.ggScrollByY(-diffY);
		}
		me._scrollarea_m__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_m.ggDragLastX = me._scrollarea_m.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_m.ggDragLastY = me._scrollarea_m.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_m__content.onmouseup = me._scrollarea_m__content.mousetouchend;
			me._scrollarea_m__content.ontouchend = me._scrollarea_m__content.mousetouchend;
			me._scrollarea_m__content.onmousemove = me._scrollarea_m__content.mousetouchmove;
			me._scrollarea_m__content.ontouchmove = me._scrollarea_m__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_m__content.onpointerup = me._scrollarea_m__content.ontouchend;
				me._scrollarea_m__content.onpointermove = me._scrollarea_m__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_m__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_m__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_m__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_m__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 370px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_m__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 370px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_m.ggScrollPosX = 0;
		me._scrollarea_m.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_m.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_m.ggDragInertiaX *= 0.65;
					me._scrollarea_m.ggScrollByX(me._scrollarea_m.ggDragInertiaX);
					if (Math.abs(me._scrollarea_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_m.ggDragLastX;
				me._scrollarea_m.ggDragInertiaX = diffX;
				me._scrollarea_m.ggDragLastX = e.clientX;
				me._scrollarea_m.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_m.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_m.ggDragInertiaX *= 0.65;
					me._scrollarea_m.ggScrollByX(me._scrollarea_m.ggDragInertiaX);
					if (Math.abs(me._scrollarea_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_m.ggDragLastX;
				me._scrollarea_m.ggDragInertiaX = diffX;
				me._scrollarea_m.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_m.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_m.ggScrollWidth;
			if (e.offsetX < me._scrollarea_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_m.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_m__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_m.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_m.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_m.ggScrollByXSmooth(30 * me._scrollarea_m.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_m__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #3e3e3e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 150px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='box-shadow: 5px 10px 20px #262626 inset; border-top: 1px solid rgba(255, 255, 255, 0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._scrollarea_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_m.style.transition='';
				if (me._scrollarea_m.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_m.style.visibility=(Number(me._scrollarea_m.style.opacity)>0||!me._scrollarea_m.style.opacity)?'inherit':'hidden';
					me._scrollarea_m.ggVisible=true;
				}
				else {
					me._scrollarea_m.style.visibility="hidden";
					me._scrollarea_m.ggVisible=false;
				}
			}
		}
		me._scrollarea_m.logicBlock_visible();
		me._scrollarea_m.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_m.ggScrollPosX / me._scrollarea_m.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_m__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_m__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_m.ggHorScrollVisible = true;
				if(me._scrollarea_m.ggHorScrollVisible) {
					me._scrollarea_m.ggAvailableHeight = me._scrollarea_m.clientHeight - 0;
					if (me._scrollarea_m.ggVertScrollVisible) {
						me._scrollarea_m.ggAvailableWidth = me._scrollarea_m.clientWidth - 0;
						me._scrollarea_m.ggAvailableWidthWithScale = me._scrollarea_m.getBoundingClientRect().width - me._scrollarea_m__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_m.ggAvailableWidth = me._scrollarea_m.clientWidth;
						me._scrollarea_m.ggAvailableWidthWithScale = me._scrollarea_m.getBoundingClientRect().width;
					}
					me._scrollarea_m__horScrollBg.style.width = me._scrollarea_m.ggAvailableWidth + 'px';
					me._scrollarea_m.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_m.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_m.ggHPercentVisible > 1.0) me._scrollarea_m.ggHPercentVisible = 1.0;
					me._scrollarea_m.ggScrollWidth = Math.round(me._scrollarea_m__horScrollBg.offsetWidth * me._scrollarea_m.ggHPercentVisible);
					me._scrollarea_m__horScrollFg.style.width = me._scrollarea_m.ggScrollWidth + 'px';
					me._scrollarea_m.ggScrollPosX = me._scrollarea_m.ggScrollPosXPercent * me._scrollarea_m.ggAvailableWidth;
					me._scrollarea_m.ggScrollPosX = Math.min(me._scrollarea_m.ggScrollPosX, me._scrollarea_m__horScrollBg.offsetWidth - me._scrollarea_m__horScrollFg.offsetWidth);
					me._scrollarea_m__horScrollFg.style.left = me._scrollarea_m.ggScrollPosX + 'px';
					if (me._scrollarea_m.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_m.ggScrollPosX / (me._scrollarea_m__horScrollBg.offsetWidth - me._scrollarea_m__horScrollFg.offsetWidth);
						me._scrollarea_m__content.style.left = -(Math.round((me._scrollarea_m.ggContentWidth * (1.0 - me._scrollarea_m.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_m.ggAvailableHeight = me._scrollarea_m.clientHeight;
					me._scrollarea_m.ggScrollPosX = 0;
					me._scrollarea_m.ggScrollPosXPercent = 0.0;
					me._scrollarea_m__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_m.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_m.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_m);
					me._scrollarea_m.ggUpdatePosition();
				}
			}
		}
		el=me._cloner_area_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_area_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 140;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_area_m.ggUpdating == true) return;
			me._cloner_area_m.ggUpdating = true;
			var el=me._cloner_area_m;
			var curNumRows = 0;
			curNumRows = me._cloner_area_m.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_area_m.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_area_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._cloner_area_m.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				me._cloner_area_m.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._cloner_area_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_area_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_area_m.ggWidth) + 'px';
				parameter.width=me._cloner_area_m.ggWidth + 'px';
				parameter.height=me._cloner_area_m.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_cloner_area_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._cloner_area_m.ggNodeCount = me._cloner_area_m.ggNumFilterPassed;
			me._cloner_area_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_area_m.parentNode && me._cloner_area_m.parentNode.classList.contains('ggskin_subelement') && me._cloner_area_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_area_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"tq",title:"T\u1ed5ng quan khu di t\xedch<br>Kim Li\xean",description:""},
			{tag:"langsen",title:"C\u1ee5m di t\xedch L\xe0ng Sen",description:""},
			{tag:"khutuongniem",title:"Khu t\u01b0\u1edfng ni\u1ec7m<br>Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh",description:""},
			{tag:"langhoangtru",title:"C\u1ee5m di t\xedch Ho\xe0ng Tr\xf9",description:""},
			{tag:"khumohoangthiloan",title:"Khu m\u1ed9 b\xe0<br>Ho\xe0ng Th\u1ecb Loan",description:""},
			];
		el.ggId="Cloner_area_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 140px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_area_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_area_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_area_m.childNodes.length; i++) {
				var child=me._cloner_area_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_area_m.ggUpdatePosition=function (useTransition) {
			me._cloner_area_m.ggUpdate();
		}
		me._scrollarea_m__content.appendChild(me._cloner_area_m);
		me._container_list_menu.appendChild(me._scrollarea_m);
		el=me._close_menu_mobile=document.createElement('div');
		els=me._close_menu_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_close_menu_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADKklEQVR4nO1bu24UQRCs47uIiR1iGSKEnJBgXgaE72zOYIF4moyAGAI+gAxifgcioAiOk4711GzPbs/j5GupA3t3e7pqZnt6um8nJHGe5UJtB2rLhoDaDtSWDQGRazsAPgDYLuRLDtnCAsM1AJPgHSRDusP/5am4r2V90MGwG7pPPfyJZ+WwAVBWvR3w/3MKAZcDBkjySQPg+vS+8P16CgH4BzYk8wZAKr0rfD4lOUklACRnwuDjBsBawb+IPWcxfCwMt7QSugFvKW/7nrUOcCQGmDYAfk/49tryfMpAioSaW6Sa+VdWG6kDKhJqbJGhrY40zvxQAkDyQAx8UhC8mvnnqbaGOqAC41EB8HfE2L0Bz5MAUG+ROZOlfTFm8sx7EADqZOm4IPjTMXY9HD'+
			'sUjnm+DmrZvxxr28vBuXDQYyWogPfGw3cvAmIkHIyweTMneG8CQB0YhyRLauajuX1tAmIrISVZUkmO28znJAAkHwkAlpWgZv5ZDl9zEQDqLTJ2lFZH2kFJTm0CQB0TQkfpe+LewUlOCwTEVsJqxqjKWNlmviQBoD5F7pO8Ia6Zj7TrQAC4ePetknSkXRcCQH2KXJXsy74mAeAi2P0KAP/DCnXGGr3BH5FrP4t5sZTCjKtovypFmy+ll75Vir0KpcCrDG9OvSqKNF9KgLc0LdTukL3knht8Sula5QnTdSVgSNOiePMlF3hVybEUMNXZYbouBHg0LVTzxX0leIP3bFoUab54gs9xnleVJbe+gxd41bTwqOFlbb54gFdbnWf1NlvzZaxjD4VjOc7zqto8KjCOceiWcMi9dG0gYVqaAJW/j+7VGVS9DoNOkUMcUL/JGdWl'+
			'TVS3ZMlr5rM0LXp0TPNlEAHFmxYGVcmS+Sg9FnzWpoVRVdpsKqpYBlDLvkjd3qhqJfQGxj7DKslpCfxSB/2EL2ZQJTktgu8jQQZGZWhLGKoZ8KyqXocrKQR8DBgokeR46Szgf/CDCdUY+dL5+x2AvcwtCk+ZATjp/O9r6MYJKb8c3QVwEcA3AO+9PCssVwFcAvAdi0n83b0hRsC5kM13g7UdqC0bAmo7UFv+AlU2teGQNem7AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_menu_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_menu_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_menu_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_menu_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_menu_mobile.style.transition='';
				if (me._close_menu_mobile.ggCurrentLogicStateVisible == 0) {
					me._close_menu_mobile.style.visibility=(Number(me._close_menu_mobile.style.opacity)>0||!me._close_menu_mobile.style.opacity)?'inherit':'hidden';
					me._close_menu_mobile.ggVisible=true;
				}
				else {
					me._close_menu_mobile.style.visibility="hidden";
					me._close_menu_mobile.ggVisible=false;
				}
			}
		}
		me._close_menu_mobile.logicBlock_visible();
		me._close_menu_mobile.onclick=function (e) {
			player.setVariableValue('show_menu_thumb', false);
			player.setVariableValue('open_tag', "_nop_");
		}
		me._close_menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._container_list_menu.appendChild(me._close_menu_mobile);
		me.divSkin.appendChild(me._container_list_menu);
		el=me._thumbmenuex=document.createElement('div');
		els=me._thumbmenuex__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._thumbmenuex.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._thumbmenuex.ggSubElement.setAttribute('alt', player._(me._thumbmenuex.ggAltText));
			me._thumbmenuex.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._thumbmenuex.ggText_untranslated = img;
			me._thumbmenuex.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._thumbmenuex.ggSubElement.style.width = '0px';
			me._thumbmenuex.ggSubElement.style.height = '0px';
			me._thumbmenuex.ggSubElement.src='';
			me._thumbmenuex.ggSubElement.src=me._thumbmenuex.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._thumbmenuex.ggText != player._(me._thumbmenuex.ggText_untranslated)) {
				me._thumbmenuex.ggText = player._(me._thumbmenuex.ggText_untranslated);
				me._thumbmenuex.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="thumb-menu-ex";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 6px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 342px;';
		hs+='left : calc(50% - ((600px + 12px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((342px + 12px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		hs+='box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbmenuex.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbmenuex.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1366))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._thumbmenuex.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._thumbmenuex.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._thumbmenuex.style.transition='transform 0s';
				if (me._thumbmenuex.ggCurrentLogicStateScaling == 0) {
					me._thumbmenuex.ggParameter.sx = 0.8;
					me._thumbmenuex.ggParameter.sy = 0.8;
					me._thumbmenuex.style.transform=parameterToTransform(me._thumbmenuex.ggParameter);
					skin.updateSize(me._thumbmenuex);
				}
				else {
					me._thumbmenuex.ggParameter.sx = 1;
					me._thumbmenuex.ggParameter.sy = 1;
					me._thumbmenuex.style.transform=parameterToTransform(me._thumbmenuex.ggParameter);
					skin.updateSize(me._thumbmenuex);
				}
			}
		}
		me._thumbmenuex.logicBlock_scaling();
		me._thumbmenuex.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._thumbmenuex.clientWidth;
			var parentHeight = me._thumbmenuex.clientHeight;
			var img = me._thumbmenuex__img;
			var aspectRatioDiv = me._thumbmenuex.clientWidth / me._thumbmenuex.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = Math.round(parentWidth / aspectRatioImg);
			img.style.width=parentWidth + 'px';
			img.style.height='';
			if (!me._thumbmenuex.ggScrollbars || currentWidth < me._thumbmenuex.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._thumbmenuex.scrollLeft=currentWidth / 2 - me._thumbmenuex.clientWidth / 2;
			}
			if (!me._thumbmenuex.ggScrollbars || currentHeight < me._thumbmenuex.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._thumbmenuex.scrollTop=currentHeight / 2 - me._thumbmenuex.clientHeight / 2;
			}
		}
		me.divSkin.appendChild(me._thumbmenuex);
		el=me._scrollarea=document.createElement('div');
		els=me._scrollarea__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 49px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 309px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea.ggScrollByX = function(diffX) {
			if(!me._scrollarea.ggHorScrollVisible || diffX == 0 || me._scrollarea.ggHPercentVisible >= 1.0) return;
			me._scrollarea.ggScrollPosX = (me._scrollarea__horScrollFg.offsetLeft + diffX);
			me._scrollarea.ggScrollPosX = Math.max(me._scrollarea.ggScrollPosX, 0);
			me._scrollarea.ggScrollPosX = Math.min(me._scrollarea.ggScrollPosX, me._scrollarea__horScrollBg.offsetWidth - me._scrollarea__horScrollFg.offsetWidth);
			me._scrollarea__horScrollFg.style.left = me._scrollarea.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea.ggScrollPosX / (me._scrollarea__horScrollBg.offsetWidth - me._scrollarea__horScrollFg.offsetWidth);
			me._scrollarea__content.style.left = -(Math.round((me._scrollarea.ggContentWidth * (1.0 - me._scrollarea.ggHPercentVisible)) * percentScrolled)) + me._scrollarea.ggContentLeftOffset + 'px';
			me._scrollarea.ggScrollPosXPercent = (me._scrollarea__horScrollFg.offsetLeft / me._scrollarea__horScrollBg.offsetWidth);
		}
		me._scrollarea.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea.ggHorScrollVisible || diffX == 0 || me._scrollarea.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea.ggScrollPosX >= me._scrollarea__horScrollBg.offsetWidth - me._scrollarea__horScrollFg.offsetWidth)) {
					me._scrollarea.ggScrollPosX = Math.min(me._scrollarea.ggScrollPosX, me._scrollarea__horScrollBg.offsetWidth - me._scrollarea__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea.ggScrollPosX <= 0)) {
					me._scrollarea.ggScrollPosX = Math.max(me._scrollarea.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea__horScrollFg.style.left = me._scrollarea.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea.ggScrollPosX / (me._scrollarea__horScrollBg.offsetWidth - me._scrollarea__horScrollFg.offsetWidth);
			me._scrollarea__content.style.left = -(Math.round((me._scrollarea.ggContentWidth * (1.0 - me._scrollarea.ggHPercentVisible)) * percentScrolled)) + me._scrollarea.ggContentLeftOffset + 'px';
			me._scrollarea.ggScrollPosXPercent = (me._scrollarea__horScrollFg.offsetLeft / me._scrollarea__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea.ggScrollByY = function(diffY) {
			if(!me._scrollarea.ggVertScrollVisible || diffY == 0 || me._scrollarea.ggVPercentVisible >= 1.0) return;
			me._scrollarea.ggScrollPosY = (me._scrollarea__vertScrollFg.offsetTop + diffY);
			me._scrollarea.ggScrollPosY = Math.max(me._scrollarea.ggScrollPosY, 0);
			me._scrollarea.ggScrollPosY = Math.min(me._scrollarea.ggScrollPosY, me._scrollarea__vertScrollBg.offsetHeight - me._scrollarea__vertScrollFg.offsetHeight);
			me._scrollarea__vertScrollFg.style.top = me._scrollarea.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea.ggScrollPosY / (me._scrollarea__vertScrollBg.offsetHeight - me._scrollarea__vertScrollFg.offsetHeight);
			me._scrollarea__content.style.top = -(Math.round((me._scrollarea.ggContentHeight * (1.0 - me._scrollarea.ggVPercentVisible)) * percentScrolled)) + me._scrollarea.ggContentTopOffset + 'px';
			me._scrollarea.ggScrollPosYPercent = (me._scrollarea__vertScrollFg.offsetTop / me._scrollarea__vertScrollBg.offsetHeight);
		}
		me._scrollarea.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea.ggVertScrollVisible || diffY == 0 || me._scrollarea.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea.ggScrollPosY >= me._scrollarea__vertScrollBg.offsetHeight - me._scrollarea__vertScrollFg.offsetHeight)) {
					me._scrollarea.ggScrollPosY = Math.min(me._scrollarea.ggScrollPosY, me._scrollarea__vertScrollBg.offsetHeight - me._scrollarea__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea.ggScrollPosY <= 0)) {
					me._scrollarea.ggScrollPosY = Math.max(me._scrollarea.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea__vertScrollFg.style.top = me._scrollarea.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea.ggScrollPosY / (me._scrollarea__vertScrollBg.offsetHeight - me._scrollarea__vertScrollFg.offsetHeight);
			me._scrollarea__content.style.top = -(Math.round((me._scrollarea.ggContentHeight * (1.0 - me._scrollarea.ggVPercentVisible)) * percentScrolled)) + me._scrollarea.ggContentTopOffset + 'px';
			me._scrollarea.ggScrollPosYPercent = (me._scrollarea__vertScrollFg.offsetTop / me._scrollarea__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea.ggHPercentVisible);
					me._scrollarea.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea.clientWidth - (me._scrollarea.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea.clientWidth - (me._scrollarea.ggVertScrollVisible ? 5 : 0))) * me._scrollarea.ggHPercentVisible);
					me._scrollarea.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea.ggVPercentVisible);
					me._scrollarea.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea.clientHeight - (me._scrollarea.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea.clientHeight - (me._scrollarea.ggHorScrollVisible ? 5 : 0))) * me._scrollarea.ggVPercentVisible);
					me._scrollarea.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea.ggDragInertiaX *= 0.65;
				me._scrollarea.ggDragInertiaY *= 0.65;
				me._scrollarea.ggScrollByX(me._scrollarea.ggDragInertiaX);
				me._scrollarea.ggScrollByY(me._scrollarea.ggDragInertiaY);
				if (Math.abs(me._scrollarea.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea__content.onmouseup = null;
			me._scrollarea__content.onmousemove = null;
			me._scrollarea__content.ontouchend = null;
			me._scrollarea__content.ontouchmove = null;
			me._scrollarea__content.onpointerup = null;
			me._scrollarea__content.onpointermove = null;
			setTimeout(function() { me._scrollarea.ggIsDragging = false; }, 100);
		}
		me._scrollarea__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea.ggDragStartY) > 10) me._scrollarea.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea.ggDragLastX) * me._scrollarea.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea.ggDragLastY) * me._scrollarea.ggVPercentVisible;
			me._scrollarea.ggDragInertiaX = -diffX;
			me._scrollarea.ggDragInertiaY = -diffY;
			me._scrollarea.ggDragLastX = eventX;
			me._scrollarea.ggDragLastY = eventY;
			me._scrollarea.ggScrollByX(-diffX);
			me._scrollarea.ggScrollByY(-diffY);
		}
		me._scrollarea__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea.ggDragLastX = me._scrollarea.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea.ggDragLastY = me._scrollarea.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea__content.onmouseup = me._scrollarea__content.mousetouchend;
			me._scrollarea__content.ontouchend = me._scrollarea__content.mousetouchend;
			me._scrollarea__content.onmousemove = me._scrollarea__content.mousetouchmove;
			me._scrollarea__content.ontouchmove = me._scrollarea__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea__content.onpointerup = me._scrollarea__content.ontouchend;
				me._scrollarea__content.onpointermove = me._scrollarea__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea__content.mousetouchstart;
		els.ontouchstart = me._scrollarea__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea__content.mousetouchstart;
		}
		el.ggId="Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 490px;';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._scrollarea.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._scrollarea.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('show_menu_thumb') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._scrollarea.ggCurrentLogicStatePosition == 0) {
					me._scrollarea.style.left='350px';
					me._scrollarea.style.top='180px';
				}
				else {
					me._scrollarea.style.left='25px';
					me._scrollarea.style.top='180px';
				}
			}
		}
		me._scrollarea.logicBlock_position();
		me._scrollarea.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) || 
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._scrollarea.ggCurrentLogicStateVisible == 0) {
					me._scrollarea.style.visibility="hidden";
					me._scrollarea.ggVisible=false;
				}
				else {
					me._scrollarea.style.visibility=(Number(me._scrollarea.style.opacity)>0||!me._scrollarea.style.opacity)?'inherit':'hidden';
					me._scrollarea.ggVisible=true;
				}
			}
		}
		me._scrollarea.logicBlock_visible();
		me._scrollarea.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if(horScrollWasVisible != me._scrollarea.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea);
					me._scrollarea.ggUpdatePosition();
				}
			}
		}
		el=me._cloner_area=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_area;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 310;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_area.ggUpdating == true) return;
			me._cloner_area.ggUpdating = true;
			var el=me._cloner_area;
			var curNumCols = 0;
			curNumCols = me._cloner_area.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_area.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_area.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._cloner_area.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				me._cloner_area.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._cloner_area.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_area.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_area.ggWidth) + 'px';
				parameter.width=me._cloner_area.ggWidth + 'px';
				parameter.height=me._cloner_area.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_cloner_area_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_area.ggNodeCount = me._cloner_area.ggNumFilterPassed;
			me._cloner_area.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_area.parentNode && me._cloner_area.parentNode.classList.contains('ggskin_subelement') && me._cloner_area.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_area.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"tq",title:"T\u1ed5ng quan khu di t\xedch<br>Kim Li\xean",description:""},
			{tag:"langsen",title:"C\u1ee5m di t\xedch L\xe0ng Sen",description:""},
			{tag:"khutuongniem",title:"Khu t\u01b0\u1edfng ni\u1ec7m<br>Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh",description:""},
			{tag:"langhoangtru",title:"C\u1ee5m di t\xedch Ho\xe0ng Tr\xf9",description:""},
			{tag:"khumohoangthiloan",title:"Khu m\u1ed9 b\xe0<br>Ho\xe0ng Th\u1ecb Loan",description:""},
			];
		el.ggId="Cloner_area";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_area.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_area.childNodes.length; i++) {
				var child=me._cloner_area.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_area.ggUpdatePosition=function (useTransition) {
			me._cloner_area.ggUpdate();
		}
		me._scrollarea__content.appendChild(me._cloner_area);
		me.divSkin.appendChild(me._scrollarea);
		el=me._map_container=document.createElement('div');
		el.ggId="Map_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 90px;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('map_scale_full') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_container.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_container.ggCurrentLogicStatePosition == 0) {
					me._map_container.style.left='0px';
					me._map_container.style.bottom='40px';
				}
				else {
					me._map_container.style.left='0px';
					me._map_container.style.bottom='90px';
				}
			}
		}
		me._map_container.logicBlock_position();
		me._map_container.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('map_scale_normal') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('map_scale_full') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('map_hide') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_container.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_container.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_container.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_container.ggCurrentLogicStateSize == 0) {
					me._map_container.style.width='720px';
					me._map_container.style.height='480px';
					setTimeout(function() {skin.updateSize(me._map_container);}, 550);
				}
				else if (me._map_container.ggCurrentLogicStateSize == 1) {
					me._map_container.style.width='100%';
					me._map_container.style.height='calc(100% - 40px)';
					setTimeout(function() {skin.updateSize(me._map_container);}, 550);
				}
				else if (me._map_container.ggCurrentLogicStateSize == 2) {
					me._map_container.style.width='32px';
					me._map_container.style.height='32px';
					setTimeout(function() {skin.updateSize(me._map_container);}, 550);
				}
				else {
					me._map_container.style.width='300px';
					me._map_container.style.height='200px';
					setTimeout(function() {skin.updateSize(me._map_container);}, 550);
				}
			}
		}
		me._map_container.logicBlock_size();
		me._map_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_container.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_container.ggCurrentLogicStateVisible == 0) {
					me._map_container.style.visibility="hidden";
					me._map_container.ggVisible=false;
				}
				else {
					me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
					me._map_container.ggVisible=true;
				}
			}
		}
		me._map_container.logicBlock_visible();
		me._map_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('map_hide') == true)) || 
				((player.getVariableValue('show_menu_thumb') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_container.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_container.style.opacity == 0.0) { me._map_container.style.visibility="hidden"; } }, 505);
					me._map_container.style.opacity=0;
				}
				else {
					me._map_container.style.visibility=me._map_container.ggVisible?'inherit':'hidden';
					me._map_container.style.opacity=1;
				}
			}
		}
		me._map_container.logicBlock_alpha();
		me._map_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_01=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'googleroadmap';
		el.ggId="Map_01";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_01.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._map_01);
		el=me._map_scale=document.createElement('div');
		els=me._map_scale__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0ic2NhbGVfbm9ybWFsIiBkYXRhLW5hbWU9InNjYWxlIG5vcm1hbCI+CiAgPHJlY3QgeT0iMi42IiB3aWR0aD0iNTguNyIgZmlsbD0iI2ZmZmZmZiIgeD0iMi42IiBoZWlnaHQ9IjU4LjcxIiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBkPSJNMjQuOSwxNy45YTIuMSwyLjEsMCwwLDAtLjcsMy4zYy42LjguNi43LDgsLjdoNi45TDI4LjYsMzIuNEMyMi43LDM4LjMsMTgsNDMuMSwxOCw0My4zYTIuMSwyLjEsMCwwLD'+
			'AsMS40LDIuOWMxLjIuMy43LjcsMTItMTAuNkw0MS45LDI1LjF2Ni44Yy4xLDYuNy4xLDYuOC40LDcuMmEyLjEsMi4xLDAsMCwwLDMuNiwwYy4yLS40LjItLjUuMy0xMC4xVjE5LjlhMS41LDEuNSwwLDAsMC0uMS0uN3YtLjVjLS43LTEuMS4xLTEtMTAuOS0xQzI3LjMsMTcuNywyNS4zLDE3LjcsMjQuOSwxNy45WiIgZmlsbD0iIzJjMmMyYyIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_scale__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_scale__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0ic2NhbGVfYWN0aXZlIiBkYXRhLW5hbWU9InNjYWxlIGFjdGl2ZSI+CiAgPHJlY3QgeT0iMi42IiB3aWR0aD0iNTguNyIgZmlsbD0iI2ZmZmZmZiIgeD0iMi42IiBoZWlnaHQ9IjU4LjcxIiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBkPSJNMjMsMTMuOWEyLjksMi45LDAsMCwwLTEsNC4zYy45LDEsLjcsMSwxMC4zLDFINDFMMjcuNiwzMi42Yy03LjUsNy41LTEzLjUsMTMuNi0xMy41LDEzLjlhMi43LDIuNywwLD'+
			'AsMCwxLjgsMy43YzEuNS4zLjkuOSwxNS4zLTEzLjZMNDQuNiwyMy4ydjguN2MuMSw4LjUuMSw4LjcuNCw5LjJhMi44LDIuOCwwLDAsMCw0LjYsMGMuNC0uNS40LS42LjQtMTIuOVYxNS43bC0uMi0uNmMtMS0xLjUuMS0xLjQtMTQtMS40QzI2LDEzLjcsMjMuNCwxMy44LDIzLDEzLjlaIiBmaWxsPSIjMmMyYzJjIiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_scale__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Map_scale";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_scale.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_scale.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('map_scale_full') == true)) || 
				((player.getVariableValue('map_scale_normal') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._map_scale.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._map_scale.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._map_scale.style.transition='transform 0s';
				if (me._map_scale.ggCurrentLogicStateAngle == 0) {
					me._map_scale.ggParameter.a = 180;
					me._map_scale.style.transform=parameterToTransform(me._map_scale.ggParameter);
				}
				else {
					me._map_scale.ggParameter.a = 0;
					me._map_scale.style.transform=parameterToTransform(me._map_scale.ggParameter);
				}
			}
		}
		me._map_scale.logicBlock_angle();
		me._map_scale.onclick=function (e) {
			if (
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().width <= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height < 1))
				)
			||
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().height <= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height > 1))
				)
			) {
				player.setVariableValue('map_scale_full', !player.getVariableValue('map_scale_full'));
			}
			if (
				(
					((player.getIsMobile() == false))
				)
			||
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().width >= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height < 1))
				)
			||
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().height >= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height > 1))
				)
			) {
				player.setVariableValue('map_scale_normal', !player.getVariableValue('map_scale_normal'));
			}
		}
		me._map_scale.onmouseover=function (e) {
			me._map_scale__img.style.visibility='hidden';
			me._map_scale__imgo.style.visibility='inherit';
			me.elementMouseOver['map_scale']=true;
		}
		me._map_scale.onmouseout=function (e) {
			me._map_scale__img.style.visibility='inherit';
			me._map_scale__imgo.style.visibility='hidden';
			me.elementMouseOver['map_scale']=false;
		}
		me._map_scale.ggCurrentLogicStateAngle = -1;
		me._map_scale.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_scale']) {
				me._map_scale__img.style.visibility='hidden';
				me._map_scale__imgo.style.visibility='inherit';
				me.elementMouseOver['map_scale']=true;
			}
		}
		me._map_scale.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._map_scale);
		el=me._map_hide_ico=document.createElement('div');
		els=me._map_hide_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlkZV9ub3JtYWwiIGRhdGEtbmFtZT0iaGlkZSBub3JtYWwiPgogIDxyZWN0IHdpZHRoPSI2NCIgZmlsbD0iI2ZmZmZmZiIgaGVpZ2h0PSI2NCIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPHBhdGggZD0iTTQyLjMsNTBsMi40LTIuMy03LjktNy44TDI5LDMybDcuOC03LjdjNC4yLTQuMyw3LjctNy44LDcuNy03LjlhMjIuNywyMi43LDAsMCwwLTIuMy0yLjVsLTIuMy0yLjNMMjkuNiwyMS45LDE5LjMsMzIuMSwyOS41LD'+
			'QyLjMsMzkuOCw1Mi40QTE4LjksMTguOSwwLDAsMCw0Mi4zLDUwWiIgZmlsbD0iIzJjMmMyYyIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_hide_ico__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_hide_ico__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlkZV9hY3RpdmUiIGRhdGEtbmFtZT0iaGlkZSBhY3RpdmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgZmlsbD0iI2ZmZmZmZiIgaGVpZ2h0PSI2NCIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPHBhdGggZD0iTTQ0LDUzLjFsMi44LTIuOC05LjItOS4xTDI4LjUsMzJsOS05LDkuMS05LjJhMzEsMzEsMCwwLDAtMi43LTIuOUw0MS4yLDguMmwtMTIsMTItMTIsMTEuOUwyOS4xLDQ0YzYuNSw2LjUsMTEuOSwxMS44LDEyLDExLj'+
			'hBMzEsMzEsMCwwLDAsNDQsNTMuMVoiIGZpbGw9IiMyYzJjMmMiIGZpbGwtb3BhY2l0eT0iMSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_hide_ico__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Map_hide_ico";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_hide_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_hide_ico.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('map_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_hide_ico.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_hide_ico.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_hide_ico.style.transition='';
				if (me._map_hide_ico.ggCurrentLogicStateVisible == 0) {
					me._map_hide_ico.style.visibility="hidden";
					me._map_hide_ico.ggVisible=false;
				}
				else {
					me._map_hide_ico.style.visibility=(Number(me._map_hide_ico.style.opacity)>0||!me._map_hide_ico.style.opacity)?'inherit':'hidden';
					me._map_hide_ico.ggVisible=true;
				}
			}
		}
		me._map_hide_ico.logicBlock_visible();
		me._map_hide_ico.onclick=function (e) {
			player.setVariableValue('map_hide', true);
			player.setVariableValue('map_scale_normal', false);
			player.setVariableValue('map_scale_full', false);
		}
		me._map_hide_ico.onmouseover=function (e) {
			me._map_hide_ico__img.style.visibility='hidden';
			me._map_hide_ico__imgo.style.visibility='inherit';
			me.elementMouseOver['map_hide_ico']=true;
		}
		me._map_hide_ico.onmouseout=function (e) {
			me._map_hide_ico__img.style.visibility='inherit';
			me._map_hide_ico__imgo.style.visibility='hidden';
			me.elementMouseOver['map_hide_ico']=false;
		}
		me._map_hide_ico.ggCurrentLogicStateVisible = -1;
		me._map_hide_ico.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_hide_ico']) {
				me._map_hide_ico__img.style.visibility='hidden';
				me._map_hide_ico__imgo.style.visibility='inherit';
				me.elementMouseOver['map_hide_ico']=true;
			}
		}
		me._map_hide_ico.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._map_hide_ico);
		me.divSkin.appendChild(me._map_container);
		el=me._container_logo=document.createElement('div');
		el.ggId="Container_logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='left : 95px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._container_logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_logo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == false)) && 
				((player.getVariableValue('show_menu_thumb') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_logo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_logo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_logo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 0s, opacity 1000ms ease 0ms';
				if (me._container_logo.ggCurrentLogicStatePosition == 0) {
					me._container_logo.style.left='5px';
					me._container_logo.style.top='10px';
				}
				else if (me._container_logo.ggCurrentLogicStatePosition == 1) {
					me._container_logo.style.left='40px';
					me._container_logo.style.top='5px';
				}
				else {
					me._container_logo.style.left='95px';
					me._container_logo.style.top='5px';
				}
			}
		}
		me._container_logo.logicBlock_position();
		me._container_logo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_logo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 0s, opacity 1000ms ease 0ms';
				if (me._container_logo.ggCurrentLogicStateScaling == 0) {
					me._container_logo.ggParameter.sx = 0.55;
					me._container_logo.ggParameter.sy = 0.55;
					me._container_logo.style.transform=parameterToTransform(me._container_logo.ggParameter);
					skin.updateSize(me._container_logo);
				}
				else {
					me._container_logo.ggParameter.sx = 1;
					me._container_logo.ggParameter.sy = 1;
					me._container_logo.style.transform=parameterToTransform(me._container_logo.ggParameter);
					skin.updateSize(me._container_logo);
				}
			}
		}
		me._container_logo.logicBlock_scaling();
		me._container_logo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('show_menu_thumb') == true)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._container_logo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._container_logo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._container_logo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 0s, opacity 1000ms ease 0ms';
				if (me._container_logo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._container_logo.style.opacity == 0.0) { me._container_logo.style.visibility="hidden"; } }, 1005);
					me._container_logo.style.opacity=0;
				}
				else {
					me._container_logo.style.visibility=me._container_logo.ggVisible?'inherit':'hidden';
					me._container_logo.style.opacity=1;
				}
			}
		}
		me._container_logo.logicBlock_alpha();
		me._container_logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo=document.createElement('div');
		els=me._logo__img=document.createElement('img');
		els.className='ggskin ggskin_logo';
		hs=basePath + 'images/logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		me._container_logo.appendChild(me._logo);
		me.divSkin.appendChild(me._container_logo);
		el=me._info_con=document.createElement('div');
		el.ggId="info_con";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 65px;';
		hs+='height : 400px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_con.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_con.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_con.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_con.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_con.style.transition='right 200ms ease 0ms, bottom 200ms ease 0ms, width 200ms ease 0ms, height 200ms ease 0ms, opacity 700ms ease 0ms';
				if (me._info_con.ggCurrentLogicStatePosition == 0) {
					me._info_con.style.right='0px';
					me._info_con.style.bottom='0px';
				}
				else if (me._info_con.ggCurrentLogicStatePosition == 1) {
					me._info_con.style.right='50%';
					me._info_con.style.bottom='0px';
				}
				else {
					me._info_con.style.right='5px';
					me._info_con.style.bottom='65px';
				}
			}
		}
		me._info_con.logicBlock_position();
		me._info_con.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info_con.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info_con.ggCurrentLogicStateSize = newLogicStateSize;
				me._info_con.style.transition='right 200ms ease 0ms, bottom 200ms ease 0ms, width 200ms ease 0ms, height 200ms ease 0ms, opacity 700ms ease 0ms';
				if (me._info_con.ggCurrentLogicStateSize == 0) {
					me._info_con.style.width='100%';
					me._info_con.style.height='60%';
					setTimeout(function() {skin.updateSize(me._info_con);}, 250);
				}
				else if (me._info_con.ggCurrentLogicStateSize == 1) {
					me._info_con.style.width='50%';
					me._info_con.style.height='100%';
					setTimeout(function() {skin.updateSize(me._info_con);}, 250);
				}
				else {
					me._info_con.style.width='400px';
					me._info_con.style.height='400px';
					setTimeout(function() {skin.updateSize(me._info_con);}, 250);
				}
			}
		}
		me._info_con.logicBlock_size();
		me._info_con.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('information') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_con.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_con.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_con.style.transition='right 200ms ease 0ms, bottom 200ms ease 0ms, width 200ms ease 0ms, height 200ms ease 0ms, opacity 700ms ease 0ms';
				if (me._info_con.ggCurrentLogicStateAlpha == 0) {
					me._info_con.style.visibility=me._info_con.ggVisible?'inherit':'hidden';
					me._info_con.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info_con.style.opacity == 0.0) { me._info_con.style.visibility="hidden"; } }, 705);
					me._info_con.style.opacity=0;
				}
			}
		}
		me._info_con.logicBlock_alpha();
		me._info_con.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_rec=document.createElement('div');
		el.ggId="info_rec";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #0093e9;';
		hs+='border : 0px solid #4f4f4f;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 100%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: #0093E9; background-image: linear-gradient(315deg, #0093E9 0%, #80D0C7 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_rec.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_rec.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('information') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_rec.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_rec.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_rec.style.transition='left 700ms ease 0ms, top 700ms ease 0ms';
				if (me._info_rec.ggCurrentLogicStatePosition == 0) {
					me._info_rec.style.left = 'calc(50% - (100% / 2))';
					me._info_rec.style.top='0%';
				}
				else {
					me._info_rec.style.left='calc(50% - ((100% + 0px) / 2) + 0%)';
					me._info_rec.style.top='100%';
				}
			}
		}
		me._info_rec.logicBlock_position();
		me._info_rec.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_tt=document.createElement('div');
		els=me._info_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #4f4f4f;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 35px);';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 10px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px 5px 5px 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-align: justify; white-space: pre-wrap;";
		els.setAttribute('style',hs);
		me._info_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.information)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._info_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_tt.ggUpdatePosition=function (useTransition) {
		}
		me._info_rec.appendChild(me._info_tt);
		el=me._info_chevron_down=document.createElement('div');
		els=me._info_chevron_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._info_chevron_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_chevron_down";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_chevron_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_chevron_down.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('information') == false))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._info_chevron_down.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._info_chevron_down.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._info_chevron_down.style.transition='transform 700ms ease 0ms';
				if (me._info_chevron_down.ggCurrentLogicStateAngle == 0) {
					me._info_chevron_down.ggParameter.a = 180;
					me._info_chevron_down.style.transform=parameterToTransform(me._info_chevron_down.ggParameter);
				}
				else {
					me._info_chevron_down.ggParameter.a = 0;
					me._info_chevron_down.style.transform=parameterToTransform(me._info_chevron_down.ggParameter);
				}
			}
		}
		me._info_chevron_down.logicBlock_angle();
		me._info_chevron_down.onclick=function (e) {
			player.setVariableValue('information', false);
		}
		me._info_chevron_down.ggUpdatePosition=function (useTransition) {
		}
		me._info_rec.appendChild(me._info_chevron_down);
		el=me._language_pad_info=document.createElement('div');
		el.ggId="Language_pad_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._language_pad_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_pad_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._vi_lang_info=document.createElement('div');
		els=me._vi_lang_info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._vi_lang_info__img.setAttribute('src',basePath + 'images/vi_lang_info.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vi_lang_info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vi_lang_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vi_lang_info.ggUpdatePosition=function (useTransition) {
		}
		me._language_pad_info.appendChild(me._vi_lang_info);
		el=me._en_lang_info=document.createElement('div');
		els=me._en_lang_info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._en_lang_info__img.setAttribute('src',basePath + 'images/en_lang_info.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="en_lang_info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._en_lang_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._en_lang_info.ggUpdatePosition=function (useTransition) {
		}
		me._language_pad_info.appendChild(me._en_lang_info);
		me._info_rec.appendChild(me._language_pad_info);
		me._info_con.appendChild(me._info_rec);
		me.divSkin.appendChild(me._info_con);
		el=me._screenshot=document.createElement('div');
		els=me._screenshot__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZWxsaXBzZSBmaWxsPSIjZmZmZmZmIiByeT0iMTAuODUiIHJ4PSIxMS4xIiBzdHJva2U9IiNmZmYiIGN4PSIzNS44IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN5PSIzNC42NCIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBmaWxsLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik01Mi41NSwxNS4yOEg1MS4yN2EyLjgzLDIuODMsMCwwLDAsMC0uMjloMGE1LDUsMCwwLDAtNS01SDI0LjExYTUsNSwwLDAsMC01LDVoMGEyLjgzLDIuODMsMC'+
			'wwLDAsMCwuMjlIMTEuNDVhNi4wNyw2LjA3LDAsMCwwLTYsNi4wNnYyNi42YTYuMDcsNi4wNywwLDAsMCw2LDYuMDZoNDEuMWE2LjA3LDYuMDcsMCwwLDAsNi02LjA2VjIxLjM0QTYuMDcsNi4wNywwLDAsMCw1Mi41NSwxNS4yOFptLTM5LDEyYTQsNCwwLDEsMSw0LjA5LTRBNCw0LDAsMCwxLDEzLjU5LDI3LjMxWk0zNS44LDQ5QTE0LjcxLDE0LjcxLDAsMCwxLDIwLjksMzQuNDksMTQuNzEsMTQuNzEsMCwwLDEsMzUuOCwyMCwxNC43MSwxNC43MSwwLDAsMSw1MC43LDM0LjQ5LDE0LjcxLDE0LjcxLDAsMCwxLDM1LjgsNDlaIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1taXRl'+
			'cmxpbWl0PSIxMCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMjUiLz4KIDxlbGxpcHNlIGZpbGw9IiNmZmZmZmYiIHJ5PSIyLjY0IiByeD0iMi42MyIgc3Ryb2tlPSIjZmZmIiBjeD0iMTMuNTkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3k9IjIzLjQ5IiBzdHJva2Utd2lkdGg9IjAuMjUiIGZpbGwtb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._screenshot__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="screenshot";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.1,sy:1.1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 75px;';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._screenshot.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screenshot.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._screenshot.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._screenshot.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._screenshot.style.transition='left 0s, bottom 0s, transform 300ms ease 0ms, opacity 300ms ease 0ms';
				if (me._screenshot.ggCurrentLogicStatePosition == 0) {
					me._screenshot.style.left = 'calc(50% - (64px / 2))';
					me._screenshot.style.bottom='70px';
				}
				else {
					me._screenshot.style.left='calc(50% - ((64px + 0px) / 2) + 0px)';
					me._screenshot.style.bottom='75px';
				}
			}
		}
		me._screenshot.logicBlock_position();
		me._screenshot.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['screenshot'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._screenshot.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._screenshot.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._screenshot.style.transition='left 0s, bottom 0s, transform 300ms ease 0ms, opacity 300ms ease 0ms';
				if (me._screenshot.ggCurrentLogicStateScaling == 0) {
					me._screenshot.ggParameter.sx = 1;
					me._screenshot.ggParameter.sy = 1;
					me._screenshot.style.transform=parameterToTransform(me._screenshot.ggParameter);
					setTimeout(function() {skin.updateSize(me._screenshot);}, 350);
				}
				else {
					me._screenshot.ggParameter.sx = 1.1;
					me._screenshot.ggParameter.sy = 1.1;
					me._screenshot.style.transform=parameterToTransform(me._screenshot.ggParameter);
					setTimeout(function() {skin.updateSize(me._screenshot);}, 350);
				}
			}
		}
		me._screenshot.logicBlock_scaling();
		me._screenshot.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mode_snapshot') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screenshot.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screenshot.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screenshot.style.transition='left 0s, bottom 0s, transform 300ms ease 0ms, opacity 300ms ease 0ms';
				if (me._screenshot.ggCurrentLogicStateVisible == 0) {
					me._screenshot.style.visibility=(Number(me._screenshot.style.opacity)>0||!me._screenshot.style.opacity)?'inherit':'hidden';
					me._screenshot.ggVisible=true;
				}
				else {
					me._screenshot.style.visibility="hidden";
					me._screenshot.ggVisible=false;
				}
			}
		}
		me._screenshot.logicBlock_visible();
		me._screenshot.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['screenshot'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screenshot.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screenshot.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screenshot.style.transition='left 0s, bottom 0s, transform 300ms ease 0ms, opacity 300ms ease 0ms';
				if (me._screenshot.ggCurrentLogicStateAlpha == 0) {
					me._screenshot.style.visibility=me._screenshot.ggVisible?'inherit':'hidden';
					me._screenshot.style.opacity=1;
				}
				else {
					me._screenshot.style.visibility=me._screenshot.ggVisible?'inherit':'hidden';
					me._screenshot.style.opacity=0.7;
				}
			}
		}
		me._screenshot.logicBlock_alpha();
		me._screenshot.onclick=function (e) {
			document.getElementById("snapshot").click();
			player.setVariableValue('mode_snapshot', false);
		}
		me._screenshot.onmouseover=function (e) {
			me.elementMouseOver['screenshot']=true;
			me._screenshot.logicBlock_scaling();
			me._screenshot.logicBlock_alpha();
		}
		me._screenshot.onmouseout=function (e) {
			me.elementMouseOver['screenshot']=false;
			me._screenshot.logicBlock_scaling();
			me._screenshot.logicBlock_alpha();
		}
		me._screenshot.ggCurrentLogicStatePosition = -1;
		me._screenshot.ggCurrentLogicStateScaling = -1;
		me._screenshot.ggCurrentLogicStateVisible = -1;
		me._screenshot.ggCurrentLogicStateAlpha = -1;
		me._screenshot.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['screenshot']) {
				me.elementMouseOver['screenshot']=true;
			}
		}
		me._screenshot.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screenshot);
		el=me._code_screen_shot=document.createElement('div');
		els=me._code_screen_shot__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="code_screen_shot";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 58px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 2px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._code_screen_shot.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("<a href=\"#\" onclick=\"javascript:this.download = \'%1.jpg\';var dl=pano.getWebGlContext().canvas.toDataURL(\'image\/jpeg\');dl=dl.replace(\'image\/jpeg\', \'image\/octet-stream\');this.href = dl;\" download id=\"snapshot\"><\/a>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._code_screen_shot.ggUpdateText();
		player.addListener('changenode', function() {
			me._code_screen_shot.ggUpdateText();
		});
		el.appendChild(els);
		me._code_screen_shot.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._code_screen_shot.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._code_screen_shot);
		el=me._popup_help_bg=document.createElement('div');
		el.ggId="popup_help_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.607843);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_help_bg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_help_bg.onclick=function (e) {
			me._popup_help_bg.style.transition='none';
			me._popup_help_bg.style.visibility='hidden';
			me._popup_help_bg.ggVisible=false;
		}
		me._popup_help_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup_help_icon_mobile=document.createElement('div');
		els=me._popup_help_icon_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._popup_help_icon_mobile__img.setAttribute('src',basePath + 'images/popup_help_icon_mobile.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_help_icon_mobile";
		el.ggDx=0;
		el.ggDy=-45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 240px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((240px + 0px) / 2) - 45px);';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_help_icon_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_help_icon_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_help_icon_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_help_icon_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_help_icon_mobile.style.transition='';
				if (me._popup_help_icon_mobile.ggCurrentLogicStateVisible == 0) {
					me._popup_help_icon_mobile.style.visibility="hidden";
					me._popup_help_icon_mobile.ggVisible=false;
				}
				else {
					me._popup_help_icon_mobile.style.visibility=(Number(me._popup_help_icon_mobile.style.opacity)>0||!me._popup_help_icon_mobile.style.opacity)?'inherit':'hidden';
					me._popup_help_icon_mobile.ggVisible=true;
				}
			}
		}
		me._popup_help_icon_mobile.logicBlock_visible();
		me._popup_help_icon_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._popup_help_bg.appendChild(me._popup_help_icon_mobile);
		el=me._popup_help_icon_desktop=document.createElement('div');
		els=me._popup_help_icon_desktop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._popup_help_icon_desktop__img.setAttribute('src',basePath + 'images/popup_help_icon_desktop.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_help_icon_desktop";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 240px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((240px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_help_icon_desktop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_help_icon_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_help_icon_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_help_icon_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_help_icon_desktop.style.transition='';
				if (me._popup_help_icon_desktop.ggCurrentLogicStateVisible == 0) {
					me._popup_help_icon_desktop.style.visibility=(Number(me._popup_help_icon_desktop.style.opacity)>0||!me._popup_help_icon_desktop.style.opacity)?'inherit':'hidden';
					me._popup_help_icon_desktop.ggVisible=true;
				}
				else {
					me._popup_help_icon_desktop.style.visibility="hidden";
					me._popup_help_icon_desktop.ggVisible=false;
				}
			}
		}
		me._popup_help_icon_desktop.logicBlock_visible();
		me._popup_help_icon_desktop.ggUpdatePosition=function (useTransition) {
		}
		me._popup_help_bg.appendChild(me._popup_help_icon_desktop);
		me.divSkin.appendChild(me._popup_help_bg);
		el=me._rec_vr_setting=document.createElement('div');
		el.ggId="Rec_VR_setting";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f2f3f5;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -61.05%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rec_vr_setting.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rec_vr_setting.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('VR_setting') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rec_vr_setting.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rec_vr_setting.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rec_vr_setting.style.transition='right 300ms ease 0ms, top 300ms ease 0ms, width 0s, height 0s, opacity 0s';
				if (me._rec_vr_setting.ggCurrentLogicStatePosition == 0) {
					me._rec_vr_setting.style.right='0%';
					me._rec_vr_setting.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._rec_vr_setting.style.right='-61.05%';
					me._rec_vr_setting.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._rec_vr_setting.logicBlock_position();
		me._rec_vr_setting.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rec_vr_setting.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rec_vr_setting.ggCurrentLogicStateSize = newLogicStateSize;
				me._rec_vr_setting.style.transition='right 300ms ease 0ms, top 300ms ease 0ms, width 0s, height 0s, opacity 0s';
				if (me._rec_vr_setting.ggCurrentLogicStateSize == 0) {
					me._rec_vr_setting.style.width='100%';
					me._rec_vr_setting.style.height='100%';
					me._rec_vr_setting.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me._rec_vr_setting);
				}
				else {
					me._rec_vr_setting.style.width='500px';
					me._rec_vr_setting.style.height='100%';
					me._rec_vr_setting.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me._rec_vr_setting);
				}
			}
		}
		me._rec_vr_setting.logicBlock_size();
		me._rec_vr_setting.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('VR_setting') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rec_vr_setting.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rec_vr_setting.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rec_vr_setting.style.transition='right 300ms ease 0ms, top 300ms ease 0ms, width 0s, height 0s, opacity 0s';
				if (me._rec_vr_setting.ggCurrentLogicStateAlpha == 0) {
					me._rec_vr_setting.style.visibility=me._rec_vr_setting.ggVisible?'inherit':'hidden';
					me._rec_vr_setting.style.opacity=1;
				}
				else {
					me._rec_vr_setting.style.visibility="hidden";
					me._rec_vr_setting.style.opacity=0;
				}
			}
		}
		me._rec_vr_setting.logicBlock_alpha();
		me._rec_vr_setting.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_vr_title=document.createElement('div');
		els=me._text_vr_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_VR_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 111px;';
		hs+='left : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_vr_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("XEM TOUR V\u1edaI CH\u1ebe \u0110\u1ed8 TH\u1ef0C T\u1ebe \u1ea2O (VIRTUAL REALITY)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_vr_title.ggUpdateText();
		el.appendChild(els);
		me._text_vr_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_vr_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_vr_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_vr_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_vr_title.style.transition='width 0s, height 0s';
				if (me._text_vr_title.ggCurrentLogicStateSize == 0) {
					me._text_vr_title.style.width='calc(100% - 10px)';
					me._text_vr_title.style.height='111px';
					me._text_vr_title.style.left = 'calc(50% - (calc(100% - 10px) / 2))';
					skin.updateSize(me._text_vr_title);
				}
				else {
					me._text_vr_title.style.width='calc(100% - 20px)';
					me._text_vr_title.style.height='111px';
					me._text_vr_title.style.left = 'calc(50% - (calc(100% - 20px) / 2))';
					skin.updateSize(me._text_vr_title);
				}
			}
		}
		me._text_vr_title.logicBlock_size();
		me._text_vr_title.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getLanguage() == "en-US"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_vr_title.ggCurrentLogicStateText != newLogicStateText) {
				me._text_vr_title.ggCurrentLogicStateText = newLogicStateText;
				me._text_vr_title.style.transition='width 0s, height 0s';
				if (me._text_vr_title.ggCurrentLogicStateText == 0) {
					if (me._text_vr_title.ggUpdateText) {
					me._text_vr_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("VIRTUAL REALITY", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_vr_title.ggUpdateText();
					} else {
						if (me._text_vr_title.ggUpdatePosition) me._text_vr_title.ggUpdatePosition();
					}
				}
				else {
					if (me._text_vr_title.ggUpdateText) {
					me._text_vr_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("XEM TOUR V\u1edaI CH\u1ebe \u0110\u1ed8 TH\u1ef0C T\u1ebe \u1ea2O (VIRTUAL REALITY)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_vr_title.ggUpdateText();
					} else {
						if (me._text_vr_title.ggUpdatePosition) me._text_vr_title.ggUpdatePosition();
					}
				}
			}
		}
		me._text_vr_title.logicBlock_text();
		me._text_vr_title.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_vr_desciption=document.createElement('div');
		els=me._text_vr_desciption__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_VR_desciption";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-align: justify;";
		els.setAttribute('style',hs);
		me._text_vr_desciption.ggUpdateText=function() {
			var params = [];
			var hs = player._("Xem tour \u1edf ch\u1ebf \u0111\u1ed9 th\u1ef1c t\u1ebf \u1ea3o cho ph\xe9p ng\u01b0\u1eddi xem c\xf3 c\u1ea3m gi\xe1c nh\u01b0 \u0111ang \u1edf t\u1ea1i kh\xf4ng gian trong \u1ea3nh 360. \u0110\u1ec3 xem \u1edf ch\u1ebf \u0111\u1ed9 th\u1ef1c t\u1ebf \u1ea3o, b\u1ea1n c\u1ea7n ph\u1ea3i c\xf3 k\xednh xem th\u1ef1c t\u1ebf \u1ea3o ( v\xed d\u1ee5 nh\u01b0 k\xednh <a href=\"https:\/\/www.oculus.com\/\" target=\"_blank\">Oculus Rift<\/a> \u0111\u1ec3 xem tr\xean desktop ho\u1eb7c <a href=\"https:\/\/arvr.google.com\/cardboard\/\" target=\"_blank\">Google Cardboard<\/a> \u0111\u1ec3 xem tr\xean mobile(iOS, Android)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_vr_desciption.ggUpdateText();
		el.appendChild(els);
		me._text_vr_desciption.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_vr_desciption.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_vr_desciption.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_vr_desciption.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_vr_desciption.style.transition='width 0s, height 0s';
				if (me._text_vr_desciption.ggCurrentLogicStateSize == 0) {
					me._text_vr_desciption.style.width='calc(100% - 10px)';
					me._text_vr_desciption.style.height='200px';
					me._text_vr_desciption.style.left = 'calc(50% - (calc(100% - 10px) / 2))';
					skin.updateSize(me._text_vr_desciption);
				}
				else {
					me._text_vr_desciption.style.width='calc(100% - 20px)';
					me._text_vr_desciption.style.height='200px';
					me._text_vr_desciption.style.left = 'calc(50% - (calc(100% - 20px) / 2))';
					skin.updateSize(me._text_vr_desciption);
				}
			}
		}
		me._text_vr_desciption.logicBlock_size();
		me._text_vr_desciption.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getLanguage() == "en-US"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_vr_desciption.ggCurrentLogicStateText != newLogicStateText) {
				me._text_vr_desciption.ggCurrentLogicStateText = newLogicStateText;
				me._text_vr_desciption.style.transition='width 0s, height 0s';
				if (me._text_vr_desciption.ggCurrentLogicStateText == 0) {
					if (me._text_vr_desciption.ggUpdateText) {
					me._text_vr_desciption.ggUpdateText=function() {
						var params = [];
						var hs = player._("Viewing the tour in virtual reality allows viewers to feel as if they are in space in a 360 photo. To view in virtual reality, you need a virtual reality viewing headset (eg glasses) <a href=\"https:\/\/www.oculus.com\/\" target=\"_blank\">Oculus Rift<\/a> for desktop viewing or <a href=\"https:\/\/arvr.google.com\/cardboard\/\" target=\"_blank\">Google Cardboard<\/a> for viewing on mobile devices (iOS, Android)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_vr_desciption.ggUpdateText();
					} else {
						if (me._text_vr_desciption.ggUpdatePosition) me._text_vr_desciption.ggUpdatePosition();
					}
				}
				else {
					if (me._text_vr_desciption.ggUpdateText) {
					me._text_vr_desciption.ggUpdateText=function() {
						var params = [];
						var hs = player._("Xem tour \u1edf ch\u1ebf \u0111\u1ed9 th\u1ef1c t\u1ebf \u1ea3o cho ph\xe9p ng\u01b0\u1eddi xem c\xf3 c\u1ea3m gi\xe1c nh\u01b0 \u0111ang \u1edf t\u1ea1i kh\xf4ng gian trong \u1ea3nh 360. \u0110\u1ec3 xem \u1edf ch\u1ebf \u0111\u1ed9 th\u1ef1c t\u1ebf \u1ea3o, b\u1ea1n c\u1ea7n ph\u1ea3i c\xf3 k\xednh xem th\u1ef1c t\u1ebf \u1ea3o ( v\xed d\u1ee5 nh\u01b0 k\xednh <a href=\"https:\/\/www.oculus.com\/\" target=\"_blank\">Oculus Rift<\/a> \u0111\u1ec3 xem tr\xean desktop ho\u1eb7c <a href=\"https:\/\/arvr.google.com\/cardboard\/\" target=\"_blank\">Google Cardboard<\/a> \u0111\u1ec3 xem tr\xean mobile(iOS, Android)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_vr_desciption.ggUpdateText();
					} else {
						if (me._text_vr_desciption.ggUpdatePosition) me._text_vr_desciption.ggUpdatePosition();
					}
				}
			}
		}
		me._text_vr_desciption.logicBlock_text();
		me._text_vr_desciption.ggUpdatePosition=function (useTransition) {
		}
		me._text_vr_title.appendChild(me._text_vr_desciption);
		me._rec_vr_setting.appendChild(me._text_vr_title);
		el=me._img_vr=document.createElement('div');
		els=me._img_vr__img=document.createElement('img');
		els.className='ggskin ggskin_img_vr';
		hs=basePath + 'images/img_vr.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Img_VR";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 95px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._img_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._img_vr.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_vr.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_vr.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_vr.style.transition='transform 0s';
				if (me._img_vr.ggCurrentLogicStateScaling == 0) {
					me._img_vr.ggParameter.sx = 0.85;
					me._img_vr.ggParameter.sy = 0.85;
					me._img_vr.style.transform=parameterToTransform(me._img_vr.ggParameter);
					skin.updateSize(me._img_vr);
				}
				else {
					me._img_vr.ggParameter.sx = 1;
					me._img_vr.ggParameter.sy = 1;
					me._img_vr.style.transform=parameterToTransform(me._img_vr.ggParameter);
					skin.updateSize(me._img_vr);
				}
			}
		}
		me._img_vr.logicBlock_scaling();
		me._img_vr.ggUpdatePosition=function (useTransition) {
		}
		me._rec_vr_setting.appendChild(me._img_vr);
		el=me._c_vr_2=document.createElement('div');
		el.ggId="C_VR 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._c_vr_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c_vr_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_back=document.createElement('div');
		els=me._text_back__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_back";
		el.ggDx=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0066b3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((125px + 0px) / 2) + 80px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+="line-height:50px;";
		els.setAttribute('style',hs);
		me._text_back.ggUpdateText=function() {
			var params = [];
			var hs = player._("TR\u1ede V\u1ec0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_back.ggUpdateText();
		el.appendChild(els);
		me._text_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_back.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getLanguage() == "en-US"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_back.ggCurrentLogicStateText != newLogicStateText) {
				me._text_back.ggCurrentLogicStateText = newLogicStateText;
				me._text_back.style.transition='';
				if (me._text_back.ggCurrentLogicStateText == 0) {
					if (me._text_back.ggUpdateText) {
					me._text_back.ggUpdateText=function() {
						var params = [];
						var hs = player._("BACK", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_back.ggUpdateText();
					} else {
						if (me._text_back.ggUpdatePosition) me._text_back.ggUpdatePosition();
					}
				}
				else {
					if (me._text_back.ggUpdateText) {
					me._text_back.ggUpdateText=function() {
						var params = [];
						var hs = player._("TR\u1ede V\u1ec0", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_back.ggUpdateText();
					} else {
						if (me._text_back.ggUpdatePosition) me._text_back.ggUpdatePosition();
					}
				}
			}
		}
		me._text_back.logicBlock_text();
		me._text_back.onclick=function (e) {
			player.setVariableValue('VR_setting', false);
		}
		me._text_back.ggUpdatePosition=function (useTransition) {
		}
		me._c_vr_2.appendChild(me._text_back);
		el=me._text_vr=document.createElement('div');
		els=me._text_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_VR";
		el.ggDx=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0066b3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((125px + 0px) / 2) - 80px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+="line-height:50px;";
		els.setAttribute('style',hs);
		me._text_vr.ggUpdateText=function() {
			var params = [];
			var hs = player._("XEM VR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_vr.ggUpdateText();
		el.appendChild(els);
		me._text_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_vr.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.hasVR() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_vr.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_vr.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_vr.style.transition='opacity 0s';
				if (me._text_vr.ggCurrentLogicStateAlpha == 0) {
					me._text_vr.style.visibility=me._text_vr.ggVisible?'inherit':'hidden';
					me._text_vr.style.opacity=0.5;
				}
				else {
					me._text_vr.style.visibility=me._text_vr.ggVisible?'inherit':'hidden';
					me._text_vr.style.opacity=1;
				}
			}
		}
		me._text_vr.logicBlock_alpha();
		me._text_vr.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getLanguage() == "en-US"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_vr.ggCurrentLogicStateText != newLogicStateText) {
				me._text_vr.ggCurrentLogicStateText = newLogicStateText;
				me._text_vr.style.transition='opacity 0s';
				if (me._text_vr.ggCurrentLogicStateText == 0) {
					if (me._text_vr.ggUpdateText) {
					me._text_vr.ggUpdateText=function() {
						var params = [];
						var hs = player._("VIEW VR", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_vr.ggUpdateText();
					} else {
						if (me._text_vr.ggUpdatePosition) me._text_vr.ggUpdatePosition();
					}
				}
				else {
					if (me._text_vr.ggUpdateText) {
					me._text_vr.ggUpdateText=function() {
						var params = [];
						var hs = player._("XEM VR", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_vr.ggUpdateText();
					} else {
						if (me._text_vr.ggUpdatePosition) me._text_vr.ggUpdatePosition();
					}
				}
			}
		}
		me._text_vr.logicBlock_text();
		me._text_vr.onclick=function (e) {
			player.enterVR();
		}
		me._text_vr.ggUpdatePosition=function (useTransition) {
		}
		me._c_vr_2.appendChild(me._text_vr);
		me._rec_vr_setting.appendChild(me._c_vr_2);
		me.divSkin.appendChild(me._rec_vr_setting);
		el=me._screentint_selection_language=document.createElement('div');
		el.ggId="screentint_selection_language";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.156863);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_selection_language.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_selection_language.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('start_intro') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._screentint_selection_language.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._screentint_selection_language.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._screentint_selection_language.style.transition='transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._screentint_selection_language.ggCurrentLogicStateScaling == 0) {
					me._screentint_selection_language.ggParameter.sx = 1.5;
					me._screentint_selection_language.ggParameter.sy = 1.5;
					me._screentint_selection_language.style.transform=parameterToTransform(me._screentint_selection_language.ggParameter);
					setTimeout(function() {skin.updateSize(me._screentint_selection_language);}, 1050);
				}
				else {
					me._screentint_selection_language.ggParameter.sx = 1;
					me._screentint_selection_language.ggParameter.sy = 1;
					me._screentint_selection_language.style.transform=parameterToTransform(me._screentint_selection_language.ggParameter);
					setTimeout(function() {skin.updateSize(me._screentint_selection_language);}, 1050);
				}
			}
		}
		me._screentint_selection_language.logicBlock_scaling();
		me._screentint_selection_language.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('start_intro') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_selection_language.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_selection_language.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_selection_language.style.transition='transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._screentint_selection_language.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._screentint_selection_language.style.opacity == 0.0) { me._screentint_selection_language.style.visibility="hidden"; } }, 1005);
					me._screentint_selection_language.style.opacity=0;
				}
				else {
					me._screentint_selection_language.style.visibility=me._screentint_selection_language.ggVisible?'inherit':'hidden';
					me._screentint_selection_language.style.opacity=1;
				}
			}
		}
		me._screentint_selection_language.logicBlock_alpha();
		me._screentint_selection_language.ggUpdatePosition=function (useTransition) {
		}
		el=me._intro_image=document.createElement('div');
		els=me._intro_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._intro_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._intro_image.ggSubElement.setAttribute('alt', player._(me._intro_image.ggAltText));
			me._intro_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._intro_image.ggText_untranslated = img;
			me._intro_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._intro_image.ggSubElement.style.width = '0px';
			me._intro_image.ggSubElement.style.height = '0px';
			me._intro_image.ggSubElement.src='';
			me._intro_image.ggSubElement.src=me._intro_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._intro_image.ggText != player._(me._intro_image.ggText_untranslated)) {
				me._intro_image.ggText = player._(me._intro_image.ggText_untranslated);
				me._intro_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "assets/icon/intro.jpg";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="intro_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._intro_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._intro_image.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height <= 1)) && 
				((player.getViewerSize().width <= 500))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height <= 1)) && 
				((player.getViewerSize().width >= 500))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._intro_image.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._intro_image.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._intro_image.style.transition='';
				if (me._intro_image.ggCurrentLogicStateExternalUrl == 0) {
					me._intro_image.ggSetImage("assets/icon/intro_m.jpg");
				}
				else if (me._intro_image.ggCurrentLogicStateExternalUrl == 1) {
					me._intro_image.ggSetImage("assets/icon/intro_ipad.jpg");
				}
				else {
					me._intro_image.ggSetImage("assets/icon/intro.jpg");
				}
			}
		}
		me._intro_image.logicBlock_externalurl();
		me._intro_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._intro_image.clientWidth;
			var parentHeight = me._intro_image.clientHeight;
			var img = me._intro_image__img;
			var aspectRatioDiv = me._intro_image.clientWidth / me._intro_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			} else {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			};
			if (!me._intro_image.ggScrollbars || currentWidth < me._intro_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._intro_image.scrollLeft=currentWidth / 2 - me._intro_image.clientWidth / 2;
			}
			if (!me._intro_image.ggScrollbars || currentHeight < me._intro_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._intro_image.scrollTop=currentHeight / 2 - me._intro_image.clientHeight / 2;
			}
		}
		me._screentint_selection_language.appendChild(me._intro_image);
		el=me._getting_stared=document.createElement('div');
		els=me._getting_stared__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="getting_stared";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 30%;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(75% - 120px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="background: #50C9C3; \/* fallback for old browsers *\/ background: -webkit-linear-gradient(to right, #96DEDA, #50C9C3); \/* Chrome 10-25, Safari 5.1-6 *\/ background: linear-gradient(0deg, rgb(216 97 199) 0%, rgba(255,255,255,1) 100%); box-shadow: -5px 5px 2px -2px rgba(0, 0, 0, 0.3); border-radius: 50px; display: flex; justify-content: center; align-items: center;";
		els.setAttribute('style',hs);
		me._getting_stared.ggUpdateText=function() {
			var params = [];
			var hs = player._("THAM QUAN QU\u00ca B\u00c1C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._getting_stared.ggUpdateText();
		el.appendChild(els);
		me._getting_stared.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._getting_stared.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._getting_stared.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._getting_stared.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._getting_stared.style.transition='left 0s, bottom 0s, transform 0s';
				if (me._getting_stared.ggCurrentLogicStatePosition == 0) {
					me._getting_stared.style.left='calc(50% - 120px)';
					me._getting_stared.style.bottom='55%';
				}
				else {
					me._getting_stared.style.left='calc(75% - 120px)';
					me._getting_stared.style.bottom='30%';
				}
			}
		}
		me._getting_stared.logicBlock_position();
		me._getting_stared.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['getting_stared'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._getting_stared.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._getting_stared.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._getting_stared.style.transition='left 0s, bottom 0s, transform 0s';
				if (me._getting_stared.ggCurrentLogicStateScaling == 0) {
					me._getting_stared.ggParameter.sx = 1.1;
					me._getting_stared.ggParameter.sy = 1.1;
					me._getting_stared.style.transform=parameterToTransform(me._getting_stared.ggParameter);
					skin.updateSize(me._getting_stared);
				}
				else {
					me._getting_stared.ggParameter.sx = 1;
					me._getting_stared.ggParameter.sy = 1;
					me._getting_stared.style.transform=parameterToTransform(me._getting_stared.ggParameter);
					skin.updateSize(me._getting_stared);
				}
			}
		}
		me._getting_stared.logicBlock_scaling();
		me._getting_stared.onclick=function (e) {
			player.setVariableValue('start_intro', true);
			player.setVariableValue('mute', false);
				player.playSound("_background","0");
				player.playSound("Element01","1");
			player.openNext("{node66}","");
		}
		me._getting_stared.onmouseover=function (e) {
			me.elementMouseOver['getting_stared']=true;
			me._getting_stared.logicBlock_scaling();
		}
		me._getting_stared.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._getting_stared__text)
					return;
				}
			}
			me.elementMouseOver['getting_stared']=false;
			me._getting_stared.logicBlock_scaling();
		}
		me._getting_stared.ggCurrentLogicStatePosition = -1;
		me._getting_stared.ggCurrentLogicStateScaling = -1;
		me._getting_stared.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['getting_stared']) {
				me.elementMouseOver['getting_stared']=true;
			}
		}
		me._getting_stared.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_selection_language.appendChild(me._getting_stared);
		me.divSkin.appendChild(me._screentint_selection_language);
		el=me._loading_bg=document.createElement('div');
		el.ggId="loading_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 101%;';
		hs+='left : calc(50% - ((101% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((101% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_bg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggDy=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 80px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._loading_bg.appendChild(me._image_4);
		el=me._logo_loading=document.createElement('div');
		els=me._logo_loading__img=document.createElement('img');
		els.className='ggskin ggskin_logo_loading';
		hs=basePath + 'images/logo_loading.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo_loading";
		el.ggDx=0;
		el.ggDy=-140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 280px;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((280px + 0px) / 2) - 140px);';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo_loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo_loading.ggUpdatePosition=function (useTransition) {
		}
		me._loading_bg.appendChild(me._logo_loading);
		me.divSkin.appendChild(me._loading_bg);
		me._powered_by.logicBlock_position();
		me._powered_by.logicBlock_size();
		me._powered_by.logicBlock_alpha();
		me._edge.logicBlock_visible();
		me._shot_edge.logicBlock_size();
		me._voice_con.logicBlock_size();
		me._voice_con.logicBlock_visible();
		me._mc_video.logicBlock_visible();
		me._mc_video.ggVideoSource = 'media/mc_women.mp4';
		me._mc_video.ggVideoNotLoaded = true;
		me._external_1.logicBlock_visible();
		me._mc_img.logicBlock_visible();
		me._info_pad.logicBlock_size();
		me._infoico.logicBlock_size();
		me._remote_container.logicBlock_visible();
		me._setting_pad.logicBlock_backgroundcolor();
		me._language_pad.logicBlock_visible();
		me._language_pad.logicBlock_backgroundcolor();
		me._vi_lang.logicBlock_visible();
		me._en_lang.logicBlock_visible();
		me._zoom_pad.logicBlock_visible();
		me._zoom_pad.logicBlock_backgroundcolor();
		me._zoom_in_ico.logicBlock_visible();
		me._zoom_out_ico.logicBlock_visible();
		me._button_auto_rotate.logicBlock_visible();
		me._rotate_pad.logicBlock_backgroundcolor();
		me._stop_rotate_image.logicBlock_visible();
		me._start_rotate_image.logicBlock_visible();
		me._screenshotpad.logicBlock_visible();
		me._vr_pad.logicBlock_visible();
		me._vr_pad.logicBlock_backgroundcolor();
		me._next_con.logicBlock_position();
		me._next_con.logicBlock_scaling();
		me._next_con.logicBlock_visible();
		me._next_con.logicBlock_alpha();
		me._prev.logicBlock_size();
		me._prev.logicBlock_visible();
		me._next.logicBlock_position();
		me._next.logicBlock_size();
		me._next.logicBlock_visible();
		me._next.logicBlock_alpha();
		me._bg_btn.logicBlock_scaling();
		me._bg_btn.logicBlock_visible();
		me._bg_btn.logicBlock_backgroundcolor();
		me._tt_area_button.logicBlock_visible();
		me._tt_area_button.logicBlock_alpha();
		me._map_ico.logicBlock_visible();
		me._map_ico.logicBlock_alpha();
		me._rec_off_thumb_menu.logicBlock_visible();
		me._rec_off_thumb_menu.logicBlock_alpha();
		me._control_top_m.logicBlock_scaling();
		me._control_top_m.logicBlock_visible();
		me._vrrotate_m.logicBlock_backgroundcolor();
		me._rotate_m.logicBlock_backgroundcolor();
		me._image_2_m.logicBlock_angle();
		me._image_2_m.logicBlock_visible();
		me._image_3_m.logicBlock_angle();
		me._image_3_m.logicBlock_visible();
		me._language_m.logicBlock_backgroundcolor();
		me._vi_lang_1_m.logicBlock_visible();
		me._en_lang_1_m.logicBlock_visible();
		me._fullscreen_m.logicBlock_backgroundcolor();
		me._contact_m.logicBlock_backgroundcolor();
		me._map_m.logicBlock_backgroundcolor();
		me._control_top.logicBlock_visible();
		me._vrrotate.logicBlock_backgroundcolor();
		me._rotate.logicBlock_backgroundcolor();
		me._image_2.logicBlock_angle();
		me._image_2.logicBlock_visible();
		me._image_3.logicBlock_angle();
		me._image_3.logicBlock_visible();
		me._language.logicBlock_backgroundcolor();
		me._vi_lang_1.logicBlock_visible();
		me._en_lang_1.logicBlock_visible();
		me._fullscreen.logicBlock_backgroundcolor();
		me._contact.logicBlock_backgroundcolor();
		me._map.logicBlock_backgroundcolor();
		me._container_list_menu.logicBlock_position();
		me._container_list_menu.logicBlock_size();
		me._container_list_menu.logicBlock_alpha();
		me._rec_list_menu_m.logicBlock_size();
		me._rec_list_menu_m.logicBlock_visible();
		me._scroll_master.logicBlock_position();
		me._scroll_master.logicBlock_size();
		me._scrollarea_m.logicBlock_visible();
		me._close_menu_mobile.logicBlock_visible();
		me._thumbmenuex.logicBlock_scaling();
		me._scrollarea.logicBlock_position();
		me._scrollarea.logicBlock_visible();
		me._map_container.logicBlock_position();
		me._map_container.logicBlock_size();
		me._map_container.logicBlock_visible();
		me._map_container.logicBlock_alpha();
		player.setVariableValue('map_hide', true);
		me._map_01.ggMarkerInstances=[];
		me._map_01.ggLastNodeId=null;
		me._map_01.ggMarkerArray=[];
		me._map_01.ggGoogleMarkerArray=[];
		me._map_01.ggLastZoom = -1;
		me._map_01.ggLastLat = 0.0;
		me._map_01.ggLastLng = 0.0;
		me._map_01.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_01.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_01.ggRadar;
			var map=me._map_01.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_01.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_01.ggMapId);
				pan -= me._map_01.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_01.ggFilteredIds.length > 0 && me._map_01.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.234375;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#0055ff',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#0055ff',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map_01.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_01.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_01.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map_01.ggMapId);
			var mapDetails = player.getMapDetails(me._map_01.ggMapId);
			if (!me._map_01.ggMapId) return;
			if (!me._map_01.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map_01.style.backgroundColor = mapDetails['bgcolor'];
				me._map_01.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_01.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_01.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_01.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(me._map_01.ggLastLat, me._map_01.ggLastLng);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map_01.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map_01.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map_01.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map_01.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map_01.ggLastZoom == -1) me._map_01.ggLastZoom = 18;
				var initZoom = keepZoom ? me._map_01.ggLastZoom : 18;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					mapOptions.restriction = {
						strictBounds: false,
						latLngBounds: {
							north: parseFloat(mapDetails['maplimits'][0]),
							east: parseFloat(mapDetails['maplimits'][1]),
							south: parseFloat(mapDetails['maplimits'][2]),
							west: parseFloat(mapDetails['maplimits'][3]),
						}
					}
				}
				me._map_01.ggMap = new google.maps.Map(me._map_01, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map_01.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map_01.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'googlemap') {
					if (mapDetails.hasOwnProperty('googlelayerstyles')) {
						var mapTypeIds = [];
						for (let layerIndex = 0; layerIndex < mapDetails['googlelayerstyles'].length; layerIndex++) {
							let layerStyle = mapDetails['googlelayerstyles'][layerIndex];
							if (layerStyle.indexOf('/') != -1) {
								var mapTypeId = 'custom' + layerIndex;
								mapTypeIds.push(mapTypeId);
								me._map_01.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = layerStyle;
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: 19,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['googlelayernames'][layerIndex]
								})) ;
							} else {
								mapTypeIds.push(layerStyle);
							}
						}
						me._map_01.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: mapTypeIds
							}
						});
						me._map_01.ggMap.setMapTypeId(mapTypeIds[0]);
					} else {
						me._map_01.ggMap.setMapTypeId(mapDetails['mapstyle']);
					}
				}
				if (mapTypeId == 'openstreetmap') {
					me._map_01.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						var mapTypeIds = [];
						for (let layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
							var mapTypeId = 'mapbox' + layerIndex;
							mapTypeIds.push(mapTypeId);
							me._map_01.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
									if (!layerStyle.startsWith('mapbox:')) {
											if (layerStyle == 'satellite') {
												var urlString = 'https://api.mapbox.com/v4/mapbox.' + layerStyle +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
											} else {
												var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
											}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} else {
										layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7)
										var urlString = 'https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} 
								},
								maxZoom: 18,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['mapboxlayernames'][layerIndex]
							}));
						}
						me._map_01.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: mapTypeIds
							}
						});
						me._map_01.ggMap.setMapTypeId(mapTypeIds[0]);
					} else {
						me._map_01.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								if (mapDetails['styleurl'] == '') {
									if (mapDetails['mapstyle'] == 'satellite') {
										var urlString = 'https://api.mapbox.com/v4/mapbox.' + mapDetails["mapstyle"] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
									} else {
										var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails["mapstyle"] +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
									}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								} else {
									var styleurlstring = mapDetails['styleurl'];
									styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
									var urlString = 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								}
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: 18
						}));
					}
				}
				if (mapTypeId == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						var mapTypeIds = [];
						for (let layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var mapTypeId = 'custom' + layerIndex;
							mapTypeIds.push(mapTypeId);
							me._map_01.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = mapDetails['customlayerurltemplates'][layerIndex];
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex]),
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['customlayernames'][layerIndex]
							}));
						}
						me._map_01.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: mapTypeIds
							}
						});
						me._map_01.ggMap.setMapTypeId(mapTypeIds[0]);
					} else {
						me._map_01.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								var urlString = mapDetails['mapurltemplate'];
								urlString = urlString.replace('{s}', 'a');
								urlString = urlString.replace('{z}', zoom);
								urlString = urlString.replace('{x}', coord.x);
								urlString = urlString.replace('{y}', coord.y);
								return urlString;
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: mapDetails['mapmaxzoom']
						}));
					}
				}
				google.maps.event.addListener(me._map_01.ggMap, 'zoom_changed', function(){
					me._map_01.ggRadar.update();
				});
			} else if (mapType == 'file') {
				if (me._map_01.ggLastZoom == -1) me._map_01.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_01.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				me._map_01.ggMap = new google.maps.Map(me._map_01, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map_01.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map_01.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map_01.ggMap.mapTypes.set(me._map_01.ggMapId, customMapType);
				me._map_01.ggMap.setMapTypeId(me._map_01.ggMapId);
				me._map_01.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map_01.ggMap, 'center_changed', function() {
					me._map_01.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map_01.ggMap, 'zoom_changed', function() {
					me._map_01.ggCheckBounds(mapDetails);
					me._map_01.ggRadar.update();
				});
			}
			me._map_01.ggMapNotLoaded = false;
		}
		me._map_01.ggClearMap=function() {
		me._map_01.ggClearMapMarkers();
		me._map_01.ggMap = null;
		me._map_01.ggMapNotLoaded = true;
		}
		me._map_01.ggClearMapMarkers=function() {
			me._map_01.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_01.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
					me._map_01.ggGoogleMarkerClusterer.removeMarker(marker);
				}
			}
			me._map_01.ggGoogleMarkerArray=[];
		}
		me._map_01.ggCenterNode=function(nodeId) {
			if (!me._map_01.ggMap) return;
			var gps;
			if (player.getMapType(me._map_01.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map_01.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map_01.ggMap.panTo(markerLocation);
			}
		}
		me._map_01.ggFitBounds=function(force) {
			if (me._map_01.ggMapNotLoaded) return;
			if (!me._map_01.ggMap) return;
			if (!me._map_01.ggMarkerBounds.isEmpty()) {
				if (me._map_01.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_01.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map_01.ggMap.fitBounds(me._map_01.ggMarkerBounds, 30);
					} else {
						if (player.getMapType(me._map_01.ggMapId) == 'web') {
							me._map_01.ggMap.setZoom(18);
						} else {
							me._map_01.ggMap.setZoom(7 + 18);
						}
					}
				} else {
					me._map_01.ggMap.setCenter(me._map_01.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map_01.ggMapId) == 'web') {
						if (force) {
						me._map_01.ggMap.setZoom(18);
						} else {
							me._map_01.ggMap.setZoom(18);
						}
					} else {
						if (force) {
						me._map_01.ggMap.setZoom(7);
						} else {
							me._map_01.ggMap.setZoom(7 + 18);
						}
					}
				}
			}
		}
		me._map_01.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map_01.ggMap) return;
			me._map_01.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_01.ggFilteredIds = [];
			if (me._map_01.ggFilter != '') {
				var filter = me._map_01.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_01.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_01.ggFilteredIds.length > 0) ids = me._map_01.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._map_01.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._map_01.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lat'] == b['lat']) return a['lng'] - b['lng']; else return b['lat'] - a['lat']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			var marker;
			var markerLocation;
			me._map_01.ggGoogleMarkerClusterer = new MarkerClusterer(me._map_01.ggMap, [], {imagePath: basePath + './3rdparty/google_markerclusterer/m', maxZoom: 17});
			me._map_01.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_01.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_01.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_01.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_01.ggGoogleMarkerArray[id] = marker;
					if (id != currentId) {
						me._map_01.ggGoogleMarkerClusterer.addMarker(marker);
					} else {
						marker.setMap(me._map_01.ggMap);
					}
					me._map_01.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map_01.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map_01.ggFitBounds(false);
			}
			skin.updateSize(me._map_01);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map_01.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map_01.ggMapId = mapId;
			if (!me._map_01.ggMapNotLoaded) {
				me._map_01.ggLastZoom = me._map_01.ggMap.getZoom();
				me._map_01.ggLastLat = me._map_01.ggMap.getCenter().lat();
				me._map_01.ggLastLng = me._map_01.ggMap.getCenter().lng();
				me._map_01.ggClearMap();
				me._map_01.ggInitMap(true);
				me._map_01.ggInitMapMarkers(false);
			}
		}
		me._map_01.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_01.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_01.mapHeightInDeg = me._map_01.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_01.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_01.mapWidthInDeg = me._map_01.mapHeightInDeg * mapAR;
			}
		}
		me._map_01.ggInCheckBounds=false;
		me._map_01.ggCheckBounds=function(mapDetails) {
			if (me._map_01.ggInCheckBounds) return;
			me._map_01.ggInCheckBounds = true;
			var mapCenter = me._map_01.ggMap.getCenter();
			var currentZoom = me._map_01.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_01.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_01.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map_01.mapWidthInDeg < me._map_01.clientWidth * pixelInDeg) {
				var xMargin = (me._map_01.clientWidth * pixelInDeg - me._map_01.mapWidthInDeg) / 2;
				if (x < me._map_01.mapWidthInDeg / 2 - xMargin) x = me._map_01.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_01.mapWidthInDeg / 2 + xMargin) x = me._map_01.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_01.mapWidthInDeg - xOffset) x = me._map_01.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_01.mapHeightInDeg < me._map_01.clientHeight * pixelInDeg) {
				var yMargin = (me._map_01.clientHeight * pixelInDeg - me._map_01.mapHeightInDeg) / 2;
				if (y < -me._map_01.mapHeightInDeg / 2 - yMargin) y = -me._map_01.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_01.mapHeightInDeg / 2 + yMargin) y = -me._map_01.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_01.mapHeightInDeg + yOffset) y = -me._map_01.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map_01.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map_01.ggInCheckBounds = false;
		}
		me._map_scale.logicBlock_angle();
		me._map_hide_ico.logicBlock_visible();
		me._container_logo.logicBlock_position();
		me._container_logo.logicBlock_scaling();
		me._container_logo.logicBlock_alpha();
		me._info_con.logicBlock_position();
		me._info_con.logicBlock_size();
		me._info_con.logicBlock_alpha();
		me._info_rec.logicBlock_position();
		me._info_chevron_down.logicBlock_angle();
		me._screenshot.logicBlock_position();
		me._screenshot.logicBlock_scaling();
		me._screenshot.logicBlock_visible();
		me._screenshot.logicBlock_alpha();
		me._popup_help_icon_mobile.logicBlock_visible();
		me._popup_help_icon_desktop.logicBlock_visible();
		me._rec_vr_setting.logicBlock_position();
		me._rec_vr_setting.logicBlock_size();
		me._rec_vr_setting.logicBlock_alpha();
		me._text_vr_title.logicBlock_size();
		me._text_vr_title.logicBlock_text();
		me._text_vr_desciption.logicBlock_size();
		me._text_vr_desciption.logicBlock_text();
		me._img_vr.logicBlock_scaling();
		me._text_back.logicBlock_text();
		me._text_vr.logicBlock_alpha();
		me._text_vr.logicBlock_text();
		me._screentint_selection_language.logicBlock_scaling();
		me._screentint_selection_language.logicBlock_alpha();
		me._intro_image.logicBlock_externalurl();
		me._getting_stared.logicBlock_position();
		me._getting_stared.logicBlock_scaling();
		player.mute("_all");
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._category_cloner.ggInstances.length; i++) {
				me._category_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_flycam')) {
				for(var i = 0; i < hotspotTemplates['ht_flycam'].length; i++) {
					hotspotTemplates['ht_flycam'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_arrow')) {
				for(var i = 0; i < hotspotTemplates['ht_arrow'].length; i++) {
					hotspotTemplates['ht_arrow'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_b')) {
				for(var i = 0; i < hotspotTemplates['ht_info_b'].length; i++) {
					hotspotTemplates['ht_info_b'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_location')) {
				for(var i = 0; i < hotspotTemplates['ht_location'].length; i++) {
					hotspotTemplates['ht_location'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a_bo')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a_bo'].length; i++) {
					hotspotTemplates['ht_node_a_bo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a'].length; i++) {
					hotspotTemplates['ht_node_a'][i].ggEvent_activehotspotchanged();
				}
			}
			me._next_con.logicBlock_alpha();
			me._next.logicBlock_alpha();
			me._bg_btn.logicBlock_visible();
		});
		player.addListener('autorotatechanged', function(event) {
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
			me._image_2_m.logicBlock_visible();
			me._image_3_m.logicBlock_visible();
			me._image_2.logicBlock_visible();
			me._image_3.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._cloner_area_m.ggInstances.length; i++) {
				me._cloner_area_m.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._category_cloner.ggInstances.length; i++) {
				me._category_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._cloner_area.ggInstances.length; i++) {
				me._cloner_area.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_flycam')) {
				for(var i = 0; i < hotspotTemplates['ht_flycam'].length; i++) {
					hotspotTemplates['ht_flycam'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_arrow')) {
				for(var i = 0; i < hotspotTemplates['ht_arrow'].length; i++) {
					hotspotTemplates['ht_arrow'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_b')) {
				for(var i = 0; i < hotspotTemplates['ht_info_b'].length; i++) {
					hotspotTemplates['ht_info_b'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_location')) {
				for(var i = 0; i < hotspotTemplates['ht_location'].length; i++) {
					hotspotTemplates['ht_location'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a_bo')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a_bo'].length; i++) {
					hotspotTemplates['ht_node_a_bo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a'].length; i++) {
					hotspotTemplates['ht_node_a'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_f')) {
				for(var i = 0; i < hotspotTemplates['ht_node_f'].length; i++) {
					hotspotTemplates['ht_node_f'][i].ggEvent_changenode();
				}
			}
			me._edge.logicBlock_visible();
			me._voice_con.logicBlock_visible();
			me._mc_video.logicBlock_visible();
			me._external_1.logicBlock_visible();
			me._mc_img.logicBlock_visible();
			me._seekbar_element.ggConnectToMediaEl();
			me._remote_container.logicBlock_visible();
			me._language_pad.logicBlock_visible();
			me._zoom_pad.logicBlock_visible();
			me._button_auto_rotate.logicBlock_visible();
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
			me._screenshotpad.logicBlock_visible();
			me._vr_pad.logicBlock_visible();
			me._next_con.logicBlock_visible();
			me._next_con.logicBlock_alpha();
			me._cloner_next.ggUpdateConditionNodeChange();
			me._prev.logicBlock_visible();
			me._next.logicBlock_visible();
			me._next.logicBlock_alpha();
			me._bg_btn.logicBlock_visible();
			me._tt_area_button.logicBlock_alpha();
			me._map_ico.logicBlock_visible();
			me._map_ico.logicBlock_alpha();
			player.setVariableValue('map_scale_full', false);
			player.setVariableValue('map_scale_normal', false);
			if (
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().width <= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height < 1))
				)
			||
				(
					((player.getIsMobile() == true)) && 
					((player.getViewerSize().height <= 720)) && 
					((player.getViewerSize().width / player.getViewerSize().height > 1))
				)
			) {
				player.setVariableValue('map_hide', true);
			}
			me._rec_off_thumb_menu.logicBlock_alpha();
			me._image_2_m.logicBlock_visible();
			me._image_3_m.logicBlock_visible();
			me._image_2.logicBlock_visible();
			me._image_3.logicBlock_visible();
			me._container_list_menu.logicBlock_position();
			me._container_list_menu.logicBlock_alpha();
			me._scroll_master.logicBlock_position();
			me._scroll_master.logicBlock_size();
			me._category_cloner.ggUpdateConditionNodeChange();
			me._cloner_area_m.ggUpdateConditionNodeChange();
			me._scrollarea.logicBlock_position();
			me._scrollarea.logicBlock_visible();
			me._cloner_area.ggUpdateConditionNodeChange();
			me._map_container.logicBlock_position();
			me._map_container.logicBlock_size();
			me._map_container.logicBlock_visible();
			me._map_container.logicBlock_alpha();
			if (me._map_01.ggLastActivMarker) {
				if (me._map_01.ggLastActivMarker._div.ggDeactivate) me._map_01.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_01.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_01.ggLastActivMarker=marker;
			}
			if (!me._map_01.ggMapNotLoaded) {
				me._map_01.ggCenterNode();
			}
			if (player.getMapType(me._map_01.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_01.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_01.ggChangeMap(mapId);
					}
				}
			}
			if (me._map_01.ggLastNodeId && me._map_01.ggGoogleMarkerArray.hasOwnProperty(me._map_01.ggLastNodeId)) {
				me._map_01.ggGoogleMarkerClusterer.addMarker(me._map_01.ggGoogleMarkerArray[me._map_01.ggLastNodeId]);
			}
			if (me._map_01.ggGoogleMarkerArray.hasOwnProperty(id)) {
				me._map_01.ggGoogleMarkerClusterer.removeMarker(me._map_01.ggGoogleMarkerArray[id]);
				me._map_01.ggGoogleMarkerArray[id].setMap(me._map_01.ggMap);
			}
			me._map_01.ggLastNodeId = id;
			me._map_01.ggRadar.update();
			me._map_scale.logicBlock_angle();
			me._map_hide_ico.logicBlock_visible();
			me._container_logo.logicBlock_position();
			me._container_logo.logicBlock_alpha();
			me._info_con.logicBlock_alpha();
			me._info_rec.logicBlock_position();
			me._info_chevron_down.logicBlock_angle();
			me._screenshot.logicBlock_visible();
			me._rec_vr_setting.logicBlock_position();
			me._rec_vr_setting.logicBlock_alpha();
			me._screentint_selection_language.logicBlock_scaling();
			me._screentint_selection_language.logicBlock_alpha();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._category_cloner.ggInstances.length; i++) {
				me._category_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_location')) {
				for(var i = 0; i < hotspotTemplates['ht_location'].length; i++) {
					hotspotTemplates['ht_location'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a_bo')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a_bo'].length; i++) {
					hotspotTemplates['ht_node_a_bo'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a'].length; i++) {
					hotspotTemplates['ht_node_a'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('clonerchanged', function(event) {
			for(var i = 0; i < me._cloner_area_m.ggInstances.length; i++) {
				me._cloner_area_m.ggInstances[i].ggEvent_clonerchanged(event);
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._category_cloner.ggInstances.length; i++) {
				me._category_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_flycam')) {
				for(var i = 0; i < hotspotTemplates['ht_flycam'].length; i++) {
					hotspotTemplates['ht_flycam'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_arrow')) {
				for(var i = 0; i < hotspotTemplates['ht_arrow'].length; i++) {
					hotspotTemplates['ht_arrow'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_b')) {
				for(var i = 0; i < hotspotTemplates['ht_info_b'].length; i++) {
					hotspotTemplates['ht_info_b'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_location')) {
				for(var i = 0; i < hotspotTemplates['ht_location'].length; i++) {
					hotspotTemplates['ht_location'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a_bo')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a_bo'].length; i++) {
					hotspotTemplates['ht_node_a_bo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a'].length; i++) {
					hotspotTemplates['ht_node_a'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_f')) {
				for(var i = 0; i < hotspotTemplates['ht_node_f'].length; i++) {
					hotspotTemplates['ht_node_f'][i].ggEvent_configloaded();
				}
			}
			me._powered_by.logicBlock_position();
			me._powered_by.logicBlock_size();
			me._edge.logicBlock_visible();
			me._shot_edge.logicBlock_size();
			me._voice_con.logicBlock_size();
			me._voice_con.logicBlock_visible();
			me._mc_video.logicBlock_visible();
			me._external_1.logicBlock_visible();
			me._mc_img.logicBlock_visible();
			me._info_pad.logicBlock_size();
			me._infoico.logicBlock_size();
			me._remote_container.logicBlock_visible();
			me._setting_pad.logicBlock_backgroundcolor();
			me._language_pad.logicBlock_visible();
			me._language_pad.logicBlock_backgroundcolor();
			me._vi_lang.logicBlock_visible();
			me._en_lang.logicBlock_visible();
			me._zoom_pad.logicBlock_visible();
			me._zoom_pad.logicBlock_backgroundcolor();
			me._button_auto_rotate.logicBlock_visible();
			me._rotate_pad.logicBlock_backgroundcolor();
			me._screenshotpad.logicBlock_visible();
			me._vr_pad.logicBlock_visible();
			me._vr_pad.logicBlock_backgroundcolor();
			me._next_con.logicBlock_position();
			me._next_con.logicBlock_scaling();
			me._next_con.logicBlock_visible();
			me._next_con.logicBlock_alpha();
			me._prev.logicBlock_size();
			me._prev.logicBlock_visible();
			me._next.logicBlock_position();
			me._next.logicBlock_size();
			me._next.logicBlock_visible();
			me._next.logicBlock_alpha();
			me._bg_btn.logicBlock_scaling();
			me._bg_btn.logicBlock_visible();
			me._bg_btn.logicBlock_backgroundcolor();
			me._tt_area_button.logicBlock_visible();
			me._tt_area_button.logicBlock_alpha();
			me._map_ico.logicBlock_visible();
			me._map_ico.logicBlock_alpha();
			me._rec_off_thumb_menu.logicBlock_visible();
			me._rec_off_thumb_menu.logicBlock_alpha();
			me._control_top_m.logicBlock_scaling();
			me._control_top_m.logicBlock_visible();
			me._vi_lang_1_m.logicBlock_visible();
			me._en_lang_1_m.logicBlock_visible();
			me._control_top.logicBlock_visible();
			me._vi_lang_1.logicBlock_visible();
			me._en_lang_1.logicBlock_visible();
			me._container_list_menu.logicBlock_position();
			me._container_list_menu.logicBlock_size();
			me._container_list_menu.logicBlock_alpha();
			me._rec_list_menu_m.logicBlock_size();
			me._rec_list_menu_m.logicBlock_visible();
			me._scroll_master.ggUpdatePosition();
			me._scroll_master.logicBlock_position();
			me._scroll_master.logicBlock_size();
			me._scrollarea_m.ggUpdatePosition();
			me._scrollarea_m.logicBlock_visible();
			me._close_menu_mobile.logicBlock_visible();
			me._scrollarea.ggUpdatePosition();
			me._scrollarea.logicBlock_position();
			me._scrollarea.logicBlock_visible();
			me._map_container.logicBlock_position();
			me._map_container.logicBlock_size();
			me._map_container.logicBlock_visible();
			me._map_container.logicBlock_alpha();
			me._map_01.ggClearMap();
			me._map_01.ggInitMap(false);
			me._map_01.ggInitMapMarkers(true);
			me._map_scale.logicBlock_angle();
			me._map_hide_ico.logicBlock_visible();
			me._container_logo.logicBlock_position();
			me._container_logo.logicBlock_scaling();
			me._container_logo.logicBlock_alpha();
			me._info_con.logicBlock_position();
			me._info_con.logicBlock_size();
			me._info_con.logicBlock_alpha();
			me._info_rec.logicBlock_position();
			me._info_chevron_down.logicBlock_angle();
			me._screenshot.logicBlock_position();
			me._screenshot.logicBlock_visible();
			me._popup_help_icon_mobile.logicBlock_visible();
			me._popup_help_icon_desktop.logicBlock_visible();
			me._rec_vr_setting.logicBlock_position();
			me._rec_vr_setting.logicBlock_size();
			me._rec_vr_setting.logicBlock_alpha();
			me._text_vr_title.logicBlock_size();
			me._text_vr_title.logicBlock_text();
			me._text_vr_desciption.logicBlock_size();
			me._text_vr_desciption.logicBlock_text();
			me._img_vr.logicBlock_scaling();
			me._text_back.logicBlock_text();
			me._text_vr.logicBlock_text();
			me._screentint_selection_language.logicBlock_scaling();
			me._screentint_selection_language.logicBlock_alpha();
			me._intro_image.logicBlock_externalurl();
		});
		player.addListener('fullscreenenter', function(event) {
			me._zoom_in_ico.logicBlock_visible();
			me._zoom_out_ico.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._zoom_in_ico.logicBlock_visible();
			me._zoom_out_ico.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_location')) {
				for(var i = 0; i < hotspotTemplates['ht_location'].length; i++) {
					hotspotTemplates['ht_location'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a_bo')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a_bo'].length; i++) {
					hotspotTemplates['ht_node_a_bo'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a'].length; i++) {
					hotspotTemplates['ht_node_a'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_location')) {
				for(var i = 0; i < hotspotTemplates['ht_location'].length; i++) {
					hotspotTemplates['ht_location'][i].ggEvent_hotspotsupdated();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a_bo')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a_bo'].length; i++) {
					hotspotTemplates['ht_node_a_bo'][i].ggEvent_hotspotsupdated();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_a')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a'].length; i++) {
					hotspotTemplates['ht_node_a'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('imagesready', function(event) {
				player.stopSound("Element02");
				me._info_tt.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.information)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_tt.ggUpdateText();
			me._info_tt.ggTextDiv.scrollTop = 0;
			if (
				(
					((player._(me.ggUserdata.source) != ""))
				)
			) {
				me._cloner_next.ggText=player._(me.ggUserdata.source);
				if (me._cloner_next.ggText=='') {
					me._cloner_next.ggUpdate([]);
				} else {
					me._cloner_next.ggUpdate(me._cloner_next.ggText.split(','));
				}
				skin.updateSize(skin.divSkin);
			}
			if (player.transitionsDisabled) {
				me._loading_bg.style.transition='none';
			} else {
				me._loading_bg.style.transition='all 700ms ease-in-out 0ms';
			}
			me._loading_bg.style.opacity='0';
			me._loading_bg.style.visibility='hidden';
		});
		player.addListener('languagechanged', function(event) {
			me._vi_lang.logicBlock_visible();
			me._en_lang.logicBlock_visible();
			me._vi_lang_1_m.logicBlock_visible();
			me._en_lang_1_m.logicBlock_visible();
			me._vi_lang_1.logicBlock_visible();
			me._en_lang_1.logicBlock_visible();
			me._text_vr_title.logicBlock_text();
			me._text_vr_desciption.logicBlock_text();
			me._text_back.logicBlock_text();
			me._text_vr.logicBlock_text();
		});
		player.addListener('positionchanged', function(event) {
			me._map_01.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_flycam')) {
				for(var i = 0; i < hotspotTemplates['ht_flycam'].length; i++) {
					hotspotTemplates['ht_flycam'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_b')) {
				for(var i = 0; i < hotspotTemplates['ht_info_b'].length; i++) {
					hotspotTemplates['ht_info_b'][i].ggEvent_sizechanged();
				}
			}
			me._voice_con.logicBlock_size();
			me._info_pad.logicBlock_size();
			me._infoico.logicBlock_size();
			me._rec_off_thumb_menu.logicBlock_visible();
			me._container_list_menu.logicBlock_size();
			me._rec_list_menu_m.logicBlock_size();
			me._rec_list_menu_m.logicBlock_visible();
			me._thumbmenuex.logicBlock_scaling();
			me._info_con.logicBlock_position();
			me._info_con.logicBlock_size();
			me._intro_image.logicBlock_externalurl();
			me._getting_stared.logicBlock_position();
		});
		player.addListener('varchanged_VR_setting', function(event) {
			me._rec_vr_setting.logicBlock_position();
			me._rec_vr_setting.logicBlock_alpha();
		});
		player.addListener('varchanged_information', function(event) {
			me._info_con.logicBlock_alpha();
			me._info_rec.logicBlock_position();
			me._info_chevron_down.logicBlock_angle();
		});
		player.addListener('varchanged_map_hide', function(event) {
			me._map_ico.logicBlock_alpha();
			me._map_container.logicBlock_size();
			me._map_container.logicBlock_alpha();
			me._map_hide_ico.logicBlock_visible();
		});
		player.addListener('varchanged_map_scale_full', function(event) {
			me._map_container.logicBlock_position();
			me._map_container.logicBlock_size();
			me._map_scale.logicBlock_angle();
		});
		player.addListener('varchanged_map_scale_normal', function(event) {
			me._map_container.logicBlock_size();
			me._map_scale.logicBlock_angle();
		});
		player.addListener('varchanged_mode_snapshot', function(event) {
			me._edge.logicBlock_visible();
			me._next_con.logicBlock_visible();
			me._prev.logicBlock_visible();
			me._next.logicBlock_visible();
			me._screenshot.logicBlock_visible();
		});
		player.addListener('varchanged_mute', function(event) {
			if (
				(
					((player.getVariableValue('mute') == true))
				)
			) {
				player.mute("_all");
			}
			if (
				(
					((player.getVariableValue('mute') == false))
				)
			) {
				player.unmute("_all");
			}
			me._mc_video.logicBlock_visible();
			me._external_1.logicBlock_visible();
			me._mc_img.logicBlock_visible();
		});
		player.addListener('varchanged_open_tag', function(event) {
			for(var i = 0; i < me._category_cloner.ggInstances.length; i++) {
				me._category_cloner.ggInstances[i].ggEvent_varchanged_open_tag(event);
			}
		});
		player.addListener('varchanged_show_menu_thumb', function(event) {
			me._rec_off_thumb_menu.logicBlock_alpha();
			me._container_list_menu.logicBlock_position();
			me._container_list_menu.logicBlock_alpha();
			me._scroll_master.logicBlock_position();
			me._scroll_master.logicBlock_size();
			me._scrollarea.logicBlock_position();
			me._map_container.logicBlock_alpha();
			me._container_logo.logicBlock_position();
			me._container_logo.logicBlock_alpha();
		});
		player.addListener('varchanged_show_remote', function(event) {
			me._language_pad.logicBlock_visible();
			me._zoom_pad.logicBlock_visible();
			me._button_auto_rotate.logicBlock_visible();
			me._screenshotpad.logicBlock_visible();
			me._vr_pad.logicBlock_visible();
		});
		player.addListener('varchanged_start_intro', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_a_bo')) {
				for(var i = 0; i < hotspotTemplates['ht_node_a_bo'].length; i++) {
					hotspotTemplates['ht_node_a_bo'][i].ggEvent_varchanged_start_intro();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_f')) {
				for(var i = 0; i < hotspotTemplates['ht_node_f'].length; i++) {
					hotspotTemplates['ht_node_f'][i].ggEvent_varchanged_start_intro();
				}
			}
			me._voice_con.logicBlock_visible();
			me._remote_container.logicBlock_visible();
			me._next_con.logicBlock_visible();
			me._prev.logicBlock_visible();
			me._next.logicBlock_visible();
			me._tt_area_button.logicBlock_alpha();
			me._map_ico.logicBlock_visible();
			me._scrollarea.logicBlock_visible();
			me._map_container.logicBlock_visible();
				me._info_tt.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.information)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_tt.ggUpdateText();
			me._info_tt.ggTextDiv.scrollTop = 0;
			me._screentint_selection_language.logicBlock_scaling();
			me._screentint_selection_language.logicBlock_alpha();
		});
		player.addListener('varchanged_tint_thumb_menu', function(event) {
			me._rec_off_thumb_menu.logicBlock_alpha();
		});
		player.addListener('varchanged_var_hs', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info_b')) {
				for(var i = 0; i < hotspotTemplates['ht_info_b'].length; i++) {
					hotspotTemplates['ht_info_b'][i].ggEvent_varchanged_var_hs();
				}
			}
		});
		player.addListener('viewerinit', function(event) {
			for(var i = 0; i < me._category_cloner.ggInstances.length; i++) {
				me._category_cloner.ggInstances[i].ggEvent_viewerinit(event);
			}
			me._cloner_next.ggUpdate();
			me._category_cloner.ggUpdate();
			me._cloner_area_m.ggUpdate();
			me._cloner_area.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._vr_pad.logicBlock_visible();
			me._text_vr.logicBlock_alpha();
		});
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='330px';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumb;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumb__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		els.setAttribute('src',basePath + "images/node_thumb_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 12px 12px; border: 2px solid #ff9f1c; overflow: hidden;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumb.onclick=function (e) {
			if (me._node_thumb.isDragging()) return;
			if (
				(
					((me._node_thumb.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('open_tag', "_nop_");
			player.setVariableValue('show_menu_thumb', false);
		}
		me._node_thumb.onmouseover=function (e) {
			me.elementMouseOver['node_thumb']=true;
			me._node_title.logicBlock_textcolor();
			me._slec_mobile.logicBlock_visible();
		}
		me._node_thumb.onmouseout=function (e) {
			me.elementMouseOver['node_thumb']=false;
			me._node_title.logicBlock_textcolor();
			me._slec_mobile.logicBlock_visible();
		}
		me._node_thumb.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['node_thumb']) {
				me.elementMouseOver['node_thumb']=true;
				me._node_title.logicBlock_textcolor();
				me._slec_mobile.logicBlock_visible();
			}
		}
		me._node_thumb.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="padding: 0px 10px 0px 30px; display: flex; align-items: center;";
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='color 200ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.logicBlock_visible();
		me._node_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_title.ggIsActive() == true)) || 
				((me.elementMouseOver['node_thumb'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_title.style.transition='color 200ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateTextColor == 0) {
					me._node_title.style.color="rgba(85,255,255,1)";
				}
				else {
					me._node_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._node_title.logicBlock_textcolor();
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb.appendChild(me._node_title);
		el=me._box_s_mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._box_s_mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._box_s_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KIDxwYXRoIGQ9Ik02NCwxLjlBNjIuMSw2Mi4xLDAsMSwwLDEyNi4xLDY0LDYyLjEsNjIuMSwwLDAsMCw2NCwxLjlabTAsMTExLjZBNDkuNSw0OS41LDAsMSwxLDExMy41LDY0LDQ5LjUsNDkuNSwwLDAsMSw2NCwxMTMuNVoiIGZpbGw9IiMxYzIzMzAiLz4KPC9zdmc+Cg==';
		me._box_s_mobile__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="box_s_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._box_s_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_s_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb.appendChild(me._box_s_mobile);
		el=me._slec_mobile=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._slec_mobile;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._slec_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KIDxjaXJjbGUgZmlsbD0iIzJlYzRiNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuNCAxMTYuOSkgcm90YXRlKC04MC44KSIgY3g9IjY0IiBjeT0iNjQiIGZpbGwtb3BhY2l0eT0iMSIgcj0iNDkuNSIvPgogPHBhdGggZD0iTTkzLjgsNTEuNUEyMzQuNywyMzQuNywwLDAsMCw3MC43LDg1LjNjLTMsNS41LTUuOCwxMS04LjQsMTYuN2E2LjIsNi4yLDAsMCwxLTQsMy42LDYuMSw2LjEsMCwwLDEtNS40LS44bC02LjMtNS41LTIyLT'+
			'E5YTYuNCw2LjQsMCwwLDEtMi0yLjRjLS4yLS41LS4zLTEuMS0uNS0xLjZhNiw2LDAsMCwxLDEuMS00LjUsNi44LDYuOCwwLDAsMSw0LjEtMi41LDYuMyw2LjMsMCwwLDEsNC42LDEuMWw2LjMsNS40TDU0LjQsODkuOWwzLjUtNi42QTIzNS4yLDIzNS4yLDAsMCwxLDkxLjUsMzUuNWE1LjgsNS44LDAsMCwxLDIuNC0ybDEuNi0uNWE2LjUsNi41LDAsMCwxLDQuNywxLjEsNS44LDUuOCwwLDAsMSwxLjMsOC40WiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K';
		me._slec_mobile__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="slec_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._slec_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._slec_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['node_thumb'] == true)) || 
				((me._slec_mobile.ggIsActive() == true)) || 
				((player.nodeVisited(me._slec_mobile.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._slec_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._slec_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._slec_mobile.style.transition='';
				if (me._slec_mobile.ggCurrentLogicStateVisible == 0) {
					me._slec_mobile.style.visibility=(Number(me._slec_mobile.style.opacity)>0||!me._slec_mobile.style.opacity)?'inherit':'hidden';
					me._slec_mobile.ggVisible=true;
				}
				else {
					me._slec_mobile.style.visibility="hidden";
					me._slec_mobile.ggVisible=false;
				}
			}
		}
		me._slec_mobile.logicBlock_visible();
		me._slec_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb.appendChild(me._slec_mobile);
		me.__div.appendChild(me._node_thumb);
		me._node_title.logicBlock_visible();
		me._node_title.logicBlock_textcolor();
		me._slec_mobile.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function(event) {
				me._node_title.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me._node_title.logicBlock_visible();
				me._node_title.logicBlock_textcolor();
				me._slec_mobile.logicBlock_visible();
				me._slec_mobile.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._slec_mobile.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._node_title.logicBlock_visible();
			};
	};
	function SkinCloner_cloner_area_m_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: hidden;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._ex_thumb_area_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._ex_thumb_area_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._ex_thumb_area_m__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ex_thumb_area_m.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ex_thumb_area_m.ggSubElement.setAttribute('alt', player._(me._ex_thumb_area_m.ggAltText));
			me._ex_thumb_area_m.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ex_thumb_area_m.ggText_untranslated = img;
			me._ex_thumb_area_m.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ex_thumb_area_m.ggSubElement.style.width = '0px';
			me._ex_thumb_area_m.ggSubElement.style.height = '0px';
			me._ex_thumb_area_m.ggSubElement.src='';
			me._ex_thumb_area_m.ggSubElement.src=me._ex_thumb_area_m.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ex_thumb_area_m.ggText != player._(me._ex_thumb_area_m.ggText_untranslated)) {
				me._ex_thumb_area_m.ggText = player._(me._ex_thumb_area_m.ggText_untranslated);
				me._ex_thumb_area_m.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="Ex_thumb_area_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 130px;';
		hs+='left : 5px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ex_thumb_area_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ex_thumb_area_m.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((me.ggTag == "langsen"))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((me.ggTag == "khutuongniem"))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((me.ggTag == "langhoangtru"))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((me.ggTag == "khumohoangthiloan"))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((me.ggTag == "tq"))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._ex_thumb_area_m.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._ex_thumb_area_m.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._ex_thumb_area_m.style.transition='';
				if (me._ex_thumb_area_m.ggCurrentLogicStateExternalUrl == 0) {
					me._ex_thumb_area_m.ggSetImage("assets/thumb_menu/langsen.jpg");
				}
				else if (me._ex_thumb_area_m.ggCurrentLogicStateExternalUrl == 1) {
					me._ex_thumb_area_m.ggSetImage("assets/thumb_menu/khutuongniem.jpg");
				}
				else if (me._ex_thumb_area_m.ggCurrentLogicStateExternalUrl == 2) {
					me._ex_thumb_area_m.ggSetImage("assets/thumb_menu/langhoangtru.jpg");
				}
				else if (me._ex_thumb_area_m.ggCurrentLogicStateExternalUrl == 3) {
					me._ex_thumb_area_m.ggSetImage("assets/thumb_menu/mobahoangthiloan.jpg");
				}
				else if (me._ex_thumb_area_m.ggCurrentLogicStateExternalUrl == 4) {
					me._ex_thumb_area_m.ggSetImage("assets/thumb_menu/langkimlien.jpg");
				}
				else {
					me._ex_thumb_area_m.ggSetImage("");
				}
			}
		}
		me._ex_thumb_area_m.logicBlock_externalurl();
		me._ex_thumb_area_m.onclick=function (e) {
			if (me._ex_thumb_area_m.isDragging()) return;
			skin._category_cloner.ggText=me.ggTag;
			if (skin._category_cloner.ggText=='') {
				skin._category_cloner.ggUpdate([]);
			} else {
				skin._category_cloner.ggUpdate(skin._category_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('open_tag', "_nop_");
		}
		me._ex_thumb_area_m.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ex_thumb_area_m.clientWidth;
			var parentHeight = me._ex_thumb_area_m.clientHeight;
			var img = me._ex_thumb_area_m__img;
			var aspectRatioDiv = me._ex_thumb_area_m.clientWidth / me._ex_thumb_area_m.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentHeight = parentHeight;
			currentWidth = Math.round(parentHeight * aspectRatioImg);
			img.style.width='';
			img.style.height=parentHeight + 'px';
			if (!me._ex_thumb_area_m.ggScrollbars || currentWidth < me._ex_thumb_area_m.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ex_thumb_area_m.scrollLeft=currentWidth / 2 - me._ex_thumb_area_m.clientWidth / 2;
			}
			if (!me._ex_thumb_area_m.ggScrollbars || currentHeight < me._ex_thumb_area_m.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ex_thumb_area_m.scrollTop=currentHeight / 2 - me._ex_thumb_area_m.clientHeight / 2;
			}
		}
		el=me._active_ball_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._active_ball_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="active_ball_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #01a79d;';
		hs+='border : 3px solid #011627;';
		hs+='border-radius : 999px;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._active_ball_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._active_ball_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._active_ball_m.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._active_ball_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._active_ball_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._active_ball_m.style.transition='opacity 200ms ease 0ms';
				if (me._active_ball_m.ggCurrentLogicStateAlpha == 0) {
					me._active_ball_m.style.visibility=me._active_ball_m.ggVisible?'inherit':'hidden';
					me._active_ball_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._active_ball_m.style.opacity == 0.0) { me._active_ball_m.style.visibility="hidden"; } }, 205);
					me._active_ball_m.style.opacity=0;
				}
			}
		}
		me._active_ball_m.logicBlock_alpha();
		me._active_ball_m.ggUpdatePosition=function (useTransition) {
		}
		me._ex_thumb_area_m.appendChild(me._active_ball_m);
		el=me._tt_area_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._tt_area_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._tt_area_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_area_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(253,255,252,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((110px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(58,58,58,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="display: flex; justify-content: center; align-items: flex-end; padding: 3px 3px 3px 3px; max-width: 110px; max-height: 65px;";
		els.setAttribute('style',hs);
		me._tt_area_m.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_area_m.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._tt_area_m.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_area_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_area_m.ggUpdatePosition=function (useTransition) {
		}
		me._ex_thumb_area_m.appendChild(me._tt_area_m);
		me.__div.appendChild(me._ex_thumb_area_m);
		me._ex_thumb_area_m.logicBlock_externalurl();
		me._active_ball_m.logicBlock_alpha();
			me.ggEvent_changenode=function(event) {
				me._active_ball_m.logicBlock_alpha();
			};
			me.ggEvent_clonerchanged=function(event) {
				me._ex_thumb_area_m.logicBlock_externalurl();
			};
	};
	function SkinCloner_category_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='330px';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 290;
		el.ggHeight = 130;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 130px;';
		hs+='left : 15px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me.__div.appendChild(me._node_cloner);
		el=me._category=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="padding: 0px 15px 0px 10px; display: flex; align-items: center; border-bottom: 1px solid rgba(1, 22, 39, 0.3);";
		els.setAttribute('style',hs);
		me._category.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category.ggUpdateText();
		});
		el.appendChild(els);
		me._category.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._category.ggIsActive() == true)) || 
				((me.elementMouseOver['category'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._category.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._category.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._category.style.transition='color 200ms ease 0ms';
				if (me._category.ggCurrentLogicStateTextColor == 0) {
					me._category.style.color="rgba(85,255,255,1)";
				}
				else {
					me._category.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._category.logicBlock_textcolor();
		me._category.onclick=function (e) {
			if (me._category.isDragging()) return;
			if (
				(
					((player.getVariableValue('open_tag') == me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', true);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', false);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
			if (
				(
					((player.getVariableValue('close_nodes') == true))
				)
			) {
				player.setVariableValue('open_tag', "_nop_");
			}
		}
		me._category.onmouseover=function (e) {
			me.elementMouseOver['category']=true;
			me._category.logicBlock_textcolor();
		}
		me._category.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._category__text)
					return;
				}
			}
			me.elementMouseOver['category']=false;
			me._category.logicBlock_textcolor();
		}
		me._category.ggCurrentLogicStateTextColor = -1;
		me._category.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['category']) {
				me.elementMouseOver['category']=true;
			}
		}
		me._category.ggUpdatePosition=function (useTransition) {
		}
		el=me._show_menu=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._show_menu;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._show_menu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAzNiA2NCI+CiA8cGF0aCBkPSJNMS43LDYxLjRWMi42QTEuNiwxLjYsMCwwLDEsMy4zLDFhMS41OSwxLjU5LDAsMCwxLDEuMTMuNDdsMjkuNCwyOS40YTEuNjEsMS42MSwwLDAsMSwwLDIuMjZMNC40Myw2Mi41M0ExLjYsMS42LDAsMCwxLDEuNyw2MS40WiIgZmlsbD0iIzAxMTYyNyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._show_menu__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show_menu";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 16px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._show_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._show_menu.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('open_tag') == me.ggTag))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._show_menu.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._show_menu.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._show_menu.style.transition='transform 0s';
				if (me._show_menu.ggCurrentLogicStateAngle == 0) {
					me._show_menu.ggParameter.a = 90;
					me._show_menu.style.transform=parameterToTransform(me._show_menu.ggParameter);
				}
				else {
					me._show_menu.ggParameter.a = 0;
					me._show_menu.style.transform=parameterToTransform(me._show_menu.ggParameter);
				}
			}
		}
		me._show_menu.logicBlock_angle();
		me._show_menu.ggUpdatePosition=function (useTransition) {
		}
		me._category.appendChild(me._show_menu);
		me.__div.appendChild(me._category);
		me._category.logicBlock_textcolor();
		me._node_cloner.style['display']='none';
		var p = me._node_cloner.parentElement;
		while (p != null && p!==this.divSkin) {
			if (p.ggType && p.ggType == 'cloner') {
				if (p.ggAutoPosition) {
					p.ggAutoPosition(false);
				}
			}
			if (p.ggType && p.ggType == 'scrollarea') {
				if (p.ggUpdatePosition) {
					p.ggUpdatePosition();
				}
			}
			p = p.parentElement;
		}
		me._show_menu.logicBlock_angle();
			me.ggEvent_activehotspotchanged=function(event) {
				for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
					me._node_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
				}
			};
			me.ggEvent_changenode=function(event) {
				for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
					me._node_cloner.ggInstances[i].ggEvent_changenode(event);
				}
				me._node_cloner.ggUpdateConditionNodeChange();
				me._category.logicBlock_textcolor();
				if (
					(
						((me._category.ggIsActive() == true)) && 
						((player.getVariableValue('category_follow_1') == true))
					)
				) {
					player.setVariableValue('open_tag', me.ggTag);
				}
				me._show_menu.logicBlock_angle();
			};
			me.ggEvent_changevisitednodes=function(event) {
				for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
					me._node_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
				}
			};
			me.ggEvent_configloaded=function(event) {
				for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
					me._node_cloner.ggInstances[i].ggEvent_configloaded(event);
				}
				me._show_menu.logicBlock_angle();
			};
			me.ggEvent_varchanged_open_tag=function(event) {
				if (
					(
						((player.getVariableValue('open_tag') != me.ggTag))
					)
				) {
					me._node_cloner.ggText="_nop_";
					if (me._node_cloner.ggText=='') {
						me._node_cloner.ggUpdate([]);
					} else {
						me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
					}
					skin.updateSize(skin.divSkin);
				}
				if (
					(
						((player.getVariableValue('open_tag') != me.ggTag))
					)
				) {
					me._node_cloner.style['display']='none';
					var p = me._node_cloner.parentElement;
					while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'cloner') {
							if (p.ggAutoPosition) {
								p.ggAutoPosition(false);
							}
						}
						if (p.ggType && p.ggType == 'scrollarea') {
							if (p.ggUpdatePosition) {
								p.ggUpdatePosition();
							}
						}
						p = p.parentElement;
					}
				}
				if (
					(
						((player.getVariableValue('open_tag') == me.ggTag))
					)
				) {
					me._node_cloner.ggText=me.ggTag;
					if (me._node_cloner.ggText=='') {
						me._node_cloner.ggUpdate([]);
					} else {
						me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
					}
					skin.updateSize(skin.divSkin);
				}
				if (
					(
						((player.getVariableValue('open_tag') == me.ggTag))
					)
				) {
					me._node_cloner.style['display']='inline';
					var p = me._node_cloner.parentElement;
					while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'cloner') {
							if (p.ggAutoPosition) {
								p.ggAutoPosition(false);
							}
						}
						if (p.ggType && p.ggType == 'scrollarea') {
							if (p.ggUpdatePosition) {
								p.ggUpdatePosition();
							}
						}
						p = p.parentElement;
					}
				}
				me._show_menu.logicBlock_angle();
			};
			me.ggEvent_viewerinit=function(event) {
				me._node_cloner.ggUpdate();
			};
	};
	function SkinCloner_cloner_area_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: hidden;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._tt_area_list=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._tt_area_list;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._tt_area_list__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_area_list";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text be-vn-pro";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden; text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 19px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="display: flex; align-items: center; padding: 5px 5px 5px 15px; max-width: 270px; max-height: 50px;";
		els.setAttribute('style',hs);
		me._tt_area_list.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_area_list.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._tt_area_list.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_area_list.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_area_list.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['tt_area_list'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._tt_area_list.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._tt_area_list.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._tt_area_list.style.transition='transform 300ms ease 0ms, color 0s';
				if (me._tt_area_list.ggCurrentLogicStateScaling == 0) {
					me._tt_area_list.ggParameter.sx = 1.1;
					me._tt_area_list.ggParameter.sy = 1.1;
					me._tt_area_list.style.transform=parameterToTransform(me._tt_area_list.ggParameter);
					setTimeout(function() {skin.updateSize(me._tt_area_list);}, 350);
				}
				else {
					me._tt_area_list.ggParameter.sx = 1;
					me._tt_area_list.ggParameter.sy = 1;
					me._tt_area_list.style.transform=parameterToTransform(me._tt_area_list.ggParameter);
					setTimeout(function() {skin.updateSize(me._tt_area_list);}, 350);
				}
			}
		}
		me._tt_area_list.logicBlock_scaling();
		me._tt_area_list.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['tt_area_list'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._tt_area_list.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._tt_area_list.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._tt_area_list.style.transition='transform 300ms ease 0ms, color 0s';
				if (me._tt_area_list.ggCurrentLogicStateTextColor == 0) {
					me._tt_area_list.style.color="rgba(255,170,255,1)";
				}
				else {
					me._tt_area_list.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._tt_area_list.logicBlock_textcolor();
		me._tt_area_list.onclick=function (e) {
			if (me._tt_area_list.isDragging()) return;
			if (
				(
					((me.ggTag != "dn_tongquan"))
				)
			) {
				player.setVariableValue('show_menu_thumb', true);
			}
			skin._category_cloner.ggText=me.ggTag;
			if (skin._category_cloner.ggText=='') {
				skin._category_cloner.ggUpdate([]);
			} else {
				skin._category_cloner.ggUpdate(skin._category_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('open_tag', "_nop_");
			if (
				(
					((me.ggTag == "tq"))
				)
			) {
				player.openNext("{node66}","");
			}
			if (
				(
					((me.ggTag == "langsen"))
				)
			) {
				player.openNext("{node76}","");
			}
			if (
				(
					((me.ggTag == "khutuongniem"))
				)
			) {
				player.openNext("{node79}","");
			}
			if (
				(
					((me.ggTag == "langhoangtru"))
				)
			) {
				player.openNext("{node90}","");
			}
			if (
				(
					((me.ggTag == "khumohoangthiloan"))
				)
			) {
				player.openNext("{node118}","");
			}
		}
		me._tt_area_list.onmouseover=function (e) {
			skin._thumbmenuex.ggSubElement.src=skin._thumbmenuex.ggText;
			skin._thumbmenuex.style.transition='none';
			skin._thumbmenuex.style.visibility=(Number(skin._thumbmenuex.style.opacity)>0||!skin._thumbmenuex.style.opacity)?'inherit':'hidden';
			skin._thumbmenuex.ggVisible=true;
			skin._thumbmenuex.ggSubElement.src=skin._thumbmenuex.ggText;
			player.setVariableValue('tint_thumb_menu', true);
			if (
				(
					((me.ggTag == "tq"))
				)
			) {
				skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/langkimlien.jpg");
			}
			if (
				(
					((me.ggTag == "langsen"))
				)
			) {
				skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/langsen.jpg");
			}
			if (
				(
					((me.ggTag == "khutuongniem"))
				)
			) {
				skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/khutuongniem.jpg");
			}
			if (
				(
					((me.ggTag == "langhoangtru"))
				)
			) {
				skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/langhoangtru.jpg");
			}
			if (
				(
					((me.ggTag == "khumohoangthiloan"))
				)
			) {
				skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/mobahoangthiloan.jpg");
			}
			me.elementMouseOver['tt_area_list']=true;
			me._rectangle_1.logicBlock_backgroundcolor();
			me._tt_area_list.logicBlock_scaling();
			me._tt_area_list.logicBlock_textcolor();
		}
		me._tt_area_list.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._tt_area_list__text)
					return;
				}
			}
			skin._thumbmenuex.ggSubElement.src='';
			skin._thumbmenuex.style.transition='none';
			skin._thumbmenuex.style.visibility='hidden';
			skin._thumbmenuex.ggVisible=false;
			player.setVariableValue('tint_thumb_menu', false);
			me.elementMouseOver['tt_area_list']=false;
			me._rectangle_1.logicBlock_backgroundcolor();
			me._tt_area_list.logicBlock_scaling();
			me._tt_area_list.logicBlock_textcolor();
		}
		me._tt_area_list.ggCurrentLogicStateScaling = -1;
		me._tt_area_list.ggCurrentLogicStateTextColor = -1;
		me._tt_area_list.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['tt_area_list']) {
				skin._thumbmenuex.ggSubElement.src=skin._thumbmenuex.ggText;
				skin._thumbmenuex.style.transition='none';
				skin._thumbmenuex.style.visibility=(Number(skin._thumbmenuex.style.opacity)>0||!skin._thumbmenuex.style.opacity)?'inherit':'hidden';
				skin._thumbmenuex.ggVisible=true;
				skin._thumbmenuex.ggSubElement.src=skin._thumbmenuex.ggText;
				player.setVariableValue('tint_thumb_menu', true);
				if (
					(
						((me.ggTag == "tq"))
					)
				) {
					skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/langkimlien.jpg");
				}
				if (
					(
						((me.ggTag == "langsen"))
					)
				) {
					skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/langsen.jpg");
				}
				if (
					(
						((me.ggTag == "khutuongniem"))
					)
				) {
					skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/khutuongniem.jpg");
				}
				if (
					(
						((me.ggTag == "langhoangtru"))
					)
				) {
					skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/langhoangtru.jpg");
				}
				if (
					(
						((me.ggTag == "khumohoangthiloan"))
					)
				) {
					skin._thumbmenuex.ggSetImage(basePath + "assets\/thumb_menu\/mobahoangthiloan.jpg");
				}
				me.elementMouseOver['tt_area_list']=true;
				me._rectangle_1.logicBlock_backgroundcolor();
			}
		}
		me._tt_area_list.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 44px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['tt_area_list'] == true)) || 
				((me._rectangle_1.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_1.style.transition='background-color 300ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_1.style.backgroundColor="rgba(255,138,0,1)";
				}
				else {
					me._rectangle_1.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_1.logicBlock_backgroundcolor();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._tt_area_list.appendChild(me._rectangle_1);
		me.__div.appendChild(me._tt_area_list);
		me._tt_area_list.logicBlock_scaling();
		me._tt_area_list.logicBlock_textcolor();
		me._rectangle_1.logicBlock_backgroundcolor();
			me.ggEvent_changenode=function(event) {
				if (
					(
						((me._tt_area_list.ggIsActive() == true))
					)
				) {
					skin._category_cloner.ggText=me.ggTag;
					if (skin._category_cloner.ggText=='') {
						skin._category_cloner.ggUpdate([]);
					} else {
						skin._category_cloner.ggUpdate(skin._category_cloner.ggText.split(','));
					}
					skin.updateSize(skin.divSkin);
				}
				me._rectangle_1.logicBlock_backgroundcolor();
			};
	};
	function SkinCloner_cloner_next_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._tt_next=document.createElement('div');
		els=me._tt_next__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_next";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(1,22,39,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 10px 0px 10px;';
		hs+='overflow: hidden;';
		hs+="padding: 0px 10px; background: rgb(186,186,186); background: linear-gradient(0deg, rgba(186,186,186,1) 0%, rgba(255,255,255,1) 100%); box-shadow: -5px 5px 2px -2px rgba(0, 0, 0, 0.3); border-radius: 25px; display: flex; justify-content: center; align-items: center;";
		els.setAttribute('style',hs);
		me._tt_next.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_next.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_next.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_next.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._tt_next.ggUpdatePosition=function (useTransition) {
		}
		el=me._next_arrow=document.createElement('div');
		els=me._next_arrow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5LjkgMjkuOCI+CiA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDExNjI3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41IiBwb2ludHM9IjAuNiAwLjQgOS4xIDE0LjkgMC42IDI5LjQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._next_arrow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="next_arrow";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._next_arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._next_arrow.ggUpdatePosition=function (useTransition) {
		}
		me._tt_next.appendChild(me._next_arrow);
		me.__div.appendChild(me._tt_next);
	};
	function SkinHotspotClass_ht_ring(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_ring=document.createElement('div');
		el.ggId="ht_ring";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 361px;';
		hs+='position : absolute;';
		hs+='top : 208px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_ring.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_ring.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_ring.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_ring.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_ring']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_ring.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_ring']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_ring.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_ring']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_ring']=true;
			}
		}
		me._ht_ring.ggUpdatePosition=function (useTransition) {
		}
		el=me._ring=document.createElement('div');
		els=me._ring__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIiB2aWV3Qm94PSIwIDAgNjQgMzcuMSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgIDxyZWN0IHk9Ii05LjQiIHdpZHRoPSIxMzIuNSIgZmlsbD0ibm9uZSIgeD0iLTM1LjIiIGhlaWdodD0iNTUuOTkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTIiPgogICA8cGF0aCBkPSJNMzIsOC43Yy0xMS43LDAtMjEuMiw0LTIxLjIsOXM5LjUsOC'+
			'45LDIxLjIsOC45LDIxLjItNCwyMS4yLTguOS05LjUtOS0yMS4yLTltMCwyMS42Yy0xNi41LDAtMjkuOS01LjYtMjkuOS0xMi42UzE1LjUsNS4xLDMyLDUuMXMyOS45LDUuNiwyOS45LDEyLjZTNDguNSwzMC4zLDMyLDMwLjNNOTctOS4zSC0zNVY0Ni41SDk3Vi05LjMiIGZpbGw9Im5vbmUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPgogICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSI5Ny4yIDQ2LjYgLTM1LjIgNDYuNiAtMzUuMiAtOS40IDk3LjIgLTkuNCA5Ny4yIDQ2LjYiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgc3R5bGU9Imlzb2xh'+
			'dGlvbjppc29sYXRlIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgtMikiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aC0zKSI+CiAgICAgPGltYWdlIHdpZHRoPSIxMzMiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSVVBQUFBNENBWUFBQURUamp1WEFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFNV0VsRVFWUjRYdTJhVzJ3ZDEzV0d2My9QekxueElsS2tMRkhVelpKbFdWWm9TYlpjSjdZTEowRml4QzNRRkFnS0dINXBnTFJBKzlCbm8wWF'+
			'JGbWpUQUNtSytLSHZSWkVpYnkwQ05FVUNCR2lCUHFTeVlWdVNyUnNsU3haRlhVaFJ2QitTNXpLelZ4LzJPU2JUWTFsdVlVbEg5bnpBOEpERTRNek1ubTltcjczV2twbVJrN01SZDdjZGNyNTQ1RkxrZEpCTGtkTkJMa1ZPQjdrVU9SM2tVdVIwa0V1UjAwRXVSVTRIdVJRNUhlUlM1SFNRUzVIVFFTNUZUZ2U1RkRrZHhIZmI0ZlBFdDE5NVdaTlhyK3BxTGRPQndUNHRWaHRLZTRwcTFtb2Y3WlBFQ1VsOTFaTGVQbHU2TlVWL1g1L2Z2bjI3L2V5WC8vR0ZLU2ZyODFZNjM3dDdsNFlHK3FONm94RVRGd3BwbGhYVExDc0p5cUJLNXEyTStaS1RTczZwNkNFMmNBNEU0STNNUVFZMHZLaGoxSnkwWmo1YmxZdld6'+
			'S2RyVVp6VXkwNk50YlRaN0MrWHN6ZFB2dS92Y2xvUEZRKzlGQzgrKzdTYnZIVTdMaFVySmNYcXRjd0d3SWE4OTFza2JRVWVFUXdCZ3diOWh2VUNaYUVpVUFBaWZtMGFOUS95aGpXRkdzQWFzQW9zQVF2QUxEQUQzSks0WmJnWk16K2ZaZGt5U2FIbVZwY2FmL2hIZit4Zi83TS9mMmdIOXFHVDRnKys5ejJkZXUrVVcxMWFMRFNNWHNHUXBGRnY3QlRzQVhZQjI0RXR3QURRQTVTQWhIVUIyaElJa0xFK0Jnby8yLzh3d0FQZXdBdFNvQTYyS3JSa2NCdTRDVXdDRTg1cHdveHJPRzVIYUdrVlZ5dG5qZlRjaFE4ZXFrRithS1I0K2FVWDNYUzFYbGhiV2VxUlp3dGlsNW50Qng0SDlnRTdnR0dnMTZDb0VDODV3bj'+
			'IyRFpzblRBOCtiT1piRXJRSFFxeUxFN0V1a3NKbTJyQi9CalRBVmtEendBM0VGWXdMd0VXa0R5Vk5sV0N4MGNqcTV5NWZ6SGdJNkhvcG5qMzhKYmZXVEl0TnVVM1d6RWJCRGdDSGdDZUJ2Y0FqUUM5UUJLTFdUV3ZkY0pwQWpmRDZYd1lXdzJhTG9CVmdCYWkzOXZNR2FzbFVNS2dvZkc4L3NLbjEyUS8wR0pRVnBwNjJPQkFFYWJhT05RdGNCY1lGNzJmWXVVanhWUnl6dFpYbDFZbXIxN3BhanE2Vll2ZU9VU1hsVWlGMlViK2hIZDc3ZzVLT0dueEpRWVl0aGxXRUVqQVplRkNxRUFNc0V1Yjk2OENrWWRjazNjQ1lNWmgzVHN1RzFpU2FwTDdwWXVjdGlpMnJyZUxpZ2lQTFlwd1NvR3hHajZSTlpqWnNzRTJ3'+
			'QTJ3bmFBZXdqVEJGVlZpWFJHQXBxQTdNZ1UwQ1owQW5FYWNUNlVxRW43MTJjN28ydDdqVWxRRnFWMHB4NU5BVFVUV2o0bnkyRmZTNFlVOExQUTBjQUVZSWNVSk1lS1Zuckl0d0E3Z01YQUM3SUxrSjBEUnh0R0QxMVpWaVlUQWxXOHBPWDdqazdWTmMrRk5qWXpwN2Zsekhqb3hGeTlWcTdLV1NaZGJ2elErYnNWUFNmdUNBd1Q3QlRva2hiMVRVZVc2endDV3dVNkMzRmVsTTV2MjFvWEpsK2ZpSms2bWt1NTdML2FUcnBQaU53MlB4YXByMTE5TjBwOHpHaEo3ejJCR2h2WVNuc2toNElqUEMxREFITmdFNkEvYWVtYzRsU1RRWkpjbXN5OUxWa1MzRDZTLys4Nzgrc3lleVVDaG8xN1l0VVU5bG9GVHo2WUNaMz'+
			'Q3MHVNR1lZSXdRM3p4Q2VIdTA4MEFwWWZWeURYZ2ZlQXZ4TGhtWGxkWG1ubi9oeGVZLy92TlB1dVpHZEpVVWp4NDhHQmN0NjBkdXQ4LzhFY08rTEhTVXNLcm9KNndnTUdocWZaRFBBTzhBcDZJNHVteHlzNzVhVy91ckgveTFmKzIxMSs3cHhYMzlONTkzMHpkbkM0M0lEemk1bldaMkNMTm5RSWVCUjRITnJFdWNFbUtZRzhBWnNPTklienZwWXIzWm5IdjFPOTlwL09DSGYzZFB6L2ZUMGpWU2pCMDlHdFZXcWowdWluWlk1ZytEUFE4NlJvZ2ZCbGgvNmhyQVBIQUpPSUU0anRscDU2SkpLNWFxNDZkT051OXdpSHZHN3UzYlhLRi9zQktSYmZYR0FZeG5nV2VCSndodmpUSllCTXJBcXFEcndDbmdWNEszemV4'+
			'eUlZa1hUcDg5ZDkvUC9lUG9pdHJIZC8veWgzS3BUK1RVTCs5SGdmMkdIZ05HTEt3QUlzTkVlTm9XZ1NzR0o4enN2L0djTE1USmhNc2FTdzlDQ0lDSkcxTitmbVo2UlhIaHB1VE9TTHhwOEpiQkJjUXNVRyt0aUJ5b1FzaWhQQW84N3MxMkcyeXVaMWI2NnZQUGRjWDk2SXFUT1AxdlAxRWpheGJ3MnVSRFJEK3E4SVQxQ1JMRG5NS2cxb0Jad3o0VWpEdTRWQ3pFdHhiV2FpdG5MMTUrb011ODI3TnpGalZydFRXWU5jOFZpWEhCSll3cHdqSTFhNGtkRWVLTllXQlUwcWpFa1BOV1hsaGNhaTl2SHloZElVV3ByOTk1VVhDaUYyT1E5VXhrd3ZvNVpzQ2FZUXRDMDJCVG1iZTVhcjIrZG5EWDZBTVZvczNwOFE5OE'+
			'hNVU5JaTBCTTJCVGhzMFJwRWdWa2w2T01CV1dnVTFnZ3liMTRTaG1Qbk03dG8vb0V3NXhYK2dLS2M2ZFBrM3N2Zk5CZ29RUW5HM01TQUpna0FrMUVEWEoxU0twMlpkRS9zYnR1VHQ4OC8xbmRuN0JSMFNwNU9wSU5hR0doV25QQUF6RFFrclVtVmtFaWlNVVdlVGNxdUlITGdSMGlSU2JoN2ZnUThxNVFhZ3QxQkJwU0VpdHA1OFZLcG9sakI3REt1WlVSSW9tcjA1OHdyZmZYeDdic2puS0xDMlk5MlVMNTFuUytodFBRcWFRZHMwa05ZRzZOMnRhTTAxN0xiVS8rZHNmM2VVSTk1NnVrR0xIMElDUEkxZVhVUlhNZ2VZd2xoVldHdTBjZ3dOS2drRmdHOFoySnczVlVpcTdSN2QzUlYvSVMxOTdLVnF1MTB1Q0FU'+
			'TWJFV3dIRFJPbXdzamFMd3RvR3JaaU1DOHhKN1NFYy9WcVp2NzE3Nzc2d0plRFhTSEZTeSsvWW9xVGhqa1dKTjAwN0NyWVRXRFJvQkdDVEhPRWF1Y1FZWmw2eUpzOUljZG8wMXpmVTJPSEhxZ1lMeHc3Nm1hbjU4dk8ySUt4VDlJaFlMK0RiUllDeTZnVlU2VEFpdENNNEpxaDZ4NmJqYU40TFYxZFRULzVLUGVIcnNsVHZIRHNxSnRiV2F0a2FUYUNOR2J3RllXMS9uNUNFaWdoeEJmdFplbUU0SlNKdDV4MEVybUpRcW0wVUZ0YWJGeTRkUG0rWHRTUmd3ZmlGYUplbDJVamhqOEVlaFo0QnRodk1Dd290bFpRN2N6bVZiQ1RvRjhaOW82VEpnWUhCNWVPSDM4emwrSi9zMy9YZ2NoVjZQVm1vektlQXI1TUdOeD'+
			'loR21qME5vMUE2cUNLWVB6d0FuZ2hLU0xTWkxjR3VpcFZNOWYvQ0M5UFRkM3p5NU9rbDc1K2t2UmxhbVprcGtmOG1tMmg1RG1mc1pDRlhjWG9icTZVZVpsUWhiMlBZUGpRdTlJK3REaWFPSENtVE9OT3h6cXZ0TlZVZ0I4KzF2ZmpDNWR1OUZUYXpSR0luVElteDJUT0FiYVQxamJsMXJaUVUrSU9aYUE2OVlxVTRPZGtZcy96UERUaHBaVjlZMVhmLy8zL045OC8vdWZ5WVh1R1IxeHcwTkR5YkxSb3l3YnRqVGI1ZUdnZ3pFUFR3amJEUm9rTERrajFrdjRDOEFWNEJUWVcwS253Q1lLc1Z0OC8rejRBMG02M1ltdWt3TGd0Ny94TlhkMjhucXBLQTE3czcxbUhGRjRZendKakxMK0JEckNvRGVBS3FGY2Z0WGdv'+
			'dUFpNGtOTTE4SFBKbkZTelJwcnRTUkptcEdVN2R1NzEvN2xaeisvNDhWLzlZV3ZhR3BxU3NPYk43c3Jjd3Z4WUtWY1ROTzB4OHdHdmJkdHdCN0RIaE42bkpDZDNHclFyeEQzUklTQXNsM3ZtQVl1QUNjazNoVnV2QkluVTVOWnRqSnovbXhYVEJrYjZVb3BBTjU0NHczOXc0LytQbzdLbFI2aGJUN0w5aU1kQnA0aWRGdU5BSDJzOXpHWVlWbXJyN0pLcUkvY0loU2cydHMwWXRZYmkwNWFGVll6byttY3ZEbG5saGxPMWtvdXFZajVzb2Mrak0xZ2o0QkdDSzErbzRUTTZ4RFFaMkZWMU83UU1nc0Z1eFhCaklWUy9tbkVLZEE1RjBmWGszTFA0cFh6NStyTDFXcFhEbjdYU3RIbXVhZVBLRzAwa3JxcHQ1R21Xd1'+
			'Y3emV4SndyejlHT0VtRGZKUkg2YTVWcjZyM1hhM3NmdXEydDRNcXdxdEdWWnZCWUFHaGxEc3pSSkpaYUFDMWd2cWs5UnJadTErendLZDdYNnQvazJXSktiTnVBeWNSWnlSY1RFdUZtNW11TVdLTmV2dm5qNzNtWlh5N3dWZEwwV2JBL3YyYW5FK2pZWjNiS28wYW8xQlpDUEFYalAyQzNzTXRCdll5cTkzUWtVUStpb05hQzBKelREZit0Mkh2OWs0Q0JMdGZzeU52WmtmYmJEZXpOdFVFRzdKWUVZaGlMeGsySVZJN3BLSHlVUnV0aEN6OHVqdTNjMS8vZmRmZExVTWJSNGFLVGJ5M05OSFhIMXRMVjV0WmlVbDhRRG10MkNNbXJITHNGMEtyWEpiQ2EvM2ZxQmlXREcwN24xc1IvZkhZYTNORTRwWlRhRjJEK2JH'+
			'NmVrNk1JbVlFRnlUTkczbTV5TnpLNFdZNXNtejQxMVJsL20vOEZCS3NaRy8rTlBYOVU4Ly9yR0xldm9LUmFkU2xtVzlNZzFtMkdZbkRSTjZPWWVBelVLYkNIRklqMkZGb0NBVXN5RWVJQWlRQ3BxRVBzdFZzR1hRRWtHRU9UT2JFZHdtMGl5bWVSZEh5OFdNMWJwOFkvejhlUHBwV3YyNm1ZZGVpbzlqZUdpekRqeTZKN3EydUJ6M0ZBcEpQVTBMOGxrUmM2WElVVFNzWkZKQjNpZUdZb25JRERubnlMelBJcEdhbE1xc1lZcHE1ck1hb2k2am5zU2xSa05abzVTbWFhRVFaZTkwZVh6dy8rRnpLY1VuRVVXUmZ1ZGIzOVJQSjI0eGxpNUxFdU5OMFpja3lnemJvUVlDM2p2L2dmM3ViNzNNVDMvK1MxdGJYYUZVS2'+
			'4xaEJ1b0xKMFhPM2VtS2dsaE9kNUZMa2ROQkxrVk9CN2tVT1Iza1V1UjBrRXVSMDBFdVJVNEh1UlE1SGVSUzVIU1FTNUhUUVM1RlRnZTVGRGtkL0ErcnBiUVZFNE5aandBQUFBQkpSVTVFcmtKZ2dnPT0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNS4yIC05LjQpIiBoZWlnaHQ9IjU2Ii8+CiAgICA8L2c+CiAgIDwvZz4KICAgPHBhdGggZD0iTTMyLDI2LjZjLTExLjcsMC0yMS4yLTQtMjEuMi04LjlzOS41LTksMjEuMi05LDIxLjIsNCwyMS4yLDlTNDMuNywyNi42LDMyLDI2LjZNMzIsNS4xQzE1LjUsNS4xLDIuMSwxMC43LDIuMSwxNy43UzE1LjUsMzAuMywzMiwzMC4zczI5LjktNS42LDI5Ljkt'+
			'MTIuNlM0OC41LDUuMSwzMiw1LjEiIGZpbGw9IiNmZmYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ring__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;animation-name: stretch; animation-duration: 1s; animation-timing-function: ease-out; animation-delay: 0; animation-direction: alternate; animation-iteration-count: infinite; animation-fill-mode: forwards; animation-play-state: running;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ring.ggUpdatePosition=function (useTransition) {
		}
		me._ht_ring.appendChild(me._ring);
		el=me._pin_node_ico=document.createElement('div');
		els=me._pin_node_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA0OS4zIDY0Ij4KIDxwYXRoIGQ9Ik0yNC43LjhBMjMuNSwyMy41LDAsMCwwLDEuMiwyNC4yYzAsMTIuOSwyMy41LDM5LDIzLjUsMzlzMjMuNC0yNi4xLDIzLjQtMzlBMjMuNCwyMy40LDAsMCwwLDI0LjcuOFptMCw0NC4yQTIxLjMsMjEuMywwLDEsMSw0NS45LDIzLjcsMjEuMywyMS4zLDAsMCwxLDI0LjcsNDVaIiBmaWxsPSIjZmZmZjAwIiBmaWxsLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._pin_node_ico__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pin_node_ico";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pin_node_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_node_ico.ggUpdatePosition=function (useTransition) {
		}
		me._ht_ring.appendChild(me._pin_node_ico);
		el=me._hs_logo=document.createElement('div');
		els=me._hs_logo__img=document.createElement('img');
		els.className='ggskin ggskin_hs_logo';
		hs=basePath + 'images/hs_logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_logo";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='left : calc(50% - ((46px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46px + 0px) / 2) - 40px);';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_logo.ggUpdatePosition=function (useTransition) {
		}
		me._ht_ring.appendChild(me._hs_logo);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_ring.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_ring;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 745px;';
		hs+='position : absolute;';
		hs+='top : 372px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_info']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_info']=true;
			}
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_3=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_3.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._lottie_3);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_info.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_node_f(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_f=document.createElement('div');
		el.ggId="ht_node_f";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 483px;';
		hs+='position : absolute;';
		hs+='top : 185px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_node_f.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_f.style.transition='';
				if (me._ht_node_f.ggCurrentLogicStateVisible == 0) {
					me._ht_node_f.style.visibility="hidden";
					me._ht_node_f.ggVisible=false;
				}
				else {
					me._ht_node_f.style.visibility=(Number(me._ht_node_f.style.opacity)>0||!me._ht_node_f.style.opacity)?'inherit':'hidden';
					me._ht_node_f.ggVisible=true;
				}
			}
		}
		me._ht_node_f.logicBlock_visible();
		me._ht_node_f.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),"_blank");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_f.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_f.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_f']=true;
			me._tt_ht_node_f.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_f.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_f']=false;
			me._tt_ht_node_f.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_f.ggCurrentLogicStateVisible = -1;
		me._ht_node_f.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node_f']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node_f']=true;
				me._tt_ht_node_f.logicBlock_backgroundcolor();
			}
		}
		me._ht_node_f.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_logo_node_f=document.createElement('div');
		els=me._hs_logo_node_f__img=document.createElement('img');
		els.className='ggskin ggskin_hs_logo_node_f';
		hs=basePath + 'images/hs_logo_node_f.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_logo_node_f";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='left : calc(50% - ((46px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_logo_node_f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_logo_node_f.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_f.appendChild(me._hs_logo_node_f);
		el=me._tt_ht_node_f=document.createElement('div');
		els=me._tt_ht_node_f__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_f";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((160px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(62,62,62,0);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node_f.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node_f.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node_f.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node_f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_f.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_f'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tt_ht_node_f.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tt_ht_node_f.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tt_ht_node_f__text.style.transition='background-color 0s';
				if (me._tt_ht_node_f.ggCurrentLogicStateBackgroundColor == 0) {
					me._tt_ht_node_f__text.style.backgroundColor="rgba(62,62,62,0.784314)";
				}
				else {
					me._tt_ht_node_f__text.style.backgroundColor="rgba(62,62,62,0)";
				}
			}
		}
		me._tt_ht_node_f.logicBlock_backgroundcolor();
		me._tt_ht_node_f.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_f.appendChild(me._tt_ht_node_f);
		me._ht_node_f.logicBlock_visible();
		me._tt_ht_node_f.logicBlock_backgroundcolor();
			me.ggEvent_changenode=function() {
				me._ht_node_f.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_f.logicBlock_visible();
			};
			me.ggEvent_varchanged_start_intro=function() {
				me._ht_node_f.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node_f.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_f;
	};
	function SkinHotspotClass_ht_node_a(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_a=document.createElement('div');
		el.ggId="ht_node_a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_a.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_a']=true;
			me._tt_ht_location.logicBlock_backgroundcolor();
			me._tt_ht_location.logicBlock_alpha();
			me._tt_ht_location.logicBlock_position();
			me._preview_nodeimage_location.logicBlock_alpha();
			me._preview_nodeimage_location.logicBlock_scaling();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_a']=false;
			me._tt_ht_location.logicBlock_backgroundcolor();
			me._tt_ht_location.logicBlock_alpha();
			me._tt_ht_location.logicBlock_position();
			me._preview_nodeimage_location.logicBlock_alpha();
			me._preview_nodeimage_location.logicBlock_scaling();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node_a']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node_a']=true;
				me._tt_ht_location.logicBlock_backgroundcolor();
				me._tt_ht_location.logicBlock_alpha();
				me._tt_ht_location.logicBlock_position();
				me._preview_nodeimage_location.logicBlock_alpha();
				me._preview_nodeimage_location.logicBlock_scaling();
			}
		}
		me._ht_node_a.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_1=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_1.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 1";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) - 40px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_a.appendChild(me._lottie_1);
		el=me._tt_ht_location=document.createElement('div');
		els=me._tt_ht_location__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_location";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(62,62,62,0.470588);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_location.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_location.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_location.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_location.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_location.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['ht_node_a'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_location.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_location.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_location.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_location.style.left = 'calc(50% - (140px / 2))';
					me._tt_ht_location.style.top='15px';
				}
				else {
					me._tt_ht_location.style.left='calc(50% - ((140px + 0px) / 2) + 0px)';
					me._tt_ht_location.style.top='0px';
				}
			}
		}
		me._tt_ht_location.logicBlock_position();
		me._tt_ht_location.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_location.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_location.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_location.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_location.style.visibility="hidden";
					me._tt_ht_location.ggVisible=false;
				}
				else {
					me._tt_ht_location.style.visibility=(Number(me._tt_ht_location.style.opacity)>0||!me._tt_ht_location.style.opacity)?'inherit':'hidden';
					me._tt_ht_location.ggVisible=true;
				}
			}
		}
		me._tt_ht_location.logicBlock_visible();
		me._tt_ht_location.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_a'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.hotspot.pxp > 30)) && 
				((me.hotspot.pxp < 70))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_ht_location.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_ht_location.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_ht_location.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location.ggCurrentLogicStateAlpha == 0) {
					me._tt_ht_location.style.visibility=me._tt_ht_location.ggVisible?'inherit':'hidden';
					me._tt_ht_location.style.opacity=1;
				}
				else if (me._tt_ht_location.ggCurrentLogicStateAlpha == 1) {
					me._tt_ht_location.style.visibility=me._tt_ht_location.ggVisible?'inherit':'hidden';
					me._tt_ht_location.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_ht_location.style.opacity == 0.0) { me._tt_ht_location.style.visibility="hidden"; } }, 205);
					me._tt_ht_location.style.opacity=0;
				}
			}
		}
		me._tt_ht_location.logicBlock_alpha();
		me._tt_ht_location.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_a'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tt_ht_location.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tt_ht_location.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tt_ht_location__text.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location.ggCurrentLogicStateBackgroundColor == 0) {
					me._tt_ht_location__text.style.backgroundColor="rgba(62,62,62,0.784314)";
				}
				else {
					me._tt_ht_location__text.style.backgroundColor="rgba(62,62,62,0.470588)";
				}
			}
		}
		me._tt_ht_location.logicBlock_backgroundcolor();
		me._tt_ht_location.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_a.appendChild(me._tt_ht_location);
		el=me._preview_nodeimage_location=document.createElement('div');
		els=me._preview_nodeimage_location__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_location_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 2px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview_NodeImage_location";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.34,sy:0.34,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((160px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px; border: 2px solid #ffffff; overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._preview_nodeimage_location.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage_location.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_a'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._preview_nodeimage_location.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._preview_nodeimage_location.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._preview_nodeimage_location.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_location.ggCurrentLogicStateScaling == 0) {
					me._preview_nodeimage_location.ggParameter.sx = 1;
					me._preview_nodeimage_location.ggParameter.sy = 1;
					me._preview_nodeimage_location.style.transform=parameterToTransform(me._preview_nodeimage_location.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_location);}, 550);
				}
				else {
					me._preview_nodeimage_location.ggParameter.sx = 0.34;
					me._preview_nodeimage_location.ggParameter.sy = 0.34;
					me._preview_nodeimage_location.style.transform=parameterToTransform(me._preview_nodeimage_location.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_location);}, 550);
				}
			}
		}
		me._preview_nodeimage_location.logicBlock_scaling();
		me._preview_nodeimage_location.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._preview_nodeimage_location.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._preview_nodeimage_location.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._preview_nodeimage_location.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_location.ggCurrentLogicStateVisible == 0) {
					me._preview_nodeimage_location.style.visibility="hidden";
					me._preview_nodeimage_location.ggVisible=false;
				}
				else {
					me._preview_nodeimage_location.style.visibility=(Number(me._preview_nodeimage_location.style.opacity)>0||!me._preview_nodeimage_location.style.opacity)?'inherit':'hidden';
					me._preview_nodeimage_location.ggVisible=true;
				}
			}
		}
		me._preview_nodeimage_location.logicBlock_visible();
		me._preview_nodeimage_location.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_a'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._preview_nodeimage_location.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._preview_nodeimage_location.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._preview_nodeimage_location.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_location.ggCurrentLogicStateAlpha == 0) {
					me._preview_nodeimage_location.style.visibility=me._preview_nodeimage_location.ggVisible?'inherit':'hidden';
					me._preview_nodeimage_location.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._preview_nodeimage_location.style.opacity == 0.0) { me._preview_nodeimage_location.style.visibility="hidden"; } }, 505);
					me._preview_nodeimage_location.style.opacity=0;
				}
			}
		}
		me._preview_nodeimage_location.logicBlock_alpha();
		me._preview_nodeimage_location.ggUpdatePosition=function (useTransition) {
		}
		el=me._ico_view_active=document.createElement('div');
		els=me._ico_view_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDU1N2Y7IGZpbGwtb3BhY2l0eToxIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIiBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzEuODIsMjEuODZBMTcuNywxNy43LDAsMCwwLDE2LD'+
			'MxLjYxYTE3LjcsMTcuNywwLDAsMCwzMiwuNzhBMTcuNywxNy43LDAsMCwwLDMxLjgyLDIxLjg2WiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4Ii8+CiAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHgiIGN4PSIzMiIgY3k9IjMyIiByPSI1LjMzIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ico_view_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ico_view_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ico_view_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ico_view_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ico_view_active.ggElementNodeId()) == true)) || 
				((me._ico_view_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ico_view_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ico_view_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ico_view_active.style.transition='';
				if (me._ico_view_active.ggCurrentLogicStateVisible == 0) {
					me._ico_view_active.style.visibility=(Number(me._ico_view_active.style.opacity)>0||!me._ico_view_active.style.opacity)?'inherit':'hidden';
					me._ico_view_active.ggVisible=true;
				}
				else {
					me._ico_view_active.style.visibility="hidden";
					me._ico_view_active.ggVisible=false;
				}
			}
		}
		me._ico_view_active.logicBlock_visible();
		me._ico_view_active.ggUpdatePosition=function (useTransition) {
		}
		me._preview_nodeimage_location.appendChild(me._ico_view_active);
		me._ht_node_a.appendChild(me._preview_nodeimage_location);
		me._tt_ht_location.logicBlock_position();
		me._tt_ht_location.logicBlock_visible();
		me._tt_ht_location.logicBlock_alpha();
		me._tt_ht_location.logicBlock_backgroundcolor();
		me._preview_nodeimage_location.logicBlock_scaling();
		me._preview_nodeimage_location.logicBlock_visible();
		me._preview_nodeimage_location.logicBlock_alpha();
		me._ico_view_active.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_location.logicBlock_visible();
				me._preview_nodeimage_location.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._tt_ht_location.logicBlock_visible();
				me._preview_nodeimage_location.logicBlock_visible();
				me._ico_view_active.logicBlock_visible();
				me._ico_view_active.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ico_view_active.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._tt_ht_location.logicBlock_position();
				me._tt_ht_location.logicBlock_visible();
				me._preview_nodeimage_location.logicBlock_scaling();
				me._preview_nodeimage_location.logicBlock_visible();
				me._preview_nodeimage_location.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_location.logicBlock_position();
				me._preview_nodeimage_location.logicBlock_scaling();
				me._preview_nodeimage_location.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._tt_ht_location.logicBlock_alpha();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node_a.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_a;
	};
	function SkinHotspotClass_ht_node_a_bo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_a_bo=document.createElement('div');
		el.ggId="ht_node_a_bo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 483px;';
		hs+='position : absolute;';
		hs+='top : 185px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_node_a_bo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_a_bo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('start_intro') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_a_bo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_a_bo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_a_bo.style.transition='';
				if (me._ht_node_a_bo.ggCurrentLogicStateVisible == 0) {
					me._ht_node_a_bo.style.visibility="hidden";
					me._ht_node_a_bo.ggVisible=false;
				}
				else {
					me._ht_node_a_bo.style.visibility=(Number(me._ht_node_a_bo.style.opacity)>0||!me._ht_node_a_bo.style.opacity)?'inherit':'hidden';
					me._ht_node_a_bo.ggVisible=true;
				}
			}
		}
		me._ht_node_a_bo.logicBlock_visible();
		me._ht_node_a_bo.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a_bo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a_bo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_a_bo']=true;
			me._preview_nodeimage_a.logicBlock_scaling();
			me._preview_nodeimage_a.logicBlock_alpha();
			me._hs_logo_node_a.logicBlock_alpha();
			me._hs_logo_node_a.logicBlock_size();
			me._tt_ht_node_a.logicBlock_backgroundcolor();
			me._tt_ht_node_a.logicBlock_position();
			me._tt_ht_node_a.logicBlock_alpha();
			me._tt_ht_node_a_2.logicBlock_backgroundcolor();
			me._tt_ht_node_a_2.logicBlock_position();
			me._tt_ht_node_a_2.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a_bo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_a_bo']=false;
			me._preview_nodeimage_a.logicBlock_scaling();
			me._preview_nodeimage_a.logicBlock_alpha();
			me._hs_logo_node_a.logicBlock_alpha();
			me._hs_logo_node_a.logicBlock_size();
			me._tt_ht_node_a.logicBlock_backgroundcolor();
			me._tt_ht_node_a.logicBlock_position();
			me._tt_ht_node_a.logicBlock_alpha();
			me._tt_ht_node_a_2.logicBlock_backgroundcolor();
			me._tt_ht_node_a_2.logicBlock_position();
			me._tt_ht_node_a_2.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_a_bo.ggCurrentLogicStateVisible = -1;
		me._ht_node_a_bo.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node_a_bo']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node_a_bo']=true;
				me._preview_nodeimage_a.logicBlock_scaling();
				me._preview_nodeimage_a.logicBlock_alpha();
				me._hs_logo_node_a.logicBlock_alpha();
				me._hs_logo_node_a.logicBlock_size();
				me._tt_ht_node_a.logicBlock_backgroundcolor();
				me._tt_ht_node_a.logicBlock_position();
				me._tt_ht_node_a.logicBlock_alpha();
				me._tt_ht_node_a_2.logicBlock_backgroundcolor();
				me._tt_ht_node_a_2.logicBlock_position();
				me._tt_ht_node_a_2.logicBlock_alpha();
			}
		}
		me._ht_node_a_bo.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_nodeimage_a=document.createElement('div');
		els=me._preview_nodeimage_a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_a_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 2px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview_NodeImage_a";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.34,sy:0.34,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 999px; overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._preview_nodeimage_a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage_a.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._preview_nodeimage_a.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._preview_nodeimage_a.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._preview_nodeimage_a.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_a.ggCurrentLogicStateScaling == 0) {
					me._preview_nodeimage_a.ggParameter.sx = 1;
					me._preview_nodeimage_a.ggParameter.sy = 1;
					me._preview_nodeimage_a.style.transform=parameterToTransform(me._preview_nodeimage_a.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_a);}, 550);
				}
				else {
					me._preview_nodeimage_a.ggParameter.sx = 0.34;
					me._preview_nodeimage_a.ggParameter.sy = 0.34;
					me._preview_nodeimage_a.style.transform=parameterToTransform(me._preview_nodeimage_a.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_a);}, 550);
				}
			}
		}
		me._preview_nodeimage_a.logicBlock_scaling();
		me._preview_nodeimage_a.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._preview_nodeimage_a.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._preview_nodeimage_a.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._preview_nodeimage_a.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_a.ggCurrentLogicStateVisible == 0) {
					me._preview_nodeimage_a.style.visibility="hidden";
					me._preview_nodeimage_a.ggVisible=false;
				}
				else {
					me._preview_nodeimage_a.style.visibility=(Number(me._preview_nodeimage_a.style.opacity)>0||!me._preview_nodeimage_a.style.opacity)?'inherit':'hidden';
					me._preview_nodeimage_a.ggVisible=true;
				}
			}
		}
		me._preview_nodeimage_a.logicBlock_visible();
		me._preview_nodeimage_a.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._preview_nodeimage_a.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._preview_nodeimage_a.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._preview_nodeimage_a.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_a.ggCurrentLogicStateAlpha == 0) {
					me._preview_nodeimage_a.style.visibility=me._preview_nodeimage_a.ggVisible?'inherit':'hidden';
					me._preview_nodeimage_a.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._preview_nodeimage_a.style.opacity == 0.0) { me._preview_nodeimage_a.style.visibility="hidden"; } }, 505);
					me._preview_nodeimage_a.style.opacity=0;
				}
			}
		}
		me._preview_nodeimage_a.logicBlock_alpha();
		me._preview_nodeimage_a.ggUpdatePosition=function (useTransition) {
		}
		el=me._ico_view_active0=document.createElement('div');
		els=me._ico_view_active0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDU1N2Y7IGZpbGwtb3BhY2l0eToxIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIiBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzEuODIsMjEuODZBMTcuNywxNy43LDAsMCwwLDE2LD'+
			'MxLjYxYTE3LjcsMTcuNywwLDAsMCwzMiwuNzhBMTcuNywxNy43LDAsMCwwLDMxLjgyLDIxLjg2WiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4Ii8+CiAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHgiIGN4PSIzMiIgY3k9IjMyIiByPSI1LjMzIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ico_view_active0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ico_view_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ico_view_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ico_view_active0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ico_view_active0.ggElementNodeId()) == true)) || 
				((me._ico_view_active0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ico_view_active0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ico_view_active0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ico_view_active0.style.transition='';
				if (me._ico_view_active0.ggCurrentLogicStateVisible == 0) {
					me._ico_view_active0.style.visibility=(Number(me._ico_view_active0.style.opacity)>0||!me._ico_view_active0.style.opacity)?'inherit':'hidden';
					me._ico_view_active0.ggVisible=true;
				}
				else {
					me._ico_view_active0.style.visibility="hidden";
					me._ico_view_active0.ggVisible=false;
				}
			}
		}
		me._ico_view_active0.logicBlock_visible();
		me._ico_view_active0.ggUpdatePosition=function (useTransition) {
		}
		me._preview_nodeimage_a.appendChild(me._ico_view_active0);
		me._ht_node_a_bo.appendChild(me._preview_nodeimage_a);
		el=me._hs_logo_node_a=document.createElement('div');
		els=me._hs_logo_node_a__img=document.createElement('img');
		els.className='ggskin ggskin_hs_logo_node_a';
		hs=basePath + 'images/hs_logo_node_a.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_logo_node_a";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : calc(50% - ((54px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((54px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_logo_node_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_logo_node_a.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hs_logo_node_a.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hs_logo_node_a.ggCurrentLogicStateSize = newLogicStateSize;
				me._hs_logo_node_a.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_logo_node_a.ggCurrentLogicStateSize == 0) {
					me._hs_logo_node_a.style.width='142px';
					me._hs_logo_node_a.style.height='142px';
					me._hs_logo_node_a.style.left = 'calc(50% - (142px / 2))';
					me._hs_logo_node_a.style.top = 'calc(50% - (142px / 2))';
					setTimeout(function() {skin.updateSize(me._hs_logo_node_a);}, 550);
				}
				else {
					me._hs_logo_node_a.style.width='54px';
					me._hs_logo_node_a.style.height='54px';
					me._hs_logo_node_a.style.left = 'calc(50% - (54px / 2))';
					me._hs_logo_node_a.style.top = 'calc(50% - (54px / 2))';
					setTimeout(function() {skin.updateSize(me._hs_logo_node_a);}, 550);
				}
			}
		}
		me._hs_logo_node_a.logicBlock_size();
		me._hs_logo_node_a.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_logo_node_a.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_logo_node_a.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_logo_node_a.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_logo_node_a.ggCurrentLogicStateVisible == 0) {
					me._hs_logo_node_a.style.visibility="hidden";
					me._hs_logo_node_a.ggVisible=false;
				}
				else {
					me._hs_logo_node_a.style.visibility=(Number(me._hs_logo_node_a.style.opacity)>0||!me._hs_logo_node_a.style.opacity)?'inherit':'hidden';
					me._hs_logo_node_a.ggVisible=true;
				}
			}
		}
		me._hs_logo_node_a.logicBlock_visible();
		me._hs_logo_node_a.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_logo_node_a.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_logo_node_a.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_logo_node_a.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_logo_node_a.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_logo_node_a.style.opacity == 0.0) { me._hs_logo_node_a.style.visibility="hidden"; } }, 505);
					me._hs_logo_node_a.style.opacity=0;
				}
				else {
					me._hs_logo_node_a.style.visibility=me._hs_logo_node_a.ggVisible?'inherit':'hidden';
					me._hs_logo_node_a.style.opacity=1;
				}
			}
		}
		me._hs_logo_node_a.logicBlock_alpha();
		me._hs_logo_node_a.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_a_bo.appendChild(me._hs_logo_node_a);
		el=me._tt_ht_node_a=document.createElement('div');
		els=me._tt_ht_node_a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_a";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(62,62,62,0.470588);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node_a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node_a.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node_a.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_a.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node_a.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node_a.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node_a.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_node_a.style.left = 'calc(50% - (140px / 2))';
					me._tt_ht_node_a.style.top='75px';
				}
				else {
					me._tt_ht_node_a.style.left='calc(50% - ((140px + 0px) / 2) + 0px)';
					me._tt_ht_node_a.style.top='15px';
				}
			}
		}
		me._tt_ht_node_a.logicBlock_position();
		me._tt_ht_node_a.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_a.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_a.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_a.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_a.style.visibility="hidden";
					me._tt_ht_node_a.ggVisible=false;
				}
				else {
					me._tt_ht_node_a.style.visibility=(Number(me._tt_ht_node_a.style.opacity)>0||!me._tt_ht_node_a.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_a.ggVisible=true;
				}
			}
		}
		me._tt_ht_node_a.logicBlock_visible();
		me._tt_ht_node_a.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.hotspot.pxp > 30)) && 
				((me.hotspot.pxp < 70))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_ht_node_a.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_ht_node_a.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_ht_node_a.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a.ggCurrentLogicStateAlpha == 0) {
					me._tt_ht_node_a.style.visibility=me._tt_ht_node_a.ggVisible?'inherit':'hidden';
					me._tt_ht_node_a.style.opacity=1;
				}
				else if (me._tt_ht_node_a.ggCurrentLogicStateAlpha == 1) {
					me._tt_ht_node_a.style.visibility=me._tt_ht_node_a.ggVisible?'inherit':'hidden';
					me._tt_ht_node_a.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_ht_node_a.style.opacity == 0.0) { me._tt_ht_node_a.style.visibility="hidden"; } }, 205);
					me._tt_ht_node_a.style.opacity=0;
				}
			}
		}
		me._tt_ht_node_a.logicBlock_alpha();
		me._tt_ht_node_a.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tt_ht_node_a.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tt_ht_node_a.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tt_ht_node_a__text.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a.ggCurrentLogicStateBackgroundColor == 0) {
					me._tt_ht_node_a__text.style.backgroundColor="rgba(62,62,62,0.784314)";
				}
				else {
					me._tt_ht_node_a__text.style.backgroundColor="rgba(62,62,62,0.470588)";
				}
			}
		}
		me._tt_ht_node_a.logicBlock_backgroundcolor();
		me._tt_ht_node_a.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_a_bo.appendChild(me._tt_ht_node_a);
		el=me._ht_node_customimage_a=document.createElement('div');
		els=me._ht_node_customimage_a__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage_a.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage_a.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage_a.ggAltText));
			me._ht_node_customimage_a.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage_a.ggText_untranslated = img;
			me._ht_node_customimage_a.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage_a.ggSubElement.style.width = '0px';
			me._ht_node_customimage_a.ggSubElement.style.height = '0px';
			me._ht_node_customimage_a.ggSubElement.src='';
			me._ht_node_customimage_a.ggSubElement.src=me._ht_node_customimage_a.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage_a.ggText != player._(me._ht_node_customimage_a.ggText_untranslated)) {
				me._ht_node_customimage_a.ggText = player._(me._ht_node_customimage_a.ggText_untranslated);
				me._ht_node_customimage_a.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "assets/icon/flycam.png";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage_a";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage_a.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage_a.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage_a.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage_a.style.transition='';
				if (me._ht_node_customimage_a.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage_a.style.visibility=(Number(me._ht_node_customimage_a.style.opacity)>0||!me._ht_node_customimage_a.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage_a.ggSubElement.src=me._ht_node_customimage_a.ggText;
					me._ht_node_customimage_a.ggVisible=true;
				}
				else {
					me._ht_node_customimage_a.style.visibility="hidden";
					me._ht_node_customimage_a.ggSubElement.src='';
					me._ht_node_customimage_a.ggVisible=false;
				}
			}
		}
		me._ht_node_customimage_a.logicBlock_visible();
		me._ht_node_customimage_a.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage_a.clientWidth;
			var parentHeight = me._ht_node_customimage_a.clientHeight;
			var img = me._ht_node_customimage_a__img;
			var aspectRatioDiv = me._ht_node_customimage_a.clientWidth / me._ht_node_customimage_a.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentHeight = parentHeight;
			currentWidth = Math.round(parentHeight * aspectRatioImg);
			img.style.width='';
			img.style.height=parentHeight + 'px';
			if (!me._ht_node_customimage_a.ggScrollbars || currentWidth < me._ht_node_customimage_a.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage_a.scrollLeft=currentWidth / 2 - me._ht_node_customimage_a.clientWidth / 2;
			}
			if (!me._ht_node_customimage_a.ggScrollbars || currentHeight < me._ht_node_customimage_a.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage_a.scrollTop=currentHeight / 2 - me._ht_node_customimage_a.clientHeight / 2;
			}
		}
		me._ht_node_a_bo.appendChild(me._ht_node_customimage_a);
		el=me._tt_ht_node_a_2=document.createElement('div');
		els=me._tt_ht_node_a_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_a_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(62,62,62,0);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node_a_2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node_a_2.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node_a_2.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node_a_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_a_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node_a_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node_a_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node_a_2.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a_2.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_node_a_2.style.left = 'calc(50% - (140px / 2))';
					me._tt_ht_node_a_2.style.top = 'calc(50% - (0px / 2) + (0px / 2) + -60px)';
				}
				else {
					me._tt_ht_node_a_2.style.left='calc(50% - ((140px + 0px) / 2) + 0px)';
					me._tt_ht_node_a_2.style.top='calc(50% - ((0px + 0px) / 2) + 0px)';
				}
			}
		}
		me._tt_ht_node_a_2.logicBlock_position();
		me._tt_ht_node_a_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_a_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_a_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_a_2.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a_2.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_a_2.style.visibility=(Number(me._tt_ht_node_a_2.style.opacity)>0||!me._tt_ht_node_a_2.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_a_2.ggVisible=true;
				}
				else {
					me._tt_ht_node_a_2.style.visibility="hidden";
					me._tt_ht_node_a_2.ggVisible=false;
				}
			}
		}
		me._tt_ht_node_a_2.logicBlock_visible();
		me._tt_ht_node_a_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_ht_node_a_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_ht_node_a_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_ht_node_a_2.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a_2.ggCurrentLogicStateAlpha == 0) {
					me._tt_ht_node_a_2.style.visibility=me._tt_ht_node_a_2.ggVisible?'inherit':'hidden';
					me._tt_ht_node_a_2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_ht_node_a_2.style.opacity == 0.0) { me._tt_ht_node_a_2.style.visibility="hidden"; } }, 505);
					me._tt_ht_node_a_2.style.opacity=0;
				}
			}
		}
		me._tt_ht_node_a_2.logicBlock_alpha();
		me._tt_ht_node_a_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_a_bo'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tt_ht_node_a_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tt_ht_node_a_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tt_ht_node_a_2__text.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, background-color 0s';
				if (me._tt_ht_node_a_2.ggCurrentLogicStateBackgroundColor == 0) {
					me._tt_ht_node_a_2__text.style.backgroundColor="rgba(62,62,62,0.784314)";
				}
				else {
					me._tt_ht_node_a_2__text.style.backgroundColor="rgba(62,62,62,0)";
				}
			}
		}
		me._tt_ht_node_a_2.logicBlock_backgroundcolor();
		me._tt_ht_node_a_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_a_bo.appendChild(me._tt_ht_node_a_2);
		me._ht_node_a_bo.logicBlock_visible();
		me._preview_nodeimage_a.logicBlock_scaling();
		me._preview_nodeimage_a.logicBlock_visible();
		me._preview_nodeimage_a.logicBlock_alpha();
		me._ico_view_active0.logicBlock_visible();
		me._hs_logo_node_a.logicBlock_size();
		me._hs_logo_node_a.logicBlock_visible();
		me._hs_logo_node_a.logicBlock_alpha();
		me._tt_ht_node_a.logicBlock_position();
		me._tt_ht_node_a.logicBlock_visible();
		me._tt_ht_node_a.logicBlock_alpha();
		me._tt_ht_node_a.logicBlock_backgroundcolor();
		me._ht_node_customimage_a.logicBlock_visible();
		me._tt_ht_node_a_2.logicBlock_position();
		me._tt_ht_node_a_2.logicBlock_visible();
		me._tt_ht_node_a_2.logicBlock_alpha();
		me._tt_ht_node_a_2.logicBlock_backgroundcolor();
			me.ggEvent_activehotspotchanged=function() {
				me._preview_nodeimage_a.logicBlock_visible();
				me._hs_logo_node_a.logicBlock_visible();
				me._tt_ht_node_a.logicBlock_visible();
				me._ht_node_customimage_a.logicBlock_visible();
				me._tt_ht_node_a_2.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_a_bo.logicBlock_visible();
				me._preview_nodeimage_a.logicBlock_visible();
				me._ico_view_active0.logicBlock_visible();
				me._ico_view_active0.logicBlock_visible();
				me._hs_logo_node_a.logicBlock_visible();
				me._tt_ht_node_a.logicBlock_visible();
				me._ht_node_customimage_a.logicBlock_visible();
				me._tt_ht_node_a_2.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ico_view_active0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_a_bo.logicBlock_visible();
				me._preview_nodeimage_a.logicBlock_scaling();
				me._preview_nodeimage_a.logicBlock_visible();
				me._preview_nodeimage_a.logicBlock_alpha();
				me._hs_logo_node_a.logicBlock_size();
				me._hs_logo_node_a.logicBlock_visible();
				me._hs_logo_node_a.logicBlock_alpha();
				me._tt_ht_node_a.logicBlock_position();
				me._tt_ht_node_a.logicBlock_visible();
				me._ht_node_customimage_a.logicBlock_visible();
				me._tt_ht_node_a_2.logicBlock_visible();
				me._tt_ht_node_a_2.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._preview_nodeimage_a.logicBlock_scaling();
				me._preview_nodeimage_a.logicBlock_alpha();
				me._hs_logo_node_a.logicBlock_size();
				me._hs_logo_node_a.logicBlock_alpha();
				me._tt_ht_node_a.logicBlock_position();
				me._tt_ht_node_a_2.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._tt_ht_node_a.logicBlock_alpha();
			};
			me.ggEvent_varchanged_start_intro=function() {
				me._ht_node_a_bo.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node_a_bo.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_a_bo;
	};
	function SkinHotspotClass_ht_location(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_location=document.createElement('div');
		el.ggId="ht_location";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_location.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_location.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_location.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_location.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_location']=true;
			me._tt_ht_location0.logicBlock_backgroundcolor();
			me._tt_ht_location0.logicBlock_alpha();
			me._tt_ht_location0.logicBlock_position();
			me._preview_nodeimage_location0.logicBlock_alpha();
			me._preview_nodeimage_location0.logicBlock_scaling();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_location.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_location']=false;
			me._tt_ht_location0.logicBlock_backgroundcolor();
			me._tt_ht_location0.logicBlock_alpha();
			me._tt_ht_location0.logicBlock_position();
			me._preview_nodeimage_location0.logicBlock_alpha();
			me._preview_nodeimage_location0.logicBlock_scaling();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_location.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_location']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_location']=true;
				me._tt_ht_location0.logicBlock_backgroundcolor();
				me._tt_ht_location0.logicBlock_alpha();
				me._tt_ht_location0.logicBlock_position();
				me._preview_nodeimage_location0.logicBlock_alpha();
				me._preview_nodeimage_location0.logicBlock_scaling();
			}
		}
		me._ht_location.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_12=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_12.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 1-2";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) - 40px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_12.ggUpdatePosition=function (useTransition) {
		}
		me._ht_location.appendChild(me._lottie_12);
		el=me._tt_ht_location0=document.createElement('div');
		els=me._tt_ht_location0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_location";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(62,62,62,0.470588);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_location0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_location0.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_location0.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_location0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_location0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['ht_location'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_location0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_location0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_location0.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location0.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_location0.style.left = 'calc(50% - (140px / 2))';
					me._tt_ht_location0.style.top='15px';
				}
				else {
					me._tt_ht_location0.style.left='calc(50% - ((140px + 0px) / 2) + 0px)';
					me._tt_ht_location0.style.top='0px';
				}
			}
		}
		me._tt_ht_location0.logicBlock_position();
		me._tt_ht_location0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_location0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_location0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_location0.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_location0.style.visibility="hidden";
					me._tt_ht_location0.ggVisible=false;
				}
				else {
					me._tt_ht_location0.style.visibility=(Number(me._tt_ht_location0.style.opacity)>0||!me._tt_ht_location0.style.opacity)?'inherit':'hidden';
					me._tt_ht_location0.ggVisible=true;
				}
			}
		}
		me._tt_ht_location0.logicBlock_visible();
		me._tt_ht_location0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_location'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.hotspot.pxp > 30)) && 
				((me.hotspot.pxp < 70))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_ht_location0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_ht_location0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_ht_location0.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location0.ggCurrentLogicStateAlpha == 0) {
					me._tt_ht_location0.style.visibility=me._tt_ht_location0.ggVisible?'inherit':'hidden';
					me._tt_ht_location0.style.opacity=1;
				}
				else if (me._tt_ht_location0.ggCurrentLogicStateAlpha == 1) {
					me._tt_ht_location0.style.visibility=me._tt_ht_location0.ggVisible?'inherit':'hidden';
					me._tt_ht_location0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_ht_location0.style.opacity == 0.0) { me._tt_ht_location0.style.visibility="hidden"; } }, 205);
					me._tt_ht_location0.style.opacity=0;
				}
			}
		}
		me._tt_ht_location0.logicBlock_alpha();
		me._tt_ht_location0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_location'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tt_ht_location0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tt_ht_location0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tt_ht_location0__text.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._tt_ht_location0.ggCurrentLogicStateBackgroundColor == 0) {
					me._tt_ht_location0__text.style.backgroundColor="rgba(62,62,62,0.784314)";
				}
				else {
					me._tt_ht_location0__text.style.backgroundColor="rgba(62,62,62,0.470588)";
				}
			}
		}
		me._tt_ht_location0.logicBlock_backgroundcolor();
		me._tt_ht_location0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_location.appendChild(me._tt_ht_location0);
		el=me._preview_nodeimage_location0=document.createElement('div');
		els=me._preview_nodeimage_location0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_location_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 2px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview_NodeImage_location";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.34,sy:0.34,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((160px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px; border: 2px solid #ffffff; overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._preview_nodeimage_location0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage_location0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_location'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._preview_nodeimage_location0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._preview_nodeimage_location0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._preview_nodeimage_location0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_location0.ggCurrentLogicStateScaling == 0) {
					me._preview_nodeimage_location0.ggParameter.sx = 1;
					me._preview_nodeimage_location0.ggParameter.sy = 1;
					me._preview_nodeimage_location0.style.transform=parameterToTransform(me._preview_nodeimage_location0.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_location0);}, 550);
				}
				else {
					me._preview_nodeimage_location0.ggParameter.sx = 0.34;
					me._preview_nodeimage_location0.ggParameter.sy = 0.34;
					me._preview_nodeimage_location0.style.transform=parameterToTransform(me._preview_nodeimage_location0.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_location0);}, 550);
				}
			}
		}
		me._preview_nodeimage_location0.logicBlock_scaling();
		me._preview_nodeimage_location0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._preview_nodeimage_location0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._preview_nodeimage_location0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._preview_nodeimage_location0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_location0.ggCurrentLogicStateVisible == 0) {
					me._preview_nodeimage_location0.style.visibility="hidden";
					me._preview_nodeimage_location0.ggVisible=false;
				}
				else {
					me._preview_nodeimage_location0.style.visibility=(Number(me._preview_nodeimage_location0.style.opacity)>0||!me._preview_nodeimage_location0.style.opacity)?'inherit':'hidden';
					me._preview_nodeimage_location0.ggVisible=true;
				}
			}
		}
		me._preview_nodeimage_location0.logicBlock_visible();
		me._preview_nodeimage_location0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_location'] == true)) && 
				((player.getHasTouch() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._preview_nodeimage_location0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._preview_nodeimage_location0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._preview_nodeimage_location0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._preview_nodeimage_location0.ggCurrentLogicStateAlpha == 0) {
					me._preview_nodeimage_location0.style.visibility=me._preview_nodeimage_location0.ggVisible?'inherit':'hidden';
					me._preview_nodeimage_location0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._preview_nodeimage_location0.style.opacity == 0.0) { me._preview_nodeimage_location0.style.visibility="hidden"; } }, 505);
					me._preview_nodeimage_location0.style.opacity=0;
				}
			}
		}
		me._preview_nodeimage_location0.logicBlock_alpha();
		me._preview_nodeimage_location0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ico_view_active1=document.createElement('div');
		els=me._ico_view_active1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDU1N2Y7IGZpbGwtb3BhY2l0eToxIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjciLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIiBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzEuODIsMjEuODZBMTcuNywxNy43LDAsMCwwLDE2LD'+
			'MxLjYxYTE3LjcsMTcuNywwLDAsMCwzMiwuNzhBMTcuNywxNy43LDAsMCwwLDMxLjgyLDIxLjg2WiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4Ii8+CiAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHgiIGN4PSIzMiIgY3k9IjMyIiByPSI1LjMzIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ico_view_active1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ico_view_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ico_view_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ico_view_active1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ico_view_active1.ggElementNodeId()) == true)) || 
				((me._ico_view_active1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ico_view_active1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ico_view_active1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ico_view_active1.style.transition='';
				if (me._ico_view_active1.ggCurrentLogicStateVisible == 0) {
					me._ico_view_active1.style.visibility=(Number(me._ico_view_active1.style.opacity)>0||!me._ico_view_active1.style.opacity)?'inherit':'hidden';
					me._ico_view_active1.ggVisible=true;
				}
				else {
					me._ico_view_active1.style.visibility="hidden";
					me._ico_view_active1.ggVisible=false;
				}
			}
		}
		me._ico_view_active1.logicBlock_visible();
		me._ico_view_active1.ggUpdatePosition=function (useTransition) {
		}
		me._preview_nodeimage_location0.appendChild(me._ico_view_active1);
		me._ht_location.appendChild(me._preview_nodeimage_location0);
		me._tt_ht_location0.logicBlock_position();
		me._tt_ht_location0.logicBlock_visible();
		me._tt_ht_location0.logicBlock_alpha();
		me._tt_ht_location0.logicBlock_backgroundcolor();
		me._preview_nodeimage_location0.logicBlock_scaling();
		me._preview_nodeimage_location0.logicBlock_visible();
		me._preview_nodeimage_location0.logicBlock_alpha();
		me._ico_view_active1.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_location0.logicBlock_visible();
				me._preview_nodeimage_location0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._tt_ht_location0.logicBlock_visible();
				me._preview_nodeimage_location0.logicBlock_visible();
				me._ico_view_active1.logicBlock_visible();
				me._ico_view_active1.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ico_view_active1.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._tt_ht_location0.logicBlock_position();
				me._tt_ht_location0.logicBlock_visible();
				me._preview_nodeimage_location0.logicBlock_scaling();
				me._preview_nodeimage_location0.logicBlock_visible();
				me._preview_nodeimage_location0.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_location0.logicBlock_position();
				me._preview_nodeimage_location0.logicBlock_scaling();
				me._preview_nodeimage_location0.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._tt_ht_location0.logicBlock_alpha();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_location.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_location;
	};
	function SkinHotspotClass_ht_info_b(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_b=document.createElement('div');
		el.ggId="ht_info_b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 665px;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._ht_info_b.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_b.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) || 
				((player.getViewerSize().width <= 480)) || 
				((player.getViewerSize().height <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_info_b.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_info_b.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_info_b.style.transition='transform 0s';
				if (me._ht_info_b.ggCurrentLogicStateScaling == 0) {
					me._ht_info_b.ggParameter.sx = 0.8;
					me._ht_info_b.ggParameter.sy = 0.8;
					me._ht_info_b.style.transform=parameterToTransform(me._ht_info_b.ggParameter);
					skin.updateSize(me._ht_info_b);
				}
				else {
					me._ht_info_b.ggParameter.sx = 1;
					me._ht_info_b.ggParameter.sy = 1;
					me._ht_info_b.style.transform=parameterToTransform(me._ht_info_b.ggParameter);
					skin.updateSize(me._ht_info_b);
				}
			}
		}
		me._ht_info_b.logicBlock_scaling();
		me._ht_info_b.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_b.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_b.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_b']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_b.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_b']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_b.ggCurrentLogicStateScaling = -1;
		me._ht_info_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_info_b']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_info_b']=true;
			}
		}
		me._ht_info_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._rec_info_b=document.createElement('div');
		el.ggId="Rec_info_b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((2px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rec_info_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rec_info_b.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_b.appendChild(me._rec_info_b);
		el=me._point_hs_info=document.createElement('div');
		el.ggId="point_hs_info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ff9f1c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 12px;';
		hs+='left : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._point_hs_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._point_hs_info.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_b.appendChild(me._point_hs_info);
		el=me._hs_image_b=document.createElement('div');
		el.ggId="hs_image_b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='bottom : 90px;';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_b.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player._(me.hotspot.description) == "1"))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player._(me.hotspot.description) == "2"))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player._(me.hotspot.description) == "3"))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player._(me.hotspot.description) == "4"))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player._(me.hotspot.description) == "5"))
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._hs_image_b.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._hs_image_b.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._hs_image_b.style.transition='left 0s, bottom 0s, transform 500ms ease 0ms';
				if (me._hs_image_b.ggCurrentLogicStatePosition == 0) {
					me._hs_image_b.style.left = 'calc(50% - (16px / 2) + (4px / 2))';
					me._hs_image_b.style.bottom='30px';
				}
				else if (me._hs_image_b.ggCurrentLogicStatePosition == 1) {
					me._hs_image_b.style.left = 'calc(50% - (16px / 2) + (4px / 2))';
					me._hs_image_b.style.bottom='60px';
				}
				else if (me._hs_image_b.ggCurrentLogicStatePosition == 2) {
					me._hs_image_b.style.left = 'calc(50% - (16px / 2) + (4px / 2))';
					me._hs_image_b.style.bottom='90px';
				}
				else if (me._hs_image_b.ggCurrentLogicStatePosition == 3) {
					me._hs_image_b.style.left = 'calc(50% - (16px / 2) + (4px / 2))';
					me._hs_image_b.style.bottom='120px';
				}
				else if (me._hs_image_b.ggCurrentLogicStatePosition == 4) {
					me._hs_image_b.style.left = 'calc(50% - (16px / 2) + (4px / 2))';
					me._hs_image_b.style.bottom='140px';
				}
				else {
					me._hs_image_b.style.left='calc(50% - ((16px + 4px) / 2) + 0px)';
					me._hs_image_b.style.bottom='90px';
				}
			}
		}
		me._hs_image_b.logicBlock_position();
		me._hs_image_b.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_b.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_b.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_b.style.transition='left 0s, bottom 0s, transform 500ms ease 0ms';
				if (me._hs_image_b.ggCurrentLogicStateScaling == 0) {
					me._hs_image_b.ggParameter.sx = 0.8;
					me._hs_image_b.ggParameter.sy = 0.8;
					me._hs_image_b.style.transform=parameterToTransform(me._hs_image_b.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_b);}, 550);
				}
				else {
					me._hs_image_b.ggParameter.sx = 1;
					me._hs_image_b.ggParameter.sy = 1;
					me._hs_image_b.style.transform=parameterToTransform(me._hs_image_b.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_b);}, 550);
				}
			}
		}
		me._hs_image_b.logicBlock_scaling();
		me._hs_image_b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_b.style.transition='left 0s, bottom 0s, transform 500ms ease 0ms';
				if (me._hs_image_b.ggCurrentLogicStateVisible == 0) {
					me._hs_image_b.style.visibility="hidden";
					me._hs_image_b.ggVisible=false;
				}
				else {
					me._hs_image_b.style.visibility="hidden";
					me._hs_image_b.ggVisible=false;
				}
			}
		}
		me._hs_image_b.logicBlock_visible();
		me._hs_image_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_ring_b=document.createElement('div');
		el.ggId="hs_ring_b";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #16365d;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_ring_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_ring_b.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('var_hs') == Number("0"))) || 
				((player.getVariableValue('var_hs') == Number("1")))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_ring_b.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_ring_b.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_ring_b.style.transition='border-color 0s';
				if (me._hs_ring_b.ggCurrentLogicStateBorderColor == 0) {
					me._hs_ring_b.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._hs_ring_b.style.borderColor="rgba(22,54,93,1)";
				}
			}
		}
		me._hs_ring_b.logicBlock_bordercolor();
		me._hs_ring_b.ggUpdatePosition=function (useTransition) {
		}
		me._hs_image_b.appendChild(me._hs_ring_b);
		el=me._hs_red=document.createElement('div');
		el.ggId="hs_RED";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00ff7f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 12px;';
		hs+='left : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_red.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_red.ggUpdatePosition=function (useTransition) {
		}
		me._hs_image_b.appendChild(me._hs_red);
		me._ht_info_b.appendChild(me._hs_image_b);
		el=me._tt_info_b=document.createElement('div');
		els=me._tt_info_b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info_b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(46,196,182,0.705882);';
		hs+='border : 2px solid #ff9f1c;';
		hs+='border-radius : 12px;';
		hs+='bottom : 62px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((172px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		hs+="padding: 0px 10px; box-shadow: rgba(0, 0, 0, 0.5) 0px 0.1em 0.25em 0px; border-radius: 8.8px; overflow: hidden; -webkit-line-clamp: 2; text-overflow: ellipsis; display: flex; justify-content: center; align-items: center;";
		els.setAttribute('style',hs);
		me._tt_info_b.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_info_b.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_info_b.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_info_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_info_b.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_b.appendChild(me._tt_info_b);
		me._ht_info_b.logicBlock_scaling();
		me._hs_image_b.logicBlock_position();
		me._hs_image_b.logicBlock_scaling();
		me._hs_image_b.logicBlock_visible();
		me._hs_ring_b.logicBlock_bordercolor();
			me.ggEvent_activehotspotchanged=function() {
				me._hs_image_b.logicBlock_position();
				me._hs_image_b.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hs_image_b.logicBlock_position();
				me._hs_image_b.logicBlock_scaling();
				me._hs_image_b.logicBlock_visible();
				me._hs_ring_b.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info_b.logicBlock_scaling();
				me._hs_image_b.logicBlock_position();
				me._hs_image_b.logicBlock_scaling();
				me._hs_image_b.logicBlock_visible();
				me._hs_ring_b.logicBlock_bordercolor();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_info_b.logicBlock_scaling();
			};
			me.ggEvent_varchanged_var_hs=function() {
				me._hs_image_b.logicBlock_scaling();
				me._hs_ring_b.logicBlock_bordercolor();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_info_b.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_info_b;
	};
	function SkinHotspotClass_ht_arrow(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_arrow=document.createElement('div');
		el.ggId="ht_arrow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 837px;';
		hs+='position : absolute;';
		hs+='top : 198px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_arrow.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_arrow.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_arrow.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_arrow.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_arrow']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_arrow.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_arrow']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_arrow.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_arrow']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_arrow']=true;
			}
		}
		me._ht_arrow.ggUpdatePosition=function (useTransition) {
		}
		el=me._arrow=document.createElement('div');
		els=me._arrow__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._arrow.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._arrow.ggSubElement.setAttribute('alt', player._(me._arrow.ggAltText));
			me._arrow.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._arrow.ggText_untranslated = img;
			me._arrow.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._arrow.ggSubElement.style.width = '0px';
			me._arrow.ggSubElement.style.height = '0px';
			me._arrow.ggSubElement.src='';
			me._arrow.ggSubElement.src=me._arrow.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._arrow.ggText != player._(me._arrow.ggText_untranslated)) {
				me._arrow.ggText = player._(me._arrow.ggText_untranslated);
				me._arrow.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "assets/icon/arrow.png";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="arrow";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._arrow.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._arrow.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._arrow.style.transition='transform 0s';
				if (me._arrow.ggCurrentLogicStateScaling == 0) {
					me._arrow.ggParameter.sx = 0.8;
					me._arrow.ggParameter.sy = 0.8;
					me._arrow.style.transform=parameterToTransform(me._arrow.ggParameter);
					skin.updateSize(me._arrow);
				}
				else {
					me._arrow.ggParameter.sx = 1;
					me._arrow.ggParameter.sy = 1;
					me._arrow.style.transform=parameterToTransform(me._arrow.ggParameter);
					skin.updateSize(me._arrow);
				}
			}
		}
		me._arrow.logicBlock_scaling();
		me._arrow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) && 
				((player._(me.hotspot.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._arrow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._arrow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._arrow.style.transition='transform 0s';
				if (me._arrow.ggCurrentLogicStateVisible == 0) {
					me._arrow.style.visibility="hidden";
					me._arrow.ggSubElement.src='';
					me._arrow.ggVisible=false;
				}
				else {
					me._arrow.style.visibility=(Number(me._arrow.style.opacity)>0||!me._arrow.style.opacity)?'inherit':'hidden';
					me._arrow.ggSubElement.src=me._arrow.ggText;
					me._arrow.ggVisible=true;
				}
			}
		}
		me._arrow.logicBlock_visible();
		me._arrow.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._arrow.clientWidth;
			var parentHeight = me._arrow.clientHeight;
			var img = me._arrow__img;
			var aspectRatioDiv = me._arrow.clientWidth / me._arrow.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._arrow.ggScrollbars || currentWidth < me._arrow.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._arrow.scrollLeft=currentWidth / 2 - me._arrow.clientWidth / 2;
			}
			if (!me._arrow.ggScrollbars || currentHeight < me._arrow.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._arrow.scrollTop=currentHeight / 2 - me._arrow.clientHeight / 2;
			}
		}
		me._ht_arrow.appendChild(me._arrow);
		el=me._custom_arrow=document.createElement('div');
		els=me._custom_arrow__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._custom_arrow.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._custom_arrow.ggSubElement.setAttribute('alt', player._(me._custom_arrow.ggAltText));
			me._custom_arrow.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._custom_arrow.ggText_untranslated = img;
			me._custom_arrow.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._custom_arrow.ggSubElement.style.width = '0px';
			me._custom_arrow.ggSubElement.style.height = '0px';
			me._custom_arrow.ggSubElement.src='';
			me._custom_arrow.ggSubElement.src=me._custom_arrow.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._custom_arrow.ggText != player._(me._custom_arrow.ggText_untranslated)) {
				me._custom_arrow.ggText = player._(me._custom_arrow.ggText_untranslated);
				me._custom_arrow.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="custom_arrow";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._custom_arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._custom_arrow.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._custom_arrow.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._custom_arrow.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._custom_arrow.style.transition='transform 0s';
				if (me._custom_arrow.ggCurrentLogicStateScaling == 0) {
					me._custom_arrow.ggParameter.sx = 0.8;
					me._custom_arrow.ggParameter.sy = 0.8;
					me._custom_arrow.style.transform=parameterToTransform(me._custom_arrow.ggParameter);
					skin.updateSize(me._custom_arrow);
				}
				else {
					me._custom_arrow.ggParameter.sx = 1;
					me._custom_arrow.ggParameter.sy = 1;
					me._custom_arrow.style.transform=parameterToTransform(me._custom_arrow.ggParameter);
					skin.updateSize(me._custom_arrow);
				}
			}
		}
		me._custom_arrow.logicBlock_scaling();
		me._custom_arrow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) && 
				((player._(me.hotspot.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._custom_arrow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._custom_arrow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._custom_arrow.style.transition='transform 0s';
				if (me._custom_arrow.ggCurrentLogicStateVisible == 0) {
					me._custom_arrow.style.visibility=(Number(me._custom_arrow.style.opacity)>0||!me._custom_arrow.style.opacity)?'inherit':'hidden';
					me._custom_arrow.ggSubElement.src=me._custom_arrow.ggText;
					me._custom_arrow.ggVisible=true;
				}
				else {
					me._custom_arrow.style.visibility="hidden";
					me._custom_arrow.ggSubElement.src='';
					me._custom_arrow.ggVisible=false;
				}
			}
		}
		me._custom_arrow.logicBlock_visible();
		me._custom_arrow.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._custom_arrow.clientWidth;
			var parentHeight = me._custom_arrow.clientHeight;
			var img = me._custom_arrow__img;
			var aspectRatioDiv = me._custom_arrow.clientWidth / me._custom_arrow.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._custom_arrow.ggScrollbars || currentWidth < me._custom_arrow.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._custom_arrow.scrollLeft=currentWidth / 2 - me._custom_arrow.clientWidth / 2;
			}
			if (!me._custom_arrow.ggScrollbars || currentHeight < me._custom_arrow.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._custom_arrow.scrollTop=currentHeight / 2 - me._custom_arrow.clientHeight / 2;
			}
		}
		me._ht_arrow.appendChild(me._custom_arrow);
		el=me._tt_hs_animation=document.createElement('div');
		els=me._tt_hs_animation__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_hs_animation";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='bottom : 30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((145px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 145px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #3e3e3e;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px 5px 5px 5px;';
		hs+='overflow: hidden;';
		hs+="background-color: rgba(37, 46, 64, 0.8); border-radius: 8.8px;";
		els.setAttribute('style',hs);
		me._tt_hs_animation.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_hs_animation.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_hs_animation.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_hs_animation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_hs_animation.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.description) != ""))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_hs_animation.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_hs_animation.ggCurrentLogicStateText = newLogicStateText;
				me._tt_hs_animation.style.transition='';
				if (me._tt_hs_animation.ggCurrentLogicStateText == 0) {
					if (me._tt_hs_animation.ggUpdateText) {
					me._tt_hs_animation.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_hs_animation.ggUpdateText();
					} else {
						if (me._tt_hs_animation.ggUpdatePosition) me._tt_hs_animation.ggUpdatePosition();
					}
				}
				else {
					if (me._tt_hs_animation.ggUpdateText) {
					me._tt_hs_animation.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_hs_animation.ggUpdateText();
					} else {
						if (me._tt_hs_animation.ggUpdatePosition) me._tt_hs_animation.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_hs_animation.logicBlock_text();
		me._tt_hs_animation.ggUpdatePosition=function (useTransition) {
		}
		me._ht_arrow.appendChild(me._tt_hs_animation);
		me._arrow.logicBlock_scaling();
		me._arrow.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._custom_arrow.style.width=hotspot.customimagewidth + 'px';
			me._custom_arrow.style.height=hotspot.customimageheight + 'px';
			let d = 1;
			me._custom_arrow.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._custom_arrow.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._custom_arrow.logicBlock_scaling();
		me._custom_arrow.logicBlock_visible();
		me._tt_hs_animation.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me._arrow.logicBlock_visible();
				me._custom_arrow.logicBlock_visible();
				me._tt_hs_animation.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me._arrow.logicBlock_visible();
				me._custom_arrow.logicBlock_visible();
				me._tt_hs_animation.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._arrow.logicBlock_scaling();
				me._arrow.logicBlock_visible();
				me._custom_arrow.logicBlock_scaling();
				me._custom_arrow.logicBlock_visible();
				me._tt_hs_animation.logicBlock_text();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_arrow.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_arrow;
	};
	function SkinHotspotClass_ht_flycam(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_flycam=document.createElement('div');
		el.ggId="ht_flycam";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1023px;';
		hs+='position : absolute;';
		hs+='top : 197px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_flycam.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_flycam.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 700))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == false)) && 
				((player.getViewerSize().width <= 1400))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_flycam.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_flycam.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_flycam.style.transition='transform 0s';
				if (me._ht_flycam.ggCurrentLogicStateScaling == 0) {
					me._ht_flycam.ggParameter.sx = 0.7;
					me._ht_flycam.ggParameter.sy = 0.7;
					me._ht_flycam.style.transform=parameterToTransform(me._ht_flycam.ggParameter);
					skin.updateSize(me._ht_flycam);
				}
				else if (me._ht_flycam.ggCurrentLogicStateScaling == 1) {
					me._ht_flycam.ggParameter.sx = 0.7;
					me._ht_flycam.ggParameter.sy = 0.7;
					me._ht_flycam.style.transform=parameterToTransform(me._ht_flycam.ggParameter);
					skin.updateSize(me._ht_flycam);
				}
				else {
					me._ht_flycam.ggParameter.sx = 1;
					me._ht_flycam.ggParameter.sy = 1;
					me._ht_flycam.style.transform=parameterToTransform(me._ht_flycam.ggParameter);
					skin.updateSize(me._ht_flycam);
				}
			}
		}
		me._ht_flycam.logicBlock_scaling();
		me._ht_flycam.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_flycam.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_flycam.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_flycam']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_flycam.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_flycam']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_flycam.ggCurrentLogicStateScaling = -1;
		me._ht_flycam.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_flycam']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_flycam']=true;
			}
		}
		me._ht_flycam.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_img_node=document.createElement('div');
		els=me._external_img_node__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_img_node.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_img_node.ggSubElement.setAttribute('alt', player._(me._external_img_node.ggAltText));
			me._external_img_node.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_img_node.ggText_untranslated = img;
			me._external_img_node.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_img_node.ggSubElement.style.width = '0px';
			me._external_img_node.ggSubElement.style.height = '0px';
			me._external_img_node.ggSubElement.src='';
			me._external_img_node.ggSubElement.src=me._external_img_node.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_img_node.ggText != player._(me._external_img_node.ggText_untranslated)) {
				me._external_img_node.ggText = player._(me._external_img_node.ggText_untranslated);
				me._external_img_node.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "assets/icon/flycam.png";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="external_img_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_img_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_img_node.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_img_node.clientWidth;
			var parentHeight = me._external_img_node.clientHeight;
			var img = me._external_img_node__img;
			var aspectRatioDiv = me._external_img_node.clientWidth / me._external_img_node.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._external_img_node.ggScrollbars || currentWidth < me._external_img_node.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._external_img_node.scrollLeft=currentWidth / 2 - me._external_img_node.clientWidth / 2;
			}
			if (!me._external_img_node.ggScrollbars || currentHeight < me._external_img_node.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._external_img_node.scrollTop=currentHeight / 2 - me._external_img_node.clientHeight / 2;
			}
		}
		me._ht_flycam.appendChild(me._external_img_node);
		el=me._tt_hs_flycam=document.createElement('div');
		els=me._tt_hs_flycam__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_hs_flycam";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((128px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #3e3e3e;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px 5px 5px 5px;';
		hs+='overflow: hidden;';
		hs+="background-color: rgba(37, 46, 64, 0.8); border-radius: 8.8px;";
		els.setAttribute('style',hs);
		me._tt_hs_flycam.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_hs_flycam.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_hs_flycam.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_hs_flycam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_hs_flycam.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player._(me.hotspot.description) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_hs_flycam.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_hs_flycam.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_hs_flycam.style.transition='opacity 200ms ease 0ms';
				if (me._tt_hs_flycam.ggCurrentLogicStateAlpha == 0) {
					me._tt_hs_flycam.style.visibility=me._tt_hs_flycam.ggVisible?'inherit':'hidden';
					me._tt_hs_flycam.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_hs_flycam.style.opacity == 0.0) { me._tt_hs_flycam.style.visibility="hidden"; } }, 205);
					me._tt_hs_flycam.style.opacity=0;
				}
			}
		}
		me._tt_hs_flycam.logicBlock_alpha();
		me._tt_hs_flycam.ggUpdatePosition=function (useTransition) {
		}
		me._ht_flycam.appendChild(me._tt_hs_flycam);
		me._ht_flycam.logicBlock_scaling();
		me._tt_hs_flycam.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_hs_flycam.logicBlock_alpha();
			};
			me.ggEvent_changenode=function() {
				me._tt_hs_flycam.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_flycam.logicBlock_scaling();
				me._tt_hs_flycam.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_flycam.logicBlock_scaling();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_flycam.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_flycam;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_flycam') {
				hotspot.skinid = 'ht_flycam';
				hsinst = new SkinHotspotClass_ht_flycam(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_arrow') {
				hotspot.skinid = 'ht_arrow';
				hsinst = new SkinHotspotClass_ht_arrow(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info_b') {
				hotspot.skinid = 'ht_info_b';
				hsinst = new SkinHotspotClass_ht_info_b(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_location') {
				hotspot.skinid = 'ht_location';
				hsinst = new SkinHotspotClass_ht_location(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_a_bo') {
				hotspot.skinid = 'ht_node_a_bo';
				hsinst = new SkinHotspotClass_ht_node_a_bo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_a') {
				hotspot.skinid = 'ht_node_a';
				hsinst = new SkinHotspotClass_ht_node_a(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_f') {
				hotspot.skinid = 'ht_node_f';
				hsinst = new SkinHotspotClass_ht_node_f(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_ring';
				hsinst = new SkinHotspotClass_ht_ring(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._powered_by.ggUpdateConditionTimer();
		me._setting_pad.ggUpdateConditionTimer();
		me._language_pad.ggUpdateConditionTimer();
		me._zoom_pad.ggUpdateConditionTimer();
		me._button_auto_rotate.ggUpdateConditionTimer();
		me._vr_pad.ggUpdateConditionTimer();
		me._bg_btn.ggUpdateConditionTimer();
		me._map_ico.ggUpdateConditionTimer();
		me._vrrotate_m.ggUpdateConditionTimer();
		me._rotate_m.ggUpdateConditionTimer();
		me._language_m.ggUpdateConditionTimer();
		me._fullscreen_m.ggUpdateConditionTimer();
		me._contact_m.ggUpdateConditionTimer();
		me._map_m.ggUpdateConditionTimer();
		me._vrrotate.ggUpdateConditionTimer();
		me._rotate.ggUpdateConditionTimer();
		me._language.ggUpdateConditionTimer();
		me._fullscreen.ggUpdateConditionTimer();
		me._contact.ggUpdateConditionTimer();
		me._map.ggUpdateConditionTimer();
		me._map_scale.ggUpdateConditionTimer();
		me._map_hide_ico.ggUpdateConditionTimer();
		me._screenshot.ggUpdateConditionTimer();
		me._getting_stared.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;} .ggskin.test_tt { font-family: sans-serif, "Work Sans"; font-size: 18px} .info-tt { font-family: "Roboto", sans-serif; font-size: 16px;} .menu { font-family: "Noto Sans", sans-serif; font-size: 18px;} .subject { font-family: "Calistoga", cursive; font-size: 18px;} .image_info {font-family: "Segoe UI",Arial,sans-serif; font-size: 16px;} .info-tt2 {font-family: "Encode Sans", sans-serif; font-size: 16px;} .montserrat {font-family: "Montserrat", sans-serif; font-size:16;} .be-vn-pro{font-family: "Be Vietnam Pro", sans-serif; font-size:18;} .gg_contextmenu { border-radius: 10px; overflow: hidden; background-color: #002a5e !important } .gg_context_row a { color: white !important } .gg_context_row { color: white !important } .gg_context_row:hover { background-color: #a8c543 !important } .ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .ggskin a { color: #613e0c; text-decoration: none; } .ggskin a:hover { color: #a8c543; text-decoration: underline; } .gg_context_row { text-align: left !important; } /* width */ ::-webkit-scrollbar { width: 6px; } /* Track */ ::-webkit-scrollbar-track { background-color: rgb(76, 76, 76); border-radius: 6px; } /* Handle */ ::-webkit-scrollbar-thumb { background-color: rgb(0, 170, 255); border-radius: 6px; } /* Handle on hover */ ::-webkit-scrollbar-thumb:hover { background-color: rgb(255, 85, 0); } @keyframes rotation { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @keyframes stretch { 0% { transform: scale(1); } 100% { transform: scale(1.2); } } @keyframes pulse { 0% { -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.8); box-shadow: 0 0 0 0 rgba(213, 213, 213, 0.7); border-radius: 100%; } 70% { -moz-box-shadow: 0 0 0 30px rgba(204, 169, 44, 0); box-shadow: 0 0 0 40px rgba(213, 213, 213, 0); border-radius: 100%; } 100% { -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0); box-shadow: 0 0 0 0 rgba(213, 213, 213, 0); border-radius: 100%; } } @keyframes moving { from { transform: translateX(50%); right: 100%; } to { transform: translateX(-50%); right: 0%; } } .movetxt { animation: moving 5s infinite linear alternate; } @keyframes shake { 0% { transform: translate(1px,1px) rotate(0deg) } 10% { transform: translate(-1px,-2px) rotate(-1deg) } 20% { transform: translate(-3px) rotate(1deg) } 30% { transform: translate(3px,2px) rotate(0deg) } 40% { transform: translate(1px,-1px) rotate(1deg) } 50% { transform: translate(-1px,2px) rotate(-1deg) } 60% { transform: translate(-3px,1px) rotate(0deg) } 70% { transform: translate(3px,1px) rotate(-1deg) } 80% { transform: translate(-1px,-1px) rotate(1deg) } 90% { transform: translate(1px,2px) rotate(0deg) } to { transform: translate(1px,1px) rotate(-1deg) } } h8 { color: rgb(165, 30, 34); text-align: center;font-family: "Montserrat", sans-serif; font-weight:800; font-size: 18px; padding : 0px; margin :0px;} p {text-indent: 0px;font-family: Arial, sans-serif; font-weight:400; font-size: 16px; margin: 0px; padding:10px;}'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};