/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CommentArrowLeft",
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

   var pathdregular = "M19 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM10.5 6a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L15.29 6H10.5Zm6.5 6.28v-.3c.36-.23.7-.5 1-.79v1.09a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h3.42c-.2.32-.38.65-.52 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56Z";
   var pathdfilled = "M19 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM10.5 6a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L15.29 6H10.5Zm3 7c1.75 0 3.33-.69 4.5-1.81v1.09a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h3.42a6.5 6.5 0 0 0 5.48 10Z";
   
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