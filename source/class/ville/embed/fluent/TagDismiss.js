/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TagDismiss",
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

   var pathdregular = "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 0 1-.74-.29l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.16.55c.3.14.6.31.86.5a2 2 0 0 0 .3-1.05V4.03a2 2 0 0 0-1.99-2L11.12 2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z";
   var pathdfilled = "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 1.95.51 5.5 5.5 0 0 1 7.8-7.5 2 2 0 0 0 .3-1.06L18 4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z";
   
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