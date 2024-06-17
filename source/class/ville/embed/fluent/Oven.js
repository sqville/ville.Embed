/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Oven",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 14V8h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm12-7H4V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1Zm-9.25-.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2.5-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6Zm0 5v-4h8v4H6Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v1h14V6a3 3 0 0 0-3-3H6Zm1.5 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4 .75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM3 14V8h14v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm3.5-4a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7Z"
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