/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Showerhead",
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

   var pathdregular = "M17.43 2.57a1.94 1.94 0 0 0-2.74 0L12.65 4.6v.01a6 6 0 0 0-6.76 1.02 1.91 1.91 0 0 0-1.74 3.22l7 7a1.91 1.91 0 0 0 3.23-1.74 6 6 0 0 0 1.01-6.76l2.04-2.03c.76-.76.76-2 0-2.75Zm-2.57 3.9a6.05 6.05 0 0 0-1.34-1.33l1.88-1.86a.94.94 0 1 1 1.33 1.33l-1.87 1.87Zm-8.02-.34a5 5 0 0 1 7.03 7.03l-.01-.01-7-7-.02-.02Zm-.72.7 7.05 7.05a.91.91 0 0 1-1.31 1.27l-7-7a.91.91 0 0 1 1.26-1.32Zm.73 6.32c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0Zm-2-1.3a.5.5 0 1 0-.7-.7l-2 2a.5.5 0 1 0 .7.7l2-2Zm4 3.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0Z";
   var pathdfilled = "m15.48 2.42-1.7 1.7a7.03 7.03 0 0 1 2.06 2.02l1.68-1.68a1.44 1.44 0 1 0-2.04-2.04ZM4.85 11.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 .7.7l2-2Zm2 2a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 .7.7l2-2Zm2 1.3c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0Zm4.86-.8a1.46 1.46 0 0 0-.18-.22L5.87 6.47a1.45 1.45 0 0 0-2.05 2.05l7.66 7.66a1.45 1.45 0 0 0 2.23-1.82ZM6.58 5.78a2.46 2.46 0 0 0-.45-.36 6 6 0 0 1 8.46 8.46c-.1-.16-.22-.3-.35-.44L6.58 5.77Z";
   
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