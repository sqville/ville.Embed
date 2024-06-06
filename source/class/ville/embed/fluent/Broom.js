/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Broom",
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

   var pathdregular = "M17.91 2.18c.2.2.2.51 0 .7l-5.32 5.33a4.5 4.5 0 0 1-.34 6l-.66.66-2.09 3.48a.5.5 0 0 1-.78.1l-7.07-7.08a.5.5 0 0 1 .1-.78L5.22 8.5l.66-.66a4.5 4.5 0 0 1 5.99-.34l5.32-5.32c.2-.2.51-.2.71 0ZM6.24 8.9l4.95 4.95.36-.35A3.5 3.5 0 1 0 6.6 8.55l-.36.35Zm-.78.63L2.8 11.12l6.16 6.17 1.6-2.66-5.11-5.1Z";
   var pathdfilled = "M17.91 2.18c.2.2.2.51 0 .7L13.3 7.5a5.6 5.6 0 0 0-.7-.7l4.6-4.62c.2-.2.51-.2.71 0Zm-5.66 5.66a4.5 4.5 0 0 0-6.36 0l-.42.42 6.36 6.36.42-.42a4.5 4.5 0 0 0 0-6.36Zm-10.5 2.75 2.9-1.74 6.5 6.5a.5.5 0 0 0 .1.08L9.5 18.35a.5.5 0 0 1-.78.1l-7.07-7.08a.5.5 0 0 1 .1-.78Z";
   
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