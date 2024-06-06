/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailAllUnread",
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

   var pathdregular = "M14.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-3.16-4H4.5A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V7.66c-.31.15-.65.25-1 .3v4.54c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 3 12.5V6.96l5.75 2.97.08.04c.14.05.3.04.42-.04l4.1-2.12a3.5 3.5 0 0 1-1.06-.6L9 8.92 3 5.8v-.3C3 4.67 3.67 4 4.5 4h6.54c.05-.35.15-.69.3-1ZM6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-5c.6.46 1 1.18 1 2v3a4.5 4.5 0 0 1-4.5 4.5h-7Z";
   var pathdfilled = "M14.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-3.16-4H4.5a2.5 2.5 0 0 0-2.48 2.22L9 8.92l3.26-1.73A3.5 3.5 0 0 1 11.34 3Zm1.97 4.8L9.25 9.92a.5.5 0 0 1-.5 0L2 6.37v6.13A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V7.66a3.49 3.49 0 0 1-2.7.13ZM6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-5c.6.46 1 1.18 1 2v3a4.5 4.5 0 0 1-4.5 4.5h-7Z";
   
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