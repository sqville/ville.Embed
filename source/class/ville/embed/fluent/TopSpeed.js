/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TopSpeed",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.42 4.7A6.97 6.97 0 0 1 9.5 3.03V4.5a.5.5 0 0 0 1 0V3.02A7 7 0 0 1 16.93 9H15a.5.5 0 0 0 0 1h2c0 2-.86 3.9-2.21 5.17a.5.5 0 0 0 .69.73A8.17 8.17 0 0 0 18 10a8 8 0 1 0-13.44 5.9.5.5 0 0 0 .69-.73A7.2 7.2 0 0 1 3 10h2a.5.5 0 1 0 0-1H3.07c.2-1.36.78-2.6 1.64-3.58l1.44 1.43a.5.5 0 0 0 .7-.7L5.42 4.7Zm8.03 1.1a.5.5 0 0 1 .75.64l-.12.2a343.95 343.95 0 0 1-2.2 3.82 30.11 30.11 0 0 1-.65 1.01 1.5 1.5 0 0 1-2.28-1.94c.07-.09.2-.2.34-.33l.56-.48a123.93 123.93 0 0 1 3.42-2.77l.18-.14Z",
    FILLED : "M9.25 3.54a6.5 6.5 0 0 0-3.3 1.36l.83.82a.75.75 0 0 1-1.06 1.06l-.83-.82A6.39 6.39 0 0 0 3.57 9h1.68a.75.75 0 0 1 0 1.5H3.53a6.65 6.65 0 0 0 2.06 4.2.75.75 0 0 1-1.03 1.1A8.11 8.11 0 0 1 2 9.94C2 5.55 5.59 2 10 2a7.97 7.97 0 0 1 5.47 13.8.75.75 0 0 1-1.02-1.1 6.58 6.58 0 0 0 2.03-4.2h-1.73a.75.75 0 0 1 0-1.5h1.68a6.48 6.48 0 0 0-5.68-5.46v1.21a.75.75 0 0 1-1.5 0v-1.2Zm4.2 2.27a.5.5 0 0 1 .75.63l-.12.2a343.95 343.95 0 0 1-2.2 3.82 30.11 30.11 0 0 1-.65 1.01 1.5 1.5 0 0 1-2.28-1.94c.07-.09.2-.2.34-.33l.56-.48a123.93 123.93 0 0 1 3.42-2.77l.18-.14Z"
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