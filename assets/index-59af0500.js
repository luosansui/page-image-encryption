import{p as E,r as p}from"./zip-4713de7c.js";import"./index-7a388a79.js";const T=(e,i,n)=>{const r=new OffscreenCanvas(e,i);r.addEventListener("webglcontextlost",function(a){console.log(a,111)});const o=r.getContext(n,{preserveDrawingBuffer:!0});if(!o)throw new Error("WebGL Context Create Error");return o},h=(e,i,n)=>{const r=e.createShader(i);if(!r)throw new Error("WebGL Shader Create Error");e.shaderSource(r,n),e.compileShader(r);const o=e.getShaderInfoLog(r);if(o&&o.length>0)throw o;return r},C=(e,i,...n)=>{for(const o of n)e.attachShader(i,o);e.linkProgram(i);const r=e.getProgramInfoLog(i);if(r&&r.length>0)throw r;for(const o of n)e.deleteShader(o);return i},R=(e,i,n)=>{if(i.length!==n.length)throw new Error("shadersType length not equal shadersSource length");const r=[];for(let a=0;a<n.length;a++){const s=h(e,i[a],n[a]);r.push(s)}const o=e.createProgram();if(!o)throw new Error("WebGL Program Create Error");return C(e,o,...r)},v=(e,i)=>{const{width:n,height:r,buffer:o}=i,a=new Uint8Array(o),s=e.createTexture();if(!s)throw new Error("WebGL Texture Create Error");return e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.UNSIGNED_BYTE,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),s},A=(e,i,n,r)=>{const o=e.createBuffer();return e.bindBuffer(i,o),e.bufferData(i,n,r),e.bindBuffer(e.ARRAY_BUFFER,null),o},d=(e,i,n)=>{const r=`#version 300 es
    precision highp float;
    layout (location = 0) in vec2 a_position;
    out vec2 v_texcoord;
    void main() {
      gl_Position = vec4(a_position, 0, 1);
      v_texcoord = a_position * 0.5 + 0.5;// 将顶点坐标转换为纹理坐标, 方便纹理采样
    }
    `,{name:o,buffer:a,width:s,height:c}=e,u=new ArrayBuffer(a.byteLength),_=new Uint8Array(u),t=T(s,c,"webgl2"),f=R(t,[t.VERTEX_SHADER,t.FRAGMENT_SHADER],[r,i]);t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight);const x=A(t,t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),m=v(t,e);return t.useProgram(f),t.bindBuffer(t.ARRAY_BUFFER,x),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,2*4,0),t.bindTexture(t.TEXTURE_2D,m),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),n==null||n(t,f),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.readPixels(0,0,s,c,t.RGBA,t.UNSIGNED_BYTE,_),t.bindTexture(t.TEXTURE_2D,null),t.bindBuffer(t.ARRAY_BUFFER,null),t.deleteProgram(f),{name:o,buffer:u,width:s,height:c}},b=(e,i)=>{const n=E(e);return{data:d(n,`#version 300 es
    precision mediump float;
    uniform int u_iteration;
    uniform float u_size;
    uniform sampler2D u_texture;
    in vec2 v_texcoord;
    out vec4 outColor;
    void main() {
      // 将纹理坐标转换为像素坐标
      ivec2 pixelCoordinate = ivec2(v_texcoord * u_size);
      // 定义变换矩阵
      const mat2 transformMatrix = mat2(1.0, 1.0, 1.0, 2.0);
      //迭代变换
      for (int i = 0; i < u_iteration; i++) {
        // 将 pixelCoordinate 转换为 vec2 类型以进行矩阵乘法
        vec2 tempPixelCoordinate = vec2(pixelCoordinate);
        // 计算矩阵乘积
        tempPixelCoordinate = transformMatrix * tempPixelCoordinate;
        // 将结果转换回 ivec2 类型
        pixelCoordinate = ivec2(tempPixelCoordinate);
        // 为结果加上 int(u_size)
        pixelCoordinate = pixelCoordinate + int(u_size);
        // 对结果取模 u_size
        pixelCoordinate = pixelCoordinate % int(u_size);
      }

     // 将获取到的颜色值设置为输出颜色
     outColor = texelFetch(u_texture, pixelCoordinate, 0);
    }
  `,(a,s)=>{const c=a.getUniformLocation(s,"u_iteration");a.uniform1i(c,Number(i));const u=a.getUniformLocation(s,"u_size");a.uniform1f(u,n.width)})}},L=(e,i)=>{const o=d(e,`#version 300 es
  precision highp float;
  uniform int u_iterations;
  uniform float u_size;
  uniform sampler2D u_texture;
  in vec2 v_texcoord;
  out vec4 outColor;
  void main() {
    // 将纹理坐标转换为像素坐标
    ivec2 pixelCoordinate = ivec2(v_texcoord * u_size);
    // 定义变换矩阵
    const mat2 transformMatrix = mat2(2.0, -1.0, -1.0, 1.0);
    for (int i = 0; i < u_iterations; i++) {
      // 将 pixelCoordinate 转换为 vec2 类型以进行矩阵乘法
      vec2 tempPixelCoordinate = vec2(pixelCoordinate);
      // 计算矩阵乘积
      tempPixelCoordinate = transformMatrix * tempPixelCoordinate;
      // 将结果转换回 ivec2 类型
      pixelCoordinate = ivec2(tempPixelCoordinate);
      // 为结果加上 int(u_size)
      pixelCoordinate = pixelCoordinate + int(u_size);
      // 对结果取模 u_size
      pixelCoordinate = pixelCoordinate % int(u_size);
    }
    outColor = texelFetch(u_texture, pixelCoordinate, 0);
  }
  `,(a,s)=>{const c=a.getUniformLocation(s,"u_iterations");a.uniform1i(c,Number(i));const u=a.getUniformLocation(s,"u_size");a.uniform1f(u,e.width)});return{data:p(o)}};export{L as decrypt,b as encrypt};
