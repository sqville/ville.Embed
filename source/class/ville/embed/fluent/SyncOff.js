/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SyncOff",
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

   var pathdregular = "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 0 0-6.93 6h5.2l.75-2.64a.5.5 0 1 1 .96.28l-2 7a.5.5 0 1 1-.96-.28L7.98 10H3a7 7 0 1 0 14 0h-4.98l-1.04 3.64a.5.5 0 1 1-.96-.28l2-7a.5.5 0 1 1 .96.28L12.31 9h4.62A7 7 0 0 0 10 3Z";
   var pathdfilled = "M17.94 9H12.3l.67-2.36a.5.5 0 0 0-.96-.28l-2 7a.5.5 0 0 0 .96.28L12.02 10H18a8 8 0 0 1-16 0h5.98l-.96 3.36a.5.5 0 0 0 .96.28l2-7a.5.5 0 0 0-.96-.28L8.27 9h-6.2a8 8 0 0 1 15.87 0Z";
   
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