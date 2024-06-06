/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowAutofitUp",
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

   var pathdregular = "M16.14 4.8 15 3.64V17.5a.5.5 0 1 1-1 0V3.63L12.86 4.8a.5.5 0 0 1-.72-.7l1.82-1.88c.3-.3.79-.3 1.08 0l1.82 1.88a.5.5 0 1 1-.72.7ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.5a.5.5 0 0 0 0-1H5Z";
   var pathdfilled = "m15.71 5.23-.7-.73v12.75a.75.75 0 1 1-1.5 0V4.49l-.72.74a.75.75 0 0 1-1.08-1.04l1.82-1.88a1 1 0 0 1 1.44 0l1.82 1.88a.75.75 0 0 1-1.08 1.04ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6.25a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5V5c0-.28.22-.5.5-.5h4.25a.75.75 0 0 0 0-1.5H5Z";
   
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