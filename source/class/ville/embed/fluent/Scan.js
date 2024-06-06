/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Scan",
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

   var pathdregular = "M4.91 5.19a6.98 6.98 0 0 1 5.65-2.17L7.4 8.5c-.1.18-.19.36-.25.56L4.91 5.2Zm-.67.83 3.12 5.4a3 3 0 0 0 .4.58H3.3a7 7 0 0 1 .95-5.98ZM8.27 11l-.04-.06A2 2 0 0 1 11.73 9l.04.06A2 2 0 0 1 8.27 11Zm1.12-3.94 2.23-3.87c2.08.5 3.8 1.92 4.7 3.81H10c-.21 0-.42.02-.61.06Zm2.85.94h4.47a7 7 0 0 1-.95 5.98l-3.12-5.4c-.1-.2-.25-.4-.4-.58Zm.61 2.94 2.24 3.87a6.98 6.98 0 0 1-5.65 2.17l3.16-5.48c.1-.18.19-.36.25-.56Zm-2.24 2L8.38 16.8A7.01 7.01 0 0 1 3.68 13H10c.21 0 .42-.02.61-.06ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z";
   var pathdfilled = "M9.7 3.5 7.02 8.19l-.18.33-1.65-2.87A6.48 6.48 0 0 1 9.7 3.51ZM8.28 9l.03-.05a2 2 0 0 1 3.43.05l.03.06a2 2 0 0 1-.03 1.94l-.03.05A2 2 0 0 1 8.27 11l-.03-.06A2 2 0 0 1 8.27 9Zm-1.35 2.67.2.33h-3.3a6.5 6.5 0 0 1 .41-5l2.7 4.67ZM10 13.5l.3-.01-1.66 2.87a6.5 6.5 0 0 1-4.12-2.86H10Zm2.99-1.68.18-.33 1.65 2.87a6.48 6.48 0 0 1-4.53 2.13l2.7-4.67Zm.09-3.49a3.52 3.52 0 0 0-.2-.33h3.3a6.5 6.5 0 0 1-.41 5l-2.7-4.67ZM10 6.5l-.3.01 1.66-2.87a6.5 6.5 0 0 1 4.12 2.86H10ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z";
   
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