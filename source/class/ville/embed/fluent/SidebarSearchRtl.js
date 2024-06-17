/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SidebarSearchRtl",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v7c0-1.07-.37-2.06-1-2.83V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h4.17c.77.63 1.76 1 2.83 1h-7A2.5 2.5 0 0 1 3 14.5v-9Zm3 1a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Zm10 6c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 0 1-.7.7L14.6 15.3a3.5 3.5 0 1 1 1.4-2.8Zm-1 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
    FILLED : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v7a4.5 4.5 0 1 0-4.5 4.5h-7A2.5 2.5 0 0 1 3 14.5v-9Zm3 1v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0Zm10 6c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 0 1-.7.7L14.6 15.3a3.5 3.5 0 1 1 1.4-2.8Zm-1 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
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