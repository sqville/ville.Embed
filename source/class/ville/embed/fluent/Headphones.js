/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Headphones",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 10a7 7 0 0 1 14 0v1h-3.5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5H16a2 2 0 0 0 2-2v-6a8 8 0 1 0-16 0v6c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H3v-1Zm0 2h3v5H4a1 1 0 0 1-1-1v-4Zm14 0v4a1 1 0 0 1-1 1h-2v-5h3Z",
    FILLED : "M3 10a7 7 0 0 1 14 0v1h-3.5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5H16a2 2 0 0 0 2-2v-6a8 8 0 1 0-16 0v6c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H3v-1Z"
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