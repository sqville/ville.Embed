/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CursorHover",
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

   var pathdregular = "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-1.16 1.82 1.5 1.5 0 0 0-.28-.38l-.45-.45A1 1 0 0 0 17 13V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5v1H4a2 2 0 0 1-2-2V6Zm8.85 4.15a.5.5 0 0 0-.85.35v7a.5.5 0 0 0 .91.29l1.57-2.25 2.94.45a.5.5 0 0 0 .43-.84l-5-5ZM11 15.9v-4.2l3.07 3.06-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2Z";
   var pathdfilled = "M4 4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h5v-4.5a1.5 1.5 0 0 1 2.56-1.06l5 5c.11.11.2.24.28.38A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H4Zm6.85 6.15a.5.5 0 0 0-.85.35v7a.5.5 0 0 0 .91.29l1.57-2.25 2.94.45a.5.5 0 0 0 .43-.84l-5-5ZM11 15.9v-4.2l3.07 3.06-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2Z";
   
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