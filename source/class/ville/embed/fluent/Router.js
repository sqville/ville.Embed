/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Router",
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

   var pathdregular = "M3.5 9.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 0 1 0 7.5 7.5 0 0 0-15 0 .5.5 0 0 0 1 0Zm6.5-4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 10 0 .5.5 0 0 1-1 0 4 4 0 0 0-4-4ZM7.75 9.25a2.25 2.25 0 1 1 2.75 2.2V13h4a2.5 2.5 0 0 1 0 5h-9a2.5 2.5 0 0 1 0-5h4v-1.56a2.25 2.25 0 0 1-1.75-2.19ZM10 8a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 10 8Zm-4.5 6a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3h-9Z";
   var pathdfilled = "M3.5 9.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 0 1 0 7.5 7.5 0 0 0-15 0 .5.5 0 0 0 1 0Zm6.5-4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 10 0 .5.5 0 0 1-1 0 4 4 0 0 0-4-4ZM7.75 9.25a2.25 2.25 0 1 1 2.75 2.2V13h4a2.5 2.5 0 0 1 0 5h-9a2.5 2.5 0 0 1 0-5h4v-1.56a2.25 2.25 0 0 1-1.75-2.19Z";
   
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