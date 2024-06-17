/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DriveTrain",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 4a2 2 0 1 1 4 0v1h1.59a1.5 1.5 0 0 1 2.82 0H13V4a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0V6h-1.59a1.5 1.5 0 0 1-.91.91v6.18c.43.15.76.48.91.91H13v-1a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0v-1h-1.59a1.5 1.5 0 0 1-2.82 0H7v1a2 2 0 1 1-4 0v-3a2 2 0 1 1 4 0v1h1.59c.15-.43.48-.76.91-.91V6.9A1.5 1.5 0 0 1 8.59 6H7v1a2 2 0 1 1-4 0V4Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm10 0a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1ZM5 12a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm9 1v3a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0Z",
    FILLED : "M15 2a2 2 0 0 0-2 2v1h-1.59A1.5 1.5 0 0 0 8.6 5H7V4a2 2 0 1 0-4 0v3a2 2 0 1 0 4 0V6h1.59c.15.43.48.76.91.91v6.18a1.5 1.5 0 0 0-.91.91H7v-1a2 2 0 1 0-4 0v3a2 2 0 1 0 4 0v-1h1.59a1.5 1.5 0 0 0 2.82 0H13v1a2 2 0 1 0 4 0v-3a2 2 0 1 0-4 0v1h-1.59a1.5 1.5 0 0 0-.91-.91V6.9c.43-.15.76-.48.91-.91H13v1a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2Z"
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