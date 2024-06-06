/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SpeakerUsb",
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

   var pathdregular = "M10.32 2.27a1 1 0 0 1 1.68.74v13.98a1 1 0 0 1-1.68.74l-3.88-3.6A.5.5 0 0 0 6.1 14H3.5A1.5 1.5 0 0 1 2 12.5v-5C2 6.67 2.67 6 3.5 6h2.6a.5.5 0 0 0 .34-.13l3.88-3.6Zm.68.74L7.12 6.6c-.27.26-.64.4-1.02.4H3.5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h2.6c.38 0 .75.14 1.02.4L11 17V3ZM14 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v2.2a1 1 0 0 1-.2.6l-1.3 1.8V15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.4l-1.31-1.84a1 1 0 0 1-.19-.58V9a1 1 0 0 1 1-1Zm1 0h2V6h-2v2Z";
   var pathdfilled = "M10.32 2.27a1 1 0 0 1 1.68.74v13.98a1 1 0 0 1-1.68.74l-3.87-3.6A.5.5 0 0 0 6.1 14H3.5A1.5 1.5 0 0 1 2 12.5v-5C2 6.67 2.67 6 3.5 6h2.6a.5.5 0 0 0 .35-.13l3.87-3.6ZM14 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v2.2a1 1 0 0 1-.2.6l-1.3 1.8V15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.4l-1.31-1.84a1 1 0 0 1-.19-.58V9a1 1 0 0 1 1-1Zm1 0h2V6h-2v2Z";
   
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