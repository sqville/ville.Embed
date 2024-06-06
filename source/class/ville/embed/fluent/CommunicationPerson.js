/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CommunicationPerson",
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

   var pathdregular = "M3 11a7 7 0 0 1 13.79-1.7c.48.22.88.57 1.18 1a8 8 0 1 0-13.63 6.35.5.5 0 0 0 .7-.7A6.98 6.98 0 0 1 3 11Zm11.64-1.87a5 5 0 1 0-8.18 5.4.5.5 0 0 0 .7-.7A3.99 3.99 0 0 1 10 7a4 4 0 0 1 3.74 2.57c.27-.2.57-.35.9-.44ZM8 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7.5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   var pathdfilled = "M10 4.5a6.5 6.5 0 0 0-4.6 11.1.75.75 0 1 1-1.06 1.05 8 8 0 1 1 13.63-6.35 3 3 0 0 0-1.76-1.21A6.5 6.5 0 0 0 10 4.5Zm4.64 4.63a5 5 0 1 0-8.18 5.4.75.75 0 0 0 1.06-1.06 3.5 3.5 0 1 1 5.81-3.54 3 3 0 0 1 1.3-.8ZM8 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm9.5 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   
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