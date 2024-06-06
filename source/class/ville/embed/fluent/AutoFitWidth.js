/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AutoFitWidth",
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

   var pathdregular = "M18 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V4ZM3 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V4Zm11.85 5.15c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L13.29 10H6.71l1.14 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L6.71 9h6.58l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2Z";
   var pathdfilled = "M18 4.25a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-11Zm-14.5 0a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-11Zm1.72 6.03 2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h4.88l-.72.72a.75.75 0 1 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H7.56l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06Z";
   
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