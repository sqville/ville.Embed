/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SpeakerBluetooth",
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

   var pathdregular = "M10.32 2.27a1 1 0 0 1 1.68.74v13.98a1 1 0 0 1-1.68.74l-3.88-3.6A.5.5 0 0 0 6.1 14H3.5A1.5 1.5 0 0 1 2 12.5v-5C2 6.67 2.67 6 3.5 6h2.6a.5.5 0 0 0 .34-.13l3.88-3.6Zm.68.74L7.12 6.6c-.27.26-.64.4-1.02.4H3.5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h2.6c.38 0 .75.14 1.02.4L11 17V3Zm4.85 2.14a.5.5 0 0 0-.85.35v3.46l-1.19-.95a.5.5 0 1 0-.62.78L14.7 10l-1.51 1.21a.5.5 0 1 0 .62.78l1.19-.95v3.46a.5.5 0 0 0 .85.35l2.5-2.5a.5.5 0 0 0-.04-.74L16.3 10l2.01-1.61a.5.5 0 0 0 .04-.74l-2.5-2.5Zm1.4 6.9L16 13.28v-2.25l1.25 1ZM16 6.7l1.25 1.25-1.25 1V6.71Z";
   var pathdfilled = "M10.32 2.27a1 1 0 0 1 1.68.74v13.98a1 1 0 0 1-1.68.74l-3.87-3.6A.5.5 0 0 0 6.1 14H3.5A1.5 1.5 0 0 1 2 12.5v-5C2 6.67 2.67 6 3.5 6h2.6a.5.5 0 0 0 .35-.13l3.87-3.6Zm5.53 2.88a.5.5 0 0 0-.85.35v3.46l-1.19-.95a.5.5 0 1 0-.62.78L14.7 10l-1.51 1.21a.5.5 0 1 0 .62.78l1.19-.95v3.46a.5.5 0 0 0 .85.35l2.5-2.5a.5.5 0 0 0-.04-.74L16.3 10l2.01-1.61a.5.5 0 0 0 .04-.74l-2.5-2.5Zm1.4 6.9L16 13.28v-2.25l1.25 1ZM16 6.7l1.25 1.25-1.25 1V6.71Z";
   
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