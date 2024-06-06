/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CheckboxArrowRight",
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

   var pathdregular = "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4.02c.34.03.68.1 1 .19V5a3 3 0 0 0-3-3H5Zm7.85 4.85a.5.5 0 0 0-.7-.7L7.5 10.79 5.85 9.15a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l5-5ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z";
   var pathdfilled = "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.2A5.5 5.5 0 0 1 16 9.2V5a3 3 0 0 0-3-3H5Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z";
   
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