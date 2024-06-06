/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeartPulse",
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

   var pathdregular = "m10.5 16.8 4.75-4.8h-1a1.5 1.5 0 0 1-.36-.04l-3.86 3.9-3.87-3.9a1.5 1.5 0 0 1-.36.04h-1l4.75 4.8c.26.27.69.27.95 0Zm6.22-12.49a4.42 4.42 0 0 1 .98 4.7L17.5 9h-.89c.67-1.28.48-2.9-.6-3.98A3.3 3.3 0 0 0 11.3 5l-.95.96a.5.5 0 0 1-.71 0L8.68 5a3.3 3.3 0 0 0-4.7-.01A3.4 3.4 0 0 0 3.41 9H2.5l-.18.01a4.4 4.4 0 0 1 .94-4.74 4.3 4.3 0 0 1 6.13.02l.6.61.6-.6.1-.1a4.3 4.3 0 0 1 6.03.11Zm-8.76 2a.5.5 0 0 0-.92 0L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.3L7.5 7.79l2.04 4.9a.5.5 0 0 0 .88.08l2.15-3.43 1.3 1.49c.1.1.24.17.38.17h3.25a.5.5 0 0 0 0-1h-3.02l-1.6-1.83a.5.5 0 0 0-.8.06l-2 3.18-2.12-5.1Z";
   var pathdfilled = "M9.39 4.29a4.3 4.3 0 0 0-6.13-.02 4.4 4.4 0 0 0-.94 4.74L2.5 9h2.3l1.32-3.09a1.5 1.5 0 0 1 2.76.01l1.39 3.32.96-1.54a1.5 1.5 0 0 1 2.4-.19L14.93 9h2.57l.2.01c.61-1.57.29-3.42-.98-4.7a4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61Zm.16 12.51L4.8 12h1c.6 0 1.15-.36 1.38-.91l.3-.72 1.14 2.7a1.5 1.5 0 0 0 2.65.22l1.43-2.28.42.48c.29.32.7.51 1.13.51h1l-4.75 4.8a.66.66 0 0 1-.95 0ZM7.96 6.3a.5.5 0 0 0-.92 0L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.3L7.5 7.79l2.04 4.9a.5.5 0 0 0 .88.08l2.15-3.43 1.3 1.49c.1.1.24.17.38.17h3.25a.5.5 0 0 0 0-1h-3.02l-1.6-1.83a.5.5 0 0 0-.8.06l-2 3.18-2.12-5.1Z";
   
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