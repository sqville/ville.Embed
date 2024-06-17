/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlashOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.27 5.98 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-5.3-5.29-5 5.11c-.75.79-2.05.06-1.8-1L6.24 12H4.96c-.7 0-1.21-.68-1.02-1.36l1.33-4.66Zm5.88 5.88L6.08 6.79 4.9 10.92c-.01.04.02.08.06.08h1.9a.5.5 0 0 1 .5.62l-1.33 5.3v.04l.03.03.04.01h.01l.02-.02 5.02-5.12Zm3.66-3.74-2.26 2.3.7.72 2.28-2.32c.65-.68.18-1.82-.76-1.82H12.2l1.27-3.6c.23-.69-.28-1.4-1.01-1.4H7.21c-.47 0-.89.31-1.02.77L5.9 3.78l.81.8.44-1.53c0-.03.03-.05.06-.05h5.25c.04 0 .07.04.06.08l-1.5 4.25a.5.5 0 0 0 .48.67h3.3l.02.04.01.05-.02.03Z",
    FILLED : "m11.86 12.56 5.29 5.3a.5.5 0 0 0 .7-.71l-15-15a.5.5 0 1 0-.7.7l3.12 3.13-1.33 4.66c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l5-5.12Zm3.67-3.74-2.27 2.32L5.9 3.78l.29-1C6.32 2.3 6.74 2 7.21 2h5.25c.73 0 1.24.71 1 1.4L12.2 7h2.57c.94 0 1.4 1.14.76 1.81Z"
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