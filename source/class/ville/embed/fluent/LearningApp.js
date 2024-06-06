/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LearningApp",
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

   var pathdregular = "M6 3h8a1 1 0 0 1 1 1v5.02c.34.03.68.1 1 .19V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 0 1-.66-1H6a1 1 0 0 1-1-1h4.2c-.08-.32-.15-.66-.18-1H5V4a1 1 0 0 1 1-1Zm1 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7Zm6 1v1H7V5h6Zm6 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.98-1.97a.45.45 0 0 0-.45-.03.49.49 0 0 0-.15.1.51.51 0 0 0-.14.36v3.08a.5.5 0 0 0 .14.35.45.45 0 0 0 .48.13.52.52 0 0 0 .13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 0 0 0-.49.49.49 0 0 0-.17-.18l-2.3-1.5Z";
   var pathdfilled = "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 0 1-.66-1H6a1 1 0 0 1-1-1h4.2A5.5 5.5 0 0 1 16 9.2V4a2 2 0 0 0-2-2H6Zm.75 2.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.98-1.97a.45.45 0 0 0-.45-.03.49.49 0 0 0-.15.1.51.51 0 0 0-.14.36v3.08a.5.5 0 0 0 .14.35.45.45 0 0 0 .48.13.52.52 0 0 0 .13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 0 0 0-.49.49.49 0 0 0-.17-.18l-2.3-1.5Z";
   
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