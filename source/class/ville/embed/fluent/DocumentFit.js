/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentFit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6ZM5 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1C6 4.67 6.67 4 7.5 4h1a.5.5 0 0 1 0 1h-1Zm0 10a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 0 0-1h-1ZM13 5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 0 1-1 0v-1Zm-.5 9.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 0 1 0-1h1Z",
    FILLED : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6Zm1.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1C6 4.67 6.67 4 7.5 4h1a.5.5 0 0 1 0 1h-1Zm0 10h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 6 14.5v-1a.5.5 0 0 1 1 0v1c0 .28.22.5.5.5ZM13 5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 0 1-1 0v-1Zm-.5 9.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 0 1 0-1h1Z"
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