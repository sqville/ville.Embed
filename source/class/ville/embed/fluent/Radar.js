/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Radar",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m14.5 3.38-.72.72a7 7 0 1 0 1.17 10.85.5.5 0 0 1 .7.7A8 8 0 1 1 14.5 3.39Zm-2.94 2.94.75-.75a5 5 0 1 0 1.23 7.97.5.5 0 1 0-.71-.71 4 4 0 1 1-1.27-6.51Zm4.3-2.17c.19.2.19.5 0 .7l-4.9 4.9a1 1 0 1 1-.7-.72l4.89-4.88c.2-.2.5-.2.7 0ZM17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    FILLED : "m14.28 3.24-1.09 1.1a6.5 6.5 0 1 0 1.4 10.26.75.75 0 0 1 1.07 1.06 8 8 0 1 1-1.38-12.42Zm-3.3 3.3 1.17-1.17a5.1 5.1 0 1 0 1.46 8.24.75.75 0 1 0-1.06-1.06 3.6 3.6 0 1 1-1.56-6.01Zm4.8-2.32c.3.3.3.77 0 1.06l-4.33 4.33a1.5 1.5 0 1 1-1.06-1.06l4.33-4.33c.3-.3.77-.3 1.06 0Zm1.47 9.03a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
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