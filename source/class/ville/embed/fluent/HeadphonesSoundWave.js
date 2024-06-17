/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeadphonesSoundWave",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a7 7 0 0 0-7 7v1h1.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-6a8 8 0 1 1 16 0v6a2 2 0 0 1-2 2h-.5a.5.5 0 0 1-.5-.5v-6c0-.28.22-.5.5-.5H17v-1a7 7 0 0 0-7-7ZM3 16a1 1 0 0 0 1 1v-5H3v4Zm14 0v-4h-1v5a1 1 0 0 0 1-1Zm-6.5-5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-3 1.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Zm5.5.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z",
    FILLED : "M10 3a7 7 0 0 0-7 7v1h1.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-6a8 8 0 1 1 16 0v6a2 2 0 0 1-2 2h-.5a.5.5 0 0 1-.5-.5v-6c0-.28.22-.5.5-.5H17v-1a7 7 0 0 0-7-7Zm.5 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-3 1.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Zm5.5.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z"
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