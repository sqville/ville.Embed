/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlbumAdd",
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

   var pathdregular = "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5.6c.16-.32.3-.65.4-1H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6v3.02a5.57 5.57 0 0 0-1 0V5H4a1 1 0 0 0-1 1v2.6c-.36.18-.7.4-1 .66V6Zm11.5 5h-3.1a5.5 5.5 0 0 0-.66-1h3.76a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.76a5.5 5.5 0 0 0-1-.66v-.1C8 7.67 8.67 7 9.5 7h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5ZM10 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z";
   var pathdfilled = "M4 4a2 2 0 0 0-2 2v3.26A5.49 5.49 0 0 1 4 8.2V4Zm12 12h-5.6a5.48 5.48 0 0 0 0-5h3.1c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-4C8.67 7 8 7.67 8 8.5v.1a5.48 5.48 0 0 0-3-.58V4h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-2.5-6H9.74A5.53 5.53 0 0 0 9 9.26V8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5ZM10 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z";
   
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