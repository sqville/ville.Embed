/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Fluent",
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

   var pathdregular = "M10.28 2.05a.5.5 0 0 1 .44 0l5 2.5a.5.5 0 0 1 0 .9l-4.1 2.05 4.1 2.05a.5.5 0 0 1 0 .9L11 12.8v4.69a.5.5 0 0 1-.76.43l-5-3A.5.5 0 0 1 5 14.5V5c0-.19.1-.36.28-.45l5-2.5ZM6 5.31v8.9l4 2.4v-3.8a1 1 0 0 1 .55-.9L14.38 10l-4.1-2.05a.5.5 0 0 1 0-.9L14.38 5 10.5 3.06 6 5.3Z";
   var pathdfilled = "M10.72 2.05a.5.5 0 0 0-.44 0l-5 2.5A.5.5 0 0 0 5 5v9.5c0 .18.1.34.24.43l5 3a.5.5 0 0 0 .76-.43v-4.7l4.72-2.35a.5.5 0 0 0 0-.9l-4.1-2.05 4.1-2.05a.5.5 0 0 0 0-.9l-5-2.5Z";
   
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