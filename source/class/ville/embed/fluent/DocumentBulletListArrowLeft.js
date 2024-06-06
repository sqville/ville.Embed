/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentBulletListArrowLeft",
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

   var pathdregular = "M5 4v5.02c-.34.03-.68.1-1 .19V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H9.74c.26-.3.48-.64.66-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm8.5 11h-2.52a5.59 5.59 0 0 0 0-1h2.52a.5.5 0 0 1 0 1Zm0-2h-2.7c-.1-.35-.24-.68-.4-1h3.1a.5.5 0 0 1 0 1Zm0-2H9.74a5.53 5.53 0 0 0-1.08-1h4.84a.5.5 0 0 1 0 1Zm1.3-4L11 3.2v3.3c0 .28.22.5.5.5h3.3ZM5.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm-2.35-4.85a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L4.71 15H7.5a.5.5 0 0 0 0-1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z";
   var pathdfilled = "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7a5.5 5.5 0 0 1 4.66.8h4.84a.5.5 0 0 1 0 1H9.74c.26.3.48.64.66 1h3.1a.5.5 0 0 1 0 1h-2.7c.08.32.15.66.18 1h2.52a.5.5 0 0 1 0 1h-2.52a5.48 5.48 0 0 1-1.24 3h4.76c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM5.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm-2.35-4.85a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L4.71 15H7.5a.5.5 0 0 0 0-1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z";
   
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