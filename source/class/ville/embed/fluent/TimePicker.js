/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TimePicker",
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

   var pathdregular = "M10.32 2.12a.5.5 0 0 0-.64 0l-3 2.5a.5.5 0 1 0 .64.76L10 3.15l2.68 2.23a.5.5 0 0 0 .64-.76l-3-2.5Zm3 13.26-3 2.5a.5.5 0 0 1-.64 0l-3-2.5a.5.5 0 1 1 .64-.76L10 16.85l2.68-2.23a.5.5 0 0 1 .64.76Zm-2.57-6.63a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6-2.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C5.67 8 5 8.67 5 9.5v1a1.5 1.5 0 0 0 3 0v-1C8 8.67 7.33 8 6.5 8ZM6 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm6 0a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C1.67 8 1 8.67 1 9.5v1a1.5 1.5 0 0 0 3 0v-1C4 8.67 3.33 8 2.5 8ZM2 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z";
   var pathdfilled = "M10.47 2.17a.75.75 0 0 0-.94 0L6.78 4.42a.75.75 0 0 0 .94 1.16L10 3.72l2.28 1.86a.75.75 0 1 0 .94-1.16l-2.75-2.25Zm2.75 13.41-2.75 2.25a.75.75 0 0 1-.94 0l-2.75-2.25a.75.75 0 0 1 .94-1.16L10 16.28l2.28-1.86a.75.75 0 1 1 .94 1.16Zm-2.47-6.83a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6-2.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C5.67 8 5 8.67 5 9.5v1a1.5 1.5 0 0 0 3 0v-1C8 8.67 7.33 8 6.5 8ZM6 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm6 0a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1C1.67 8 1 8.67 1 9.5v1a1.5 1.5 0 0 0 3 0v-1C4 8.67 3.33 8 2.5 8ZM2 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z";
   
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