/* ************************************************************************

   SQville Software

   http://sqville.com

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */
/* ************************************************************************


************************************************************************* */
/**
 * 
 * 
 */
qx.Class.define("ville.embed.package.FluentUISvg",
{
  extend : qx.core.Object,

  statics :
  {
    META : {
      name : "Fluent UI SVG Images",
      description : "Fluent UI SVG images for testing purposes"
    },
  
    // Named icons/graphics configurations
    EMBEDS :
    {
      "svgcircle" : { template : "svgcircle" },
      "fui-airtickets" : { template : "fluent-single-path-svg", content : "airtickets" },
      "fui-access" : {template : "fui-access"},
      "fui-word" : {template : "fui-word"},
      "fui-excel" : {template : "fui-excel"},
      "fui-ppt" : {template : "fui-ppt"},
      "fui-pub" : {template : "fui-pub"},
      "fui-onenote" : {template : "fui-onenote"},
      "ville-icon-one" : {}
    },
	
    TEMPLATES :
    {
      "svgcircle" : '<svg><circle cx="{{cx}}" cy="{{cy}}" r="{{r}}" stroke="{{stroke}}" stroke-width="{{strokewidth}}" fill="{{fill}}" /></svg>',
      "fluent-single-path-svg" : '<svg viewBox="0 0 2048 2048" fill=currentColor><path d="{{pathd}}"></path></svg>'
    },
    
    CONTENT : {
      "svgblackcircle" : { cx : 50, cy : 50, r : 40, stroke : "black", strokewidth : 3, fill : "green" },
      "airtickets" : {pathd : "M2048 640v1152H0V640h440q1 0 33-10t87-29 126-42 154-51 169-57 172-58 161-54 139-46 103-35 56-19l134 401h274zm-1206 0h797l-79-239-718 239zm1078 128H128v896h1792V768zm-256 128v128h-128V896h128zm0 256v128h-128v-128h128zm0 384h-128v-128h128v128zm128-384h-128v-128h128v128zm0 256h-128v-128h128v128zM469 1280l-85-256h128l64 128h277l-85-256h128l128 256h256q26 0 45 19t19 45q0 26-19 45t-45 19h-256l-128 256H768l85-256H469z"}
    },
	
	  ANIMATIONS : {},

    CSS : {}
  }
});
