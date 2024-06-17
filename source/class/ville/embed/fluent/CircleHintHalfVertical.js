/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleHintHalfVertical",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.44 2.15a7.95 7.95 0 0 0-6.34 6.6 8.06 8.06 0 0 0 3.46 7.9 8.08 8.08 0 0 0 6 1.19.5.5 0 0 0-.2-.97 7 7 0 1 1 0-13.73.5.5 0 0 0 .2-.99 8.04 8.04 0 0 0-3.12 0Zm6 1.2a.5.5 0 0 0-.55.83 7.04 7.04 0 0 1 1.93 1.93.5.5 0 1 0 .83-.56 8.04 8.04 0 0 0-2.2-2.2Zm3.4 5.09a.5.5 0 1 0-.97.2 7.2 7.2 0 0 1 0 2.73.5.5 0 1 0 .98.2 8.2 8.2 0 0 0 0-3.13Zm-1.19 6a.5.5 0 1 0-.83-.55 7.04 7.04 0 0 1-1.93 1.93.5.5 0 1 0 .55.83 8.04 8.04 0 0 0 2.21-2.2Z",
    FILLED : "M10 2a7.96 7.96 0 0 0-8 8 8.08 8.08 0 0 0 1.5 4.66A8.04 8.04 0 0 0 10 18c.44 0 .88-.04 1.3-.1a.75.75 0 0 0-.24-1.49 6.5 6.5 0 1 1 0-12.83.75.75 0 0 0 .24-1.47c-.42-.07-.86-.1-1.3-.1Zm4.66 1.5a.75.75 0 0 0-.87 1.22c.57.41 1.08.92 1.5 1.5a.75.75 0 0 0 1.21-.88 8.04 8.04 0 0 0-1.84-1.84Zm3.23 5.2a.75.75 0 0 0-1.48.24c.12.69.12 1.43 0 2.12a.75.75 0 0 0 1.48.24c.14-.85.14-1.75 0-2.6Zm-1.39 5.96a.75.75 0 0 0-1.22-.87 6.54 6.54 0 0 1-1.5 1.5.75.75 0 1 0 .88 1.21 8.04 8.04 0 0 0 1.84-1.84Z"
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