/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Location",
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

   var pathdregular = "M13 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2.95 4.96a7 7 0 1 0-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 0 0 2.64-.12l2.43-2.37 1.13-1.12Zm-9.2-9.2a6 6 0 0 1 8.67 8.3l-.18.19-1.32 1.3-2.23 2.17-.09.08a1 1 0 0 1-1.2 0l-.1-.08-2.97-2.9-.58-.57-.17-.18a6 6 0 0 1 .17-8.31Z";
   var pathdfilled = "M14.95 13.96a7 7 0 1 0-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 0 0 2.64-.12l2.43-2.37 1.13-1.12ZM10 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z";
   
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