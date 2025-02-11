'use strict'
const WebGL={
	log:'',
	setup:function(c,tr,m){
		var gl=c.getContext('webgl')||c.getContext('experimental-webgl');
		gl.clearColor(0,0,0,tr?0:1);
		if(!m){gl.enable(gl.CULL_FACE);gl.frontFace(gl.CCW);//gl.frontFace(gl.CW);
		gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.clearDepth(1);}
		gl.enable(gl.BLEND);gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE);
		if(gl.getExtension('OES_standard_derivatives'))console.log('OES_standard_derivatives');
		//if(gl.getExtension('OES_texture_float_linear'))console.log('OES_texture_float_linear');
		console.log(gl);
		return gl;
	},
	resize:function(gl,w,h){
		gl.canvas.width=w;gl.canvas.height=h;
		gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
	},
	createShader:function(gl,t,src){
		var sh=gl.createShader(t?gl.FRAGMENT_SHADER:gl.VERTEX_SHADER);
		gl.shaderSource(sh,'#define round(x) floor(x+.5)\n'+src);
		gl.compileShader(sh);
		if(gl.getShaderParameter(sh,gl.COMPILE_STATUS)){
			console.log(t?'fsh':'vsh',sh);
			return sh;
		}
		else this.log+=gl.getShaderInfoLog(sh);
	},
	createProgram:function(gl,v,f){
		var prg=gl.createProgram();
		gl.attachShader(prg,v);gl.attachShader(prg,f);gl.linkProgram(prg);
		if(gl.getProgramParameter(prg,gl.LINK_STATUS)){
			gl.useProgram(prg);
			console.log(prg);
			return prg;
		}
		else this.log+=gl.getProgramInfoLog(prg);
	},
	compile:function(gl,vsh,fsh){
		this.log='';
		return this.createProgram(gl,this.createShader(gl,0,vsh),this.createShader(gl,1,fsh));//prg
	},
	texture:function(gl,url,callback,i=0){
		var img=new Image();
		img.onload=()=>{
			var tex=gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D,tex);
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
			gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE/*gl.FLOAT*/,img);
			var nw=img.naturalWidth,nh=img.naturalHeight;
			if(((nw&(nw-1))==0)&&((nh&(nh-1))==0))
				gl.generateMipmap(gl.TEXTURE_2D);
			else{
				console.log('mipmap canceled');
				gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
				gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
			}
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
			gl.bindTexture(gl.TEXTURE_2D,null);
			console.log(tex);
			callback({texture:tex,width:nw,height:nh},i);
		}
		img.src=url;
	},
	attributes:function(gl,prg,atts,index){
		var aloc=atts.map(x=>gl.getAttribLocation(prg,x.name));
		var vbo=atts.map(()=>gl.createBuffer());
		atts.forEach((x,i)=>{
			gl.bindBuffer(gl.ARRAY_BUFFER,vbo[i]);
			gl.enableVertexAttribArray(aloc[i]);
			gl.vertexAttribPointer(aloc[i],x.length,gl.FLOAT,false,0,0);
			gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(x.data),gl.STATIC_DRAW);
			gl.bindBuffer(gl.ARRAY_BUFFER,null);
		});
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.createBuffer());//ibo
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Int16Array(index),gl.STATIC_DRAW);
		gl.ilength=index.length;
		console.log(atts);
	},
	uniforms:function(gl,prg,unis){//type:[1i,1f,2i,2f,3i,3f,4i,4f,mat2,mat3,mat4,tex]
		var texi=0,loc;
		unis.forEach(x=>{if(x.data){
			if(Number(x.type.substr(0,1))){
				gl[`uniform${x.type}v`](gl.getUniformLocation(prg,x.name),(typeof x.data=='number')?[x.data]:x.data);
			}else{
				var test=x.type.substr(0,3);
				if(test=='mat'){
					gl[`uniformMatrix${x.type.substr(3,1)}fv`](gl.getUniformLocation(prg,x.name),false,x.data);
				}else if(test=='tex'){
					gl.activeTexture(gl['TEXTURE'+texi]);
					gl.bindTexture(gl.TEXTURE_2D,x.data.texture);
					gl.uniform1i(gl.getUniformLocation(prg,x.name),texi);
					if(x.rname)gl.uniform2fv(gl.getUniformLocation(prg,x.rname),[x.data.width,x.data.height]);
					texi++;
				}else console.log('err',x);
			}
		}});
	},
	draw:function(gl,l){
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.drawElements(gl.TRIANGLES,gl.ilength,gl.UNSIGNED_SHORT,0);
		gl.flush();
	}
}
