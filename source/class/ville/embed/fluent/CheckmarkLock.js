/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CheckmarkLock",
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

   var pathdregular = "M10 2a8 8 0 0 1 8 8.33 3.02 3.02 0 0 0-1.03-.94A7 7 0 1 0 11 16.93v1A8 8 0 1 1 10 2Zm6.97 8.64A2 2 0 0 1 17.5 12v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1a2 2 0 0 1 3.47-1.36ZM14.5 13h2v-1a1 1 0 1 0-2 0v1Zm.35 3.37a.75.75 0 1 0 1.3-.74.75.75 0 0 0-1.3.74Zm-1.5-8.72c.18.17.2.44.07.63l-.06.07-4 4a.5.5 0 0 1-.64.07l-.07-.06-2-2a.5.5 0 0 1 .63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0Z";
   var pathdfilled = "M10 2a8 8 0 0 1 8 8.33A3 3 0 0 0 12.5 12v.06A2 2 0 0 0 11 14v3.94A8 8 0 1 1 10 2Zm3.36 5.65a.5.5 0 0 0-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 0 0-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 0 0-.06-.63ZM15.5 10a2 2 0 0 1 2 2v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1c0-1.1.9-2 2-2Zm-.65 6.37a.75.75 0 1 0 1.3-.74.75.75 0 0 0-1.3.74ZM15.5 11a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z";
   
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