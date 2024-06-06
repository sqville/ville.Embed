/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SelectObjectSkew",
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

   var pathdregular = "M16.49 6h.01a1.5 1.5 0 1 0-1.41-2l-.01.02A1.5 1.5 0 0 0 16.48 6Zm-5.4 10a1.5 1.5 0 1 0 1.42-2h-.01c-.65 0-1.2.42-1.41 1l-.01.02a1.5 1.5 0 0 0 0 .98ZM3.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM7.49 6a1.5 1.5 0 1 0 .02-3 1.5 1.5 0 0 0-.02 3Zm-3.62 7.03 2.32-6.4c.28.17.6.3.94.34l-2.32 6.4c-.28-.17-.6-.3-.94-.34ZM14.05 5h-4.1a2.51 2.51 0 0 0 0-1h4.1a2.51 2.51 0 0 0 0 1Zm-8.1 11h4.1a2.51 2.51 0 0 1 0-1h-4.1a2.51 2.51 0 0 1 0 1Zm6.92-2.97 2.32-6.4c.28.17.6.3.94.34l-2.32 6.4c-.28-.17-.6-.3-.94-.34Z";
   var pathdfilled = "M15 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-4 11a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM3.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM6 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm8.11.75H9.9a2.5 2.5 0 0 0 0-1.5h4.22a2.5 2.5 0 0 0 0 1.5ZM3.61 13 5.98 6.5c.4.3.88.48 1.41.5l-2.37 6.52c-.4-.3-.88-.48-1.41-.5Zm6.5 3.25H5.9a2.5 2.5 0 0 0 0-1.5h4.22a2.5 2.5 0 0 0 0 1.5Zm2.5-3.25 2.37-6.51c.4.3.88.48 1.41.5l-2.37 6.52c-.4-.3-.88-.48-1.41-.5Z";
   
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