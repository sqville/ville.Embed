/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HardDrive",
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

   var pathdregular = "M2 12c0-.4.08-.8.24-1.16l2.41-5.63A2 2 0 0 1 6.5 4h7.1c.75 0 1.43.41 1.77 1.09a54.93 54.93 0 0 1 2.45 5.77c.13.37.19.76.19 1.14v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2Zm11.6-7H6.48a1 1 0 0 0-.92.6l-1.9 4.43L4 10h12c.15 0 .3.02.45.05a57.18 57.18 0 0 0-2-4.52.96.96 0 0 0-.86-.53ZM16 15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12Zm-1.25-1.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z";
   var pathdfilled = "M4 10c-.59 0-1.14.17-1.6.46l2.25-5.25A2 2 0 0 1 6.5 4h7.1c.75 0 1.43.41 1.77 1.09.54 1.1 1.53 3.2 2.33 5.43A2.99 2.99 0 0 0 16 10H4Zm12 1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H3.99A2 2 0 0 1 2 14v-1c0-1.1.9-2 2-2h12Zm-.5 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z";
   
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