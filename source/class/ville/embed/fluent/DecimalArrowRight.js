/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DecimalArrowRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 3A2.5 2.5 0 0 0 6 5.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 8.5 3ZM7 5.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-3 0v-4ZM3 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12.5-9A2.5 2.5 0 0 0 13 5.5v3.7c.32-.08.66-.15 1-.18V5.5a1.5 1.5 0 0 1 3 0v4.1c.32.16.62.36.9.58.07-.22.1-.44.1-.68v-4A2.5 2.5 0 0 0 15.5 3Zm-1 7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    FILLED : "M8.5 3A2.5 2.5 0 0 0 6 5.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 8.5 3Zm-1 2.5a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM3 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12.5-9A2.5 2.5 0 0 0 13 5.5v3.7c.48-.13.98-.2 1.5-.2V5.5a1 1 0 1 1 2 0v3.87c.51.2.98.48 1.4.81.07-.22.1-.44.1-.68v-4A2.5 2.5 0 0 0 15.5 3Zm-1 7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"
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