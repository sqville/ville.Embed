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
qx.Class.define("ville.embed.package.MaterialSvg",
{
  extend : qx.core.Object,

  statics :
  {
    META : {
      name : "Material Design SVG Images",
      description : "Material Design SVG images for testing purposes"
    },
  
    // Named icons/graphics configurations
    EMBEDS :
    {
      "material-event" : { template : "material-basic", content : "materialevent" },
      "material-business" : { template : "material-basic", content : "materialbusiness" },
      "material-biotech" : { template : "material-gbasic", content : "materialbiotech" },
      "material-bolt" : { template : "material-gbasic", content : "materialbolt" }
    },
	
    TEMPLATES :
    {
      "material-basic" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:currentColor;"><path d="{{pathd}}"></path></svg>',
      "material-gbasic" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:currentColor;"><g><path d="{{pathd}}"></path></g></svg>'
    },
    
    CONTENT : {
      "materialevent" : {pathd : "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"},
      "materialbusiness" : {pathd : "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"},
      "materialbiotech" : {pathd : "M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"},
      "materialbolt" : {pathd : "M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z"}
    },
	
	  ANIMATIONS : {},

    CSS : {}
  }
});
