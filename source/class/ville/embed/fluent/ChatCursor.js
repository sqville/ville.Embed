/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChatCursor",
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

   var pathdregular = "M8 1a6 6 0 0 0-5.27 8.87l-.71 2.5a.5.5 0 0 0 .64.6L5 12.2a5.97 5.97 0 0 0 4 .73V11.9a5.02 5.02 0 0 1-3.67-.67.5.5 0 0 0-.43-.06l-1.66.56.51-1.79a.5.5 0 0 0-.05-.39 5 5 0 1 1 9.15-1.32l.83.7A6 6 0 0 0 8 1Zm2 7.75v9a.75.75 0 0 0 1.37.42l1.98-2.95a.5.5 0 0 1 .42-.22h3.48c.7 0 1.02-.87.49-1.32l-6.5-5.5a.75.75 0 0 0-1.24.57Z";
   var pathdfilled = "M8 1a6 6 0 0 0-5.27 8.87l-.71 2.5a.5.5 0 0 0 .64.6L5 12.2a5.97 5.97 0 0 0 4 .73V8.75c0-1.5 1.74-2.3 2.88-1.34l1.8 1.53A6 6 0 0 0 8 1Zm2 7.75v9a.75.75 0 0 0 1.37.42l1.98-2.95a.5.5 0 0 1 .42-.22h3.48c.7 0 1.02-.87.49-1.32l-6.5-5.5a.75.75 0 0 0-1.24.57Z";
   
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