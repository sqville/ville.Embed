/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentPill",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h3.2a3.61 3.61 0 0 1-.29-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.2c.32-.14.66-.24 1-.29v-1.5c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Zm3.55 3.65a2.62 2.62 0 0 0-3.7 0l-4 4a2.62 2.62 0 0 0 3.7 3.7l4-4a2.62 2.62 0 0 0 0-3.7Zm-3 .7a1.62 1.62 0 1 1 2.3 2.3L16 15.29 13.7 13l1.65-1.65Zm-2.2 4.3a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7l1-1Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v.91a3.6 3.6 0 0 0-2.06 1.03l-4 4A3.62 3.62 0 0 0 9.2 18H5.5A1.5 1.5 0 0 1 4 16.5v-13C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25Zm7.35 8.4a2.62 2.62 0 0 0-3.7 0l-4 4a2.62 2.62 0 0 0 3.7 3.7l4-4a2.62 2.62 0 0 0 0-3.7Zm-3 .7a1.62 1.62 0 1 1 2.3 2.3L16 15.29 13.7 13l1.65-1.65Zm-1.5 4.3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Z";
   
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