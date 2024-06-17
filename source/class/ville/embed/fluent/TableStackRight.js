/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableStackRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm-3 8h3V8H4v4Zm0 1v2a1 1 0 0 0 1 1h2v-3H4Zm4 0v3h3v-3H8Zm3-1V8H8v4h3Zm0-8H8v3h3V4Z",
    FILLED : "M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM3 15v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8Zm0-5h4V8H8v4ZM3 8v4h4V8H3Zm9-1H8V3h3.5c.28 0 .5.22.5.5V7ZM3 7V5c0-1.1.9-2 2-2h2v4H3Z"
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