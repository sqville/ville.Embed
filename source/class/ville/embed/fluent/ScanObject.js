/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScanObject",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2ZM8.77 6.9a1.5 1.5 0 0 1 2.46 0l2.6 3.75A1.5 1.5 0 0 1 12.58 13H7.41a1.5 1.5 0 0 1-1.23-2.35L8.77 6.9Zm1.64.57a.5.5 0 0 0-.82 0l-2.6 3.75a.5.5 0 0 0 .42.78h5.18a.5.5 0 0 0 .41-.78l-2.59-3.75Z",
    FILLED : "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm6.73 3.9a1.5 1.5 0 0 0-2.46 0l-2.6 3.75A1.5 1.5 0 0 0 7.42 13h5.18a1.5 1.5 0 0 0 1.23-2.35L11.23 6.9ZM3 15.5c0 .83.67 1.5 1.5 1.5h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 2 15.5v-2a.5.5 0 0 1 1 0v2ZM15.5 3c.83 0 1.5.67 1.5 1.5v2a.5.5 0 0 0 1 0v-2A2.5 2.5 0 0 0 15.5 2h-2a.5.5 0 0 0 0 1h2ZM17 15.5c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-2a.5.5 0 0 0-1 0v2Z"
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