/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextDirectionRotate90Ltr",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M17 6.5a.5.5 0 0 0-.32-.47l-8-3a.5.5 0 1 0-.36.94l2.68 1v3.06l-2.68 1a.5.5 0 0 0 .36.94l8-3A.5.5 0 0 0 17 6.5Zm-1.92 0L12 7.65v-2.3l3.08 1.15ZM5 3.5a.5.5 0 0 1 1 0v11.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15l-2-2a.5.5 0 1 1 .7-.7L5 15.29V3.5Zm8 7a.5.5 0 0 1 1 0v4.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L13 15.29V10.5Z";
   var pathdfilled = "M17 6.5c0-.3-.19-.58-.47-.7l-7.5-3a.75.75 0 0 0-.56 1.4l2.03.8v3l-2.03.8a.75.75 0 1 0 .56 1.4l7.5-3a.75.75 0 0 0 .47-.7Zm-2.77 0L12 7.4V5.6l2.23.9ZM5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V3.75Zm8 7a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72v-3.69Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});