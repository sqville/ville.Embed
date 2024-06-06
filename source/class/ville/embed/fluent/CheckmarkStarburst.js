/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CheckmarkStarburst",
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

   var pathdregular = "m8.46 1.9.99.39c.35.14.75.14 1.1 0l.99-.4c1.21-.47 2.58.1 3.1 1.3l.42.97c.16.35.43.62.78.77l.98.43c1.2.52 1.76 1.89 1.28 3.1l-.39.99a1.5 1.5 0 0 0 0 1.1l.4.99a2.42 2.42 0 0 1-1.3 3.1l-.97.42a1.5 1.5 0 0 0-.78.78l-.42.98a2.42 2.42 0 0 1-3.1 1.28l-1-.39a1.5 1.5 0 0 0-1.09 0l-.99.4a2.42 2.42 0 0 1-3.1-1.3l-.43-.97a1.5 1.5 0 0 0-.77-.78l-.98-.42a2.42 2.42 0 0 1-1.28-3.1l.39-1a1.5 1.5 0 0 0 0-1.09l-.4-.99a2.42 2.42 0 0 1 1.3-3.1l.97-.43c.35-.15.62-.42.77-.77l.43-.98a2.42 2.42 0 0 1 3.1-1.28Zm3.44.93-.99.39a2.5 2.5 0 0 1-1.83 0l-.99-.4a1.42 1.42 0 0 0-1.81.76l-.43.98a2.5 2.5 0 0 1-1.3 1.3l-.97.42c-.7.3-1.03 1.1-.75 1.81l.39 1a2.5 2.5 0 0 1 0 1.82l-.4 1c-.27.7.06 1.5.76 1.81l.98.43a2.5 2.5 0 0 1 1.3 1.3l.42.97c.3.7 1.1 1.03 1.81.75l1-.39a2.5 2.5 0 0 1 1.82 0l1 .4c.7.27 1.5-.06 1.81-.76l.43-.98a2.5 2.5 0 0 1 1.3-1.3l.97-.42c.7-.3 1.03-1.1.75-1.82l-.39-.99a2.5 2.5 0 0 1 0-1.83l.4-.99a1.42 1.42 0 0 0-.76-1.81l-.98-.43a2.5 2.5 0 0 1-1.3-1.3l-.42-.97c-.3-.7-1.1-1.03-1.82-.75Zm-2.92 8.94 3.65-4.1a.5.5 0 0 1 .8.59l-.06.07-4 4.5a.5.5 0 0 1-.65.08l-.07-.06-2-2a.5.5 0 0 1 .63-.76l.07.06 1.63 1.62 3.65-4.1-3.65 4.1Z";
   var pathdfilled = "m8.46 1.9.99.39c.35.14.75.14 1.1 0l.99-.4c1.21-.47 2.58.1 3.1 1.3l.42.97c.16.35.43.62.78.77l.98.43c1.2.52 1.76 1.89 1.28 3.1l-.39.99a1.5 1.5 0 0 0 0 1.1l.4.99a2.42 2.42 0 0 1-1.3 3.1l-.97.42a1.5 1.5 0 0 0-.78.78l-.42.98a2.42 2.42 0 0 1-3.1 1.28l-1-.39a1.5 1.5 0 0 0-1.09 0l-.99.4a2.42 2.42 0 0 1-3.1-1.3l-.43-.97a1.5 1.5 0 0 0-.77-.78l-.98-.42a2.42 2.42 0 0 1-1.28-3.1l.39-1a1.5 1.5 0 0 0 0-1.09l-.4-.99a2.42 2.42 0 0 1 1.3-3.1l.97-.43c.35-.15.62-.42.77-.77l.43-.98a2.42 2.42 0 0 1 3.1-1.28Zm4.17 5.77-3.65 4.1-1.63-1.62a.5.5 0 0 0-.7.7l2 2c.2.2.53.2.72-.02l4-4.5a.5.5 0 0 0-.74-.66Z";
   
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