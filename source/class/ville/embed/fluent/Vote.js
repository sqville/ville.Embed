/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Vote",
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

   var pathdregular = "M12.23 9h1.27a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h.76a1 1 0 0 1-.13-1.17l2.5-4.33A1 1 0 0 1 11 3.13l2.6 1.5A1 1 0 0 1 13.96 6l-1.73 3Zm.87-3.5L10.5 4 8 8.33 9.16 9h1.92l2.02-3.5Zm.86 2.5.58-1a1 1 0 0 1 .76.4l2.5 3.33a1 1 0 0 1 .2.6V16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4.67a1 1 0 0 1 .2-.6L4.7 7.4a1 1 0 0 1 .8-.4h.96l-.48.83a1 1 0 0 0-.07.17H5.5l-2.25 3h13.5L14.5 8h-.54ZM3 16h14v-4H3v4Z";
   var pathdfilled = "M13.5 9h-1.27l1.73-3a1 1 0 0 0-.36-1.37L11 3.13a1 1 0 0 0-1.37.37l-2.5 4.33A1 1 0 0 0 7.26 9H6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm-3-5 2.6 1.5L11.08 9H9.16L8 8.33 10.5 4Zm4.04 3-.58 1h.54l2.25 3H3.25L5.5 8h.4a1 1 0 0 1 .08-.17L6.46 7H5.5a1 1 0 0 0-.8.4l-2.5 3.33a1 1 0 0 0-.2.6V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.67a1 1 0 0 0-.2-.6L15.3 7.4a1 1 0 0 0-.76-.4Z";
   
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