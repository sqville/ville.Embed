/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextFontInfo",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.96 3.84a.5.5 0 0 0-.94-.02L4.29 11h-.02v.05l-1.24 3.27a.5.5 0 0 0 .94.36L4.98 12h3.23c.1-.35.23-.68.39-1H5.36l2.1-5.54 1.65 4.73c.23-.3.48-.58.77-.83L7.96 3.84Zm5.54 7.04a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24Zm0 5.12a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5Zm0-7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 8a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z",
    FILLED : "M8.2 3.75a.75.75 0 0 0-1.42-.02L2.8 14.23a.75.75 0 1 0 1.4.54l.86-2.27H8.1c.1-.53.27-1.03.51-1.5H5.63l1.82-4.8 1.48 4.24c.32-.47.7-.9 1.15-1.25L8.2 3.75Zm5.3 7.13a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24Zm0 5.12a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5Zm0-7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 8a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
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