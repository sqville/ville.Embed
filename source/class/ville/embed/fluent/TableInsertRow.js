/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableInsertRow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2Zm9 1H8V8h4v4ZM5 8h2v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 4V8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2Z",
    FILLED : "M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11c0 1.1.9 2 2 2h2V7H5a2 2 0 0 0-2 2v2Zm9 2H8V7h4v6Zm1 0V7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2Z"
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