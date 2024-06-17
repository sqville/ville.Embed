/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextDirectionRotate90Left",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 13.5c0 .2-.13.4-.32.47l-8 3a.5.5 0 1 1-.36-.94l2.68-1v-3.06l-2.68-1a.5.5 0 1 1 .36-.94l8 3c.2.07.32.26.32.47Zm-1.92 0L12 12.35v2.3l3.08-1.15ZM5 16.5a.5.5 0 1 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2A.5.5 0 0 0 5.5 3a.5.5 0 0 0-.35.15l-2 2a.5.5 0 1 0 .7.7L5 4.71V16.5Zm8-7a.5.5 0 0 0 1 0V4.7l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L13 4.71V9.5Z",
    FILLED : "M17 13.5c0 .3-.19.58-.47.7l-7.5 3a.75.75 0 0 1-.56-1.4l2.03-.8v-3l-2.03-.8a.75.75 0 0 1 .56-1.4l7.5 3c.28.12.47.4.47.7Zm-2.77 0L12 12.6v1.8l2.23-.9ZM5 16.25a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L5 5.56v10.69Zm8-7a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v3.69Z"
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