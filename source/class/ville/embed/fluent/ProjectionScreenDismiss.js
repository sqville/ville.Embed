/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ProjectionScreenDismiss",
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

   var pathdregular = "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM16 11v-.2c.35-.1.68-.24 1-.4v.6a3 3 0 0 1-3 3h-3.5v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 0 1 0-2h6.6a5.47 5.47 0 0 0-.58 2H4v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2Z";
   var pathdfilled = "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM14.5 11c.9 0 1.75-.22 2.5-.6v.6a3 3 0 0 1-3 3h-3.5v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 0 1 0-2h6.6a5.5 5.5 0 0 0 4.9 8Z";
   
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