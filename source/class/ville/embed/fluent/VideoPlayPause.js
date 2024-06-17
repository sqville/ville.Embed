/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoPlayPause",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1Zm3.5.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1ZM3 6.5c0-.2.22-.32.39-.2l5.5 3.53c.15.1.14.32-.01.42l-5.5 3.46A.25.25 0 0 1 3 13.5v-7Zm.93-1.05A1.25 1.25 0 0 0 2 6.5v7c0 .98 1.08 1.58 1.92 1.06l5.5-3.46c.77-.5.77-1.62 0-2.11l-5.5-3.54Z",
    FILLED : "M11.5 5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-1Zm5 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-1Zm-12.57.45A1.25 1.25 0 0 0 2 6.5v7c0 .98 1.08 1.58 1.92 1.06l5.5-3.46c.77-.5.77-1.62 0-2.11l-5.5-3.54Z"
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