/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingBankLink",
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

   var pathdregular = "M10 5.87a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66ZM3.5 17h4.84a3.48 3.48 0 0 1-.3-1H4v-.83c0-.65.52-1.17 1.17-1.17h3.17c.17-.38.42-.71.71-1H8V8h1.5v4.63c.3-.21.64-.38 1-.49V8H12v4h1V8h2v4h.5c.17 0 .34.01.5.03V8h.1a.92.92 0 0 0 .52-1.67l-5.85-4.15a1.33 1.33 0 0 0-1.54 0L3.38 6.33A.92.92 0 0 0 3.9 8H4v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5ZM9.8 3a.33.33 0 0 1 .4 0l5.63 4H4.17L9.8 3ZM5 13V8h2v5H5Zm6.5 0a2.5 2.5 0 0 0 0 5h.5a.5.5 0 1 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 1 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 1 1 0 3H15a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M9.23 2.18a1.33 1.33 0 0 1 1.54 0l5.85 4.15A.92.92 0 0 1 16.1 8H3.9a.92.92 0 0 1-.52-1.67l5.85-4.15Zm.77 3.7a.83.83 0 1 0 0-1.67.83.83 0 0 0 0 1.66ZM4.5 9v4h2V9h-2ZM3 16.17c0-1.2.97-2.17 2.17-2.17h3.17a3.49 3.49 0 0 0 0 3H3.5a.5.5 0 0 1-.5-.5v-.33ZM9.05 13c.14-.14.29-.26.45-.37V9h-2v4h1.55Zm2.45-1h1V9h-2v3.14c.32-.09.65-.14 1-.14Zm2 0h2V9h-2v3Zm-2 1a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   
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