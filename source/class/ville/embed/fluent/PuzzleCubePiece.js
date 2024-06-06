/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PuzzleCubePiece",
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

   var pathdregular = "M17.2 1.29a1 1 0 0 0-1.4 0l-1.5 1.5a1 1 0 0 0 0 1.42l1.5 1.5a1 1 0 0 0 1.4 0l1.51-1.5a1 1 0 0 0 0-1.42l-1.5-1.5ZM15 3.5 16.5 2 18 3.5 16.5 5 15 3.5ZM13 3H5.5A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7h-4V3ZM5.36 16A1.5 1.5 0 0 1 4 14.5V13h3v3H5.36ZM8 13h4v3H8v-3Zm8 1.64A1.5 1.5 0 0 1 14.5 16H13v-3h3V14.64ZM8 8h4v4H8V8Zm5 4V8h3v4h-3ZM8 4h4v3H8V4ZM5.5 4H7v3H4V5.36A1.5 1.5 0 0 1 5.5 4ZM4 12V8h3v4H4Z";
   var pathdfilled = "M15.8 1.29a1 1 0 0 1 1.4 0l1.51 1.5a1 1 0 0 1 0 1.42l-1.5 1.5a1 1 0 0 1-1.42 0l-1.5-1.5a1 1 0 0 1 0-1.42l1.5-1.5ZM5.5 17H7v-4H3v1.5A2.5 2.5 0 0 0 5.5 17ZM7 8v4H3V8h4Zm5 4H8V8h4v4Zm-4 1h4v4H8v-4Zm5-5v4h4V8h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM3 7h4V3H5.5A2.5 2.5 0 0 0 3 5.5V7Zm5 0V3h4v4H8Z";
   
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