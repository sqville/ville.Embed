/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Pivot",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h4.59a1.5 1.5 0 0 0 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.59a1.5 1.5 0 0 0-1 0V5.5c0-.83-.67-1.5-1.5-1.5h-9ZM6 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm4 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4ZM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6Zm10.85 2.15a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l.15-.14v1.79c0 .83-.67 1.5-1.5 1.5h-1.8l.15-.15a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7l1 1a.5.5 0 0 0 .7-.7l-.14-.15h1.79a2.5 2.5 0 0 0 2.5-2.5v-1.8l.15.15a.5.5 0 0 0 .7-.7l-1-1Z",
    FILLED : "M3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.59a1.5 1.5 0 0 1 .35-1.56l1-1a1.5 1.5 0 0 1 2.47.56h.59a.5.5 0 0 0 .5-.5v-.59a1.5 1.5 0 0 1-.56-2.47l1-1a1.5 1.5 0 0 1 1.56-.35V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5ZM6 5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6ZM7 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1Zm9.85 2.15a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l.15-.14v1.79c0 .83-.67 1.5-1.5 1.5h-1.8l.15-.15a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7l1 1a.5.5 0 0 0 .7-.7l-.14-.15h1.79a2.5 2.5 0 0 0 2.5-2.5v-1.8l.15.15a.5.5 0 0 0 .7-.7l-1-1Z"
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