/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MatchAppLayout",
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

   var pathdregular = "M3.5 7C2.67 7 2 7.67 2 8.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3C9 7.67 8.33 7 7.5 7h-4ZM3 8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3ZM12.5 7c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-4ZM12 8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3Z";
   var pathdfilled = "M3.5 7C2.67 7 2 7.67 2 8.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3C9 7.67 8.33 7 7.5 7h-4Zm9 0c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-4Z";
   
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