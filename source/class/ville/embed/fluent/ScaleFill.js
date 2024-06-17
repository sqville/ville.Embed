/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScaleFill",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 6.5a.5.5 0 0 1 .14-.35A.5.5 0 0 1 6.5 6h2a.5.5 0 0 1 0 1h-.8l1.15 1.15a.5.5 0 1 1-.7.7L7 7.71v.79a.5.5 0 0 1-1 0v-2Zm.04 7.2a.5.5 0 0 1-.04-.2v-2a.5.5 0 0 1 1 0v.8l1.15-1.15a.5.5 0 0 1 .7.7L7.71 13h.79a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.46-.3Zm7.65-7.66a.5.5 0 0 1 .3.46v2a.5.5 0 0 1-.99 0v-.8l-1.15 1.15a.5.5 0 0 1-.7-.7L12.29 7h-.79a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .2.04Zm.16 7.82a.5.5 0 0 1-.35.14h-2a.5.5 0 0 1 0-1h.8l-1.15-1.15a.5.5 0 0 1 .7-.7L13 12.29v-.79a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.14.35ZM3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z",
    FILLED : "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm3.3 1.04a.5.5 0 0 0-.3.46v2a.5.5 0 0 0 1 0v-.8l1.15 1.15a.5.5 0 1 0 .7-.7L7.71 7h.79a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.2.04ZM6 11.5v2a.5.5 0 0 0 .14.35.5.5 0 0 0 .36.15h2a.5.5 0 0 0 0-1h-.8l1.15-1.15a.5.5 0 0 0-.7-.7L7 12.29v-.79a.5.5 0 0 0-1 0Zm7.85-5.36A.5.5 0 0 0 13.5 6h-2a.5.5 0 0 0 0 1h.8l-1.15 1.15a.5.5 0 0 0 .7.7L13 7.71v.79a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.14-.35Zm-.16 7.82a.5.5 0 0 0 .3-.46v-2a.5.5 0 0 0-.99 0v.8l-1.15-1.15a.5.5 0 0 0-.7.7L12.29 13h-.79a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .2-.04Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});