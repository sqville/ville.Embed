/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowPrevious",
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

   var pathdregular = "M6 5a.5.5 0 0 0-.5.41v9.09a.5.5 0 0 0 1 .09V5.5A.5.5 0 0 0 6 5Zm7.85.15a.5.5 0 0 0-.63-.06l-.07.06-4.5 4.5a.5.5 0 0 0-.06.63l.06.07 4.5 4.5a.5.5 0 0 0 .76-.63l-.06-.07L9.71 10l4.14-4.15a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M6 4.75c-.38 0-.7.28-.74.65l-.01.1v9a.75.75 0 0 0 1.5.1V5.5A.75.75 0 0 0 6 4.75Zm8.28.22a.75.75 0 0 0-.98-.07l-.08.07-4.5 4.5a.75.75 0 0 0-.07.98l.07.08 4.5 4.5a.75.75 0 0 0 1.13-.98l-.07-.08L10.31 10l3.97-3.97c.3-.3.3-.77 0-1.06Z";
   
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