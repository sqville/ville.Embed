/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ProjectionScreenText",
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

   var pathdregular = "M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM6 9.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM7.5 11a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-5-9A1.5 1.5 0 0 0 2 4.91V12a3 3 0 0 0 3 3h4.5v2h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2H15a3 3 0 0 0 3-3V4.91A1.5 1.5 0 0 0 17.5 2h-15ZM3 12V5h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z";
   var pathdfilled = "M1 3.5C1 2.67 1.67 2 2.5 2h15a1.5 1.5 0 0 1 .5 2.91V12a3 3 0 0 1-3 3h-4.5v2h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2H5a3 3 0 0 1-3-3V4.91c-.58-.2-1-.76-1-1.41ZM7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM6 9.5c0 .28.22.5.5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM7.5 11a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z";
   
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