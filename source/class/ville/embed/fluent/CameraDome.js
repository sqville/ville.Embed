/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CameraDome",
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

   var pathdregular = "M8 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v1c0 .65-.42 1.2-1 1.41V11a7 7 0 1 1-14 0V6.91c-.58-.2-1-.76-1-1.41v-1ZM4 7v4a6 6 0 1 0 12 0V7H4Zm-.5-3a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-13Z";
   var pathdfilled = "M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 4.5ZM10 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-2 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3 7h14v4a7 7 0 1 1-14 0V7Zm7 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z";
   
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