/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudArrowUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 0 0-2.15-1.6h-.07a1 1 0 0 1-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm3.5 7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm1.6 4.9a.56.56 0 1 0 .8-.8l-2-2a.56.56 0 0 0-.8 0l-2 2a.56.56 0 1 0 .8.8l1.1-1.1v2.7a.5.5 0 0 0 1 0v-2.7l1.1 1.1Z",
    FILLED : "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 0 1 3.27 3.66A5.74 5.74 0 0 0 7.77 13H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm3.5 7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm1.6 4.9a.56.56 0 1 0 .8-.8l-2-2a.56.56 0 0 0-.8 0l-2 2a.56.56 0 1 0 .8.8l1.1-1.1v2.7a.5.5 0 0 0 1 0v-2.7l1.1 1.1Z"
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