/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CatchUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.45 7.27a.5.5 0 0 1 .91.04l2.35 5.76a1.5 1.5 0 0 0 2.73.11l1.23-2.4a.5.5 0 0 1 .44-.28h.98a1.5 1.5 0 1 0 0-1h-.98a1.5 1.5 0 0 0-1.33.82l-1.23 2.4a.5.5 0 0 1-.91-.03L9.29 6.93a1.5 1.5 0 0 0-2.73-.11l-1.23 2.4a.5.5 0 0 1-.44.28H3.9a1.5 1.5 0 1 0 0 1h.98a1.5 1.5 0 0 0 1.33-.82l1.23-2.4Z",
    FILLED : "M7.67 7.14c.1-.2.38-.18.46.02l2.33 6.2a1.75 1.75 0 0 0 3.23.14l1.22-2.6a.25.25 0 0 1 .23-.15h1.06a1.5 1.5 0 1 0 0-1.5h-1.06c-.68 0-1.3.4-1.59 1l-1.22 2.6c-.1.2-.38.2-.46-.01l-2.33-6.2A1.75 1.75 0 0 0 6.3 6.5L5.1 9.1a.25.25 0 0 1-.22.14H3.8a1.5 1.5 0 1 0 0 1.5h1.07c.67 0 1.29-.4 1.58-1l1.22-2.6Z"
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